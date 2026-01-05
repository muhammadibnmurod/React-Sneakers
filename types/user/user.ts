export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: User | null;
}