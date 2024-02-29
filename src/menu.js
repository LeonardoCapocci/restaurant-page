export default function createMenuPage() {
  const content = document.querySelector('#content');
  const header = document.createElement('h1');
  const description = document.createElement('p');
  const menuList = document.createElement('ul');
  const claraDisclaimer = document.createElement('p')

  header.textContent = 'Menu';
  description.textContent = 'This is our wonderful and complete menu';
  const menuItem1 = document.createElement('li');
  menuItem1.textContent = 'Menu Item 1: Meat';
  const menuItem2 = document.createElement('li');
  menuItem2.textContent = 'Menu Item 2: Refer back to menu item 1';
  claraDisclaimer.textContent = "If it wasn't clear, this restaurant isn't Clara friendly";

  menuList.appendChild(menuItem1);
  menuList.appendChild(menuItem2);

  content.appendChild(header);
  content.appendChild(description);
  content.appendChild(menuList);
  content.appendChild(claraDisclaimer);
};