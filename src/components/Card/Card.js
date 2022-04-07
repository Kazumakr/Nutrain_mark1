import React, { useState } from "react";

import {
	Container,
	Img,
	FoodName,
	NutritionContainer,
	Row,
	LabelSection,
	ColorBall,
	Name,
	NumberSection,
	Number,
	Unit,
	Button,
	Wrapper,
	ServingSection,
	Label,
	Input,
} from "./CardStyle";

const Card = ({ recipe, myFoods, setMyFoods }) => {
	const [servingFDB, setServingFDB] = useState(100);
	const [servingRecipe, setServingRecipe] = useState(1);
	return (
		<Container>
			<Img src={recipe.image} />
			<FoodName>{recipe.name}</FoodName>
			<NutritionContainer>
				<Row>
					<LabelSection>
						<ColorBall color={"blue"} />
						<Name>Calories</Name>
					</LabelSection>
					<NumberSection>
						<Number>{recipe.calories}</Number>
						<Unit>kcal</Unit>
					</NumberSection>
				</Row>
				<Row>
					<LabelSection>
						<ColorBall color={"#00ff19"} />
						<Name>Carb</Name>
					</LabelSection>
					<NumberSection>
						<Number>{recipe.carb}</Number>
						<Unit>g</Unit>
					</NumberSection>
				</Row>
				<Row>
					<LabelSection>
						<ColorBall color={"red"} />
						<Name>Protein</Name>
					</LabelSection>
					<NumberSection>
						<Number>{recipe.protein}</Number>
						<Unit>g</Unit>
					</NumberSection>
				</Row>
				<Row>
					<LabelSection>
						<ColorBall color={"orange"} />
						<Name>Fat</Name>
					</LabelSection>
					<NumberSection>
						<Number>{recipe.fat}</Number>
						<Unit>g</Unit>
					</NumberSection>
				</Row>
			</NutritionContainer>
			{recipe.type === "foodDB" ? (
				<Wrapper>
					<ServingSection>
						<Label>Serving(g)</Label>
						<Input
							type="number"
							value={servingFDB}
							onChange={(e) => setServingFDB(e.target.value)}
						/>
					</ServingSection>
					<Button
						onClick={() => {
							console.log("serving", servingFDB);

							const newFood = {
								name: recipe.name,
								calories: ((recipe.calories * servingFDB) / 100).toFixed(1),
								carb: ((recipe.carb * servingFDB) / 100).toFixed(1),
								protein: ((recipe.protein * servingFDB) / 100).toFixed(1),
								fat: ((recipe.fat * servingFDB) / 100).toFixed(1),
							};
							setMyFoods([...myFoods, newFood]);
						}}
					>
						Add
					</Button>
				</Wrapper>
			) : (
				<Wrapper>
					<ServingSection>
						<Label>Serving(person)</Label>
						<Input
							type="number"
							value={servingRecipe}
							onChange={(e) => setServingRecipe(e.target.value)}
						/>
					</ServingSection>
					<Button
						onClick={() => {
							console.log("serving", servingRecipe);

							const newFood = {
								name: recipe.name,
								calories: (recipe.calories * servingRecipe).toFixed(1),
								carb: (recipe.carb * servingRecipe).toFixed(1),
								protein: (recipe.protein * servingRecipe).toFixed(1),
								fat: (recipe.fat * servingRecipe).toFixed(1),
							};
							setMyFoods([...myFoods, newFood]);
						}}
					>
						Add
					</Button>
				</Wrapper>
			)}
		</Container>
	);
};

export default Card;
