import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Submission {
  email: string;
  feedback?: string;
}

export interface SubmissionResponse {
  id: number;
  email: string;
  feedback?: string;
  created_at: string;
}

export const submitEmail = async (data: Submission): Promise<SubmissionResponse> => {
  const response = await api.post<SubmissionResponse>('/api/submit', data);
  return response.data;
};

export const getStats = async () => {
  const response = await api.get('/api/stats');
  return response.data;
};