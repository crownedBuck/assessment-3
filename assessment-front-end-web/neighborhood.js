const restaurant = [{name: "Shipwreck Bay",
                    website: "http://shipwreckbay-castlerock.com/sandwnburgers.htm"},
                    {name: "Clearfield Pub & Grille",
                    website: "https://www.yelp.com/biz/woodbine-inn-necedah-2"},
                    {name: "The Broken Spur: Steak and Seafood",
                    website: "https://thebrokenspursteakandseafood.com/"}];

const containerForUrlAndName = document.querySelector("#randomRestaurantName")
const restaurantButton = document.querySelector("#restaurant");

const clickOnButton = () => {
    // if (containerForUrlAndName.childNodes.length > 0) {
    //     containerForUrlAndName.childNodes.removeChild()
    //     // console.log("something went wrong")
    // }
    const randomRestaurant = Math.floor(Math.random() * restaurant.length);

    let createLink = document.createElement('a');
    createLink.innerText = `${restaurant[randomRestaurant].name} \n`
    createLink.href = restaurant[randomRestaurant].website

    containerForUrlAndName.appendChild(createLink)
}

restaurantButton.addEventListener('click', clickOnButton)