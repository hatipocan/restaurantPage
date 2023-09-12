
const contactLoader = () => {
    const myCont = document.querySelector('.container');

    const contactInfo = {
        owner: 'Canan Moshimaster',
        email: 'fake@fakemail.com.uk',
        phone: '555-moshi-666'
    }

    const myInfo = document.createElement('card')
    myInfo.innerText = `Owner: ${contactInfo.owner}
                        Email: ${contactInfo.email}
                        Phone: ${contactInfo.phone}`;

    myCont.appendChild(myInfo);

};

export default contactLoader;

