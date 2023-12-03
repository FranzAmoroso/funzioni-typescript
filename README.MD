# Typescript  Funzioni

Funzioni in TypeScript, un linguaggio di programmazione che estende JavaScript aggiungendo tipi statici. 

### tipi di parametri
 In TypeScript, puoi specificare il tipo dei parametri di una funzione, permettendo al compilatore di verificare che la funzione venga chiamata con argomenti del tipo corretto. Puoi applicare tipi a variabili, parametri di funzione, valori di ritorno di funzione, proprietà di oggetti e altro ancora. Questo aiuta a migliorare la sicurezza e la robustezza del codice, in quanto previene errori di tipo comuni durante lo sviluppo.
    
    function somma(num1 : number, num2 : number){ .. }

### inference nei parametri di default
Inference, in programmazione, si riferisce alla capacità del compilatore o dell'interprete di dedurre automaticamente i tipi delle variabili o delle espressioni senza che il programmatore debba esplicitamente specificarli. Questo processo è noto come "type inference" o "inferenza di tipo". L'inferenza di tipo può contribuire a rendere il codice più conciso, leggibile ed evita la necessità di specificare dettagli tipi quando sono ovvi. Tuttavia, è sempre possibile specificare i tipi in modo esplicito se necessario, specialmente in contesti più complessi o quando si desidera fornire una documentazione chiara per il codice.

    let a = 10
    let b = 20
    function somma(a , b) { .. }
### il tip di ritorno
La definizione del tipo di ritorno in TypeScript indica il tipo di valore che una funzione restituirà. Puoi specificare il tipo di ritorno attraverso il : tipo alla fine della firma della funzione.
    
    function somma(a : number, b : number): number{ 
        return a + b;
     }
### funzioni come tipo di variabile
In TypeScript, le funzioni possono essere trattate come tipi di variabile grazie al concetto di "tipi di funzione". Ciò significa che puoi definire il tipo di una variabile come una funzione e assegnare una funzione a quella variabile. Questo approccio è utile quando si vogliono definire tipi di funzione personalizzati e garantire che le variabili contengano funzioni con firme specifiche.

    let somma : (a : number, b : number) => number = function(a,b){ return a + b; } 


