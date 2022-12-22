let rollDice= document.getElementById('rolldice')
let hold=document.getElementById('hold')
let newGame=document.getElementById('newgame')
rollDice.addEventListener('click', getNewPig)
let pigPositions = ['oinker.png', 'leaning.png', 'razorback.png', 'snouter.png', 'trotter.png']
function getNewPig () {
    console.log(pigPositions)
    let num = Math.floor(Math.random()*5)
    img = document.createElement('img')
    img.src=pigPositions[num]
    document.body.appendChild(img)
    if (num === 0) {
        console.log('alright')
    }
  
}




//array of images
//randomly pick an image 


let randomNumber = []

