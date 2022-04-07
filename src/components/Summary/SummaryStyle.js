import styled from "styled-components";
import { breakpoints } from "../../breakpoints";
export const Container = styled.div`
	max-width: 1000px;
	height: 200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #4c50a1;
	border-radius: 10px;
	@media ${breakpoints.tablet} {
		width: 95%;
		height: 180px;
	}
	@media ${breakpoints.mobile} {
		flex-direction: column;
		height: 300px;
	}
`;
export const Wrapper = styled.div``;
export const Group = styled.div`
	display: flex;
	flex-direction: column;
	@media ${breakpoints.mobile} {
		flex-direction: row;
		align-items: center;
		width: 80%;
		justify-content: space-between;
	}
`;
export const LabelSection = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	@media ${breakpoints.mobile} {
		margin: 0;
	}
`;
export const NumberSection = styled.div``;
export const ColorBall = styled.span`
	width: 25px;
	height: 25px;
	background-color: ${(props) => props.color};
	display: inline-block;
	border-radius: 50%;
	margin-right: 10px;

	@media ${breakpoints.tablet} {
		width: 20px;
		height: 20px;
	}
	@media ${breakpoints.mobile} {
		width: 15px;
		height: 15px;
	}
`;
export const Name = styled.span`
	font-size: 28px;
	color: white;
	@media ${breakpoints.tablet} {
		font-size: 24px;
	}
	@media ${breakpoints.mobile} {
		font-size: 24px;
	}
`;
export const Number = styled.span`
	font-size: 36px;
	color: white;
	margin-right: 10px;
	@media ${breakpoints.tablet} {
		font-size: 30px;
	}
	@media ${breakpoints.mobile} {
		font-size: 24px;
	}
`;
export const Unit = styled.span`
	font-size: 28px;
	color: lightgray;
	@media ${breakpoints.tablet} {
		font-size: 24px;
	}
	@media ${breakpoints.mobile} {
		font-size: 20px;
	}
`;
