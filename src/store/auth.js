import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  const user = ref([
    {
      userName: 'admin',
      password: '123456',
      isAuthenticated: false,
    },
    {
      userName: 'Romina',
      password: '123456',
      isAuthenticated: false,
    },
    {
      userName: 'Alicia',
      password: '123456',
      isAuthenticated: false,
    },
    {
      userName: 'Luis',
      password: '123456',
      isAuthenticated: false,
    },
    {
      userName: 'Stella',
      password: '123456',
      isAuthenticated: false,
    }
  ]);

  return { user };
});
