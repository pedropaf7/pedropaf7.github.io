function onlyNumeros(n){
  if(isNaN(n.value) || n.value == ('')){
    alert(n.id +' só pode ter números!');
    document.getElementById(n.id).style.backgroundColor = "red";
  }
}

function onlyLetras(x){
    letras = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
    if(!letras.test(x.value) || x.value == ('')){
      alert(x.id +' só pode ter letras');
      document.getElementById(x.id).style.backgroundColor = "red";
    }
}

function verificaEmail(e){
    email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    if(!check.test(e) || e == ('')){
      alert('E-mail inválido! Digite um e-mail válido!');
      document.getElementById(e.id).style.backgroundColor = "red";
    }
}

function verificaEmail2(e2){

  if(e2 != email || e2 == ('')){
    alert('E-mails não são iguais, conserte!');
    document.getElementById(e2.id).style.backgroundColor = "red";
  }
}

function verificaSenha(ps){
  senha = document.getElementById('senha').value;
  if(ps != senha || ps == ('')){
    alert('Senhas não são iguais, conserte!');
    document.getElementById(ps.id).style.backgroundColor = "red";
  }
}

function verificaSexo(m,f){
  if(m == false & f == false){
    alert("Selecione o seu sexo");
  }
}

function validarForm(){
  onlyNumeros(document.getElementById("rg"));
  onlyNumeros(document.getElementById("cpf"));
  onlyNumeros(document.getElementById("numero"));
  onlyNumeros(document.getElementById("cep"));
  onlyLetra(document.getElementById("nome"));
  onlyLetra(document.getElementById("sobrenome"));
  onlyLetra(document.getElementById("bairro"));
  onlyLetra(document.getElementById("cidade"));
  email = document.getElementById('email').value;
  email2 = document.getElementById('email2').value;
  verificaEmail(email);
  verificaEmail2(email2);
  senha2 = document.getElementById('senha2').value;
  verificaSenha(senha2);
  verificaSexo(document.getElementById('m').checked,document.getElementById('f').checked);
}

bSend = document.getElementById('send');
bSend.addEventListener("click", validarForm, false);
