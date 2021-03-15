import { combineReducers  } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication Module
import Account from './auth/register/reducer';
import Login from './auth/login/reducer';
import Forget from './auth/forgetpwd/reducer';
import Restuarant from './Restuarant/reducers';
const rootReducer = combineReducers({

    // public
    Layout,
    Restuarant,
    // Authentication
    Account,
    Login,
    Forget

});

export default rootReducer;