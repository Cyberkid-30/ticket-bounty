"use client";

import { SearchInput } from "@/components/search-input";
import { searchParser } from "@/utils/search-params";
import { useQueryState } from "nuqs";
import React from "react";

interface TicketSearchInputProps {
  placeholder: string;
}
const TicketSearchInput = ({ placeholder }: TicketSearchInputProps) => {
  const [search, setSearch] = useQueryState("search", searchParser);

  return (
    <SearchInput
      placeholder={placeholder}
      value={search}
      onChange={setSearch}
    />
  );
};

export default TicketSearchInput;
