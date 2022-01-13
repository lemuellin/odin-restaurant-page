import {main} from './main.js';
import {home} from './home.js';
import {menu} from './menu.js';
import {contact} from './contact.js';

import './style.css';

main();
home();

function clear(){
    const parent = document.querySelector('#content');
    let child = parent.lastElementChild;

    parent.removeChild(child);
};


const homeButton = document.querySelector('.buttonHome');
homeButton.addEventListener('click', ()=>{clear();home()});

const menuButton = document.querySelector('.buttonMenu');
menuButton.addEventListener('click', ()=>{clear();menu()});

const contactButton = document.querySelector('.buttonContact');
contactButton.addEventListener('click', ()=>{clear();contact()});