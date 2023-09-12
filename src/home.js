

const homeLoader = () => {
    const myCont = document.querySelector('.container');

    // const myTitle = document.createElement('h1');
    // myTitle.innerText = "Canan's Moshi House"

    // myCont.appendChild(myTitle);



    const myPara = document.createElement('p');
    myPara.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    myCont.appendChild(myPara);


}




export default homeLoader;
