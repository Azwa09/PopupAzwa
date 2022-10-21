function login() {
    let password = document.getElementById('password').value;
    if (password.length < 12) {
        alert('your password need to be atleast 6 character');
    }
    else {
        alert('OK');
    }
}