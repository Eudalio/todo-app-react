const INITIAL_STATE = {
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
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state
    }
}