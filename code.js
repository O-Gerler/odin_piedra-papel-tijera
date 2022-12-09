const playRound = (playerOption, iaOption) =>{
    if (playerOption === "rock"){
        if(iaOption === 1){
            return 0
        }else if(iaOption === 2){
            return 1
        }

        return 2
    }
    if (playerOption === "paper"){
        if(iaOption === 1){
            return 0
        }else if(iaOption === 2){
            return 1
        }

        return 2
    }
    if (playerOption === "scissors"){
        if(iaOption === 1){
            return 0
        }else if(iaOption === 2){
            return 1
        }

        return 2
    }

    return "ERROR!!"
}

let contPlayer = 0;
let contIA = 0;

while(contPlayer<5 && contIA <5){
    let playerOption = prompt("Rock | Paper | Scissors")
        .toLowerCase()
    let iaOption = parseInt(Math.random()*3 + 1)
    console.log(iaOption)
    let result = playRound(playerOption, iaOption)
    console.log(result)
    switch(result){
        case 0: alert("Tie")
            break
        case 1: alert("Player wins")
            contPlayer++
            break
        case 2: alert("IA wins")
            contIA++
            break
        default:
            alert(result)
    }
    alert(`The results are Player: ${contPlayer} IA: ${contIA}`)
}
