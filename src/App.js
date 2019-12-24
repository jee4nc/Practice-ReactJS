import React from 'react';
import './App.css';

// EN ESTE EJERCICIO , SE CREA UNOS DATOS EN JSON PARA OCUPARLOS EN EJERCICIOS,
// ESTOS DATOS SE IMPORTAN EN ESTA LINEA DE CODIGO
import tasks from './samples/task.json';
import Tasks from './components/Tasks';



// ACA SE CREA EL COMPONENTE App, QUE ES EL PRINCIPAL DONDE IRAN LOS DOMAS 
// ESTO ES UNA CLASE 

class App extends React.Component {

  // FALTA ESPECIFICAR QUE SON LOS STATE, INVESTIGA PLIS
  state = {
    tasks: tasks
  }
  // este metodo mostrara la interfaz en el navegador (render)
  render()
  {
    return <div>
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

      <Tasks tasks={this.state.tasks}/>

      </div>
  }
}
export default App;
