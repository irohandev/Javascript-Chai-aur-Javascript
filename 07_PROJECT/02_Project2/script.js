const form = document.querySelector('form');

// if we declare here then the usecase will give us empty value..because switch event ke phle hi declare ho ja rha hai toh page restart/refresh hote hi empty value store kr lega
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
e.preventDefault();

const height = parseInt(document.querySelector('#height').value);         //parseint se string value jo input hoga woh int value bann jyega 
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');
const info = document.querySelector('#info');

if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
} 
else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
} 
else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;

    if(bmi<18.6){
        info.innerHTML = `<span>Under Weight!!</span>`
    }
    else if(bmi>18.6 && bmi<24.9){
        info.innerHTML = `<span>Normal Weight!!</span>`
    }
    if(bmi>24.9){
        info.innerHTML = `<span>Over Weight!!</span>`
    }
}
});

