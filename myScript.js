function myFunction() {
  document.getElementById("rd1").innerHTML = "Footsteps.";
}
function myFunction1() {
  document.getElementById("rd2").innerHTML = "The living room.";
}
function myFunction2() {
  document.getElementById("rd3").innerHTML = "A piano.";
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


function onClick() {
    alert("Error");
}

function insertNumber(number) {
    document.formcalc.textcalc.value = document.formcalc.textcalc.value + number;
}

function equal() {
    var x = document.formcalc.textcalc.value;
    if (x) {
        document.formcalc.textcalc.value = eval(x);
    }
}

function clean() {
    document.formcalc.textcalc.value = null;
}