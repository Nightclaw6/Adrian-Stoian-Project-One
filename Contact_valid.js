// Variables

const buttonContact = document.getElementById('btn-contact');
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Validation for Contact Page

buttonContact.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (nameEl.value === '' || nameEl.value === null) {
        // messages.push('Name is required')
        alert("Name is required");
    }

    if(!emailEl.value.match(mailformat)) {
        // messages.push("You have entered an invalid email address!");
        alert("You have entered an invalid email address!");
    }
})




