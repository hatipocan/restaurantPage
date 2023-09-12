
const menuLoader = () => {

    const myCont = document.querySelector('.container');

    const myMenuList = document.createElement('ul');
    const myMenuItem1 = document.createElement('li');
    const myMenuItem2 = document.createElement('li');
    const myMenuItem3 = document.createElement('li');
    const myMenuItem4 = document.createElement('li');
    const myMenuItem5 = document.createElement('li');

    myMenuItem1.innerText = 'Chocolate Moshi'
    myMenuItem2.innerText = 'Lime Moshi'
    myMenuItem3.innerText = 'Coconut Moshi'
    myMenuItem4.innerText = 'Dragon Moshi'
    myMenuItem5.innerText = 'Panda Moshi'

    myMenuList.appendChild(myMenuItem1);
    myMenuList.appendChild(myMenuItem2);
    myMenuList.appendChild(myMenuItem3);
    myMenuList.appendChild(myMenuItem4);
    myMenuList.appendChild(myMenuItem5);

    myCont.appendChild(myMenuList);

}

export default menuLoader;
