console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('form submit')
}

const mouseoverPicture = () => {
	alert("You're looking spiffy today! Now go tells your folks I says 'hi' and watch out for deer.")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let catImage = document.querySelector("img");

catImage.addEventListener('mouseover', mouseoverPicture)