"use strict";


function showMessage(userName) {
    if (userName === undefined) {
        alert("UserName undefined");
    } else {
        alert("Hello " + userName);
    }
}

showMessage();

