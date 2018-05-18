// Bibliotecas de terceiros(externas)
import React, { Component } from 'react'
import axios from 'axios'

// Bibliotecas da aplicação
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)

        // Setando o estado da aplicação
        this.state = { description: '', list: [] }

        // Relacionando o this com o handleAdd, ou seja quando usar o 
        //this dentro da função ele será a própria função: handleAdd
        this.handleAdd = this.handleAdd.bind(this)

        this.handleChange = this.handleChange.bind(this)

        this.handleRemove = this.handleRemove.bind(this)
        
        this.refresh()

    }

    refresh (){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }
    
    handleAdd(){
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }
    
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm description={this.state.description} 
                handleChange={this.handleChange} handleAdd={this.handleAdd}/>
                <TodoList list={this.state.list} handleRemove={this.handleRemove}/>
            </div>
        )
    }
}