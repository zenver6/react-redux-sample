const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (sction.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
