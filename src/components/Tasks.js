// SE IMPORTA LA CLASE REACT DE ESTA MANERA
import React, { Component} from 'react';
import Task from './Task'
import Proptypes from 'prop-types'

class Tasks extends Component {
    render() {
        return this.props.tasks.map(task => 
        <Task 
        task={task} 
        key={task.id}
        // ACA SE PASA LA PROPIEDAD DELETETASK Y LE DA EL VALOR DE PROPS PARA QUE SE LO PUEDA PASAR A TASK 
        deleteTask={this.props.deleteTask}
        checkDone={this.props.checkDone}
        />);
        
    }
}

Tasks.propTypes = {
    tasks: Proptypes.array.isRequired
}
export default Tasks;