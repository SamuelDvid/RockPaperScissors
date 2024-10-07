let player1 = 1;
let selectionp1 = prompt('select: 1-Rock, 2-Paper, 3-Scissors');

let player2 = 1;
let selectionp2 = Math.floor(Math.random()* (3-1) + 1); 



let unknownSelection = false;

//options for player one (you)

if(selectionp1 == 1){
    alert('you have selected rock');
    console.log('you have selected rock');

}else if(selectionp1 == 2){
    alert('you have selected paper');
    console.log('you have selected paper');
}else if(selectionp1 == 3){
    alert('you have selected scissors');
    console.log('you have selected scissors')
}else{
    alert('unknown selection');
    console.log('unknown selection, please select a valid character');
    unknownSelection = true;
    
}




//options for player two (pc)



if(unknownSelection == false){
    if(selectionp2 == 1){
        alert('pc has selected rock');
        console.log('pc have selected rock');
    
    }else if(selectionp2 == 2){
        alert('pc has selected paper');
        console.log('pc have selected paper');
    }else if(selectionp2 == 3){
        alert('pc has selected scissors');
        console.log('pc have selected scissors')
    }else{
        alert('unknown selection');
        console.log('pc unknown selection');
        
    }
}



//draw, wins and lose


if(unknownSelection == false){
    
    if(selectionp1 == 1 && selectionp2 == 1 || selectionp1 == 2 && selectionp2 == 2 || selectionp1 == 3 && selectionp2 == 3){
        alert('Draw');
        console.log('Draw');
        alert('You have ' + player1 + ' points and Pc has ' + player2 + ' Points');
    }else if(selectionp1 == 1 && selectionp2 == 3 || selectionp1 == 2 && selectionp2 == 1 || selectionp1 == 3 && selectionp2 == 2){
        alert('You Win');
        console.log('You win');
        player1 = player1 + 1;
        player2 = player2 - 1;
        alert('You have ' + player1 + ' points and Pc has ' + player2 + ' Points');
    
    }else{
        alert('You Lose');
        console.log('You Lose');
        player1 = player1 - 1;
        player2 = player2 + 1;
        alert('You have ' + player1 + ' points and Pc has ' + player2 + ' Points');
    }

}

