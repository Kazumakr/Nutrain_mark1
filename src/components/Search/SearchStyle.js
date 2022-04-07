import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

export const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto;
`;
export const SearchBar = styled.form`
	margin: 20px auto;
`;
export const Input = styled.input`
	border: none;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
	margin-right: 10px;
	width: 300px;
	padding: 5px;
	&:focus {
		outline: none;
		border-bottom: 1px solid rgba(0, 0, 0, 1);
	}
	@media ${breakpoints.mobile} {
		width: 60%;
	}
`;
export const SearchButton = styled.button`
	background-color: #4c50a1;
	color: white;
	border-radius: 5px;
	border: none;
	width: 80px;
	height: 30px;
	&:hover {
		border: 1px solid #4c50a1;
		color: #4c50a1;
		background-color: white;
		cursor: pointer;
	}
`;
export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

	&:after {
		content: "" "";
		display: block;
		width: 30%;

		@media ${breakpoints.mobile} {
			width: 90%;
		}
	}
`;
