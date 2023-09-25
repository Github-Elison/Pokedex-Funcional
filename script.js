var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){
  // bloqueia o refresh da página
  e.preventDefault ()

  // Url da pesquisa
  let urlform = "https://pokeapi.co/api/v2/pokemon/";

  //Valor do input name
  let nome = document.getElementById("name")

  //Concatena a url com o inputname
  urlform = urlform + this.name.value

  //Transforma os valores em minúsculas
  urlform = urlform.toLocaleLowerCase ()

  //ID content
  let resposta = document.getElementById('content')

  //ID ImgPokemon
  let imagem = document.getElementById('imgPokemon')

  // HTML
  let html = ''

  fetch(urlform)
  .then(resposta => resposta.json())
  .then(function(data){
    console.log(data)
    html = 'Nome: ' + maiscula(data.name) + '<br>'
    html = html + 'Type: ' + maiscula(data.types[0].type.name)
    resposta.innerHTML = html

    imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
  })


  })

function maiscula(val){
  return val[0].toUpperCase() + val.substr(1)
}