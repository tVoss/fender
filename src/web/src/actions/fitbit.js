import Axios from 'axios'

import { API_SAVE_USER_FITBIT_CODE } from './index'


export const saveUserFitbitCode = (user, code) => {

    return {
        type: API_SAVE_USER_FITBIT_CODE,
        payload: Axios.post('http://localhost:5000/code', {
            code
        }, {
            headers: {
                'Authorization': `Bearer ${user.access_token}`
            }
        })
    }
}