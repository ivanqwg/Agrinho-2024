// Adicionar evento de clique nos links da navegação
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('href');
      const section = document.querySelector(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
 // Crie uma nova imagem
var imagem = new Image();
imagem.src = "vscodeimagem.png";
imagem.width = 1000;
imagem.height = 500;

// Adicione a imagem ao corpo da página
document.body.appendChild(imagem);

// Posicione a imagem no canto inferior direito da tela
imagem.style.position = "fixed";
imagem.style.bottom = "0px";
imagem.style.right = "0px";
imagem.style.margin = "10px";
imagem.style.left = "0px";
imagem.setAttribute("style", "position: fixed; bottom: 0px; right: 0px; margin: 10px;");