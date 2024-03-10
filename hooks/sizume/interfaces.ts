export interface Post {
  slug: string;
  title: string;
  bodyCharacterCount: number;
  visibility: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  bodyMarkdown: string | null;
  bodyHtml: string | null;
}

export interface Pagination {
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
  perPage: number;
  sort: string;
  direction: string;
}
