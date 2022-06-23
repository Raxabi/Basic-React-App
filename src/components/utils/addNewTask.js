// Define function that add a new task
export function AddNewTask(tasks, contentOfNewTask) {
    setNewInitialTasks(tasks.concat([{content: contentOfNewTask}]))
}