import React, { useState } from "react";
import {
	Container,
	SearchBar,
	Input,
	SearchButton,
	Wrapper,
} from "./SearchStyle";
import Card from "../Card/Card";

const Search = ({
	search,
	setSearch,
	getSearch,
	recipes,
	myFoods,
	setMyFoods,
}) => {
	// const [servingFDB, setServingFDB] = useState(100);
	// const [servingRecipe, setServingRecipe] = useState(1);
	// const AddFood = (e, { recipe }) => {
	// 	e.preventDefault();
	// 	console.log("serving", servingFDB);
	// 	// const newFood = {
	// 	// 	name: recipe.name,
	// 	// 	calories: (recipe.calories * servingFDB) / 100,
	// 	// 	carb: (recipe.carb * servingFDB) / 100,
	// 	// 	protein: (recipe.protein * servingFDB) / 100,
	// 	// 	fat: (recipe.fat * servingFDB) / 100,
	// 	// };
	// 	setMyFoods([...myFoods, recipe]);
	// };
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
					<Card
						recipe={recipe}
						myFoods={myFoods}
						setMyFoods={setMyFoods}
						key={index}
					/>
				))}
			</Wrapper>
		</Container>
	);
};

export default Search;
