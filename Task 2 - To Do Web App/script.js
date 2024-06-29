document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Add Task
    addTaskButton.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                li.remove();
            });
            li.appendChild(deleteButton);
            li.addEventListener('click', function() {
                li.classList.toggle('completed');
            });
            taskList.appendChild(li);
            newTaskInput.value = '';
        }
    });

    // Pressing Enter to Add Task
    newTaskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
