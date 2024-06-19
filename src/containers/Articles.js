import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Article from "../components/Article";
import AddArticle from "../components/AddArticle";
import { supprimer } from "../actions/ActionCreator";

const Articles = ({ article, setArticle,setMod ,mod}) => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const deleteArticle = (id) => {
    dispatch(supprimer(id));
  };

  const handleModification = (articleToEdit) => {
    setArticle(articleToEdit);
    setMod(true)
  };

  const saveArticle = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <AddArticle saveArticle={saveArticle} article={article} setArticle={setArticle} mod={mod } setMod={setMod}/>
      <table style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <Article
              key={article.id}
              article={article}
              supprimer={deleteArticle}
              handleModification={handleModification}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Articles;
