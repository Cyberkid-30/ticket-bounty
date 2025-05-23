"use client";

import { SortSelect, SortSelectOption } from "@/components/sort-select";
import { sortOptions, sortParser } from "@/utils/search-params";
import { useQueryStates } from "nuqs";

interface TicketSortSelectProps {
  options: SortSelectOption[];
}

const TicketSortSelect = ({ options }: TicketSortSelectProps) => {
  const [sort, setSort] = useQueryStates(sortParser, sortOptions);

  return <SortSelect options={options} value={sort} onChange={setSort} />;
};

export default TicketSortSelect;
