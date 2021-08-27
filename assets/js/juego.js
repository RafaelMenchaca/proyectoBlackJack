/**
 * 2C = Two of Clubs 
 * 2D = Two of Diamons
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

    let deck         = [];
    const tipos      = ['C', 'D', 'H', 'S'];
    const especiales = ['A', 'J', 'Q', 'K'];


    // Esta funcion crea un nuevo deck
    const creadDeck = () => {

        for (let i = 2; i <= 10; i++){
            for( let tipo of tipos){
            deck.push( i + tipo);
            }
        } 

        for (let tipo of tipos){
            for(let esp of especiales){
                deck.push(esp + tipo)
            }
        }
        // console.log( deck);
        deck = _.shuffle(deck);
        console.log(deck);
        return deck;
    }

    creadDeck();


    
    // Esta funcion me permite tomar una carta
    const pedirCarta = () => {

        if ( deck.length === 0){
            throw 'No hay cartas en el deck';
        }

        const carta = deck.pop();

        console.log(deck);
        console.log(carta); // carta debe ser de la braja y dejar de existur
        return carta;
    }
    
    // pedirCarta();

    // const valorCarta = (carta) => {

    //     const valor = carta.substring(0, carta.length -1);
    //     let puntos = 0;
    //     // 2 = 2  10 = 10  3 = 3
    //     if ( isNaN(valor)){

    //         puntos = ( valor === 'A') ? 11 : 10;
            
    //     } else {
            
    //         puntos = valor * 1;
    //     }
        
    // }

    // valorCarta('9D');

    // const valorCarta = (carta) => {

    //     const valor = carta.substring(0, carta.length -1);
    //     let puntos = 0;
    //     // 2 = 2  10 = 10  3 = 3
    //     puntos = ( isNaN(valor) === 'A') ? 11 :
    //              ( isNaN(valor) === 'A') ? 10 : valor * 1;        
    // }

    // valorCarta('9D');

        const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length -1);
        return ( isNaN( valor ) ) ?
                ( valor === 'A' ) ? 11 : 10
                : valor * 1;      
    }

    const valor = valorCarta(pedirCarta());
    console.log({valor});