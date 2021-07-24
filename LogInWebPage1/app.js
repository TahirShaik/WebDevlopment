/*
    @Author         : Tahir Shaik
    @FileName       : app.js
    @Date           : 24/07/21 8:28PM
    @Description    : This file is used for the Validating and controlling the Web Page
*/

//Provide Your User Id & Password Here
const userId = "tahir";
const pswrd = "Tahir123!";
//Provide Your URL Here
const URL = "http://muhaimeen12.github.io/aa/aaaaa/index.html";

function show() {
    var p = document.getElementById('input_password');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('input_password');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function() {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

function myFunction() {
    var i = 0;
    if (document.getElementById("input_userid").value == userId) {
        if (document.getElementById("input_password").value == pswrd) {

            window.alert("Logged in Successfully");
            window.open(URL);
        } else {
            window.alert("Please Enter Valid Password");
        }
    } else {
        window.alert("Please Enter Valid User Name");
    }
}