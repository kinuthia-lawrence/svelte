import { writable } from 'svelte/store';

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
};

// Create the auth store
function createAuthStore() {
  const { subscribe, set, update } = writable<AuthState>(initialState);

  return {
    subscribe,
    login: (user: User, token: string) => {
      update(state => ({
        ...state,
        user,
        token,
        isLoggedIn: true,
      }));
      // Store token in localStorage
      localStorage.setItem('token', token);
    },
    logout: () => {
      set(initialState);
      localStorage.removeItem('token');
    },
    checkAuth: () => {
      const token = localStorage.getItem('token');
      if (token) {
        // In real app, validate token with API
        update(state => ({
          ...state,
          token,
          isLoggedIn: true,
          // You'd get user data from API here
        }));
      }
    },
  };
}

export const authStore = createAuthStore();

// Derived store for easy access
export const isLoggedIn = writable(true);
authStore.subscribe(state => isLoggedIn.set(state.isLoggedIn));