import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props) {
        super(props)

        // Setando o estado da aplicação
        this.state = { description: '', list: [] }

        // Relacionando o this com o handleAdd, ou seja quando usar o 
        //this dentro da função ele será a própria função: handleAdd
        this.handleAdd = this.handleAdd.bind(this)

        this.handleChange = this.handleChange.bind(this)
    }
    
    handleAdd(){
        console.log(this.state.description)
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }
    
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm description={this.state.description} 
                handleChange={this.handleChange} handleAdd={this.handleAdd}/>
                <TodoList />
            </div>
        )
    }
}