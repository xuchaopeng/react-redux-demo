const  todo = (state,action) => {
	switch (action.type){
		case 'ADD_TODO':
			return {
				id : action.id,
				text : action.text,
				completed:false
			}
		case 'TOGGLE_TODO':
			if(state.id !== action.id){return state}
			return Object.assign({},state,{
				completed : !state.completed
			}) 
		default :
			return state
	}
}
let morenzhi  = [
	{"id":0,"text":'吃饭',"completed":true},
	{"id":1,"text":'睡觉',"completed":true},
	{"id":2,"text":'打豆豆',"completed":false}
]
const todos = (state=morenzhi,action) => {
	switch (action.type){
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined,action)
			]
		case 'TOGGLE_TODO':
			return state.map(t => todo(t,action))
		default:
			return state
	}
}

export default todos ; 
