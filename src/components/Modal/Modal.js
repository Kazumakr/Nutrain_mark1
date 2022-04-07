import React, { useState } from "react";

import {
	Overlay,
	Content,
	Group,
	Input,
	Title,
	Button,
	ButtonGroup,
} from "./ModalStyle";

const Modal = ({ show, setShow, myFoods, setMyFoods }) => {
	const [newName, setNewName] = useState("");
	const [newCalories, setNewCalories] = useState(0);
	const [newCarb, setNewCarb] = useState(0);
	const [newProtein, setNewProtein] = useState(0);
	const [newFat, setNewFat] = useState(0);

	const addNewFood = (e) => {
		e.preventDefault();
		const newFood = {
			name: newName,
			calories: parseFloat(newCalories),
			carb: parseFloat(newCarb),
			protein: parseFloat(newProtein),
			fat: parseFloat(newFat),
		};
		setMyFoods([...myFoods, newFood]);
		setShow(false);
	};

	if (show) {
		return (
			<Overlay onClick={() => setShow(false)}>
				<Content onClick={(event) => event.stopPropagation()}>
					<Title>Add Food</Title>
					<Group>
						<label>Food Name</label>
						<Input
							type="text"
							required
							placeholder="(e.g) apple, pizza"
							value={newName}
							onChange={(e) => setNewName(e.target.value)}
						/>
					</Group>
					<Group>
						<label>Calories(kcal)</label>
						<Input
							type="number"
							value={newCalories}
							onChange={(e) => setNewCalories(e.target.value)}
						/>
					</Group>
					<Group>
						<label>Carb(g)</label>
						<Input
							type="number"
							value={newCarb}
							onChange={(e) => setNewCarb(e.target.value)}
						/>
					</Group>
					<Group>
						<label>Protein(g)</label>
						<Input
							type="number"
							value={newProtein}
							onChange={(e) => setNewProtein(e.target.value)}
						/>
					</Group>
					<Group>
						<label>Fat(g)</label>
						<Input
							type="number"
							value={newFat}
							onChange={(e) => setNewFat(e.target.value)}
						/>
					</Group>
					<ButtonGroup>
						<Button onClick={addNewFood}>Add</Button>
						<Button onClick={() => setShow(false)} backgroundColor={"Gray"}>
							Cancel
						</Button>
					</ButtonGroup>
				</Content>
			</Overlay>
		);
	} else {
		return null;
	}
};

export default Modal;
