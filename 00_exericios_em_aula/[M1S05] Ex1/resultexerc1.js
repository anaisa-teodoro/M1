// receita_pudim_de_leite.json
// Exemplo de arquivo JSON
import dados from "./receita_pudim_de_leite.json" with { type: "json" };

// Atualiza o título
document.querySelector('h1').textContent = dados.nome;

// Atualiza a lista <ul> com ingredientes
const ul = document.getElementById('ulitem1');
ul.textContent = ''; // limpa o conteúdo inicial
dados.ingredientes.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
});

// Atualiza a lista <ol> com instruções
const ol = document.getElementById('olitem1');
ol.textContent = '';
dados.instrucoes.forEach(passo => {
  const li = document.createElement('li');
  li.textContent = passo;
  ol.appendChild(li);
});



// Adiciona imagem ao final
const img = document.createElement('img');
img.src = dados.imagem;
img.alt = dados.nome;
img.style.display = 'block';
img.style.margin = '20px 0';
img.style.maxWidth = '20%';
img.style.float = 'left';
document.body.appendChild(img);