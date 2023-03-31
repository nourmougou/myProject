let maillog = document.getElementById('mail-log');
let passlog = document.getElementById('password-log');
let btnlog = document.getElementById('btn-log');
let test= false;

btnlog.addEventListener('mouseover', (e) => {
    let mail = maillog.value;
    let pass = passlog.value;
    if (mail == '' || pass == '') {
        if (test) {
            btnlog.style.transform = 'translateX(100px)';
            test=!test;
        }else{
        btnlog.style.transform = 'translateX(-100px)';
        test=!test;
        }
    }
    else if (!(mail.indexOf('@issatm.ucar.tn')>0 )){
        if (test) {
            btnlog.style.transform = 'translateX(100px)';
            test=!test;
        }else{
        btnlog.style.transform = 'translateX(-100px)';
        test=!test;
        }
    }else{
        btnlog.style.transform = 'translateX(0px)';
        }
});
btnlog.addEventListener('click', (e) => {
    e.preventDefault();
    let mail = maillog.value;
    let pass = passlog.value;
    if (mail == '' || pass == '') {
        alert('Please fill all the fields');
    }
    else if (!(mail.indexOf('@issatm.ucar.tn')>0 )){
        alert('Please enter a valid institutional email');
    }else {
        window.location.href = 'home.html';
    }
});

let textlog = document.getElementById('text-log');
textlog.addEventListener('click', (e) => {
    e.preventDefault();
    let signup = document.getElementById('signup');
    let login = document.getElementById('login');
    signup.style.display = 'block';
    login.style.display = 'none';
});
let textsign = document.getElementById('text-sign');
textsign.addEventListener('click', (e) => {
    e.preventDefault();
    let signup = document.getElementById('signup');
    let login = document.getElementById('login');
    signup.style.display = 'none';
    login.style.display = 'block';
});
let mailsign = document.getElementById('mail-sign');
let passsign = document.getElementById('password-sign');
let passsignconfirm = document.getElementById('password-confirm');
let btnsign = document.getElementById('btn-sign');
btnsign.addEventListener('mouseover', (e) => {
    let mails = mailsign.value;
    let passs = passsign.value;
    if (mails == '' || passs == '') {
        if (test) {
            btnsign.style.transform = 'translateX(100px)';
            test=!test;
        }else{
        btnsign.style.transform = 'translateX(-100px)';
        test=!test;
        }
    }
    else if (!(mails.indexOf('@issatm.ucar.tn')>0 )){
        if (test) {
            btnsign.style.transform = 'translateX(100px)';
            test=!test;
        }else{
        btnsign.style.transform = 'translateX(-100px)';
        test=!test;
        }
    }else{
        btnsign.style.transform = 'translateX(0px)';
        }
});

btnsign.addEventListener('click', (e) => {
    e.preventDefault();
    let mail = mailsign.value;
    let pass = passsign.value;
    let passconfirm = passsignconfirm.value;
    if (mail == '' || pass == '' || passconfirm == '') {
        alert('Please fill all the fields');
    }
    else if (!(mail.indexOf('@issatm.ucar.tn')>0 )){
        alert('Please enter a valid institutional email');
    }
    else if (pass != passconfirm) {
        alert('Passwords do not match');
    }else{
        alert('Account created successfully');
        window.location.href = 'home.html';
    }
});