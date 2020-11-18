import { takeEvery, put } from 'redux-saga/effects'

function* modifyUser(action) {
  yield put({ type: 'ADD_USER_SUCCESS', payload: {
    name: 'Diego',
    age: 18
  }})
}

function* mySaga() {
  yield takeEvery("ADD_USER", modifyUser);
}

export default mySaga;
