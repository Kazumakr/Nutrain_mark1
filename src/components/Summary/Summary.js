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
			caloriesSum += myFood.calories;
			carbSum += myFood.carb;
			proteinSum += myFood.protein;
			fatSum += myFood.fat;
		});
		setCalories(Math.round(caloriesSum * 10) / 10);
		setCarb(Math.round(carbSum * 10) / 10);
		setProtein(Math.round(proteinSum * 10) / 10);
		setFat(Math.round(fatSum * 10) / 10);
	}, [myFoods]);
	return (
		<Container>
			<Group>
				<LabelSection>
					<ColorBall color={"blue"} />
					<Name>Calories</Name>
				</LabelSection>
				<NumberSection>
					<Number>{calories}</Number>
					<Unit>kcal</Unit>
				</NumberSection>
			</Group>
			<Group>
				<LabelSection>
					<ColorBall color={"#00ff19"} />
					<Name>Carb</Name>
				</LabelSection>
				<NumberSection>
					<Number>{carb}</Number>
					<Unit>g</Unit>
				</NumberSection>
			</Group>
			<Group>
				<LabelSection>
					<ColorBall color={"red"} />
					<Name>Protein</Name>
				</LabelSection>
				<NumberSection>
					<Number>{protein}</Number>
					<Unit>g</Unit>
				</NumberSection>
			</Group>
			<Group>
				<LabelSection>
					<ColorBall color={"orange"} />
					<Name>Fat</Name>
				</LabelSection>
				<NumberSection>
					<Number>{fat}</Number>
					<Unit>g</Unit>
				</NumberSection>
			</Group>
		</Container>
	);
};

export default Summary;
