/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/
const listInput = document.querySelector("#list-input")
const submitBtn = document.querySelector("#submit-button")
const resetBtn = document.querySelector("#reset-button")
const toDoList = document.querySelector("#todo-list")




/*----------------------------- Event Listeners -----------------------------*/

submitBtn.addEventListener('click', newItem)
resetBtn.addEventListener('click', resetList)



/*-------------------------------- Functions --------------------------------*/

function newItem(evt) {
  const li = document.createElement('li')
  if (listInput.value.length > 0) {
  li.textContent = listInput.value
  toDoList.appendChild(li)
  console.log(li)
  listInput.value = ''
  }
}


function resetList(evt) {
  listInput.value = ''
  toDoList.textContent = ''
}

