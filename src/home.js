function createHome() {
    const div = document.createElement('div');
    div.classList.add('home');

    const chefImage = document.createElement('img');
    chefImage.classList.add('chef-image');
    chefImage.src = "./images/chef.jpg";

    div.appendChild(createParagraph("Real Italian Pizza"));
    div.appendChild(createParagraph("Come and enjoy the unique taste of dishes prepared by the hands of the chef and his team. Friendly service, genuine Italian atmosphere and delicious wines guarantee you a pleasant time spent in Sapori Italiani - with an Italian."))
    div.appendChild(createParagraph("Since 2003"));
    div.appendChild(chefImage);

    return div;
};

function createParagraph(textContent) {
    const p = document.createElement('p');
    p.textContent = textContent;
    return p;
}

function drawHome() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createHome());

    return main;
}

export default drawHome;