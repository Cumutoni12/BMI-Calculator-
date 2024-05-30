document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var bmi = calculateBMI(weight, height);

    displayResult(bmi);
});

function calculateBMI(weight, height) {
    return (weight / ((height/100) * (height/100))).toFixed(2);
}

function displayResult(bmi) {
    var resultDiv = document.getElementById('result');
    var message = '';

    if (bmi < 18.5) {
        message = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        message = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        message = 'Overweight';
    } else {
        message = 'Obese';
    }

    resultDiv.innerHTML = `<p>Your BMI: ${bmi}</p><p>Result: ${message}</p>`;
}
