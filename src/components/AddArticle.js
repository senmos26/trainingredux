import React from "react";
import { useDispatch } from "react-redux";
import { ajouter, modifier } from "../actions/ActionCreator";

const AddArticle = ({ article, setArticle ,mod,setMod}) => {
  const dispatch = useDispatch();

  const handleArticleData = (e) => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    });
  };

  const addNewArticle = (e) => {
    e.preventDefault();
    
    dispatch(ajouter(article));
   
    setArticle({ title: "", body: "" });
  };
  const cancelModification=()=>{
    setMod(false)
    setArticle({  body:"somali",
        title:"nathanael"})
  }
  const modification=(article,id,e)=>{
    e.preventDefault()
   
       dispatch(modifier(id,article));
     
  }

  return (
    <form onSubmit={mod?(e)=>modification(article,article.id,e):addNewArticle} className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
        value={article.title}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        onChange={handleArticleData}
        value={article.body}
      />
      {
        mod? (<><button type="submit" >Modify article</button><button type="reset" onClick={cancelModification}>Annuler</button></>):<button type="submit">Add article</button>
      }
      
    </form>
  );
};

export default AddArticle;
