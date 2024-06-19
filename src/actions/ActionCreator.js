import { types } from "./ActionTypes"

export const ajouter=(article)=>{
    return {
        type:types.AJOUTER,
        payload:article
    }
}
export const modifier=(id,article)=>{
    return{
        type:types.MODIFIER,
        payload:{id,article}
    }
}
export const supprimer=(id)=>{
    return{
        type:types.SUPPRIMER,
        payload:id
    }
}