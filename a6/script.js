const userInput = document.getElementById('user');
const passInput = document.getElementById('pass');
const button = document.querySelector('button');

button.addEventListener('click', function() {
  const user = userInput.value;
  const pass = passInput.value;

  const output = document.createElement('p');
  output.textContent = `${user},${pass}`;
  document.body.appendChild(output);
});