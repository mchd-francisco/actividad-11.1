function getUserData() {
  const username = document.getElementById('usernameInput').value;
  const userDataContainer = document.getElementById('userData');

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((userData) => {
      userDataContainer.innerHTML = `
          <p>Nombre: ${userData.name}</p>
          <p>Bio: ${userData.bio}</p>
          <p>Repos: ${userData.public_repos}</p>
        `;
    })
    .catch((error) => {
      console.error(
        'Error al obtener la información del usuario:',
        error.message
      );
    });
}
