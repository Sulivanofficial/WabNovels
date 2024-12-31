// Função para carregar o arquivo JSON e gerar os itens das novels no HTML
async function loadNovels() {
  try {
    // Fazendo a requisição para carregar o arquivo JSON
    const response = await fetch("dataNovels.json"); // Caminho para o arquivo JSON
    const novelsData = await response.json(); // Convertendo a resposta para JSON

    // Seleciona a lista de novels onde os itens serão adicionados
    const novelList = document.querySelector(".novel-list");

    // Criando e adicionando os itens para cada novel no JSON
    novelsData.forEach((novel) => {
      // Criação de um novo item de lista
      const novelItem = document.createElement("li");
      novelItem.classList.add("novel-item");

      // Criação da imagem
      const novelImg = document.createElement("img");
      novelImg.classList.add("novel-cover");
      novelImg.src = novel.imgUrl;
      novelImg.alt = `Capa de ${novel.name}`;

      // Criação do título
      const novelTitle = document.createElement("h3");
      const titleLink = document.createElement("a");
      titleLink.href = novel.link;
      titleLink.textContent = novel.name;
      novelTitle.appendChild(titleLink);

      // Criação da nota
      const novelRating = document.createElement("p");
      novelRating.classList.add("novel-rating");
      novelRating.textContent = `Nota: ${novel.rating}`;

      // Criação da descrição
      const novelDescription = document.createElement("p");
      novelDescription.textContent = novel.description;

      // Adicionando os elementos criados ao item da lista
      novelItem.appendChild(novelImg);
      novelItem.appendChild(novelTitle);
      novelItem.appendChild(novelRating);
      novelItem.appendChild(novelDescription);

      // Adicionando o item à lista de novels
      novelList.appendChild(novelItem);
    });
  } catch (error) {
    console.error("Erro ao carregar as informações das novels:", error);
  }
}

// Chama a função para carregar os dados assim que a página for carregada
document.addEventListener("DOMContentLoaded", loadNovels);
