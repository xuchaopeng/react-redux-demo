import React , {Component} from 'react';
 
class AddTodo extends Component {
	constructor(props){
		super(props)
	}

	render(){
		let input;
		return (<div> 
			<form onSubmit={e=>{
				e.preventDefault();
				this.props.onAddtodo(input.value,this.props.id);
				input.value = '';
			}}>
				<input ref={node=>{input=node}}/>
				<button type="submit">
					Add Todo
				</button>
			</form>
		</div>)
	}
}

export default AddTodo ;