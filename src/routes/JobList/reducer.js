import * as actions from './constants'


const ACTION_HANDLERS = {
    [actions.GET_JOB_LIST]:state => ({
        ...state,
        ...initialState
    }),
    [actions.GET_JOB_LIST_SUCCESS]:(state, action) => {
        return {
            ...state,
            isLoading: false
        }
    },
    [actions.GET_JOB_LIST_ERROR]:(state, action) => {
        return {
            ...state,
            isLoading: false
        }
    }
}

const initialState = {
    isLoading : false,
    jobs:[]
}

const reducer = (state = initialState, action) => {
    const handler = action ? ACTION_HANDLERS[action.type] : null
    return handler ? handler(state, action) : state
}

export default reducer

