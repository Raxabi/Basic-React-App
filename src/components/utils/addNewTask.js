// Define function that add a new task
export function addNewTask(tasks, contentOfNewTask) {
    setNewInitialTasks(tasks.concat([{content: contentOfNewTask}]))
}