import {call, put, takeEvery} from "redux-saga/effects";
import {getHumans, setHumansError, setHumans} from "../humansSlice";
import Archive from "../../api/firebase";
import {IHumanEntities} from "../../models/entities";

const archive = Archive

function* getHumansWorker() {
    try {
        const data: IHumanEntities = yield call(
            () => archive.getAllHumans()
        )
        yield put(setHumans(data))
    } catch (e: any) {
        console.log(e.message)
        yield put(setHumansError(e))
    }
}

export function* getHumansWatcher() {
    yield takeEvery(getHumans.type, getHumansWorker)
}