let targetNumber = 0

const main = () => {
  targetNumber = Math.ceil(Math.random() * 10)
  console.log(targetNumber)
}

const checkGuess = () => {
  //get the user's guess 
  const userGuess = document.querySelector('#numberGuessed').value
  console.log(userGuess)
  //compare the user guess and target number
  if (parseInt(userGuess) == targetNumber) {
    //display yess
    console.log('matched!')
    document.querySelector('.result').textContent = 'Yes! Correct! You Win!'
    document.querySelector('.result').classList.remove('incorrect-guess')
    document.querySelector('.result').classList.add('correct-guess')
    document.querySelector('.reset-button').classlist.add('.hide')
  } else {
    //display no
    console.log('no match')
    document.querySelector('.result').textContent = 'Nope, try again!'
    document.querySelector('.result').classList.remove('correct-guess')
    document.querySelector('.result').classList.add('incorrect-guess')
  }
  //display the correct results 
}

const resetGame = () => {
  // clear the input 
  document.querySelector('#numberGuessed').value = ''
  // target number 
  main()
  // output message 
  document.querySelector('.result').textContent = 'make your guess'
  document.querySelector('.result').classList.remove('correct-guess')
  document.querySelector('.result').classList.remove('incorrect-guess')

}

//fix the js please
document.addEventListener('DOMContentLoaded', main)
document.querySelector('.do-guess').addEventListener('click', checkGuess)
document.querySelector('.reset-button').addEventListener('click', resetGame)