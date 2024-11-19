import express from "express";

const posts = [
    { 
        descricao: 'Uma foto teste', 
        imagem: 'https://placecat.com/millie/300/150', 
        id: 1 
    },
    { 
        descricao: 'Uma gato fazendo yoga', 
        imagem: 'https://placecat.com/millie/300/150', 
        id: 2 
    },
    { 
        descricao: 'Uma gato fazendo panqueca', 
        imagem: 'https://placecat.com/millie/300/150', 
        id: 3 
    },
  ];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});