import { put, takeLatest } from 'redux-saga/effects'
// import { NotificationManager} from 'react-notifications';

import { getJobByIdSuccess, getJobByIdError } from './actions'
// import { postDataAsync } from '../../apis/dataQuery'
// import { getJobListUrl } from '../../apis/constants'

import { GET_JOB_BY_ID  } from './constants'

export function* getJobById(action) {
    try{
        console.log(action.payload.jobId)
        // const response = yield postDataAsync(loginBaseUrl, formData)
        const response = {success:true}
        if(response.success) {
            yield put(getJobByIdSuccess([]))
        } else {
            // NotificationManager.error('Error message', response.error.message, 5000);
        }
    } catch(ex){
        yield put(getJobByIdError(ex.message))
    }
}


export default function* rootSaga() {
    yield takeLatest(GET_JOB_BY_ID, getJobById)
}