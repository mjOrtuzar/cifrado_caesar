var alfabeto = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789',
    desplazamiento = 3,
    boton_de_cifrar = document.getElementById('cifrar'),
    boton_de_descifrar = document.getElementById('descifrar'),
    entrada = document.getElementById('input'),
    salida = document.getElementById('output');

    function cifrar(input, output, desplazamiento){
        var resultado = '';
        //Usaremos un bucle
        for(var i=0, c; c=input[i]; i++){
            var caracter_actual = '',
                indice_actual = alfabeto.indexOf( c );

            if((indice_actual + desplazamiento) <= alfabeto.length){
                //Desaplazamos el caracter.
                caracter_actual = alfabeto[ (indice_actual + desplazamiento) ];

                //Convertimos a ASCII
                caracter_actual = caracter_actual.charCodeAt( 0 );

                //El guion lo usamos para delimitar cada caracter cifrado y poder decifrarlo.
                resultado += caracter_actual + '-';
            }
            else{
                var indice_actual_temporal = indice_actual + desplazamiento,
                    sobrante = indice_actual_temporal - alfabeto.length;

                //
                //Usaremos solo el desplazamiento para reemplazar el caracter.
                caracter_actual = alfabeto[sobrante];

                //Convertimos a ASCII
                caracter_actual = caracter_actual.charCodeAt( 0 );

                resultado += caracter_actual + '-';
            }
        }

        output.value =alert(resultado.replace(/\-$/, '')) 
    }

    function descifrar(output, desplazamiento){
        var array_de_caracteres = output.value.split('-'),
            resultado = '';

        //Usaremos un bucle
        for(var i=0, c; c=array_de_caracteres[i]; i++){

            c = String.fromCharCode( parseInt( c ) );

            var caracter_actual = '',
                indice_actual = alfabeto.indexOf( c );

            if((indice_actual - desplazamiento) >= 0){
                caracter_actual = alfabeto[ (indice_actual - desplazamiento) ];

                resultado += caracter_actual;
            }
            else{
                var indice_actual_temporal = indice_actual - desplazamiento,
                    sobrante = parseInt(indice_actual_temporal.toString().replace('-', '') );


                caracter_actual = alfabeto[alfabeto.length - sobrante];

                resultado += caracter_actual;
            }
        }

        output.value = alert(resultado)
    }


    boton_de_cifrar.addEventListener('click', function(){
        cifrar(entrada.value, salida, desplazamiento);
    }, false);

    boton_de_descifrar.addEventListener('click', function(){
        descifrar(salida, desplazamiento);
    }, false);