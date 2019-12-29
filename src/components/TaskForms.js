import React, {Component} from 'react';
// import Proptypes from 'prop-types';

// OTRA FORMA DE EXPORTARLO EN LA MISMA CLASE 
export default class TaskForms extends Component {
    // ESTADO DE REACT, SIRVE PARA MODIFICAR COSAS SEGUN COMO ES SU STATE
    state = {
        title : '',
        description : ''
    }

    // FUNCION PARA EL EVENTO ENVIAR DEL FORM
    onSubmit = event => {
        this.props.addTask(this.state.title, this.state.description)
        event.preventDefault();
    }
    // EVENTO PARA CAMBIAR EL INPUT Y TEXT AREA
    // PUEDE LLAMARSE ASI O DE OTRA FORMA, OCUPO FUNCION FLECHA
    onChange = event => {
        // EN EL ATRIBUTO Set.STATE
        this.setState ({
            // SEGUN EL EVENTO DE ESTA FUNCION Y EL TARGET NAME DE HTML
            //CAMBIARA EL VALOR DEL EVENTO TITLE CAMBIARA A TITLE Y DESCRP A DESCRIP
            [event.target.name]: event.target.value
        })
    }
    // FUNCION PARA DARLE ESTILO CSS 
    styleToInput() {
        return {
            fontSize: '20px'
        }
    }
    render() {
        return (
            // ACA SE PONE EL EVENTO THIS.onSubmit
            <form onSubmit={this.onSubmit}>
                <input 
                    style={this.styleToInput()}
                    name="title" 
                    type="text" placeholder="Write a task!" 
                    onChange={this.onChange} 
                    value={this.state.title}/>
                <br/>
                <br/>
                <textarea 
                    style={this.styleToInput()}
                    name="description" 
                    placeholder="Write a description" 
                    onChange={this.onChange} 
                    value={this.state.description}/>
                <br/>
                <br/>
                <button type="submit">
                    Save Task
                </button>
            </form>

        )
    }
}

