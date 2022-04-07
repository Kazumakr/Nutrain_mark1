import React, { useEffect, useState } from "react";
import {
	Container,
	Group,
	LabelSection,
	NumberSection,
	ColorBall,
	Name,
	Number,
	Unit,
} from "./SummaryStyle";

const Summary = ({ myFoods }) => {
	const [calories, setCalories] = useState(0);
	const [carb, setCarb] = useState(0);
	const [protein, setProtein] = useState(0);
	const [fat, setFat] = useState(0);

	useEffect(() => {
		let caloriesSum = 0.0;
		let carbSum = 0.0;
		let proteinSum = 0.0;
		let fatSum = 0.0;
		myFoods.forEach((myFood) => {
			caloriesSum += parseFloat(myFood.calories);
			carbSum += parseFloat(myFood.carb);
			proteinSum += parseFloat(myFood.protein);
			fatSum += parseFloat(myFood.fat);
		});
		setCalories(caloriesSum);
		setCarb(carbSum);
		setProtein(proteinSum);
		setFat(fatSum);
	}, [myFoods]);
	return (
		<Container>
			<Group>
				<LabelSection>
					<ColorBall color={"blue"} />
					<Name>Calories</Name>
				</LabelSection>
				<NumberSection>
					<Number>{calories.toFixed(1)}</Number>
					<Unit>kcal</Unit>
				</NumberSection>
			</Group>
			<Group>
				<LabelSection>
					<ColorBall color={"#00ff19"} />
					<Name>Carb</Name>
				</LabelSection>
				<NumberSection>
					<Number>{carb.toFixed(1)}</Number>
					<Unit>g</Unit>
				</NumberSection>
			</Group>
			<Group>
				<LabelSection>
					<ColorBall color={"red"} />
					<Name>Protein</Name>
				</LabelSection>
				<NumberSection>
					<Number>{protein.toFixed(1)}</Number>
					<Unit>g</Unit>
				</NumberSection>
			</Group>
			<Group>
				<LabelSection>
					<ColorBall color={"orange"} />
					<Name>Fat</Name>
				</LabelSection>
				<NumberSection>
					<Number>{fat.toFixed(1)}</Number>
					<Unit>g</Unit>
				</NumberSection>
			</Group>
		</Container>
	);
};

export default Summary;
