import { combineReducers } from 'redux'

import { reducer as my } from 'pages/my'
import { reducer as home } from 'pages/home'
import { reducer as sign } from 'pages/sign'

export default combineReducers({
    my,
    home,
    sign
})