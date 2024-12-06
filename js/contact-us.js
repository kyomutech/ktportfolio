const form = document.querySelector('form');

function sendEmail () {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rrojasj@ucenfotec.ac.cr",
        Password : "16AABBF49916EC3B21E696CB9F11ED04CC21",
        To : 'rrojasj@ucenfotec.ac.cr',
        From : "rrojasj@ucenfotec.ac.cr",
        Subject : "Website Development request",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    sendEmail();
})

