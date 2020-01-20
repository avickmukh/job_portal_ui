import { put, takeLatest } from 'redux-saga/effects'
import { GET_JOB_BY_ID } from './constants'
import { getDataAsync } from '../../apis/dataQuery'
import getJobDetailById from './utils'
import { getJobByIdSuccess, getJobByIdError } from './actions'

export function * getJobById (action) {
  try {
        const response = yield getDataAsync()
        if (response.success) {
          const job = getJobDetailById(response.data, action.payload.jobId)
          console.log(response.data, action.payload.jobId)
          if(job.length > 0) {
            yield put(getJobByIdSuccess(job[0]))
          }
          else{
            yield put(getJobByIdError('There is no data'))
          }
        } else {
          yield put(getJobByIdError('There is no data'))
        }
  } catch (ex) {
    yield put(getJobByIdError(ex.message))
  }
}

export default function * rootSaga () {
  yield takeLatest(GET_JOB_BY_ID, getJobById)
}
