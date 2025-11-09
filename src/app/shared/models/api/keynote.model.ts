export interface Keynote {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  fonction: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface KeynoteRequest {
  nom: string;
  prenom: string;
  email: string;
  fonction: string;
}

export interface KeynoteResponse {
  data: Keynote[];
  total: number;
  page: number;
  pageSize: number;
}

export interface KeynoteFilter {
  search?: string;
  fonction?: string;
  page?: number;
  pageSize?: number;
}
