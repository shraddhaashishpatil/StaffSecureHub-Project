import { Post } from "./api"
import { Login } from "./api"
import { Put } from "./api"

export const Employee = {
    create : async (json) => {
        return await Post("/addEmployee", json)
    },

    login : async (json) => {
        return await Login("/login", json)
    },

    forgotpassword: async(json) => {
         return await Put("/forgotPassword", json)
    },

} 
