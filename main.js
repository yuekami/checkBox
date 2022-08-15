
const btn = document.getElementById('btn');
const elements = document.getElementsByName('options');
let hidden = document.getElementById('hidden');

let changeDisplay = () => {

  if(hidden.style.display == ''){
    hidden.style.display = 'none';
  }else{
    hidden.style.display='';
  }
}

let a = () => {
  for(let i = 0; i < 5; i++){
    if(elements[i].checked){
      document.getElementById('btn' + (i+1).toString()).style.display = '';
    }else{
      document.getElementById('btn' + (i+1).toString()).style.display = 'none';
    }
  }
}

window.onload = function(){
  for(let i =0; i < 5; i++){
    elements[i].checked = true;
  }
  a();
}
