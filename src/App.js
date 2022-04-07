import React, { Fragment, useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Summary from "./components/Summary/Summary";
import FoodTable from "./components/FoodTable/FoodTable";
import GlobalStyle from "./globalStyle";

function App() {
	const APP_ID_RECIPE = process.env.REACT_APP_APP_ID_RECIPE;
	const APP_KEY_RECIPE = process.env.REACT_APP_APP_KEY_RECIPE;
	const APP_ID_FOOD_DATABASE = process.env.REACT_APP_APP_ID_FOOD_DATABASE;
	const APP_KEY_FOOD_DATABASE = process.env.REACT_APP_APP_KEY_FOOD_DATABASE;
	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [calories, setCalories] = useState(0);
	const [carb, setCarb] = useState(0);
	const [protein, setProtein] = useState(0);
	const [fat, setFat] = useState(0);
	const [myFoods, setMyFoods] = useState(() => {
		const savedMyFoods = localStorage.getItem("myFoods");
		if (savedMyFoods) {
			return JSON.parse(savedMyFoods);
		} else {
			return [];
		}
	});

	const BASE_URL1 = `https://api.edamam.com/api/food-database/v2/parser?ingr=${search}&app_id=${APP_ID_FOOD_DATABASE}&app_key=${APP_KEY_FOOD_DATABASE}&nutrition-type=cooking&category=generic-foods`;
	const BASE_URL2 = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID_RECIPE}&app_key=${APP_KEY_RECIPE}&from=0&to=2`;

	useEffect(() => {
		localStorage.setItem("myFoods", JSON.stringify(myFoods));
	}, [myFoods]);

	const getRecipes = async () => {
		const results = [];
		const response1 = await fetch(BASE_URL1);
		const response2 = await fetch(BASE_URL2);
		const data1 = await response1.json();
		const data2 = await response2.json();
		const items1 = data1.parsed;
		const items2 = data2.hits;

		items1.forEach((item) => {
			const Recipe1 = {
				name: item.food.label,
				image: item.food.image,
				calories: item.food.nutrients.ENERC_KCAL,
				carb: item.food.nutrients.CHOCDF,
				protein: item.food.nutrients.PROCNT,
				fat: item.food.nutrients.FAT,
			};
			console.log("Recipe1", Recipe1);
			results.push(Recipe1);
		});
		items2.forEach((item) => {
			const Recipe2 = {
				name: item.recipe.label,
				image: item.recipe.image,
				calories: parseFloat(item.recipe.calories.toFixed(1)),
				carb: parseFloat(item.recipe.digest[1].total.toFixed(1)),
				protein: parseFloat(item.recipe.digest[2].total.toFixed(1)),
				fat: parseFloat(item.recipe.digest[0].total.toFixed(1)),
			};
			console.log("Recipe2", Recipe2);
			results.push(Recipe2);
		});
		setRecipes(results);
	};

	const getSearch = (e) => {
		e.preventDefault();
		getRecipes();
		setSearch("");
	};

	return (
		<div className="App">
			<Fragment>
				<GlobalStyle />
				<Header
					setMyFoods={setMyFoods}
					setCalories={setCalories}
					setCarb={setCarb}
					setProtein={setProtein}
					setFat={setFat}
				/>
				<Summary
					myFoods={myFoods}
					calories={calories}
					setCalories={setCalories}
					carb={carb}
					setCarb={setCarb}
					protein={protein}
					setProtein={setProtein}
					fat={fat}
					setFat={setFat}
				/>
				<FoodTable
					myFoods={myFoods}
					setMyFoods={setMyFoods}
					setCalories={setCalories}
					setCarb={setCarb}
					setProtein={setProtein}
					setFat={setFat}
				/>
				<Search
					search={search}
					setSearch={setSearch}
					getSearch={getSearch}
					recipes={recipes}
					myFoods={myFoods}
					setMyFoods={setMyFoods}
				/>
				<Footer />
			</Fragment>
		</div>
	);
}

export default App;
