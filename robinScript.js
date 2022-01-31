let toggleSlider = document.getElementById("toggleSwitch");
let pieChart = document.getElementById("skillsPie");
let barChart = document.getElementById("skillsBar");

function skillBarChange() {
    if (toggleSlider.checked == false){
        barChart.style.display = "";
        pieChart.style.display = "none";
    }
    else {
        barChart.style.display = "none";
        pieChart.style.display = "";
    }
}

function setStartState() {
    barChart.style.display = "none";
    pieChart.style.display = "";
}

window.onload = setStartState;