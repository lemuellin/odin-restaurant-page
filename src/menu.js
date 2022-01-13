import black from './menu/black.jpg';
import cappuccino from './menu/cappuccino.jpg';
import espresso from './menu/espresso.jpg';
import frappe from './menu/frappe.jpg';
import latte from './menu/latte.jpg';
import latteMacchiato from './menu/latteMacchiato.jpg';
import mocha from './menu/mocha.jpg';
import takeAway from './menu/takeAway.jpg';


function menu (){
    const content = document.querySelector('#content');

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');
    content.appendChild(gridContainer);

    //black coffee
        const gridItem1 = document.createElement('div');
        gridItem1.classList.add('grid-item');
        gridContainer.appendChild(gridItem1);

        const item1 = document.createElement('img');
        item1.classList.add('grid-item');
        item1.src = black;
        gridItem1.appendChild(item1);

        const title1 = document.createElement('p');
        title1.classList.add('itemTitle');
        title1.textContent = "Black";
        gridItem1.appendChild(title1);

        const description1 = document.createElement('p');
        description1.classList.add('description');
        //setting this css style solving problem with new line in textContent
        description1.setAttribute('style', 'white-space: pre;');

        description1.textContent = "$3.5\r\nour original flavor";
        gridItem1.appendChild(description1);

    // Espresso
        const gridItem2 = document.createElement('div');
        gridItem2.classList.add('grid-item');
        gridContainer.appendChild(gridItem2);

        const item2 = document.createElement('img');
        item2.classList.add('grid-item');
        item2.src = espresso;
        gridItem2.appendChild(item2);

        const title2 = document.createElement('p');
        title2.classList.add('itemTitle');
        title2.textContent = "Espresso";
        gridItem2.appendChild(title2);

        const description2 = document.createElement('p');
        description2.classList.add('description');
        //setting this css style solving problem with new line in textContent
        description2.setAttribute('style', 'white-space: pre;');

        description2.textContent = "$3.5\r\nstrong and bold";
        gridItem2.appendChild(description2);

    // latte
        const gridItem3 = document.createElement('div');
        gridItem3.classList.add('grid-item');
        gridContainer.appendChild(gridItem3);

        const item3 = document.createElement('img');
        item3.classList.add('grid-item');
        item3.src = latte;
        gridItem3.appendChild(item3);

        const title3 = document.createElement('p');
        title3.classList.add('itemTitle');
        title3.textContent = "Latte";
        gridItem3.appendChild(title3);

        const description3 = document.createElement('p');
        description3.classList.add('description');
        //setting this css style solving problem with new line in textContent
        description3.setAttribute('style', 'white-space: pre;');

        description3.textContent = "$4.0\r\nsilky and smooth";
        gridItem3.appendChild(description3);

       // latteMacchiato
       const gridItem4 = document.createElement('div');
       gridItem4.classList.add('grid-item');
       gridContainer.appendChild(gridItem4);

       const item4 = document.createElement('img');
       item4.classList.add('grid-item');
       item4.src = latteMacchiato;
       gridItem4.appendChild(item4);

       const title4 = document.createElement('p');
       title4.classList.add('itemTitle');
       title4.textContent = "Latte Macchiato";
       gridItem4.appendChild(title4);

       const description4 = document.createElement('p');
       description4.classList.add('description');
       //setting this css style solving problem with new line in textContent
       description4.setAttribute('style', 'white-space: pre;');

       description4.textContent = "$4.0\r\nmilk with espresso";
       gridItem4.appendChild(description4);

       // cappuccino
       const gridItem5 = document.createElement('div');
       gridItem5.classList.add('grid-item');
       gridContainer.appendChild(gridItem5);

       const item5 = document.createElement('img');
       item5.classList.add('grid-item');
       item5.src = cappuccino;
       gridItem5.appendChild(item5);

       const title5 = document.createElement('p');
       title5.classList.add('itemTitle');
       title5.textContent = "Cappuccino";
       gridItem5.appendChild(title5);

       const description5 = document.createElement('p');
       description5.classList.add('description');
       //setting this css style solving problem with new line in textContent
       description5.setAttribute('style', 'white-space: pre;');

       description5.textContent = "$4.0\r\nMilk foam with Espresso";
       gridItem5.appendChild(description5);

       // mocha
       const gridItem6 = document.createElement('div');
       gridItem6.classList.add('grid-item');
       gridContainer.appendChild(gridItem6);

       const item6 = document.createElement('img');
       item6.classList.add('grid-item');
       item6.src = mocha;
       gridItem6.appendChild(item6);

       const title6 = document.createElement('p');
       title6.classList.add('itemTitle');
       title6.textContent = "Mocha";
       gridItem6.appendChild(title6);

       const description6 = document.createElement('p');
       description6.classList.add('description');
       //setting this css style solving problem with new line in textContent
       description6.setAttribute('style', 'white-space: pre;');

       description6.textContent = "$4.0\r\nChocolate flavored Latte";
       gridItem6.appendChild(description6);

       // frappe
       const gridItem7 = document.createElement('div');
       gridItem7.classList.add('grid-item');
       gridContainer.appendChild(gridItem7);

       const item7 = document.createElement('img');
       item7.classList.add('grid-item');
       item7.src = frappe;
       gridItem7.appendChild(item7);

       const title7 = document.createElement('p');
       title7.classList.add('itemTitle');
       title7.textContent = "Frappe";
       gridItem7.appendChild(title7);

       const description7 = document.createElement('p');
       description7.classList.add('description');
       //setting this css style solving problem with new line in textContent
       description7.setAttribute('style', 'white-space: pre;');

       description7.textContent = "$4.0\r\nGreek Iced Coffee";
       gridItem7.appendChild(description7);

       // takeAway
       const gridItem8 = document.createElement('div');
       gridItem8.classList.add('grid-item');
       gridContainer.appendChild(gridItem8);

       const item8 = document.createElement('img');
       item8.classList.add('grid-item');
       item8.src = takeAway;
       gridItem8.appendChild(item8);

       const title8 = document.createElement('p');
       title8.classList.add('itemTitle');
       title8.textContent = "Take-Away-Cup";
       gridItem8.appendChild(title8);

       const description8 = document.createElement('p');
       description8.classList.add('description');
       //setting this css style solving problem with new line in textContent
       description8.setAttribute('style', 'white-space: pre;');

       description8.textContent = "Made by Vibranium,\r\nspecially designed by NASA";
       gridItem8.appendChild(description8);

}

export{
    menu
};