const initialState = {
    questionList: [],  // estado q renderizo
    allQuestion: [],  // estado q siempre tiene TODO -> para q no me filtre sobre lo filtrado
    pregunta: []
}

function rootReducer(state = initialState, action) {   // acá van a ir todas mis acciones

    switch (action.type) {
        case 'GET_QUESTION_LIST':
            return {
                ...state,
                questionList: action.payload.QuestionList
            };

          /*   case 'GET_PREGUNTA':
                const questionList = state.questionList
                const preg = questionList.map(q=> q.id.includes(action.payload))
                
                console.log(preg)
                return {
                    ...state,
                    pregunta: preg
                } */

        

        default:
            return state;
    }
}

export default rootReducer;    