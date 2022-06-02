const initialState = {
    questionList: []
}

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case 'GET_QUESTION_LIST':
            return {
                ...state,
                questionList: action.payload.QuestionList
            };

        default:
            return state;
    }
}

export default rootReducer;    