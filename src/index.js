import './style.css';
import createMenuPage from './menu.js';
import createContactPage from './contact.js';
import meat from './meat.png';

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

function clearContent() {
  const content = document.querySelector('#content');
  content.textContent = ''
}

function createHomePage() {
  const content = document.querySelector('#content');
  const header = document.createElement('h1');
  const description = document.createElement('p');
  const image = new Image();

  header.textContent = 'Welcome to My Restaurant';

  description.textContent = 'Experience the finest dining at our restaurant. With our exquisite dishes and cozy ambiance, we guarantee a memorable culinary journey for every visitor.';

  image.className = 'meat';
  image.setAttribute('src', meat);

  content.appendChild(header);
  content.appendChild(description);
  content.appendChild(image);
  }

homeButton.addEventListener('click', () => {
  clearContent();
  createHomePage();
})

menuButton.addEventListener('click', () => {
  clearContent();
  createMenuPage();
})

contactButton.addEventListener('click', () => {
  clearContent();
  createContactPage();
})

createHomePage();