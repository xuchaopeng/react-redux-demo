const visibiltyFilter = (state="SHOW_ALL",action) => {
	switch (action.type){
		case 'SET_VISIBILITY_FILTER':
			return action.visibiltyFilter
		default:
			return state
	}
}

export default visibiltyFilter ;