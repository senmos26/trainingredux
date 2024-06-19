import React, { useState } from "react";
import Articles from "./containers/Articles";
function App() {
  const [article, setArticle] = useState({
    body:"somali",
    title:"nathanael"
  });
  const[mod,setMod]=useState(false)
  return <Articles setArticle={setArticle} article={article} mod={mod} setMod={setMod} />;
}
export default App;
