// ******************** VARIABLE DECLERATIONS ******************

const timer = document.querySelector('#counter')
const minusBtn = document.querySelector('#minus')
const plusBtn = document.querySelector('#plus')
const likeBtn = document.querySelector('#heart')
const pauseBtn = document.querySelector('#pause')
const mainPage = document.body

let numOfLikes = 0
let paused = false


// ******************** FUNCTIONS ******************

function increaseTimer() {
   if (!paused){
      let currentTime = parseInt(timer.textContent)
      let newTime = ++currentTime
      return newTime
   }
}

setInterval(increaseTimer, 1000)

function pausedTimer() {
   paused = !paused
   if(paused) {
      minusBtn.setAttribute('disbled', true)
      plusBtn.setAttribute('disbled', true)
      likeBtn.setAttribute('disbled', true)
      pauseBtn.textContent = 'resume'
   } else {
      minusBtn.removeAttribute('disabled')
      plusBtn.removeAttribute('disabled')
      likeBtn.removeAttribute('disabled')
      pauseBtn.textContent = 'pause'
   }
}


// ******************** EVENT LISTENERS ******************

mainPage.addEventListener('click', function(event) {
   event.preventDefault()

   const btnClicked = event.target
   let time = parseInt(timer.textContent)
   const ul = document.querySelector('.likes')

   if (btnClicked === pauseBtn) {
      pausedTimer()
   } else if (btnClicked === minusBtn) {
      timer.textContent = (time - 1)
   } else if (btnClicked === plusBtn) {
      timer.textContent = (time + 1)
   } else if (btnClicked === likeBtn) {
      const li = document.createElement('li')
      li.textContent = `${time} liked!`
      ul.append(li)
   } else if (btnClicked.matches('#submit')) {
      const commentForm = document.querySelector('#comment-form')
      const newCommentInput = document.querySelector('#comment-input')
      const commentContainer = document.querySelector('#list')
      const newComment = document.createElement('p')

      newComment.textContent = newCommentInput.nodeValue
      commentContainer.append(newComment)
      commentForm.requestFullscreen()
   }
})

