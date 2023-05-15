function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  if(argMoveId == 2){
    return 'papier';
  }
  if(argMoveId == 3){
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/*if(randomNumber == 1) {
  computerMove = 'kamień';
} else if(randomNumber == 2) {
	computerMove = 'papier'
} else if(randomNumber == 3) {
	computerMove = 'nożyce'
}*/

printMessage('Ruch komputera: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/*if(playerInput == '1') {
  playerMove = 'kamień';
} else if(playerInput == 2) {
	playerMove = 'papier'
} else if(playerInput == 3) {
	playerMove = 'nożyce'
}*/

printMessage('Ruch gracza: ' + argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
  } 

  if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
  } 
  
  if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
  }

  if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!');
  }

  if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
  }

  if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!');
  }
}

console.log('moves:', argComputerMove, argPlayerMove);

let argMoveId = displayResult(argComputerMove, argPlayerMove);

/*Deklaracja wygranych gracza 
if( computerMove == 'kamień' && playerMove == 'papier') {
	printMessage('Wygrywa gracz!');
  }

  else if( computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage('Wygrywa gracz!');
  }

  else if( computerMove == 'nożyce' && playerMove == 'kamień') {
	printMessage('Wygrywa gracz!');
  }

  else if ( playerMove == 'nieznany ruch') {
	printMessage('Wygrywa komputer po przez wykonanie nieznanego ruchu gracza!');
  }
//Deklaracja remisu
if( computerMove == 'kamień' && playerMove == 'kamień') {
	printMessage('Remis!');
  }

  else if( computerMove == 'papier' && playerMove == 'papier') {
	printMessage('Remis!');
  }

  else if( computerMove == 'nożyce' && playerMove == 'nożyce') {
	printMessage('Remis!');
  }

//Deklaracja wygranych komputera 
if( computerMove == 'kamień' && playerMove == 'nożyce') {
	printMessage('Wygrywa komputer!');
  }

  else if( computerMove == 'papier' && playerMove == 'kamień') {
	printMessage('Wygrywa komputer!');
  }

  else if( computerMove == 'nożyce' && playerMove == 'papier') {
	printMessage('Wygrywa komputer!');
}8*/