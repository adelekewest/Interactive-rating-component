const countList = document.querySelectorAll('.count-list li');
const submitButton = document.querySelector('button');

const ratingState =  document.querySelector('.rating-state');
const thankState = document.querySelector('.thank-state');
const rating = document.querySelector('.rating');

var targetValue = '';

//Looping through list items.
for(let i = 0; i < countList.length; i++) {
    countList[i].addEventListener('click', (e) => {
        let target = e.target;
        targetValue = target.getAttribute('id');

        /*Looping through the numbers to check for a previously selected
        rating and removing if there is such */
        for (let i = 0; i < countList.length; i++) {
            countList[i].classList.contains('selected');
            countList[i].classList.remove('selected');
        }
        // adds the selected class which shows what number was clicked on.
        countList[i].classList.add('selected');
    });
    
    //Listening for a click event to add a new interface to the screen to thank the user 
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        thankState.classList.remove('hidden');
        ratingState.classList.add('hidden');
       rating.textContent= targetValue;
    });

}


