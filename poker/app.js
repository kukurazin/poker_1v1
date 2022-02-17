// You can ask for 6th card or change any card by using their index from left to right. 12345. If you use 6 + any - only 6 is executed. If you use 11 - first card will be changed
// only once C:


   let deck = ['🂱', '🃑', '🂡', '🃁', '🂲', '🃂', '🂢', '🃒', '🂣', '🂳', '🃃', '🃓', '🂤', '🂴', '🃄', '🃔', '🂥', '🂵', '🃅', '🃕', '🂦', '🂶', '🃆', '🃖', '🂧', '🂷', '🃇', '🃗', '🂨', '🂸', '🃈', '🃘', '🂩', '🂹', '🃉', '🃙', '🂪', '🂺', '🃊', '🃚', '🂫', '🂻', '🃋', '🃛', '🂮', '🂾', '🃎', '🃞', '🂭', '🂽', '🃍', '🃝']; 
 
   let back = '🂠'; 
 
   function getCard() { 
      return deck.splice(Math.ceil(Math.random() * deck.length - 1), 1)[0] 
   } 
 
   let dealer1 = getCard(); 
   let dealer2 = back; 
   let dealer3 = back; 
   let dealer4 = back; 
   let dealer5 = back; 
 
   let board = dealer1 + dealer2 + dealer3 + dealer4 + dealer5; 
 
   let card1 = getCard(); 
   let card2 = getCard(); 
   let card3 = getCard(); 
   let card4 = getCard(); 
   let card5 = getCard(); 
   let card6 = getCard(); 
 
   let player1 = card1 + card2 + card3 + card4 + card5; 
   console.log('%c ' + player1 + ' ' + board, 'font-size:150px');; 
 
   let more = [...new Set(window.prompt("What's next?", ""))]; 
 
 
   if (more[0] === '6') { 
      player1 = player1 + card6; 
   } else { 
      [...more].forEach(el => player1 = player1.replace([...player1][el - 1], getCard())) 
   } 
 
   console.clear(); 
 
   dealer2 = getCard(); 
   dealer3 = getCard(); 
   dealer4 = getCard(); 
   dealer5 = getCard(); 
 
   board = dealer1 + dealer2 + dealer3 + dealer4 + dealer5; 
 
   console.log('%c ' + player1 + ' ' + board, 'font-size:150px');
