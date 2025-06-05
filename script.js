function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      const container = document.getElementById('user-container');
      container.innerHTML = ''; // Clear previous content
      users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>City:</strong> ${user.address.city}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
}
