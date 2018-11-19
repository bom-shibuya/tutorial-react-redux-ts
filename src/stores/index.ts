import { createStore } from 'redux';
import todoApps from './todos/reducer';

const store = createStore(todoApps);

export default store
