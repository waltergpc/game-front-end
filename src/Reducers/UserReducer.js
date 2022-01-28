const UserReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, userLoading: true }

    case 'REGISTER_SUCCESS':
      return {
        ...state,
        userLoading: false,
        user: { ...action.payload },
        errorMsg: null,
      }
    case 'REGISTER_ERROR':
      return {
        ...state,
        userLoading: false,
        errorMsg: action.payload,
      }

    case 'LOGOUT':
      return { ...state, user: null }

    case 'START_USER_UPDATE':
      return { ...state, updateUserComplete: false, updateMessage: null }

    case 'UPDATE_USER':
      return {
        ...state,
        user: { ...action.payload },
        userLoading: false,
        updateUserComplete: true,
        updateMessage: 'Update succesful',
      }

    case 'UPDATE_USER_ERROR':
      return {
        ...state,
        updateMsg: action.payload,
        updateUserComplete: true,
        isUserLoading: false,
      }

    default:
      return state
  }
}
export default UserReducer
