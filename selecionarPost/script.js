const posts = [
    { id: 1, title: "Introdução ao DOM" },
    { id: 2, title: "Eventos em JavaScript" },
    { id: 3, title: "O que é uma API?" }
];

const comentarios = [
    {
        postId: 1,
        id: 1,
        name: "Ana",
        email: "ana@email.com",
        body: "Explicação muito clara!"
    },
    {
        postId: 1,
        id: 2,
        name: "Bruno",
        email: "bruno@email.com",
        body: "Gostei do exemplo do getElementById."
    },
    {
        postId: 2,
        id: 3,
        name: "Carla",
        email: "carla@email.com",
        body: "addEventListener é bem melhor que onclick."
    },
    {
        postId: 3,
        id: 4,
        name: "Diego",
        email: "diego@email.com",
        body: "A analogia do garçom ajudou muito."
    },
    {
        postId: 3,
        id: 5,
        name: "Elisa",
        email: "elisa@email.com",
        body: "Quero testar o JSONPlaceholder!"
    },
    {
        postId: 3,
        id: 6,
        name: "Fábio",
        email: "fabio@email.com",
        body: "E o método POST, como funciona?"
    }
];

const selectPost = document.getElementById("post");
const areaComentarios = document.getElementById("comentarios");
const tituloComentarios = document.getElementById("titulo-comentarios");

posts.forEach(function(post) {
    const opcao = document.createElement("option");

    opcao.value = post.id;
    opcao.textContent = post.title;

    selectPost.appendChild(opcao);
});

selectPost.addEventListener("change", function() {
    const idPost = Number(selectPost.value);

    areaComentarios.innerHTML = "";

    if (selectPost.value === "") {
        tituloComentarios.textContent = "Comentários (0)";
        return;
    }

    const comentariosFiltrados = comentarios.filter(
        function(comentario) {
            return comentario.postId === idPost;
        }
    );

    tituloComentarios.textContent =
        `Comentários (${comentariosFiltrados.length})`;

    comentariosFiltrados.forEach(function(comentario) {
        const div = document.createElement("div");
        div.className = "comentario";

        const nome = document.createElement("h3");
        nome.textContent = comentario.name;

        const email = document.createElement("div");
        email.className = "email";
        email.textContent = comentario.email;

        const texto = document.createElement("p");
        texto.textContent = comentario.body;

        div.appendChild(nome);
        div.appendChild(email);
        div.appendChild(texto);

        areaComentarios.appendChild(div);
    });
});