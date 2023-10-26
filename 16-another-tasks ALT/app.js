'use strict';

/*16-another-tasks ALT*/

const toDoList = {
    tasks: [],
    addTask: function (title, priority) {
        this.tasks.push({
            title,
			id: this.tasks.length + 1,
            priority,
        });
    },
    removeTask: function (id) {
        const taskToRemove = this.tasks.findIndex(task => task.id === id);
        if (taskToRemove !== -1) {
            this.tasks.splice(taskToRemove, 1);
            this.tasks.forEach((task, index) => {
                if (index !== task.id - 1) {
                task.id = index + 1;
                }   
            });
            
        } else {
            console.log('id не найден')
        }
    },
    updateTask: function (newTitle, id, newPriority) {
        const taskToUpdate = this.tasks.find(task => task.id === id);
        if (taskToUpdate) {
            taskToUpdate.title = newTitle;
            taskToUpdate.priority = newPriority;
        } else {
            console.log('id не найден')
        }
    },
    sortTask: function () {
        this.tasks.sort((a, b) => a.priority - b.priority)
    }
};

toDoList.addTask('Task #1', 5);
toDoList.addTask('Task #2', 4);
toDoList.addTask('Task #3', 3);
toDoList.addTask('Task #4', 2);
toDoList.addTask('Task #5', 1);

toDoList.removeTask(3);

toDoList.addTask('Task #6', 1);
toDoList.addTask('Task #7', 1);

toDoList.updateTask('Task #555', 5, 100);

toDoList.sortTask();

console.log(toDoList.tasks);




const newTask = {
    tasks: [],
    addTask: function (title, description, priority) {
        this.tasks.push({
            title,
            description,
			id: this.tasks.length + 1,
            priority,
        });
    },
};

newTask.addTask('Новый заголовок1', 'description1', 1);
newTask.addTask('Новый заголовок2', 'description2', 2);
newTask.addTask('Новый заголовок3', 'description3', 4);

toDoList.removeTask.call(newTask, 1);

toDoList.updateTask.call(newTask, 'Обновленный заголовок2', 2, 3);

toDoList.addTask.call(newTask, 'Новый заголовок4', 99);

toDoList.sortTask.call(newTask);

console.log(newTask.tasks);