import React,{Component} from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions";
import AddTodo from "../components/AddTodo";
//注意 这里的dispatch 实际上是store.dispatch 这边做一个改善的 
// let AddTodo = ({ dispatch }) => {
// 	let input;
// 	return (
// 			<div> 
// 				<form onSubmit={e=>{
// 					e.preventDefault();
// 					if(!input.value.trim()){return}
// 					dispatch(addTodo(input.value))
// 					input.value = '';
// 				}}>
// 					<input ref={node=>{input=node}}/>
// 					<button type="submit">
// 						Add Todo
// 					</button>
// 				</form>
// 			</div>
// 		)
// }
// 将这个容器组件拆分为 容器 + ui组件的形式

const mapStateToProps = (state,ownProps) => {
	return {
		id : state.todos.length
	}
}
const mapDispatchToProps = (dispatch,ownProps) => {
	return {
		onAddtodo: (value,id) => {
			if(!value)return;
			dispatch(addTodo(value,id))
		}
	}
}

const AddTodocontainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTodo)

export default AddTodocontainer ;