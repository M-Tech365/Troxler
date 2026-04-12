"use client"

import { useState, useRef, useEffect } from "react"

export type AddressSuggestion = {
  address: string
  street: string
  city: string
  state: string
  postalCode: string
  country: string
}

type Props = {
  value: string
  onChange: (value: string) => void
  onSelect: (suggestion: AddressSuggestion) => void
  placeholder?: string
  className?: string
}

export function AddressAutocomplete({
  value,
  onChange,
  onSelect,
  placeholder = "Start typing an address...",
  className = "",
}: Props) {
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function fetchSuggestions(query: string) {
    if (timerRef.current) clearTimeout(timerRef.current)

    if (query.length < 3) {
      setSuggestions([])
      setIsOpen(false)
      return
    }

    timerRef.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/azure-maps/autocomplete?query=${encodeURIComponent(query)}`
        )
        if (!res.ok) return

        const data = (await res.json()) as { results: AddressSuggestion[] }
        setSuggestions(data.results)
        setIsOpen(data.results.length > 0)
        setActiveIndex(-1)
      } catch {
        // silently ignore network errors for autocomplete
      }
    }, 300)
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value
    onChange(val)
    fetchSuggestions(val)
  }

  function handleSelect(suggestion: AddressSuggestion) {
    onSelect(suggestion)
    setIsOpen(false)
    setSuggestions([])
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen || suggestions.length === 0) return

    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((i) => (i < suggestions.length - 1 ? i + 1 : 0))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((i) => (i > 0 ? i - 1 : suggestions.length - 1))
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault()
      handleSelect(suggestions[activeIndex])
    } else if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  return (
    <div ref={containerRef} className="relative">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          if (suggestions.length > 0) setIsOpen(true)
        }}
        placeholder={placeholder}
        autoComplete="off"
        className={className}
        role="combobox"
        aria-expanded={isOpen}
        aria-autocomplete="list"
        aria-activedescendant={
          activeIndex >= 0 ? `address-option-${activeIndex}` : undefined
        }
      />

      {isOpen && suggestions.length > 0 && (
        <ul
          role="listbox"
          className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
        >
          {suggestions.map((s, i) => (
            <li
              key={s.address}
              id={`address-option-${i}`}
              role="option"
              aria-selected={i === activeIndex}
              className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                i === activeIndex
                  ? "bg-[#212a65] text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onMouseDown={() => handleSelect(s)}
            >
              {s.address}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
