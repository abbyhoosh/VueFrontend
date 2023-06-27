import {defineStore} from "pinia";

export const useFocusStore = defineStore('focus', {
    state: () => {
        return {
            focus: null,
        };
    },
    actions: {
        set(article) {
            this.focus=article;
        }
    }
})
