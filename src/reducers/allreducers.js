import {combineReducers} from 'redux';
import ClientsReducer from './clients';
import SelectedClient from './selected-client';
import Searchline from './searchline';

const reducers = combineReducers({
    clients: ClientsReducer,
    selected: SelectedClient,
    searchline: Searchline 
});

export default reducers