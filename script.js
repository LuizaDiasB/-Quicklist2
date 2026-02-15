const form = document.getElementById ('form')
const input = document.getElementById ('textInput')
const ul = document.getElementById ('list')
const btnAddTask = document.getElementById ('btnAddTask')


form.addEventListener ('submit', (event) => {
  event.preventDefault()

 const valueInput = input.value.trim()

  const li = document.createElement ('li')

  const checkbox = document.createElement ('input')
  checkbox.type = 'checkbox'

  const newItem = document.createElement ('span')
  newItem.textContent = valueInput

  const deletar = document.createElement ('img')
  deletar.classList.add('deletar')
  deletar.src = './assets/deletar.svg'

  const divCheckBox = document.createElement('div')
  divCheckBox.classList.add('checkbox-image')


  // Riscar item
  checkbox.addEventListener('change', () => {
    newItem.classList.toggle('completed')
  })

  // Excluir item
  deletar.addEventListener('click', () => {
    li.remove()
  })

  li.append(divCheckBox, checkbox, newItem, deletar)
   
  ul.append(li)


  input.value = ''
})


