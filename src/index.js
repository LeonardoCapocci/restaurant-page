import createMenuPage from './menu.js'
import createContactPage from './contact.js'

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

function clearContent() {
  const content = document.querySelector('#content');
  content.textContent = ''
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

function createHomePage() {
  const content = document.querySelector('#content');
  const header = document.createElement('h1');
  const description = document.createElement('p');

  header.textContent = 'Welcome to My Restaurant';
  description.textContent = 'Experience the finest dining at our restaurant. With our exquisite dishes and cozy ambiance, we guarantee a memorable culinary journey for every visitor.';

  content.appendChild(header);
  content.appendChild(description);
  }

createHomePage();