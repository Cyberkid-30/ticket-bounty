"use client";

import Pagination from "@/components/pagination";
import {
  paginationOptions,
  paginationParser,
  searchParser,
} from "@/utils/search-params";
import { useQueryState, useQueryStates } from "nuqs";
import { useEffect, useRef } from "react";

export interface PaginatedMetadata {
  count: number;
  hasNextPage: boolean;
}

interface TicketPaginationProps {
  paginatedTicketMetadata: PaginatedMetadata;
}

const TicketPagination = ({
  paginatedTicketMetadata,
}: TicketPaginationProps) => {
  const [pagination, setPagination] = useQueryStates(
    paginationParser,
    paginationOptions
  );
  const [search] = useQueryState("search", searchParser);
  const prevSearch = useRef(search);

  useEffect(() => {
    if (search === prevSearch.current) return;
    prevSearch.current = search;

    // Reset pagination when search changes
    setPagination({ ...pagination, page: 0 });
  }, [pagination, search, setPagination]);

  return (
    <Pagination
      pagination={pagination}
      onPagination={setPagination}
      paginatedMetadata={paginatedTicketMetadata}
    />
  );
};

export default TicketPagination;
