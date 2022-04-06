import React from "react";
import {
	Container,
	SearchBar,
	Input,
	SearchButton,
	Wrapper,
	Card,
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
} from "./SearchStyle";

const Search = ({
	search,
	setSearch,
	getSearch,
	recipes,
	myFoods,
	setMyFoods,
}) => {
	return (
		<Container>
			<SearchBar onSubmit={getSearch}>
				<Input
					type="text"
					placeholder="Food Name"
					value={search}
					onChange={(event) => setSearch(event.target.value)}
				/>
				<SearchButton type="submit">Search</SearchButton>
			</SearchBar>
			<Wrapper>
				{recipes.map((recipe, index) => (
					<Card key={index}>
						<Img src={recipe.recipe.image} />
						<FoodName>{recipe.recipe.label}</FoodName>
						<NutritionContainer>
							<Row>
								<LabelSection>
									<ColorBall color={"blue"} />
									<Name>Calories</Name>
								</LabelSection>
								<NumberSection>
									<Number>{recipe.recipe.calories.toFixed(1)}</Number>
									<Unit>kcal</Unit>
								</NumberSection>
							</Row>
							<Row>
								<LabelSection>
									<ColorBall color={"#00ff19"} />
									<Name>Carb</Name>
								</LabelSection>
								<NumberSection>
									<Number>{recipe.recipe.digest[1].total.toFixed(1)}</Number>
									<Unit>g</Unit>
								</NumberSection>
							</Row>
							<Row>
								<LabelSection>
									<ColorBall color={"red"} />
									<Name>Protein</Name>
								</LabelSection>
								<NumberSection>
									<Number>{recipe.recipe.digest[2].total.toFixed(1)}</Number>
									<Unit>g</Unit>
								</NumberSection>
							</Row>
							<Row>
								<LabelSection>
									<ColorBall color={"orange"} />
									<Name>Fat</Name>
								</LabelSection>
								<NumberSection>
									<Number>{recipe.recipe.digest[0].total.toFixed(1)}</Number>
									<Unit>g</Unit>
								</NumberSection>
							</Row>
						</NutritionContainer>
						<Button onClick={(event) => setMyFoods([...myFoods, recipe])}>
							Add
						</Button>
					</Card>
				))}
			</Wrapper>
		</Container>
	);
};

export default Search;
