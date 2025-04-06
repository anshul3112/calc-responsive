let input = document.getElementById('input');

let buttons = document.querySelectorAll('.digit');

console.log(buttons);

buttons.forEach((e) => {
    e.addEventListener('click', (ee)=>{

        console.log('clicked');

        const val = ee.target.innerHTML;

        if (val === '=') {
            try {
                result = eval(input.value);
                if (typeof result === 'number' && !Number.isInteger(result)) {
                    result = result.toFixed(3); // round to 3 decimal places
                }
                input.value = result;
            } catch (err) {
                input.value = "Error";
            }
        } 
        else if (val === 'AC') {
            input.value = '';
        }
        else if (val === 'del') {
            input.value = input.value.slice(0,-1);
        } 
        else {
            input.value += val;
        }
    });
});