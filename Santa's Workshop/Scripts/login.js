localStorage.user = "Santa";
localStorage.password = "hohoho";

var boton = document.getElementById('boton');
boton.onclick = function(){
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    console.log(user);
    console.log(password);

    if (user === localStorage.user && password === localStorage.password){
        window.location.href = '../Pages/database.html';
        return false;
    } else {
        window.location.href = '../Pages/login.html';
        return false;
    }
};

