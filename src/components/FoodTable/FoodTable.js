import React from "react";
import {
	Container,
	Header,
	Table,
	Row,
	Col1,
	Col2,
	Col3,
	Col4,
	Col5,
	Col6,
	Trash,
} from "./FoodTableStyle";

const FoodTable = ({
	myFoods,
	setMyFoods,
	setCalories,
	setCarb,
	setProtein,
	setFat,
}) => {
	const deleteFood = (index) => {
		setCalories(0);
		setCarb(0);
		setProtein(0);
		setFat(0);
		setMyFoods((myFoods) => myFoods.filter((myFood, i) => i !== index));
	};
	return (
		<Container>
			<Table>
				<Header>
					<Col1>Food</Col1>
					<Col2>Calories(kcal)</Col2>
					<Col3>Carb(g)</Col3>
					<Col4>Protein(g)</Col4>
					<Col5>Fat(g)</Col5>
					<Col6></Col6>
				</Header>
				{myFoods.length == 0 && <p>No Food Data</p>}
				{myFoods.map((myFood, index) => (
					<Row key={index}>
						<Col1>{myFood.recipe.label}</Col1>
						<Col2>{myFood.recipe.calories.toFixed(1)}</Col2>
						<Col3>{myFood.recipe.digest[1].total.toFixed(1)}</Col3>
						<Col4>{myFood.recipe.digest[2].total.toFixed(1)}</Col4>
						<Col5>{myFood.recipe.digest[0].total.toFixed(1)}</Col5>
						<Col6>
							<Trash onClick={() => deleteFood(index)} />
						</Col6>
					</Row>
				))}
			</Table>
		</Container>
	);
};

export default FoodTable;
