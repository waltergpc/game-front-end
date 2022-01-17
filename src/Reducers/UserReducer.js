const UserReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isUserLoading: true }
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isUserLoading: false,
        user: { ...action.payload },
        errorMsg: null,
      }
    case 'REGISTER_ERROR':
      return {
        ...state,
        isUserLoading: false,
        errorMsg: action.payload,
      }
    case 'GET_PLAYERS':
      return { ...state, players: [...action.payload] }

    case 'UPDATE_USER':
      return {
        ...state,
        isUserLoading: false,
        user: { ...action.payload },
        showAlert: false,
        updateMsg: 'Update succesful',
        updateUserComplete: true,
      }
    case 'UPDATE_USER_ERROR':
      return {
        ...state,
        updateMsg: action.payload,
        updateUserComplete: true,
        isUserLoading: false,
      }
    case 'START_USER_UPDATE':
      return { ...state, updateUserComplete: false }
    case 'LOGOUT':
      return { ...state, user: null }
    default:
      return state
  }
}
export default UserReducer
