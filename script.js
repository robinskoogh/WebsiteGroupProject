var navMenuList = document.getElementById("navBarList");

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
    var formData = JSON.stringify($("#formContact").serializeArray());

    Download(formData, "formdata.json", "text/plain;charset=utf-8");
    //SaveToFile(formData, "formadata.json", "text/plain;charset=utf-8");
}

function Download(data, filename, type) {
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
            //     document.body.removeChild(a);
            //     window.URL.revokeObjectURL(url);  
            // }, 0); 
        }
    console.log("JSON file has been saved.");
    }

function SaveToFile(data, filename, type) {
    var file = new Blob([data], {type: type});
    saveAs(file, filename);
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
}

function nextImg() {
    i++;
    if (i == path.length){
        i = 0;
    }
    stopSlideshow();
    slideshow();
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