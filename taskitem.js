import react, { useEffect, useState } from 'react';
import './taskItem.css';

function TaskItem({ task, deleteTask, updateTask }) {
	return (
		<div class="taskItem">
			<span class="taskItemText">{task.name}</span>
			<button class="taskDeleteButton" onClick={() => deleteTask(task.id)}>X</button>
			<button class="taskUpdateButton" onClick={() => updateTask(task.id)}>Update</button>
		</div>
	)
};

export default TaskItem;