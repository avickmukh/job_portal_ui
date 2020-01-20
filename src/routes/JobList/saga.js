import { put, takeLatest } from 'redux-saga/effects'

import { getJobListSuccess, getJobListError } from './actions'
import { getDataAsync } from '../../apis/dataQuery'

import { GET_JOB_LIST } from './constants'

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

export default function * rootSaga () {
  yield takeLatest(GET_JOB_LIST, getJobList)
}
