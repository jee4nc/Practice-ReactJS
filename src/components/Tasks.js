// SE IMPORTA LA CLASE REACT DE ESTA MANERA
import React, { Component} from 'react';
import Task from './Task'
import Proptypes from 'prop-types'

class Tasks extends Component {
    render() {
        return this.props.tasks.map(task => <Task task={task} key={task.id}/>);
        
    }
}

Tasks.prototype = {
    Task: Proptypes.array.isRequired
}
export default Tasks;