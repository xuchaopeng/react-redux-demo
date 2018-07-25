import React from "react";
import { connect } from "react-redux";
import {setVisibility} from "../actions";
import Link from "../components/Link";

//注意 这里的ownProps指的是 FilterLink这个组件的属性children filter  而Link组件的属性 active onClick children filter 
const mapStateToProps = (state, ownProps) => {
	return {
		active : ownProps.filter === state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch,ownProps) => {
	return {
		onClick : () => {
			dispatch(setVisibility(ownProps.filter))
		}
	}
}
const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link);

export default FilterLink ;

