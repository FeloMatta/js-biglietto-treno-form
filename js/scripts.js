const kmInput = document.getElementById('km-input');
const ageInput = document.getElementById('age-input');

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener('click', 

    function(){

        console.log('kmInput.value', kmInput.value);
        console.log('ageInput.value', ageInput.value);

        const km = kmInput.value;
        const age = ageInput.value;

        const basePrice = 0.21 * km;
        console.log('basePrice', basePrice, typeof basePrice, isNaN(basePrice));
        let finalPrice = basePrice;
        let discount;

        if (age < 18) {

            discount = basePrice / 100 * 20;
            console.log('discount', discount, typeof discount, isNaN(discount));
            finalPrice = basePrice - discount;
            console.log('finalPrice', finalPrice, typeof finalPrice, isNaN(finalPrice)); 

        }
        else if (age > 65) {

            discount = basePrice / 100 * 40;
            console.log('discount', discount, typeof discount, isNaN(discount));
            finalPrice = basePrice - discount;
            console.log('finalPrice', finalPrice, typeof finalPrice, isNaN(finalPrice));

        }

        alert('prezzo finale: €' + finalPrice.toFixed(2));       

        console.log('finalPrice.toFixed(2)', finalPrice.toFixed(2), typeof finalPrice.toFixed(2), isNaN(finalPrice.toFixed(2)));
        
    }

);
