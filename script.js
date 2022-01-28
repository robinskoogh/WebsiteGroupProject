
// Mobile menubar

let navMenuList = document.getElementById("navBarList");

function Show() {
    if (navMenuList.classList.contains("_Menus-show") ?? false){
        navMenuList.classList.remove("_Menus-show");
    }
    else {
        navMenuList.classList.add("_Menus-show");
    }
}

function Hide(){
    navMenuList.classList.remove("_Menus-show");
}

function MenuPress() {
    if (navMenuList.classList.contains("_Menus-show") ?? false){
        navMenuList.classList.remove("_Menus-show");
    }
    else {
        navMenuList.classList.add("_Menus-show");
    }

}

function Send() {
    var tel = document.getElementById("phoneNumber").value;
    let pattern = /[0-9]+/;
    if (!tel.match(pattern)) {
        ShowPopup("Could not send message.");
        console.log("Error");
    }
    else {
        var formData = JSON.stringify($("#formContact").serializeArray());
        console.log(formData);
        ShowPopup("Message sent!");
        alert("ligger du kvar?");
    }
}

function ShowMsgBox(text) {
    var modal = document.getElementById("msgBox");
    //var btn = document.getElementById("msgBoxButton");
    var span = document.getElementsByClassName("closeBox")[0];

    document.getElementById("boxMessage").innerHTML = text;

    // When the user clicks on the button, open the modal
    // btn.onclick = function() {
    modal.style.display = "block";
    //}

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        location.reload();
        }
    }
}

function ShowPopup(text) {
    var popup = document.getElementById("popup");

    document.getElementById("popText").innerHTML = text;

    popup.classList.toggle("show");

    var delay = 2000;
    setTimeout(function() {
    popup.classList.toggle("hide");
    }, delay);
  }

function SaveFile() {
    var formData = JSON.stringify($("#formContact").serializeArray());
    console.log(formData);
    DownloadFile(formData, "formdata.json", "text/plain;charset=utf-8");
    ShowMsgBox("JSON-data:<br/>" + formData);
}

function DownloadFile(data, filename, type) {
    var file = new Blob([data], {type: type});

    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(file, filename); // For IE10+ (and Safari?)
    }
    else { // Other browsers.
        var a = document.createElement("a"),
        url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        // setTimeout(function() {
        //         document.body.removeChild(a);
        //         window.URL.revokeObjectURL(url);  
        //     }, 0); 
        }
    console.log("JSON file has been saved.");
    }

// Slideshow 

let i = 0;
let timer;
let path = ["images/slideshow/img1.jpg", "images/slideshow/img2.jpg", "images/slideshow/img3.jpg"];
let paused = false;

function slideshow() {
    
    document.getElementById("slideshowPic").className += "fade";
    setTimeout(function() {
        document.getElementById("slideshowPic").src = path[i];
        document.getElementById("slideshowPic").className = "";
    }, 1000);

    i++;
    if (i == path.length){
        i = 0;
    }

    timer = setTimeout("slideshow()", 5000);

}

function prevImg(){
    i-2;
    if (i == -1){
        i = path.length - 1;
    }
    stopSlideshow();
    slideshow();
    if (paused){
        stopSlideshow();
    }
}

function nextImg() {
    if (i == path.length){
        i = 0;
    }
    stopSlideshow();
    slideshow();
    if (paused){
        stopSlideshow();
    }
}

function playPause() {
    if (paused){
        paused = false;
        slideshow();
        document.getElementById("playPause").className = "";
    }
    else {
        paused = true;
        stopSlideshow();
        document.getElementById("playPause").className += "paused";
    }
}

function stopSlideshow() {
    clearTimeout(timer)
}

function runSlideshow() {
    slideshow();
}

window.onload = runSlideshow;


// Email live validation

emailValid = false;

function emailValidation() {
    let form = document.getElementById("formContact");
    let email = document.getElementById("email").value;
    let validationText = document.getElementById("validationText");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)){
        form.classList.add("emailValid");
        form.classList.remove("emailInvalid");
        validationText.innerHTML = "&#10003;";  
        emailValid = true;  
    }
    else {
        form.classList.remove("emailValid");
        form.classList.add("emailInvalid");
        validationText.innerHTML = "&#10006;";
        emailValid = false;
    }

    if (email == ""){
        form.classList.remove("emailValid");
        form.classList.remove("emailInvalid");
        validationText.innerHTML = "";
        emailValid = false;
    }

    formValidation();
}

// Form validation of required inputs

nameValid = false;
messageValid = false;

function formValidation() {
    let message = document.getElementById("messageBox").value;
    let name = document.getElementById("name").value;
    let button = document.getElementById("submitButton");

    if (name != "" && message != ""){
        nameValid = true;
        messageValid = true;
    }
    else {
        nameValid = false;
        messageValid = false;
    }

    if (emailValid && nameValid && messageValid){
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
}
