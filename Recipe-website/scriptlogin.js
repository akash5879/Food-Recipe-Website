const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = form.elements[0].value;
  const password = form.elements[1].value;
  if (username === 'admin' && password === 'password' || username === 'mini' && password === 'Mini' || username === 'akash' && password === 'Akash') {
    window.location.href = 'index.html';
  } else {
    alert('Invalid username or password');
  }
});
