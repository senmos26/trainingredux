import React from "react";

const Article = ({ article, supprimer, handleModification }) => (
  <tr className="article">
    <td>
      <h1>{article.title}</h1>
    </td>
    <td>
      <p>{article.body}</p>
    </td>
    <td>
      <input
        type="button"
        value="Modifier"
        onClick={() => handleModification(article)}
      />
      <button
        onClick={() =>
          window.confirm("Voulez-vous vraiment supprimer?") && supprimer(article.id)
        }
      >
        Supprimer
      </button>
    </td>
  </tr>
);

export default Article;
