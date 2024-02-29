export default function createContactPage() {
  const content = document.querySelector('#content')
  const header = document.createElement('h1');
  const description = document.createElement('p');
  const profileCard = document.createElement('ul');

  header.textContent = 'This is the contact page';
  description.textContent = "Please don't contact me";
  
  const profileCard1 = document.createElement('li');
  profileCard1.textContent = "Leonardo Capocci"
  const profileCard2 = document.createElement('li');
  profileCard2.textContent = "Role: Creator?"
  const profileCard3 = document.createElement('li');
  profileCard3.textContent = "email: veryRealEmail@notfake.com";

  profileCard.appendChild(profileCard1);
  profileCard.appendChild(profileCard2);
  profileCard.appendChild(profileCard3);

  content.appendChild(header);
  content.appendChild(description);
  content.appendChild(profileCard);
}