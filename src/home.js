import imgBarista from './main/barista.jpg';

function home(){

    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);


    const p1 = document.createElement('p');
    p1.textContent = "May your Coffee be Strong and your Monday be Short.";
    p1.classList.add('welcomeMsg');
    container.appendChild(p1);

    const img = document.createElement('img');
    img.src = imgBarista;
    img.classList.add('background');
    container.appendChild(img);

    const p2 = document.createElement('p');
    p2.textContent = "Order online or visit us!";
    p2.classList.add('welcomeMsg');
    container.appendChild(p2);   

}
export {
    home
};