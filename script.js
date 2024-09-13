function carregar() {
    fetch('jogos.json')
     .then(response => response.json())
     .then(jogos => {
         const container = document.querySelector('#jogos-container');

         jogos.map(jogo => {
            // Cria uma card com a imagem, título e botão de detalhes
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = jogo.image;
            img.alt = jogo.name;

            const titulo = document.createElement('h3');
            titulo.textContent = jogo.name;

            card.appendChild(img);
            card.appendChild(titulo);
            container.appendChild(card);
         })

    })
}

carregar();

function searchImput() {
    const bottom = document.querySelector('#sort-button');
    const input = document.querySelector('#search-input');
    const searchTerm = input.value.toLowerCase();
    console.log("VALUE: " + searchTerm);

    function ordenar() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const titulo = card.querySelector('h3').textContent.toLowerCase();
            if (titulo.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
    ordenar();
} 





// const tbody = document.querySelector('tbody');
// jogos.forEach(jogo => {
//   const tr = document.createElement('tr');
//   tr.innerHTML = `
//     <td>${jogo.nome}</td>
//     <td>${jogo.genero}</td>
//     <td>${jogo.plataforma}</td>
//     <td>${jogo.ano}</td>
//     <td>${jogo.desenvolvedora}</td>
//     <td>${jogo.classificacao}</td>
//   `;
//   tbody.appendChild(tr);
// });




//Forma maais legivel de codigo
/*
function gameCard(game) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("h3");

  card.classList.add("card");
  img.src = game.image;
  img.alt = game.name;
  title.textContent = game.name;

  card.append(img, title);
  return card;
}

function load() {
  const container = document.querySelector("#jogos-container");

  fetch("jogos.json")
    .then((res) => res.json())
    .then((games) => container.append(...games.map(gameCard)))
}

load();
*/