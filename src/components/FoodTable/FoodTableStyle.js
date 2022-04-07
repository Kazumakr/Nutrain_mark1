import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { breakpoints } from "../../breakpoints";

export const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	@media ${breakpoints.tablet} {
		width: 90%;
	}
`;
export const Table = styled.ul`
	margin: 10px auto;
	padding: 0;
	@media ${breakpoints.mobile} {
		display: none;
	}
`;
export const Header = styled.li`
	font-size: 14px;
	letter-spacing: 0.03em;
	display: flex;
	justify-content: space-between;
	padding: 20px 30px;
	margin-bottom: 25px;
	border-bottom: 1px solid black;
`;

export const Row = styled.li`
	background-color: #ffffff;
	box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	border-radius: 3px;
	padding: 10px 30px;
	margin-bottom: 25px;
	align-items: center;
`;
export const Col1 = styled.div`
	flex-basis: 20%;
`;
export const Col2 = styled.div`
	flex-basis: 16%;
`;
export const Col3 = styled.div`
	flex-basis: 16%;
`;
export const Col4 = styled.div`
	flex-basis: 16%;
`;
export const Col5 = styled.div`
	flex-basis: 16%;
`;
export const Col6 = styled.div`
	flex-basis: 16%;
`;

export const Trash = styled(FaTrash)`
	&:hover {
		cursor: pointer;
		opacity: 0.7;
	}
	@media ${breakpoints.mobile} {
		align-self: flex-end;
	}
`;

export const MobileTable = styled.div`
	display: none;
	@media ${breakpoints.mobile} {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const MobileHeader = styled.div`
	border-bottom: 1px solid black;
	width: 90%;
	margin: 10px 0;
	padding: 10px 0;
`;
