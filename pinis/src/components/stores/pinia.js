import {ref,computed} from "vue"
import { defineStore } from "pinia";



export const usedefineStore = defineStore( "user", ()=> {
   const user = ref ({
    name: "juan",
    email: "juanxd@gmail.utt",
   });

   const website = computed (()=>
   user.value.email.substring(user.value.email.lastIndexOf("@") + 1)
   );

   const changename =(newname) => {
    user.value.name=newname;
   };

   return{
    user,
    website,
    changename,
   };
 } );
