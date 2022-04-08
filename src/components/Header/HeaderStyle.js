import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	background-color: white;
	@media ${breakpoints.laptop} {
		justify-content: space-between;
		padding: 0 30px;
	}
`;
export const Left = styled.div``;
export const Right = styled.div``;
export const Logo = styled.h1`
	color: #4c50a1;
	&:hover {
		cursor: pointer;
		opacity: 0.7;
	}
	@media ${breakpoints.mobile} {
		font-size: 24px;
	}
`;
export const Reset = styled.span`
	color: #4c50a1;
	font-size: 24px;
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
	@media ${breakpoints.mobile} {
		font-size: 20px;
	}
`;
export const Add = styled.span`
	color: #4c50a1;
	font-size: 24px;
	margin-right: 25px;
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
	@media ${breakpoints.mobile} {
		font-size: 20px;
		margin-right: 15px;
	}
`;
