'use strict'

const contactsList = document.querySelector('.contacts-list');
const contacts = JSON.parse(loadContacts());

let ulContent = '';
for (const item of contacts) {
    ulContent += `<li data-email=${item.email} data-phone="${item.phone}">
    <strong>${item.name}</strong>
    </li>`;
}

contactsList.innerHTML = ulContent;