import { GET_JOB_BY_ID, GET_JOB_BY_ID_ERROR, GET_JOB_BY_ID_SUCCESS } from './constants'

export const getJobById = (id) => ({
    type: GET_JOB_BY_ID,
    payload: {
        jobId: id
    }
})

export const getJobByIdSuccess = (job) => ({
    type: GET_JOB_BY_ID_SUCCESS,
    payload:{
        job
    }
})


export const getJobByIdError = () => ({
    type: GET_JOB_BY_ID_ERROR
})