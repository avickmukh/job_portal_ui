import * as actions from './constants'

const ACTION_HANDLERS = {
  [actions.GET_JOB_LIST]:state => ({
    ...state,
    isLoading: true
  }),
  [actions.GET_JOB_LIST_SUCCESS]:(state, action) => {
    return {
      ...state,
      jobs: action.payload.jobs,
      isLoading: false
    }
  },
  [actions.GET_JOB_LIST_ERROR]:(state, action) => {
    return {
      ...state,
      isLoading: false
    }
  },
  [actions.SEARCH_JOB_SUCCESS]:(state, action) => {
    return {
      ...state,
      jobs:action.payload.jobs,
      isLoading: false
    }
  },
  [actions.CLEAN]:(state) => {
    return {
      ...state,
      jobs:[],
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
