function encriptar(traduccion){
  document.querySelector('#warning').removeAttribute('style');
  let textarea = document.querySelector('#texto');
  const texto = textarea.value;
  let area_default = document.querySelector('#default');
  let area_result = document.querySelector('#result');
  let texto_out = document.querySelector('#texto-out');

  if (texto != ''){
    let out = '';

    for (let i = 0; i < texto.length; i++){

      if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != '')){
        document.querySelector('#warning').style.color = 'red';
        document.querySelector('#warning').style.fontSize = '16px';
        return;
      }else if ((texto.length == 1 && texto == '') || texto.replace(/ /g, '') == ''){
        area_default.classList.remove('invisible');
        area_result.classList.add('invisible');
        return;
      }

      if(texto[i] == 'a'){
        out += traduccion['a'];
      }else if(texto[i] == 'e'){
        out += traduccion['e'];
      }else if(texto[i] == 'i'){
        out += traduccion['i'];
      }else if(texto[i] == 'o'){
        out += traduccion['o'];
      }else if(texto[i] == 'u'){
        out += traduccion['u'];
      }else{
        out += texto[i];
      }
    }
    area_default.classList.add('invisible');
    area_result.classList.remove('invisible');
    texto_out.innerHTML = out;
  }
  return;
}

function desencriptar(traduccion){
  document.querySelector('#warning').removeAttribute('style');
  let textarea = document.querySelector('#texto');
  const texto = textarea.value;
  let area_default = document.querySelector('#default');
  let area_result = document.querySelector('#result');
  let texto_out = document.querySelector('#texto-out');

  if (texto != ''){
    
    for (let i = 0; i < texto.length; i++){
      if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != '')){
        document.querySelector('#warning').style.color = 'red';
        document.querySelector('#warning').style.fontSize = '16px';
        return;
      }else if((texto.length == 1 && texto == '') || texto.replace(/ /g, '') == ''){
        area_default.classList.remove('invisible');
        area_result.classList.add('invisible');
        return;
      }
    }
    area_default.classList.add('invisible');
    area_result.classList.remove('invisible');
    texto = texto.replace(new RegExp(traduccion['a'], 'g'), 'a');
    texto = texto.replace(new RegExp(traduccion['e'], 'g'), 'e');
    texto = texto.replace(new RegExp(traduccion['i'], 'g'), 'i');
    texto = texto.replace(new RegExp(traduccion['o'], 'g'), 'o');
    texto = texto.replace(new RegExp(traduccion['u'], 'g'), 'u');
    texto_out.innerHTML = texto;
  }
  return;
}

function clipboard(){
  const texto_out = document.querySelector('#texto-out');
  navigator.clipboard.writeText(texto_out.textContent);
}

const enc = document.querySelector('#enc');
const dec = document.querySelector('#dec');
const copiar = document.querySelector('#copiar');

let traduccion = {'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat'}

enc.addEventListener('click', function(){encriptar(traduccion)});
dec.addEventListener('click', function(){desencriptar(traduccion)});
copiar.addEventListener('click', function(){clipboard()});