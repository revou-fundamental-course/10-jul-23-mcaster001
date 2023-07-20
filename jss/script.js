//Function Calculate
function Calculate() {
    event.preventDefault();
    const gender = document.getElementById('gender').value;
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    console.log(gender, weight, height, age)
    // Calculate BMI
    var bmi = weight / ((height / 100) ** 2);
    bmi = bmi.toFixed(2);
    console.log(bmi)
    // Result BMI
    var note;
    if (bmi < 18.5) {
        note = "Underweight";
        document.getElementById('colour1').style.color = "rgb(0, 121, 255)";
        document.getElementById('colour2').style.color = "rgb(0, 121, 255)";
    } else if (bmi >= 18.5 && bmi <= 24.5) {
        note = "Normal (Ideal)";
        document.getElementById('colour1').style.color = "rgb(0, 223, 162)";
        document.getElementById('colour2').style.color = "rgb(0, 223, 162)";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        note = "Overweight";
        document.getElementById('colour1').style.color = "rgb(246, 250, 112)";
        document.getElementById('colour2').style.color = "rgb(246, 250, 112)";
    } else if (bmi >= 30.0){
        note = "Obesity"
        document.getElementById('colour1').style.color = "rgb(255, 0, 96)";
        document.getElementById('colour2').style.color = "rgb(255, 0, 96)";
    }
    
    document.querySelector('.output').textContent = bmi;
    document.querySelector('.notebmi').textContent = note;
}
//Fungction Reset
function Reset() {
    event.preventDefault();
    document.getElementById("forminputt").reset();
    document.getElementById('colour1').style.color = "black";
    document.getElementById('colour2').style.color = "black";
    document.querySelector('#colour1').textContent = "BMI Numbers";
    document.querySelector('#colour2').textContent = "Body Weight Status";
}

document.getElementById("calculate").addEventListener("click", Calculate);
document.getElementById("resetbtn").addEventListener("click", Reset);

