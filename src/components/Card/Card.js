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
							const newFood = {
								name: recipe.name,
								calories:
									Math.round(((recipe.calories * servingFDB) / 100) * 10) / 10,
								carb: Math.round(((recipe.carb * servingFDB) / 100) * 10) / 10,
								protein:
									Math.round(((recipe.protein * servingFDB) / 100) * 10) / 10,
								fat: Math.round(((recipe.fat * servingFDB) / 100) * 10) / 10,
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
							const newFood = {
								name: recipe.name,
								calories: Math.round(recipe.calories * servingRecipe * 10) / 10,
								carb: Math.round(recipe.calories * servingRecipe * 10) / 10,
								protein: Math.round(recipe.calories * servingRecipe * 10) / 10,
								fat: Math.round(recipe.calories * servingRecipe * 10) / 10,
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
