import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  
  login: (userData, token) => {
    localStorage.setItem('userSession', JSON.stringify({ user: userData, token }));
    set({ user: userData, token, isAuthenticated: true });
  },
  
  logout: () => {
    localStorage.removeItem('userSession');
    set({ user: null, token: null, isAuthenticated: false });
  },
  
  initialize: () => {
    const session = localStorage.getItem('userSession');
    if (session) {
      const { user, token } = JSON.parse(session);
      set({ user, token, isAuthenticated: true });
    }
  }
}));