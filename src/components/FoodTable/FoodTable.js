import React, { useState } from "react";
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
	MobileTable,
	MobileHeader,
} from "./FoodTableStyle";
import Accordion from "../Accordion/Accordion";

const FoodTable = ({ myFoods, setMyFoods }) => {
	const deleteFood = (index) => {
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
				{myFoods.length === 0 && <p>No Food Data</p>}
				{myFoods.map((myFood, index) => (
					<Row key={index}>
						<Col1>{myFood.name}</Col1>
						<Col2>{myFood.calories}</Col2>
						<Col3>{myFood.carb}</Col3>
						<Col4>{myFood.protein}</Col4>
						<Col5>{myFood.fat}</Col5>
						<Col6>
							<Trash onClick={() => deleteFood(index)} />
						</Col6>
					</Row>
				))}
			</Table>
			<MobileTable>
				<MobileHeader>Food</MobileHeader>
				{myFoods.length === 0 && <p>No Food Data</p>}
				{myFoods.map((myFood, index) => (
					<Accordion
						myFood={myFood}
						index={index}
						deleteFood={deleteFood}
						key={index}
					/>
				))}
			</MobileTable>
		</Container>
	);
};

export default FoodTable;
