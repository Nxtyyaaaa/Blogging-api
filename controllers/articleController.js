const articles = [
  {
    id: 1,
    title: "Node Basics",
    content: "Learning Express",
    tag: "backend",
  },
  {
    id: 2,
    title: "SQL Basics",
    content: "Learning Joins",
    tag: "database",
  },
];
const getAllArticles = (req, res) => {
  res.json(articles);
}
const getArticleById = (req, res) => {
    const articleId = parseInt(req.params.id);
    const article = articles.find((a) => a.id === articleId);
    if (!article) {
        return res.status(404).json({ message: "Article not found" });
    }
    res.json(article);
};
const createArticle=(req, res) => {
    const article = req.body;
  if (!article.title) {
    return res.status(400).json({ error: "Title is required" });
  }
  article.id = articles.length + 1;
  articles.push(article);
  res.status(201).json(article);
};
const updteArticle=(req,res)=>{
    const articleId=parseInt(req.params.id);
    const article=articles.find((a)=>a.id===articleId);
    if(!article){
        return res.status(404).json({error:"Article not found"});
    }
    Object.assign(article, req.body);
    res.json(article);
}
const deleteArticle=(req,res)=>{
    const articleId=parseInt(req.params.id);
    const articleIndex=articles.findIndex((a)=>a.id===articleId);
    if(articleIndex===-1){
        return res.status(404).json({error:"Article not found"});
    }
    articles.splice(articleIndex,1);
    res.json({message:"Article deleted"});
}
module.exports = {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
};
