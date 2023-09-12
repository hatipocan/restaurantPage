import homeLoader from "./home";
import menuLoader from "./menu";
import contactLoader from "./contact";


const tabRemover = () => {
    const myCont = document.querySelector('.container');

    myCont.removeChild(myCont.children[1]);
    
};


const pageLoader = () => {

    const myCont = document.querySelector('.container');


    const myNav = document.createElement('nav');

    const mylist1 = document.createElement('ul');
    const myBrandList = document.createElement('li')
    const myBrand = document.createElement('strong');
    myBrand.innerText = "Canan's Moshi House";

    mylist1.appendChild(myBrandList);
    myBrandList.appendChild(myBrand);
    myNav.appendChild(mylist1);

    
    
    
    const myLinkList = document.createElement('ul');
    const myLinkList1 = document.createElement('li');
    const mylink1 = document.createElement('a');
    mylink1.innerText = 'Home'
    mylink1.addEventListener('click', () => {
        tabRemover();
        homeLoader();
    }
    );

    

    myLinkList.appendChild(myLinkList1);
    myLinkList1.appendChild(mylink1);
   


    
    const myLinkList2 = document.createElement('li');
    const mylink2 = document.createElement('a');
    mylink2.innerText = 'Menu'
    mylink2.addEventListener('click', () => {
        tabRemover();
        menuLoader();
    }
    );

    

    myLinkList.appendChild(myLinkList2);
    myLinkList2.appendChild(mylink2);

    const myLinkList3 = document.createElement('li');
    const mylink3 = document.createElement('a');
    mylink3.innerText = 'Contact'
    mylink3.addEventListener('click', () => {
        tabRemover();
        contactLoader();
    }
    );

    

    myLinkList.appendChild(myLinkList3);
    myLinkList3.appendChild(mylink3);
    
    
    myNav.appendChild(myLinkList);
    myCont.appendChild(myNav);

    homeLoader();
}


export default pageLoader;