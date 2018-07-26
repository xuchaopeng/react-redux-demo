import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";
import HongBao from "./HongBao";
	
const App = () => (
	<div>	
		<AddTodo></AddTodo>
		<VisibleTodoList></VisibleTodoList>
		<Footer></Footer>
		<HongBao></HongBao>
	</div>
)

export default App ;