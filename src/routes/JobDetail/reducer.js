import * as actions from './constants'

const ACTION_HANDLERS = {
  [actions.GET_JOB_BY_ID]:(state) => {
    return {
      ...state,
      isLoading: true
    }
  },
  [actions.GET_JOB_BY_ID_SUCCESS]:(state, action) => {
    return {
      ...state,
      job: action.payload.job,
      isLoading: false
    }
  },
  [actions.GET_JOB_BY_ID_ERROR]:(state) => {
    return {
      ...state,
      isLoading: false
    }
  }
}

const initialState = {
  isLoading : false,
  job:{}
}

const reducer = (state = initialState, action) => {
  const handler = action ? ACTION_HANDLERS[action.type] : null
  return handler ? handler(state, action) : state
}

export default reducer
