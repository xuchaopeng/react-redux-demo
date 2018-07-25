let nextTodoId = 0;
export const addTodo = (text,id) => ({
	type : 'ADD_TODO',
	id:id || nextTodoId,
	text
})

export const setVisibility = (filter) => ({
	type : 'SET_VISIBILITY_FILTER',
	filter
})

export const toggleTodo = (id) => ({
	type : 'TOGGLE_TODO',
	id
})


