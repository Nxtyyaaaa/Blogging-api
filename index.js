const express = require("express");
const app = express();
const articleRoutes=require("./routes/articleRoutes");
const PORT = 3000;
app.use(express.json());
app.use("/articles",articleRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Blogging API running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
