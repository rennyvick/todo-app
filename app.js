const form= document.querySelector('form')
const taskInput = document.querySelector('input[name=taskName]')
const dateInput = document.querySelector('input[name=taskDate]')
const ul = document.querySelector('ul')

form.onsubmit = function(e) {
   e.preventDefault()

	let taskTitle = taskInput.value
	let taskDate =dateInput.value



	const li = document.createElement('li')
	li.textContent =taskTitle
	li.classList.add('list-group-item')
	li.classList.add('d-flex')
	li.classList.add('justify-content-between')
	li.classList.add('align-itms-center')


	const span= document.createElement('span')
	span.textContent = taskDate
	span.classList.add('badge')
	span.classList.add('badge-primary')
	span.classList.add('badge-pill')



	ul.appendChild(li)
	li.appendChild(span)


}
