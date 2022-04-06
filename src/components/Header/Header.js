import React from "react";
import { Container, Left, Right, Logo, Reset } from "./HeaderStyle";
const Header = ({ setMyFoods, setCalories, setCarb, setProtein, setFat }) => {
	const resetLocalStorage = () => {
		localStorage.removeItem("myFoods");
		setMyFoods([]);
		setCalories(0);
		setCarb(0);
		setProtein(0);
		setFat(0);
	};
	return (
		<Container>
			<Left>
				<Logo>NUTRAIN</Logo>
			</Left>
			<Right>
				<Reset onClick={resetLocalStorage}>Reset</Reset>
			</Right>
		</Container>
	);
};

export default Header;
