import { GET_JOB_LIST, GET_JOB_LIST_ERROR, GET_JOB_LIST_SUCCESS } from './constants'

export const getJobList = () => ({
  type: GET_JOB_LIST
})

export const getJobListSuccess = (jobs) => ({
  type: GET_JOB_LIST_SUCCESS,
  payload:{
    jobs
  }
})

export const getJobListError = () => ({
  type: GET_JOB_LIST_ERROR
})
