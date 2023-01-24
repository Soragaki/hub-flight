const form = document.querySelector('#formRegis');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formDat = new FormData(form);

  let dados = {
    'name':formDat.get('name'),
    'email':formDat.get('email')
  }

  fetch('https://soragaki.github.io/hub-flight/', {
    method:"POST",
    body: JSON.stringify(dados),
    headers: {"Content-type":"application/json; charset=UTF-8"}
  })
  .then(response => {
    console.log(response.status);
    if (response.status == 405) {
      window.location.href = 'https://soragaki.github.io/hub-flight/error-405.html'
    }

    return response.json();
  })
  .then(json => {
    alert('Inscrição concluida!');
  })
  .catch(json => console.log(json));
});