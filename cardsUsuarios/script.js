const usuarios= [
    {id: 1, name: "Leanne Graham",email: "Sincere@april.biz", address: { city: "Gwenborough"}, company: { name: "Romaguera-Crona" }},
    {id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv", address: { city: "Wisokyburgh"}, company: { name: "Deckow-Crist" }},
    {id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net", address: { city: "McKenziehaven"}, company: { name: "Romaguera-Jacobson" }},
    {id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org", address: { city: "South Elvis"}, company: { name: "Robel-Corkery" }}
];

const container = documnet.getElementById("cards");

usuarios.forEach(function(usuario) {
    const nome = document.createElement("h2");
    nome.textContent = usuario.name;

    const email = document.createElement("p");
    email.textContent = "E-mail" + usuario.email;

    const cidade = document.createElement("p");
    cidade.textContent = "Cidade: " + usuario.address.city;
    
    const empresa = document.createElement("p");
    empresa.textContent = "Empresa: " + usuario.company.name;
    const card = document.createElement("div");
    card.className = "card";
    card.appendChild(nome);
    card.appendChild(email);
    card.appendChild(cidade);
    card.appendChild(empresa);
    
    container.appendChild(card);
});

const total = document.getElementById("total");
total.textContent = "Total de usuários: " + usuarios.length;