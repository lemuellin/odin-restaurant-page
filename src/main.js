
function main(){

    const nav = document.querySelector('#nav');
    
    const title = document.createElement('h1');
    title.textContent = "Tiffy's Cafe";
    title.classList.add('header');
    nav.appendChild(title);

    const tab = document.createElement('nav');
    tab.classList.add('tab');
    nav.appendChild(tab);

    const homeButton = document.createElement('button');
    homeButton.classList.add('buttonHome');
    homeButton.textContent = "Home";
    tab.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.classList.add('buttonMenu');
    menuButton.textContent = "Menu";
    tab.appendChild(menuButton);

    const contactButton = document.createElement('button');
    contactButton.classList.add('buttonContact');
    contactButton.textContent = "Contact";
    tab.appendChild(contactButton);

    return homeButton, menuButton, contactButton;

}
export {
    main,
};