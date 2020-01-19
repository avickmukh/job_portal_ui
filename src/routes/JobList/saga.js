import { put, takeLatest } from 'redux-saga/effects'

import { getJobListSuccess, getJobListError } from './actions'
// import { postDataAsync } from '../../apis/dataQuery'
// import { getJobListUrl } from '../../apis/constants'

import { GET_JOB_LIST } from './constants'

export function * getJobList (action) {
  try {
        // const response = yield postDataAsync(loginBaseUrl, formData)
    const response = { success:true }
    if (response.success) {
      yield put(getJobListSuccess([]))
    } else {
            // NotificationManager.error('Error message', response.error.message, 5000);
    }
  } catch (ex) {
    yield put(getJobListError(ex.message))
  }
}

export default function * rootSaga () {
  yield takeLatest(GET_JOB_LIST, getJobList)
}
