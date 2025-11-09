export interface Review {
  id: number;
  conferenceId: number;
  date: Date;
  texte: string;
  note: number; // 1-5
  auteur?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ReviewRequest {
  conferenceId: number;
  texte: string;
  note: number;
  auteur?: string;
}

export interface ReviewResponse {
  data: Review[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ReviewStats {
  moyenne: number;
  totalAvis: number;
  distribution: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}
