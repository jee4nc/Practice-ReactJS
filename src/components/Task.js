
import React,{ Component } from 'react';
// ESTE IMPORT PERMITE OCUPAR PropTypes, QUE ES UNA MANERA DE SELECCIONAR EL TIPO DE DATOS QUE SE DAN
import PropTypes from 'prop-types'

class Task extends Component {

    // SE CREA UNA FUNCION, LA CUAL DEVUELVA LOS VALORES JS PARA CREEAR UN ESTILO EN EL DIV 
    stylecompleted() {
        return {
            fontSize: '20px',
            // LA VENTAJA DE OCUPAR FUNCION ES PODER CREAR CONDICIONALES
            // EN ESTA SINTAXIS, ? SIGNIFICA ES TRUE ES GRIS Y : SINO SE PINTA NEGRO
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none' 
        }
    }
    render(){

        const {task} = this.props;

        return <div style={this.stylecompleted()}>
            <h1>{task.title}</h1> - 
            {task.description} - 
            {task.done} - 
            {task.id} 
            <input type="checkbox" />

            {/* // EN ESTA PaRTE SE LE AGREGA LA PROPIEDAD Style, LA CUAL ESPERA RECIBIR UN OBJETO
            // EN ESTE CASO EN JS , POR ESO SE PONEN DOBLE {{}} */}
            <button style={btnDelete}>
                x
            </button>
        </div>
    }
}
// ACA SE LE DA A Task.PropTypes LA PROPIEDAD TASK QUE REQUIERE QUE SEA UN IBJETO
Task.propTypes = {
    task: PropTypes.object.isRequired
}

// SE CREA CONST CON UN NOMBRE, EN EL CUAL SE PONEN PROPIEDADES DE CSS Y OCUPANDO
// '' SE INGRESA EL VALOR

const btnDelete = {
    fontSize: '18px',
    background : '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}
export default Task;