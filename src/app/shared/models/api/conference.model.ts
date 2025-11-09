export interface Conference {
  id: number;
  titre: string;
  type: 'académique' | 'commerciale';
  date: Date;
  duree: number; // en minutes
  nombreInscrits: number;
  score: number;
  keynoteId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ConferenceRequest {
  titre: string;
  type: 'académique' | 'commerciale';
  date: Date;
  duree: number;
  nombreInscrits: number;
  score: number;
  keynoteId?: number;
}

export interface ConferenceResponse {
  data: Conference[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ConferenceFilter {
  search?: string;
  type?: string;
  dateFrom?: Date;
  dateTo?: Date;
  page?: number;
  pageSize?: number;
}
