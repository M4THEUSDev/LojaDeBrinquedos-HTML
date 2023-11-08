import axios from 'axios';
const axios = require("axios")

document.addEventListener('DOMContentLoaded', function () {
  const salvarDadosButton = document.getElementById('salvarDados');

  salvarDadosButton.addEventListener('click', async function () {
    const codigo = document.querySelector('input[name="codigo"]').value;
    const descricao = document.querySelector('input[name="descricao"]').value;
    const categoria = document.querySelector('input[name="categoria"]').value;
    const marca = document.querySelector('input[name="marca"]').value;
    const imagem = document.querySelector('input[name="imagem"]').files[0];
    const valor = document.querySelector('input[name="valor"]').value;
    const detalhes = document.querySelector('textarea[name="detalhes"]').value;

    const formData = new FormData();
    formData.append('codigo', codigo);
    formData.append('descricao', descricao);
    formData.append('categoria', categoria);
    formData.append('marca', marca);
    formData.append('imagem', imagem);
    formData.append('valor', valor);
    formData.append('detalhes', detalhes);

    try {
      // const response = await axios.post("http://localhost:8080/brinquedo/insert", formData);
      // console.log(response.data);

      const response = await fetch("http://localhost:8080/brinquedo/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: "Carrinho Pé na Tábua - Estrela",
          description: "Carrinho Pé na Tábua - Estrela",
          category: "MENINOS",
          brand: "Estrela",
          url: "menino6.webp",
          value: "59.99",
          details: "Carrinho Pé na Tábua - Estrela"
        })
      });


    } catch (error) {
      console.error('Erro: ' + error);
    }
  });
});
