import { types } from "../actions/ActionTypes";

const IniatialState = {
  articles: [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ],
};
export const reducer = (state = IniatialState, action) => {
  switch (action.type) {
    case types.AJOUTER:
        return {
            ...state,articles:[...state.articles,action.payload]
        }
    case types.SUPPRIMER:
        
        return {
            ...state,articles:state.articles.filter(a=>a.id!==action.payload)
        }
    case types.MODIFIER:
     
        const newarticles= state.articles.filter(a=>a.id!==action.payload.id)
        newarticles.push(action.payload.article)
        return{
          ...state,articles:newarticles
        }
        
      
    default:
      return state;
  }
};
