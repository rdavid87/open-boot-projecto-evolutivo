import React from 'react';
import { LEVELS } from "../../models/levelsEnum";
import { Task } from '../../models/taskClass';
import TaskComponent from '../pure/forms/taskComponent'


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('TODO: cambiar estado de una tarea');
    }

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            <div>
                <TaskComponent task={defaultTask}></TaskComponent>
            </div>
        </div>
    )
}

export default TaskListComponent;
