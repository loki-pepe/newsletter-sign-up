document.addEventListener('DOMContentLoaded', () => {

    let standardCard  = document.querySelector('.card#standard');
    let successCard = document.querySelector('.card#success');

    let dismissButton = successCard.querySelector('#dismiss')
    dismissButton.addEventListener('click', () => toggleCards());

    let subscribeForm = standardCard.querySelector('#subscribe');
    subscribeForm.addEventListener('input', () => hideError());
    subscribeForm.addEventListener('submit', e => handleSubmit(e));

    let subscriber = successCard.querySelector('#subscribed-email');

    function handleSubmit(e) {
        e.preventDefault();
        let email = getEmail(e);
        if (validateEmail(email)) {
            logEmail(email);
            toggleCards();
        } else {
            showError();
        }
    }

    function getEmail(e) {
        return Object.fromEntries(new FormData(e.target)).email
    }

    function hideError() {
        subscribeForm.classList.remove('invalid');
    }

    function logEmail(email) {
        subscriber.innerHTML = email;
    }

    function toggleCards() {
        standardCard.style.display === 'none' ? standardCard.style.display = 'flex' : standardCard.style.display = 'none';
        successCard.style.display === 'flex' ? successCard.style.display = 'none' : successCard.style.display = 'flex';
    }

    function showError() {
        subscribeForm.classList.add('invalid');
        subscribeForm.querySelector('button').blur();
        subscribeForm.querySelector('#email').focus();
    }

    function validateEmail(email) {
       return (email ? true : false);
    }
    
});
