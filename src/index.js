function createHomePage() {
  const content = document.querySelector('#content');
  const header = document.createElement('h1');
  const description = document.createElement('p');

  header.textContent = 'Welcome to My Restaurant';
  description.textContent = 'Experience the finest dining at our restaurant. With our exquisite dishes and cozy ambiance, we guarantee a memorable culinary journey for every visitor.'

  content.appendChild(header)
  content.appendChild(description)
  }

createHomePage()