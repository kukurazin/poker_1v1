// You can ask for 6th card or change any card by using their index from left to right. 12345. Please don't use any index twise. It will trigger function averytime. 
//I'll add filter for unique digits later.


   let deck = ['🂱', '🃑', '🂡', '🃁', '🂲', '🃂', '🂢', '🃒', '🂣', '🂳', '🃃', '🃓', '🂤', '🂴', '🃄', '🃔', '🂥', '🂵', '🃅', '🃕', '🂦', '🂶', '🃆', '🃖', '🂧', '🂷', '🃇', '🃗', '🂨', '🂸', '🃈', '🃘', '🂩', '🂹', '🃉', '🃙', '🂪', '🂺', '🃊', '🃚', '🂫', '🂻', '🃋', '🃛', '🂮', '🂾', '🃎', '🃞', '🂭', '🂽', '🃍', '🃝'];

   let back = '🂠';

   function getCard() {
      return deck.splice(Math.ceil(Math.random() * deck.length - 1), 1)[0]
   }

   let flop1 = getCard();
   let flop2 = back;
   let flop3 = back;
   let turn = back;
   let river = back;

   let board = flop1 + flop2 + flop3 + turn + river;

   card1 = getCard();
   card2 = getCard();
   card3 = getCard();
   card4 = getCard();
   card5 = getCard();
   card6 = getCard();

   let player1 = card1 + card2 + card3 + card4 + card5;
   console.log('%c ' + player1 + ' ' + board, 'font-size:150px');;

   let more = window.prompt("What's next?", "");


   if (more === '6') {
      player1 = player1 + card6;
   } else {
      [...more].forEach(el => player1 = player1.replace([...player1][el - 1], getCard()))
   }

   console.clear();

   flop2 = getCard();
   flop3 = getCard();
   turn = getCard();
   river = getCard();

   board = flop1 + flop2 + flop3 + turn + river;

   console.log('%c ' + player1 + ' ' + board, 'font-size:150px');
