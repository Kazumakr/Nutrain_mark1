import styled from "styled-components";

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;

	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Content = styled.div`
	z-index: 2;
	width: 350px;
	padding: 1em;
	background: #fff;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Title = styled.span`
	margin-bottom: 20px;
	font-size: 18px;
`;
export const Group = styled.div`
	display: flex;
	justify-content: space-between;
	width: 80%;
	margin-bottom: 10px;
`;
export const ButtonGroup = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
	margin: 10px 0;
`;

export const Input = styled.input`
	width: 150px;
`;

export const Button = styled.button`
	background-color: ${(props) => props.backgroundColor || "#4c50a1"};
	/* background-color: #4c50a1; */
	color: white;
	border-radius: 5px;
	border: none;
	width: 80px;
	height: 30px;
	&:hover {
		border: 1px solid #4c50a1;
		color: ${(props) => props.backgroundColor || "#4c50a1"};
		background-color: white;
		cursor: pointer;
	}
`;
