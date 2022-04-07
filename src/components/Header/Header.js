import React from "react";
import { Container, Left, Right, Logo, Reset, Add } from "./HeaderStyle";
const Header = ({
	setMyFoods,
	setCalories,
	setCarb,
	setProtein,
	setFat,
	show,
	setShow,
}) => {
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
				<Add onClick={() => setShow(!show)}>Add</Add>
				<Reset onClick={resetLocalStorage}>Reset</Reset>
			</Right>
		</Container>
	);
};

export default Header;
