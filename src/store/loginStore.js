import { ref, reactive } from "vue";
import { defineStore } from "pinia";


export const useUserStore = defineStore('users', () => {
    const userLogin = reactive[
        {
            userName: 'admin ',
            password: '123456',
            isAuthenticated: true,

        },
        {
            userName: 'Romina ',
            password: '123456',
            isAuthenticated: true,

        },
        {
            userName: 'Alicia',
            password: '123456',
            isAuthenticated: true,

        },
        {
            userName: 'Luis',
            password: '123456',
            isAuthenticated: true,

        },
        {
            userName: 'Stella',
            password: '123456',
            isAuthenticated: true,

        }
    ]


    const login = (userName, password) => {
        const errorMessage = ref('');
        const user = userLogin.find(user => user.userName === userName && user.password === password);
        if (user) {
            user.isAuthenticated = true;
        } else {
            errorMessage.value = 'Usuario o contraseña incorrecta';
        }
    }
 
    return { userLogin, login }
 })