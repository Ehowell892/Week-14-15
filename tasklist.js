import react, { useEffect, useState } from 'react';
import TaskItem from './taskitem';

function TaskList() {
	const [taskList, setTaskList] = useState([]);
	const [text, setText] = useState('');

	function addNewTask(text) {
		const taskEr = {
			id: Date.now(), name: text
		};
		setTaskList([...taskList, taskEr]);
		setText('');
	}
	function deleteTask(id) {
		setTaskList(taskList.filter(task => task.id !== id));
	}
	function updateTask(id){
		const newText=prompt('Update Task');
		setTaskList((PreviousItems) =>
			PreviousItems.map ((item) => (item.id === id ? {...item,name:newText}:item))
		);
	}
	return (
		<div>
			<center>
				<input value={text}
					onChange={e => setText(e.target.value)} />
				<button onClick={() => addNewTask(text)}>Add</button>
			</center>
			{
				taskList.map(task => (
					<TaskItem id={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask}/>
				))}
		</div>
	)
};

export default TaskList;