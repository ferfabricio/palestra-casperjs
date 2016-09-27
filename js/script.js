function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function sendContactForm() {
  var delay = getRandomInt(1,10) *  1000;
  console.log(delay);
  setTimeout(function(){
    document.getElementById("messages").innerHTML = '<div class="alert alert-success" role="alert">Sua mensagem foi enviada com sucesso!</div>';
  }, delay);
}

function resetContactForm() {
  document.getElementById("messages").innerHTML = '';
}

function comprarCamiseta() {
  var delay = getRandomInt(1,10) *  1000;
  console.log(delay);
  document.getElementById("venda").innerHTML = '<div class="spinner"><img src="img/spin.svg" class="rotate" /><p>Sua compra esta sendo processada!</p></div>';
  setTimeout(function(){
    document.getElementById("venda").innerHTML = '<div class="alert alert-success" role="alert">Compra realizada com sucesso! Aguarde nosso contato</div>';
    refreshPage()
  }, delay);
}

function refreshPage() {
    setTimeout(function(){
        window.location.refresh();
    }, 10000);
}