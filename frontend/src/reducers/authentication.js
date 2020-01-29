export default function (state = {}, action) {
    switch (action.type) {
        case 'CREATE_LOGIN_SESSION':
            return {
                ...state,
                token: action.token,
                user: action.user,
                msg: action.msg
            }
        default:
            return state;
    }
}