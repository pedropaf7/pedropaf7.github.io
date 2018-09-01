function onlyLetras(x){
    letras = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
    if(x.value == ('')){
      alert(x.id +' não pode estar vazio!');
      document.getElementById(x.id).style.borderColor = "red";
    }
    else if(!letras.test(x.value)){
      alert(x.id +' só pode ter letras');
      document.getElementById(x.id).style.borderColor = "red";
    }
}

function verificaEmail(e){
    email = new RegExp(/^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/);
    if(e.value == ('')){
      alert(e.id +' não pode estar vazio!');
      document.getElementById(e.id).style.borderColor = "red";
    }
    else if(!email.test(e.value)){
      alert('E-mail inválido! Digite um e-mail válido!');
      document.getElementById(e.id).style.borderColor = "red";
    }
}

function verificaEmail2(e,e2){
  if(e2.value == ('')){
    alert(e2.id +' não pode estar vazio!');
    document.getElementById(e2.id).style.borderColor = "red";
  }
  else if(e2.value != e.value){
    alert('E-mails não são iguais, conserte!');
    document.getElementById(e2.id).style.borderColor = "red";
  }
}

function calculaValor(chegada,saida,quartos,pessoas){
  d1 = new Date(chegada.value);
  d2 = new Date(saida.value);
  mili = Math.abs(d1.getTime() - d2.getTime());
  dias = mili / (1000 * 3600 * 24);

  if(saida.value < chegada.value){
    document.getElementById(c.id).style.borderColor = "red";
    document.getElementById(s.id).style.borderColor = "red";
    alert("Data da saída está antes da data de chegada!");
  }
  else if(quartos.value == pessoas.value){
    alert("Total a pagar: R$ " + 149 * dias + ",00");
  }
  else if(pessoas.value > quartos.value){
    pessoas = 60*(pessoas.value - quartos.value);
    total = (149 * quartos.value * dias) + pessoas;
    alert("Total a pagar: R$ " + total * dias + ",00");
  }
  else if(pessoas.value < quartos.value){
    alert("Não tem sentido!");
  }
}

function validarForm(){
  onlyLetras(document.getElementById("nome"));
  verificaEmail(document.getElementById('email'));
  verificaEmail2(document.getElementById('email'),document.getElementById('email2'));
  quant_quartos = document.getElementById('quarto');
  quant_pessoas = document.getElementById('hospedes');
  data_chegada = document.getElementById("chegada");
  data_saida = document.getElementById("saida");
  calculaValor(data_chegada,data_saida,quant_quartos,quant_pessoas);
}
bSend = document.getElementById('send');
bSend.addEventListener("click", validarForm, false);
