/**
 * //приклад вхідної строки
 * ---.. T---.. -.... T..---   R--------.. ...-- E----- ----.   R--------.. R....------ E.--.- .----   R......---- -.... .---- -....
 *
 * T -  транспозиція - реверс строки
 * E- заміна місцями першого і останнього символів
 * R - повтор. дублювання кожного символу
 */


const txt =
    "---.. T---.. -.... T..---   R--------.. ...-- E----- ----.   R--------.. R....------ E.--.- .----   R......---- -.... .---- -....";

const morzeAlphabet = [
    "-----",
    ".----",
    "..---",
    "...--",
    "....-",
    ".....",
    "-....",
    "--...",
    "---..",
    "----.",
];

//цяфункія перетворює один  стандартний шифр Морзе в символ
function decodeMorzeToChar(morzeSymb) {
    for (let key in morzeAlphabet) {
        if (morzeSymb === morzeAlphabet[key]) {
            return key
        }

    }
    console.log(`no such symbols in Morze  alphabet - ${morzeSymb}`);
    throw new Error(`no such symbols in Morze's  alphabet - ${morzeSymb}`)
}

//ця функція нормалізує стрічку з префіксом  до стандартної
function normalizeToMorzeT(morzeT) {
    let output = '';
    for (let i = morzeT.length - 1; i > 0; i--) {
        output += morzeT[i];
    }
    console.log(`this end of morzeT output is ${output} `);
    return output;
}

//ця функція нормалізує стрічку з префіксом  до стандартної

function normalizeToMorzeE(morzeE) { //E.--.-
    const inputStr = String(morzeE).slice(1);//'.--.-'
    let output = ''; //.--.-
    output +=
        inputStr.slice(-1) + //'-'
        inputStr.slice(1, -1) + //'--.'
        inputStr.slice(0, 1); //'.'
    return output;
}

//ця функція нормалізує стрічку з префіксом  до стандартної
function normalizeToMorzeR(morzeR) {
    let output = '';
    for (let key in morzeR) {
        if (key !== 0 && key % 2) {
            output += morzeR[key];
        }
    }
    console.log(`this end of morzeR output is ${output} `);
    return output;
}

//ця функція перетвоює стрічку в коді Морзе в стрічку читабельну
function decodeMorzeToText(morzeStr) {
    let combitaionsArray = morzeStr.split('   '); //['xxx xxx xxx',' xxx xxx xxx',...
    let output = ''; //[111 111 111 ...]


    for (let key in combitaionsArray) { //перебираєм массив с комбінацій
        let symbolsArr = combitaionsArray[key].split(' ');
        for (let key2 in symbolsArr) {  //перебираємо массив з конкретних символів в форматі Морзе
            switch (symbolsArr[key2][0]) {
                case 'T' :
                    output += decodeMorzeToChar(normalizeToMorzeT(symbolsArr[key2]));
                    break;
                case 'E' :
                    output += decodeMorzeToChar(normalizeToMorzeE(symbolsArr[key2]));
                    break;
                case 'R' :
                    output += decodeMorzeToChar(normalizeToMorzeR(symbolsArr[key2]));
                    break;
                default :
                    output += decodeMorzeToChar(symbolsArr[key2]);
                    break;
            }
        }
        output += ' ';

    }
    return output;

}

console.log(decodeMorzeToText(txt));
