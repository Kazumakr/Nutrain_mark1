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
			setCalories(parseFloat(calories) + parseFloat(myFood.calories));
			setCarb(parseFloat(carb) + parseFloat(myFood.carb));
			setProtein(parseFloat(protein) + parseFloat(myFood.protein));
			setFat(parseFloat(fat) + parseFloat(myFood.fat));
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
