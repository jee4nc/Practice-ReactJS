import React from 'react';
import './App.css';

// EN ESTE EJERCICIO , SE CREA UNOS DATOS EN JSON PARA OCUPARLOS EN EJERCICIOS,
// ESTOS DATOS SE IMPORTAN EN ESTA LINEA DE CODIGO
import tasks from './samples/task.json';
import Tasks from './components/Tasks';
import TaskForms from './components/TaskForms';



// ACA SE CREA EL COMPONENTE App, QUE ES EL PRINCIPAL DONDE IRAN LOS DOMAS 
// ESTO ES UNA CLASE 

class App extends React.Component {

  // FALTA ESPECIFICAR QUE SON LOS STATE, INVESTIGA PLIS
  state = {
    tasks: tasks
  }
  // en este metodo se agrega una nueva funcion, y tiene que recibir un title y descriptoon
  addTask= (title,description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }
  // FUNCION QUE SIRVE PARA ELIMINAR TAREAS, RECIBE COMO PARAMETRO EL ATRIBUTO ID
  // FILTER ES EL METODO DE JS PARA FILTRAR MEDIANTE ALGO, EN ESTE CASO EL ID DE LA FUNCION
  // Y EL ID DE LA TASK
  deleteTask =  id => {
    // SE CREA CONSTANTE CON EL RESULTADO DEL FILTRO DE LA FUNCION
      const NEWTASK = this.state.tasks.filter(task => task.id !== id);
      // ACA SE CAMBIA EL ESTADO POR LA CONSTANTE ACTUALIZADA
      this.setState({tasks : NEWTASK})
  }

    // comentar que hace el metodo checkdone
  checkDone = id => {
      const NEWTASKS = this.state.tasks.map(task => {
        if (task.id === id) {
          task.done = !task.done
        }
        return task;
      })
      this.setState({tasks : NEWTASKS})
    }
  // este metodo mostrara la interfaz en el navegador (render)
  render()
  {
    return <div>
      <TaskForms addTask={this.addTask}/>
      <br/>
      {/* MEDIANTE EL STATE, SE IMPORTA LOS DATOS tasks
      ESTOS DATOS LOS OCUPAMOS CON LA FUNCION map
      Y HACEMOS UNA FUNCION FLECHA DE JS, PARA QUE CADA ELEMENTO SE CREE EN UN H1 */}

      {/* {this.state.tasks.map((e)=> <h1>{e.title}</h1>)} */}
      {/* _________________________________________________________- */}

      {/* ACA ESTAMOS HACIENDO LO MISMO QUE ARRIBA, SOLO QUE IMPRIMIRA UN P CON LOS DATOS 
      SIGUIENDO CADA UNO DE LOS ELEMENTOS DEL ARRAYS */}
      
    {/* {this.state.tasks.map(e => <p key={e.id}>
      {e.title} - {e.description} - {e.done} - {e.id}
      </p>)} */}
      {/* aca se le da la propiedad deleteTask a App para que tasks lo reciba como props */}
      <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>

      </div>
  }
}
export default App;
