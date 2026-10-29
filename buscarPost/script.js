const posts = [
    {
        userId: 1,
        id: 1,
        title: "Primeiro post",
        body: "Aprendendo a manipular o DOM."
    },
    {
        userId: 1,
        id: 2,
        title: "Segundo post",
        body: "Arrays de objetos são parecidos com o JSON de uma API."
    },
    {
        userId: 2,
        id: 3,
        title: "Terceiro post",
        body: "Em breve vamos buscar estes dados no servidor."
    },
    {
        userId: 2,
        id: 4,
        title: "Quarto post",
        body: "O método find devolve o primeiro item encontrado."
    },
    {
        userId: 3,
        id: 5,
        title: "Quinto post",
        body: "Se nada for encontrado, find devolve undefined."
    }
];

function buscarPost() {
    const campoId = document.getElementById("idPost");
    const resultado = document.getElementById("resultado");
    const valor = campoId.value;

    if (valor.trim() === "") {
        resultado.textContent = "Digite um ID.";
        resultado.className = "";
        return;
    }

    const id = Number(valor);

    const post = posts.find(item => item.id === id);

    if (post) {
        resultado.className = "";

        resultado.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
    } else {
        resultado.className = "erro";

        resultado.textContent =
            `Post não encontrado (ID ${valor}). Os IDs válidos vão de 1 a 5.`;
    }
}