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

        this.handleClear = this.handleClear.bind(this)

        this.handleSearch = this.handleSearch.bind(this)

        this.handleChange = this.handleChange.bind(this)

        this.handleRemove = this.handleRemove.bind(this)     

        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)

        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh()

    }

    refresh (description=''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }
    
    handleSearch(){
        this.refresh(this.state.description)
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
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done:true})
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done:false})
            .then(resp => this.refresh(this.state.description))
    }

    handleClear(){
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm 
                    description={this.state.description} 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear }/>
                <TodoList 
                list={this.state.list} 
                handleRemove={this.handleRemove}
                handleMarkAsDone={this.handleMarkAsDone}
                handleMarkAsPending={this.handleMarkAsPending}/>
            </div>
        )
    }
}