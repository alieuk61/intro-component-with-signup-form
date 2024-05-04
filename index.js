const inputs = document.querySelectorAll('input');
const emailInput = document.querySelector('.email__input');
const error__paragraph = document.querySelectorAll('.error');
const confirm__button = document.querySelector('.confirm-button')

let error = false;

let errorType = {
    emptyInput: "cannot be empty",
    emailFormat: 'Looks like this is not an email',

}

const emailFormat = /^www\.[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

confirm__button.addEventListener('click', (e) => {
    e.preventDefault();

        inputs.forEach((input, index) => {
            console.log(input.placeholder, index)
            if (input.value === '') {
                error__paragraph[index].textContent = `${input.placeholder} ${errorType.emptyInput}`
                input.classList.add('error-input')
            }
            // what if the wrong email format is inputted
            if (index === 2 && !(emailFormat.test(input.value)) && input.value.length > 0){
                error = true
                error__paragraph[index].textContent = `${input.placeholder} ${errorType.emailFormat}`
                input.classList.add('error-input')
            }
        });

})

