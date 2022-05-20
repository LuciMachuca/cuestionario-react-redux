const initialState = {
    questionList: [],  // estado q renderizo
    allQuestion: [],  // estado q siempre tiene TODO -> para q no me filtre sobre lo filtrado
}

function rootReducer(state = initialState, action) {   // acá van a ir todas mis acciones

    switch (action.type) {
        case 'GET_QUESTION_LIST':
            return {
                ...state,
                questionList: action.payload.QuestionList
            }

        default:
            return state;
    }
}

export default rootReducer;    