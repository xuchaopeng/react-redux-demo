import React,{Component} from "react";
const Link = ({active,children,onClick,filter}) => {
	if(active){
		return <span>{children}</span>
	}
	return (
		<a 
			href="#"
			onClick={e=>{
				e.preventDefault();
				console.log(filter);
				onClick(filter);
			}}
			>
			{children}
		</a>
	)
}
export default Link 