    

        const display = document.getElementById('display');

        function clearDisplay() {
            display.value = '';
        }

        function deleteLast() {
           display.value = display.value.toString().slice(0, -1);
        }

        function appendToDisplay(value) {
           display.value += value;
        }

        function calculateResult() {
            try {
                display.value = eval(display.value) || '';
            } catch (e) {
                display.value = 'ERROR';
           }
        }

        document.querySelectorAll('form input.buttons').forEach(button => {
            button.addEventListener('click', function() {
                const value = this.value;
                if (value === 'AC') {
                    clearDisplay();
                } else if (value === 'DE') {
                    deleteLast();
                } else if (value === '=') {
                    calculateResult();
                } else {
                    appendToDisplay(value);
                }
            });
        });