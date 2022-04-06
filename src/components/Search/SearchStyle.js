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
		width: 24%;
		@media ${breakpoints.laptopL} {
			width: 30%;
		}
		@media ${breakpoints.mobile} {
			width: 90%;
		}
	}
`;
export const Card = styled.div`
	width: 24%;
	border-radius: 10px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	padding: 10px 0;
	margin-bottom: 20px;
	@media ${breakpoints.laptopL} {
		width: 30%;
	}
	@media ${breakpoints.mobile} {
		width: 90%;
	}
`;
export const Img = styled.img`
	width: 200px;
	border-radius: 10px;
`;
export const FoodName = styled.p`
	font-weight: bold;
	font-size: 18px;
`;
export const NutritionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Row = styled.div`
	width: 70%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
`;
export const LabelSection = styled.div`
	display: flex;
	align-items: center;
`;
export const ColorBall = styled.span`
	width: 15px;
	height: 15px;
	background-color: ${(props) => props.color};
	display: inline-block;
	border-radius: 50%;
	margin-right: 5px;
`;
export const Name = styled.span`
	font-weight: bold;
`;
export const NumberSection = styled.div``;
export const Number = styled.span`
	margin-right: 5px;
`;
export const Unit = styled.span``;
export const Button = styled.button`
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
