import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshopToMap,
} from "../../firebase/firebase.utils";

import ShopActionsTypes from "./shop.types.js";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshopToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (e) {
    yield put(fetchCollectionsFailure(e.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
