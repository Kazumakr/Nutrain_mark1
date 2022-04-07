import React from "react";
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
