const PlayerReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isPlayersLoading: true }

    case 'FETCH_PLAYERS':
      return {
        ...state,
        isPlayersLoading: false,
        players: [...action.payload.players],
        totalCount: action.payload.totalCount,
      }
    case 'FETCH_PLAYERS_ERROR':
      return { ...state, errorMsg: action.payload, isPlayersLoading: false }

    case 'SET_PAGE':
      return { ...state, page: action.payload }
    case 'UP_PAGE':
      return { ...state, page: state.page + 1 }
    case 'DOWN_PAGE':
      return { ...state, page: state.page - 1 }
    default:
      return state
  }
}

export default PlayerReducer
