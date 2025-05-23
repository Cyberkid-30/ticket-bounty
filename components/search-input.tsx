"use client";

import { ChangeEvent } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./ui/input";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const SearchInput = ({ value, onChange, placeholder }: SearchInputProps) => {
  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    250
  );

  return (
    <Input
      defaultValue={value}
      className="flex-1/2"
      placeholder={placeholder}
      onChange={handleSearch}
    />
  );
};

export { SearchInput };
