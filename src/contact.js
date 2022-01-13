import location from './contact/location.jpg';

function contact(){

    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);


    const p1 = document.createElement('p');
    p1.textContent = "Tel: (123) 456-7890";
    p1.classList.add('contactMsg');
    container.appendChild(p1);
    
    const p2 = document.createElement('p');
    p2.textContent = "4343 Encinita Ave, Rosemead, CA 91770";
    p2.classList.add('contactMsg');
    container.appendChild(p2);

    const img = document.createElement('img');
    img.src = location;
    img.classList.add('contactImg');
    container.appendChild(img);

}

export{
    contact
};