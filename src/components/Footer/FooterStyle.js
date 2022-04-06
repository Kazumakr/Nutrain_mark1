import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

export const Container = styled.div`
	padding: 30px 0;
	margin-top: 250px;

	@media ${breakpoints.mobile} {
		margin-top: 180px;
	}
`;
export const Copy = styled.span`
	font-size: 18px;
	color: #4c50a1;
`;
