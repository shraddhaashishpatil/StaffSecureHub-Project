import { Post } from "./apiEmp";
import { Get } from "./apiEmp";
import { Put } from "./apiEmp";
import { Patch } from "./apiEmp";
import { Delete } from "./apiEmp";

export const Emp = {
    create : async (json) => {
        return await Post("/addEmp", json)
    },

    getall : async (json) => {
        return await Get("/getAllEmp", json)
    }, 

    getById : async (json) => {
        return await Patch("/getEmpById", json)
    },

    update : async (empId, json) => {
        return await Put(`/updateEmp/${empId}`, json)
    },

    delete : async (empId, json) => {
        return await Delete(`/deleteEmp/${empId}`, json)
    }
};