function validate(e) {
    e.preventDefault();
     
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('msgBox');
    let messages = '';

    if (email === '') {
        messages = 'Email is required. ';
        msgBox.style.color = 'red';
    }else if (pass === '') {
        messages   = 'Password is required. ';
        msgBox.style.color = 'red';
    } else if (age === '') {
        messages = 'Age is required. ';
        msgBox.style.color = 'red';
    }else {
        messages = 'Login successfull!';
        msgBox.style.color = 'green';
    }
    msgBox.innerText = messages;

}