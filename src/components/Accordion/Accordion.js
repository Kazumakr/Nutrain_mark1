import React, { useState } from "react";
import {
	MobileRow,
	FoodNameContainer,
	Name,
	Cursol,
	Content,
	Group,
	Nutrition,
	Number,
	Unit,
	Trash,
} from "./AccordionStyle";
const Accordion = ({ myFood, index, deleteFood }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<MobileRow>
			<FoodNameContainer
				className="accordion-title"
				onClick={() => setIsActive(!isActive)}
			>
				<Name>{myFood.recipe.label}</Name>
				<Cursol>{isActive ? "▲" : "▼"}</Cursol>
			</FoodNameContainer>
			{isActive && (
				<Content>
					<Group>
						<Nutrition>Calories</Nutrition>
						<div>
							<Number>{myFood.recipe.calories.toFixed(1)}</Number>
							<Unit>kcal</Unit>
						</div>
					</Group>
					<Group>
						<Nutrition>Carb</Nutrition>
						<div>
							<Number>{myFood.recipe.digest[1].total.toFixed(1)}</Number>
							<Unit>g</Unit>
						</div>
					</Group>
					<Group>
						<Nutrition>Protein</Nutrition>
						<div>
							<Number>{myFood.recipe.digest[2].total.toFixed(1)}</Number>
							<Unit>g</Unit>
						</div>
					</Group>
					<Group>
						<Nutrition>Fat</Nutrition>
						<div>
							<Number>{myFood.recipe.digest[0].total.toFixed(1)}</Number>
							<Unit>g</Unit>
						</div>
					</Group>
					<Trash onClick={() => deleteFood(index)} />
				</Content>
			)}
		</MobileRow>
	);
};

export default Accordion;
