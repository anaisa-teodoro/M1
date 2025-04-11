// Em desenvolvimento..
import dados from "./receita_pudim_de_leite.json" with { type: "json" };


document.querySelector('h1').textContent = dados.nome;


const ul = document.getElementById('ulitem1');
ul.textContent = ''; 
dados.ingredientes.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
});


const ol = document.getElementById('olitem1');
ol.textContent = '';
dados.instrucoes.forEach(passo => {
  const li = document.createElement('li');
  li.textContent = passo;
  ol.appendChild(li);
});




const img = document.createElement('img');
img.src = dados.imagem;
img.alt = dados.nome;
img.style.display = 'block';
img.style.margin = '20px 0';
img.style.maxWidth = '20%';
img.style.float = 'left';
document.body.appendChild(img);