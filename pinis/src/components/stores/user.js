import {ref,computed} from "vue";
import { defineStore } from "pinia";

export const usedefineStore = defineStore ("user", {
   
 state: () => {
        return {
        user: {
            name: "juan",
            email: "sidhd@gmail.com",
        },
    };
    },
    action:{
        changename(newName) {
            this.user.name = newName;
        },
    },
    getters: {
        website: (state) =>
        state.user.email.substring(state.user.email.lastIndexOf("@") +1),
    },

});