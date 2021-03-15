// import { all, call, fork, takeEvery, select,put } from "redux-saga/effects";

import { put,all, call, takeLatest, select,fork } from 'redux-saga/effects';


import { RESTUARANTS } from './constants';
import {makeSelectRestaunt} from './selectors';

export function* saveData(){
    const restuarant_desc = yield select(makeSelectRestaunt());
	console.log("from saga",restuarant_desc);
}

export function* getRestuarant(){
console.log("from get restuarant ");
}

export function* getRestuarantData(){
	yield takeLatest(RESTUARANTS.GET_RESTUARANT_DATA,getRestuarant);
}

export  function* saveRestuarant() {
	yield takeLatest(RESTUARANTS.SAVE_CHANGES, saveData);
}

export default function* restuarantData(){
	yield all([fork(saveRestuarant),fork(getRestuarantData)]);
}