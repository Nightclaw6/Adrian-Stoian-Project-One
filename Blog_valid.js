const buttonBlog = document.getElementById('btn-blog');
const nameBlog = document.getElementById('name');
const emailBlog = document.getElementById('email');

const mailformat2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


// Validation for Blog Form

buttonBlog.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (nameBlog.value === '' || nameBlog.value === null) {
        // messages.push('Name is required')
        alert("Name is required");
    }

    if(!emailBlog.value.match(mailformat2)) {
        // messages.push("You have entered an invalid email address!");
        alert("You have entered an invalid email address!");
    }
})
