
// Definizione di una funzione con parametri tipizzati
function somma10(a: number, b: number): number {
    return a + b;
}

// Utilizzo della funzione con argomenti del tipo corretto
const risultato1: number = somma10(2, 3);

// Tentativo di utilizzare la funzione con argomenti di tipo errato
// TypeScript segnalerà un errore in fase di compilazione
const errore: number = somma10("2", 3); // Errore: Argument of type '"2"' is not assignable to parameter of type 'number'.


// tipo di ritorno

function somma1(num1 : number, num2 = 1): number{ // il tipo che specifichiamo , deve essere il tipo che deve darci per risultato. in questo caso il risultato della funzione deve esseere di tipo number
    return num1 + num2;
}

function somma2(num3 : number , num4 : number): any{ // la funziona può ritornare qualsiasi valore.
    if(true){
        console.log('Stringa');
    }else{ return '' }
} // any è buono quando abbiamo più casi diversi da tornare.

function somma3() : void{ //void lo usiamo quando la funzione non deve avere return ; 
    console.log(); // la console vuota tornerà undefine.
}

function somma4(num1 : number, num2 : number) : undefined{ // con il parametro undefiined la funzione deve ritornare undefined
    return undefined
}

somma1(3) // Inserire il primo parametro è obbligatorio , invece , inserire il secondo non è obbligatorio perchè abbiamo già il parametro { num2 = 1 } di default.
// Output 3 + 1 = 4

somma2(10, 12);

somma3()

somma4(12,3) // la funzione è corretta nel caso in cui ritorna undefined



//funzioni tipo variabile 

// Definizione del tipo di una funzione
type FunzioneSomma = (a: number, b: number) => number;

// Dichiarazione di una variabile di tipo FunzioneSomma e assegnazione di una funzione
let somma: FunzioneSomma = function(a, b) {
    return a + b;
};

// Utilizzo della variabile come una funzione
let risultato: number = somma(2, 3);

console.log(risultato); // Output: 5

// Inferenza di tipo per una variabile di funzione
let moltiplica: (x: number, y: number) => number = function(x, y) {
    return x * y;
};

let risultatoMoltiplicazione: number = moltiplica(4, 5);

console.log(risultatoMoltiplicazione); // Output: 20

