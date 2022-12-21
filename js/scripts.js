const kmInput = document.getElementById('km-input');
const ageSelect = document.getElementById('age-select');

const submitButton = document.getElementById("submit-button");
const emptyButton = document.getElementById("empty-button")

submitButton.addEventListener('click', 

    function(){

        console.log('kmInput.value', kmInput.value);
        console.log('ageSelect.value', ageSelect.value);

        const km = parseInt(kmInput.value);
        const age = ageSelect.value;


        if (isNaN(km) == true) {
        
            document.getElementById('final-price').innerHTML = 'Valori non validi! Aggiorna la pagina e riprova'
        }
        else{

            const basePrice = 0.21 * km;
            console.log('basePrice', basePrice, typeof basePrice, isNaN(basePrice));
            let finalPrice = basePrice;
            let discount;

            if (age == 'm') {

                discount = basePrice / 100 * 20;
                console.log('discount', discount, typeof discount, isNaN(discount));
                finalPrice = basePrice - discount;
                console.log('finalPrice', finalPrice, typeof finalPrice, isNaN(finalPrice)); 
    
            }
            else if (age == 'o') {
    
                discount = basePrice / 100 * 40;
                console.log('discount', discount, typeof discount, isNaN(discount));
                finalPrice = basePrice - discount;
                console.log('finalPrice', finalPrice, typeof finalPrice, isNaN(finalPrice));
    
            }
     
            document.getElementById('final-price').innerHTML = 'prezzo finale: €' + finalPrice.toFixed(2);     
            document.getElementById('final-price').style.display = 'block';
            document.getElementById('final-price').className = '';
            console.log('finalPrice.toFixed(2)', finalPrice.toFixed(2), typeof finalPrice.toFixed(2), isNaN(finalPrice.toFixed(2)));
            
        }

        }

);

emptyButton.addEventListener('click', 

    function(){

        kmInput.value = '';
        ageSelect.value = 's';
        document.getElementById('final-price').style.display = 'none';
        document.getElementById('final-price').className = 'hidden';

    }
);