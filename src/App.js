import React, { Fragment, useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Summary from "./components/Summary/Summary";
import FoodTable from "./components/FoodTable/FoodTable";
import GlobalStyle from "./globalStyle";

function App() {
	const APP_ID = process.env.REACT_APP_APP_ID;
	const APP_KEY = process.env.REACT_APP_APP_KEY;
	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQeury] = useState("");

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

	const BASE_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=2`;

	useEffect(() => {
		localStorage.setItem("myFoods", JSON.stringify(myFoods));
	}, [myFoods]);

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(BASE_URL);
		const data = await response.json();
		setRecipes(data.hits);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQeury(search);
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
