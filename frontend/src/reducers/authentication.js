export default function (state = {}, action) {
    switch (action.type) {
        case 'CREATE_LOGIN_SESSION':
            return {
                ...state,
                token: action.token,
                user: action.user,
                msg: action.msg,
                isUserLogged: action.isUserLogged
            }
        case 'DELETE_LOGIN_SESSION':
            return {
                ...state,
                token: null,
                user: '',
                msg: 'Not Logged.',
                isUserLogged: false
            }
        case 'REDIRECT_TO_LOGIN':
            return {
                ...state,
                redirectLogin: true
            }
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.categories,
            }
        default:
            return state;
    }
}