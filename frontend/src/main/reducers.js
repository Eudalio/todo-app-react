import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar conta do cartão',
            done: true
        },
        {
            _id: 2,
            description: 'Read about react native',
            done: false
        },
        {
            _id: 3,
            description: 'Estudar Inglês',
            done: false
        }]
    })
}) 

export default rootReducer