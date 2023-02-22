//button
taskAddBtn = document.querySelector('.add__btn')
taskDelBtn = document.querySelectorAll('.del__task')
taskCheckBox = document.querySelector('task__checkbox')

//input
taskInput = document.querySelector('.task__input')
taskBoxContainer = document.querySelector('.task__container')
//type of Array
taskArray = []

function addTaskItem() {
    const taskText = taskInput.value;
    taskInput.value = ''
    if (taskText.length == 0) return;
    taskArray.push(`
    <div class="task__item" id="task${taskArray.length}">
    <div class="task__checkbox" > </div>
    <div class="task">
        <p class="task__text">${taskText}</p>
    </div>
    <div class="del__task">
        <div class="upper__bar"></div>
        <div class="lower__bar"></div>
    </div>
</div>`);
    addTaskDisplay();
    addEvent()
    updateDeletion()
}
taskAddBtn.addEventListener('click', addTaskItem)

function addTaskDisplay() {
    taskBoxContainer.innerHTML += taskArray[taskArray.length - 1]
}

//Deleteion
function updateDeletion() {
    taskDelBtn = document.querySelectorAll('.del__task')
    taskDelBtn.forEach(element => {
        element.addEventListener('click', () => {
            // element.parentElement.style.display = 'none'
            element.parentElement.classList.add('fade_animation')
            setTimeout(() => {
                element.parentElement.style.display = 'none'
            }, 2000)
        })
    });
}

//complete Taks
function addEvent() {
    taskItem = document.querySelectorAll('.task__item')
    taskItem.forEach(element => {
        let color = element.firstElementChild.style.backgroundColor;
        element.addEventListener('click', () => {
            color = 'green'
            element.style.textDecoration = "line-through"
            element.childNodes[1].style.backgroundColor = 'green'
        })
        element.addEventListener('mouseover', () => {
            element.firstElementChild.style.backgroundColor = 'purple'
        })
        element.addEventListener('mouseout', () => {
            element.firstElementChild.style.backgroundColor = color
        })
    })
}

//Clear Button
document.getElementsByClassName('clear__btn')[0].onclick = () => {
    taskBoxContainer.innerHTML = ''
}

//hover effect