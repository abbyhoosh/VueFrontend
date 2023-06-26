import {defineStore} from "pinia";

export const useTokenStore = defineStore('token', {
    state: () => {
        return{
            token: ''
        };
    },
    actions: {
        set(token){
            this.token = token;
        }
    }
})