var bord = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0 ,0]];

function sudokuSolver(bord){
var nonPossibilities = {},
impossibleNumbers,
emptySpaces = 81;
while(emptySpaces > 0){
    emptySpaces =0;
    for(var col= 0;col< bord.length; col++){
        for(var row = 0; row < bord.length; row++){
            nonPossibilities= {};
            if(bord[col][row] === 0){
                for(var i = 0; i < 9; i++){
                    if(bord[col][i] > 0){
                        nonPossibilities[bord[col][i]] = true;
                    }
                    if(bord[i][row] > 0){
                        nonPossibilities[bord[i][row]] = true;
                    }
                }
                for(var cgrid = Math.floor(col/ 3) * 3; cgrid < Math.floor(col / 3) * 3 + 3; cgrid++){
                    for(var rgrid = Math.floor(row / 3) * 3; rgrid < Math.floor(row / 3) * 3 + 3; rgrid++){
                        if(bord[cgrid][rgrid]){
                            nonPossibilities[bord[cgrid][rgrid]] = true;
                        }
                    }
                }
                impossibleNumbers= Object.keys(nonPossibilities);//unique possible from non possible
                if(impossibleNumbers.length === 8){//if condition for impossiblenum
                    for(var i = 0; i < 10; i++){//for loop 1-9 num
                        if(impossibleNumbers.indexOf(i.toString()) < 0){
                            bord[col][row] = i;
                        }
                    }
                }
                else{
                    emptySpaces++;
                }
            }

        }

    }
}

return bord;
}	
console.log(sudokuSolver(bord));	
