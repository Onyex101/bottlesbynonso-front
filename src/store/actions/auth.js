import * as actionTypes from './actionTypes';
import { API } from '../../Config';

export const signup = () => {
    return {
        type: actionTypes.AUTH_START
    }
}