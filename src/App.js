import React, { Fragment, useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Summary from "./components/Summary/Summary";
import FoodTable from "./components/FoodTable/FoodTable";
import Modal from "./components/Modal/Modal";
import GlobalStyle from "./globalStyle";

function App() {
	const APP_ID_RECIPE = process.env.REACT_APP_APP_ID_RECIPE;
	const APP_KEY_RECIPE = process.env.REACT_APP_APP_KEY_RECIPE;
	const APP_ID_FOOD_DATABASE = process.env.REACT_APP_APP_ID_FOOD_DATABASE;
	const APP_KEY_FOOD_DATABASE = process.env.REACT_APP_APP_KEY_FOOD_DATABASE;
	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [show, setShow] = useState(false);

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
				type: "foodDB",
				name: item.food.label,
				image: item.food.image,
				calories: item.food.nutrients.ENERC_KCAL,
				carb: item.food.nutrients.CHOCDF,
				protein: item.food.nutrients.PROCNT,
				fat: item.food.nutrients.FAT,
			};
			results.push(Recipe1);
		});
		items2.forEach((item) => {
			const Recipe2 = {
				type: "recipe",
				name: item.recipe.label,
				image: item.recipe.image,
				calories:
					Math.round((item.recipe.calories / item.recipe.yield) * 10) / 10,
				carb:
					Math.round((item.recipe.digest[1].total / item.recipe.yield) * 10) /
					10,
				protein:
					Math.round((item.recipe.digest[2].total / item.recipe.yield) * 10) /
					10,
				fat:
					Math.round((item.recipe.digest[0].total / item.recipe.yield) * 10) /
					10,
			};
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
		<Fragment>
			<GlobalStyle />
			<Header setMyFoods={setMyFoods} setShow={setShow} show={show} />
			<Modal
				show={show}
				setShow={setShow}
				myFoods={myFoods}
				setMyFoods={setMyFoods}
			/>
			<Summary myFoods={myFoods} />
			<FoodTable myFoods={myFoods} setMyFoods={setMyFoods} />
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
	);
}

export default App;
