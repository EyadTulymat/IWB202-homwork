
// JavaScript source code
function fill_result() {
    var para = new URLSearchParams(window.location.search);
    var arr = para.get("name");
    document.getElementById("td_name").innerHTML = arr;
    arr = para.get("id");
    document.getElementById("td_id").innerHTML = arr;
    arr = para.get("birth");
    document.getElementById("td_birth").innerHTML = arr;
    arr = para.get("phone");
    document.getElementById("td_phone").innerHTML = arr;
    arr = para.get("mail");
    document.getElementById("td_mail").innerHTML = arr;
   
}
var code;
function createCaptcha() {

    var charsArray = "01234578ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var captcha = "";
    for (var i = 0; i < 4; i++) {
        captcha += charsArray[Math.floor(Math.random() * charsArray.length)];
    }
    document.getElementById("captcha").innerHTML = captcha;
    code = captcha;
}

function ChechFormValues(frm) {

    var cpatchaTextBox = document.getElementById("cpatchaTextBox");
   

    if (frm.name.value.search(/^[a-z\u0621-\u064A]+([ ]?[a-z\u0621-\u064A])*$/i) == -1) {//Includes Arabic letters
        alert(" enter your name in arabic ")
        frm.name.focus();
    }
    else if (frm.id.value.search(/^(0[1-9]|1[0-4])\d{9}$/) == -1) {
        alert("pleas enter your national number ")
        frm.id.focus();
    }
    else if (frm.birth.value.search(/^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/) == -1) {
        alert("enter right date ")
        frm.birth.focus();
    }
    else if (frm.phone.value.search(/^09[3-689]\d{7}$/) == -1) {
        alert("enter phone like 09******** ")
        frm.phone.focus();
    }
    else if (frm.mail.value.search(/^[a-z0-9][^@\s]*@[^@\s.]+(\.[^@\s.]+)+$/i) == -1) {
        alert("اincorrect email")
        frm.mail.focus();
    }
   
    else if (cpatchaTextBox.value != code) {
        alert("incorrect code");
        createCaptcha();
        cpatchaTextBox.value = "";
        cpatchaTextBox.focus();
    }
    else {
        return true;
    }
    return false;
}
function dma1() {
    dom = document.getElementById("tr1");
    // Flip the visibility adjective to whatever it is not now 
    if (dom.style.display == "table-row") {
        dom.style.display = "none";
        document.getElementById("My1").value = "Show";
    }
    else {
        dom.style.display = "table-row";
        document.getElementById("My1").value = "Hide";
    }
}
function hom2() {
    dom = document.getElementById("tr2");
    // Flip the visibility adjective to whatever it is not now 
    if (dom.style.display == "table-row") {
        dom.style.display = "none";
        document.getElementById("MY2").value = "Show";
    }
    else {
        dom.style.display = "table-row";
        document.getElementById("MY2").value = "Hide";
    }
}

function ha3() {
    dom = document.getElementById("tr3");
    // Flip the visibility adjective to whatever it is not now 
    if (dom.style.display == "table-row") {
        dom.style.display = "none";
        document.getElementById("MY3").value = "Show";
    }
    else {
        dom.style.display = "table-row";
        document.getElementById("MY3").value = "Hide";
    }
}

function dm4() {
    dom = document.getElementById("tr4");
    // Flip the visibility adjective to whatever it is not now 
    if (dom.style.display == "table-row") {
        dom.style.display = "none";
        document.getElementById("MY4").value = "Show";
    }
    else {
        dom.style.display = "table-row";
        document.getElementById("MY4").value = "Hide";
    }
}

function hm5() {
    dom = document.getElementById("tr5");
    // Flip the visibility adjective to whatever it is not now 
    if (dom.style.display == "table-row") {
        dom.style.display = "none";
        document.getElementById("MY5").value = "Show";
    }
    else {
        dom.style.display = "table-row";
        document.getElementById("MY5").value = "Hide";
    }
}

function d6() {
    dom = document.getElementById("tr6");
    // Flip the visibility adjective to whatever it is not now 
    if (dom.style.display == "table-row") {
        dom.style.display = "none";
        document.getElementById("MY6").value = "Show";
    }
    else {
        dom.style.display = "table-row";
        document.getElementById("MY6").value = "Hide";
    }
}

function n7() {
    dom = document.getElementById("tr7");
    // Flip the visibility adjective to whatever it is not now 
    if (dom.style.display == "table-row") {
        dom.style.display = "none";
        document.getElementById("MY7").value = "Show";
    }
    else {
        dom.style.display = "table-row";
        document.getElementById("MY7").value = "Hide";
    }
}

function e8() {
    dom = document.getElementById("tr8");
    // Flip the visibility adjective to whatever it is not now 
    if(dom.style.display == "table-row") {
        dom.style.display = "none";
        document.getElementById("MY8").value = "Show";
    }
    else {
        dom.style.display = "table-row";
        document.getElementById("MY8").value = "Hide";
    }
}

function h9() {
    dom = document.getElementById("tr9");
    // Flip the visibility adjective to whatever it is not now 
    if (dom.style.display == "table-row") {
        dom.style.display = "none";
        document.getElementById("MY9").value = "Show";
    }
    else {
        dom.style.display = "table-row";
        document.getElementById("MY9").value = "Hide";
    }
}

function t10() {
    dom = document.getElementById("tr10");
    // Flip the visibility adjective to whatever it is not now 
    if(dom.style.display == "table-row") {
        dom.style.display = "none";
        document.getElementById("MY10").value = "Show";
    }
    else {
        dom.style.display = "table-row";
        document.getElementById("MY10").value = "Hide";
    }
}

