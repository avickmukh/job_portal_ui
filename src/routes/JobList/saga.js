import { put, takeLatest } from 'redux-saga/effects'

import { getJobListSuccess, getJobListError, searchJobSuccess, searchJobError } from './actions'
import { getDataAsync } from '../../apis/dataQuery'

import { GET_JOB_LIST, SEARCH_JOB } from './constants'
import getSearchedJobs from './utils'

export function * getJobList (action) {
  try {
    const response = yield getDataAsync()
    if (response.success) {
      yield put(getJobListSuccess(response.data))
    } else {
      yield put(getJobListError('There is no data'))
    }
  } catch (ex) {
    yield put(getJobListError(ex.message))
  }
}

export function * searchJob (action) {
  try {
    const response = yield getDataAsync()
    if (response.success) {
      const searchedData = action.payload.searchedData
      const searchedJobs = getSearchedJobs(response.data, searchedData)
      yield put(searchJobSuccess(searchedJobs))
    } else {
      yield put(searchJobError('There is no data'))
    }
  } catch (ex) {
    yield put(searchJobError(ex.message))
  }
}

export default function * rootSaga () {
  yield takeLatest(GET_JOB_LIST, getJobList)
  yield takeLatest(SEARCH_JOB, searchJob)
}
