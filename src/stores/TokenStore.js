import {defineStore} from "pinia";

export const useTokenStore = defineStore('token', {
    state: () => {
        return{
            token: '',
            isLoggedIn: false
        };
    },
    actions: {
        login(token){
            this.token = token;
            this.isLoggedIn = true;
        }
    }
})