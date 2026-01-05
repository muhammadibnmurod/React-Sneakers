
export interface User {
  username: string;
  email?: string;
  id?: number;
}

export interface AuthResponse {
  token: string;
  user: User;
  message?: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password?: string;
}
