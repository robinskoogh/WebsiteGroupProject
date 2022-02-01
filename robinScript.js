let toggleSlider = document.getElementById("toggleSwitch");
let pieChart = document.getElementById("skillsPie");
let barChart = document.getElementById("skillsBar");

function skillBarChange() {
    if (toggleSlider.checked == false){
        barChart.style.display = "none";
        pieChart.style.display = "";
    }
    else {
        barChart.style.display = "";
        pieChart.style.display = "none";
    }
}

function setStartState() {
    barChart.style.display = "";
    pieChart.style.display = "none";
}

window.onload = setStartState;