import React, { useEffect } from "react";
import {
	Container,
	Wrapper,
	Group,
	LabelSection,
	NumberSection,
	ColorBall,
	Name,
	Number,
	Unit,
} from "./SummaryStyle";

const Summary = ({
	myFoods,
	setCalories,
	calories,
	carb,
	setCarb,
	protein,
	setProtein,
	fat,
	setFat,
}) => {
	useEffect(() => {
		myFoods.map((myFood) => {
			setCalories(
				parseFloat(calories) + parseFloat(myFood.recipe.calories.toFixed(1))
			);
			setCarb(
				parseFloat(carb) + parseFloat(myFood.recipe.digest[1].total.toFixed(1))
			);
			setProtein(
				parseFloat(protein) +
					parseFloat(myFood.recipe.digest[2].total.toFixed(1))
			);
			setFat(
				parseFloat(fat) + parseFloat(myFood.recipe.digest[0].total.toFixed(1))
			);
		});
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
