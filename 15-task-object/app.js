'use strict';

/*15-task-object*/

const toDoList = {
    tasks: [],
    addTask: function (title, id, priority) {
        this.tasks.push({
            title: title,
            id: id,
            priority: priority,
        })
    },
    removeTask: function (id) {
        const taskToRemove = this.tasks.findIndex(task => task.id === id);
        if (taskToRemove !== -1) {
            this.tasks.splice(taskToRemove, 1);
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

toDoList.addTask('Task #1', 1, 5);
toDoList.addTask('Task #2', 2, 4);
toDoList.addTask('Task #3', 3, 3);
toDoList.addTask('Task #4', 4, 2);
toDoList.addTask('Task #5', 5, 1);

toDoList.removeTask(3);

toDoList.updateTask('Task #555', 5, 100);

toDoList.sortTask();

console.log(toDoList.tasks);