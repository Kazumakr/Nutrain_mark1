import styled from "styled-components";

import { FaTrash } from "react-icons/fa";
import { breakpoints } from "../../breakpoints";

export const MobileRow = styled.div`
	width: 90%;
	margin-bottom: 10px;
`;

export const FoodNameContainer = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 3px;
	padding: 5px 10px;
	display: flex;
	justify-content: space-between;
	box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);

	&:hover {
		cursor: pointer;
	}
`;
export const Name = styled.div``;

export const Cursol = styled.div`
	font-size: 14px;
`;

export const Content = styled.div`
	background-color: rgba(0, 0, 0, 0.1);
	border-radius: 3px;
	padding: 10px 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Group = styled.div`
	display: flex;
	justify-content: space-between;
	width: 80%;
`;
export const Nutrition = styled.span`
	font-weight: bold;
`;
export const Number = styled.span`
	margin-right: 5px;
`;
export const Unit = styled.span`
	font-size: 14px;
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
