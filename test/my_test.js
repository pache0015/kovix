const { suite, test, assert } = require('@pmoo/testy');

function  myF(str, intLimite){
    let strFinal = ""
    let contChar = 1
    for (let i=0; i<str.length; i++){
        if(str[i] == str[i-1]){
            contChar = contChar + 1
        } else {
            contChar = 1
        }
        if(contChar <= intLimite){
            strFinal = strFinal + str[i]
        }
    }
    return strFinal;
}
suite('a boring test suite', () => {

    test('La funcion devuelve un string vacio', () => {
        assert.that(myF("")).isEqualTo("");
    });

    test('La funcion recibe un string de un char y lo devuelve', () => {
        assert.that(myF("a",1)).isEqualTo("a");
    });

    test('La funcion recibe un string y devuelte otro con los char consecutivos no iguales', () => {
        assert.that(myF("aabbbbc", 1)).isEqualTo("abc");
    });

    test('La función devuelve un string donde los char consecutivos del string no se repitan más que int limite veces.', () => {
        assert.that(myF("aabbbbc", 2)).isEqualTo("aabbc");
    });

    test('La función devuelve un string vacio porque el int limite es cero.', () => {
        assert.that(myF("aabbbbc", 0)).isEqualTo("");
    });

    test('La función devuelve un string donde los char consecutivos del string no se repitan más que int limite veces diferenciando entre mayusculas y minisculas.', () => {
        assert.that(myF("aabbbbBc", 1)).isEqualTo("abBc");
    });

    test('La función devuelve un string donde los char consecutivos del string no se repitan más que int limite veces diferenciando entre mayusculas ,minisculas y numeros.', () => {
        assert.that(myF("aab222bbbBc", 2)).isEqualTo("aab22bbBc");
    });

    test('La función devuelve un string donde los char consecutivos del string no se repitan más que int limite veces diferenciando entre mayusculas ,minisculas y numeros.', () => {
        assert.that(myF("aab222bbbBc", 3)).isEqualTo("aab222bbbBc");
    });

    test('La función devuelve un string donde los char consecutivos del string no se repitan más que int limite veces diferenciando entre mayusculas ,minisculas, numeros y espacio.', () => {
        assert.that(myF("aab22 2bbbBc", 2)).isEqualTo("aab22 2bbBc");
        //Para evitar que se muestre el espacio podría usarse el metodo trim() de js
    });

});

// Documentacion de Testy: https://github.com/ngarbezza/testy