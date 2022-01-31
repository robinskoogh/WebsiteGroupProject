let toggleSlider = document.getElementById("toggleSwitch");
let pieChart = document.getElementById("skillsPie");
let barChart = document.getElementById("skillsBar");

function skillBarChange() {
    if (toggleSlider.checked == false){
        barChart.style.display = "block";
        pieChart.style.display = "none";
    }
    else {
        barChart.style.display = "none";
        pieChart.style.display = "block";
    }
}

function setStartState() {
    barChart.style.display = "none";
    pieChart.style.display = "block";
}

window.onload = setStartState;