let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let password1 = document.querySelector('#password').value;
    let password2 = document.querySelector('#confirmPassword').value;
    console.log(`First Password: ${password1} \nSecond Password: ${password2}`);
    console.log(password1 === password2);
});