import { GET_JOB_LIST, GET_JOB_LIST_ERROR, GET_JOB_LIST_SUCCESS,
  SEARCH_JOB, CLEAN, SEARCH_JOB_SUCCESS, SEARCH_JOB_ERROR } from './constants'

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

export const searchJob = (searchedData) => ({
  type: SEARCH_JOB,
  payload:{
    searchedData
  }
})

export const searchJobSuccess = (jobs) => ({
  type: SEARCH_JOB_SUCCESS,
  payload:{
    jobs
  }
})
export const searchJobError = (jobs) => ({
  type: SEARCH_JOB_ERROR
})

export const clean = () => ({
  type: CLEAN
})