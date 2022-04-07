import React from "react";
import { Container, Left, Right, Logo, Reset, Add } from "./HeaderStyle";
const Header = ({ setMyFoods, show, setShow }) => {
	const resetLocalStorage = () => {
		localStorage.removeItem("myFoods");
		setMyFoods([]);
	};
	return (
		<Container>
			<Left>
				<Logo>NUTRAIN</Logo>
			</Left>
			<Right>
				<Add onClick={() => setShow(!show)}>Add</Add>
				<Reset onClick={resetLocalStorage}>Reset</Reset>
			</Right>
		</Container>
	);
};

export default Header;
