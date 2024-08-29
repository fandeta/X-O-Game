let allSpans = document.querySelectorAll("span:not(span.winner")
let nextPlayer = document.querySelector("q")
let mark = "X"

allSpans.forEach(span => {
  span.addEventListener("click", function() {
    // If span Have any text inside it will Stoped Function 
    if ( this.innerText ) return
    this.innerText = mark
    // To Switch the mark 
    mark === "O" ? mark = "X" : mark = "O"
    nextPlayer.innerHTML = mark
    checkX()
    checkO()
    if (checkO() !== true && checkX() !== true) {
      isFull()
    }
  })
})

let winningExp = [
  // Columns
  [0,1,2],
  [3,4,5],
  [6,7,8],
  // Rows
  [0,3,6],
  [1,4,7],
  [2,5,8],
  // Werrp
  [0,4,8],
  [2,4,6],
]

function checkX () {
  for (const key of winningExp) {
    // console.log(key)
    for (let _noo of key) {
      if (allSpans[key[0]].innerText === allSpans[key[1]].innerText && allSpans[key[2]].innerText === allSpans[key[0]].innerText && allSpans[key[0]].innerText === "X") {
        allSpans[key[0]].style.cssText = "background-color : #12d812; color : #fff"
        allSpans[key[1]].style.cssText = "background-color : #12d812; color : #fff"
        allSpans[key[2]].style.cssText = "background-color : #12d812; color : #fff"
        // Disable pointer Events on board After "X" won
        allSpans[key[0]].parentElement.parentElement.style.pointerEvents = "none"
        // console.log("X Is Winner! Congratulation <3")
        document.querySelector(".winner").innerHTML = "X"
        document.querySelector(".winner").parentElement.style.display = "block"
        return true
      }
    }
  }
}

function checkO () {
  for (const key of winningExp) {
    for (let noo of key) {
      if (allSpans[key[0]].innerText === allSpans[key[1]].innerText && allSpans[key[2]].innerText === allSpans[key[0]].innerText && allSpans[key[0]].innerText === "O") {
        allSpans[key[0]].style.cssText = "background-color : #12d812; color : #fff"
        allSpans[key[1]].style.cssText = "background-color : #12d812; color : #fff"
        allSpans[key[2]].style.cssText = "background-color : #12d812; color : #fff"
        // Disable pointer Events on board After "O" Won
        allSpans[key[0]].parentElement.parentElement.style.pointerEvents = "none"
        console.log("O Is Winner! Congratulation <3")
        document.querySelector(".winner").innerHTML = "O"
        document.querySelector(".winner").parentElement.style.display = "block"
        return true
      }
    }
  }
}

function isFull () {
  // Add click event When Click on Button will Reload The page!
  document.querySelectorAll(".btn").forEach( btn => {
    btn.addEventListener("click",function() {
      location.reload()
    })
  })
  // to check if all spans is not empty then there is no one win and will reload the page !
  let count = 0
  allSpans.forEach(span => {
    span.innerText !== "" ? count++ : count
    count === 9 ? console.log("No one Winning in this Game!, Try Again !") : null
    if (count === 9) {
      document.querySelector("h3.no-win").style.display = "block"
    }
  })
}
