import axios from 'axios';

export function getQuestionList() {
    return async function (dispatch) {
        var json = await axios.get('https://vulkano.dev/api/mainTest', {});
        return dispatch({
            type: 'GET_QUESTION_LIST',
            payload: json.data
        })
    }
}


