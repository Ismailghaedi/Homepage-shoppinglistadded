
document.getElementById('applebtn').addEventListener('click', (event) => {
  let element_basket = document.getElementById('basket');
  let new_li = document.createElement('li');
  new_li.innerText = 'apple added';
  window.speechSynthesis.speak(new SpeechSynthesisUtterance('apple added'));

  element_basket.appendChild(new_li);
  let element_applebtn = document.getElementById('applebtn');
  element_applebtn.style.visibility = (false) ? 'visible' : 'hidden';
  let element_apple = document.getElementById('apple');
  element_apple.innerText = 'apple ✅🧺';

});

document.getElementById('orangebtn').addEventListener('click', (event) => {
  let element_basket2 = document.getElementById('basket');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'orange added';
  window.speechSynthesis.speak(new SpeechSynthesisUtterance('orange added'));

  element_basket2.appendChild(new_li2);
  let element_orangebtn = document.getElementById('orangebtn');
  element_orangebtn.style.visibility = (false) ? 'visible' : 'hidden';
  let element_orange = document.getElementById('orange');
  element_orange.innerText = 'orange ✅🧺';

});

document.getElementById('milkbtn').addEventListener('click', (event) => {
  let element_basket3 = document.getElementById('basket');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'milk added';
  window.speechSynthesis.speak(new SpeechSynthesisUtterance('milk added'));

  element_basket3.appendChild(new_li3);
  let element_milkbtn = document.getElementById('milkbtn');
  element_milkbtn.style.visibility = (false) ? 'visible' : 'hidden';
  let element_milk = document.getElementById('milk');
  element_milk.innerText = 'milk ✅🧺';

});

document.getElementById('chickenbtn').addEventListener('click', (event) => {
  let element_basket4 = document.getElementById('basket');
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'chicken added';
  window.speechSynthesis.speak(new SpeechSynthesisUtterance('chicken added'));

  element_basket4.appendChild(new_li4);
  let element_chickenbtn = document.getElementById('chickenbtn');
  element_chickenbtn.style.visibility = (false) ? 'visible' : 'hidden';
  let element_chicken = document.getElementById('chicken');
  element_chicken.innerText = 'chicken ✅🧺';

});

document.getElementById('onionbtn').addEventListener('click', (event) => {
  let element_basket5 = document.getElementById('basket');
  let new_li5 = document.createElement('li');
  new_li5.innerText = 'onion added';
  window.speechSynthesis.speak(new SpeechSynthesisUtterance('onion added'));

  element_basket5.appendChild(new_li5);
  let element_onionbtn = document.getElementById('onionbtn');
  element_onionbtn.style.visibility = (false) ? 'visible' : 'hidden';
  let element_onion = document.getElementById('onion');
  element_onion.innerText = 'onion ✅🧺';

});

document.getElementById('remove').addEventListener('click', (event) => {
  let element_basket6 = document.getElementById('basket');
  document.querySelectorAll('#basket').forEach((selectedElement) => {
    selectedElement.replaceChildren();

  });

});