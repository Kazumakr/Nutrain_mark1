# Nutrain_mark1

This application is to record and manage food nutrition.  
You can search for foods from the food database and get accurate nutrients.

<img width="1662" alt="nutrain_screenshot" src="https://user-images.githubusercontent.com/67501734/162377532-ad00a946-15be-4627-9c0b-eaf23e6bb90d.png">

Project Link: [https://startling-puppy-43815a.netlify.app/]

## Table of Contents (Optional)

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [References](#references)

## Description

### Why I created this project

I wanted an app that would allow me to intuitively record and visualize the nutrients in the food I eat.  
I used to track my nutrition with spreadsheet because I work out and need to have enough protein and calories.
A spreadsheet is fine for calculating ahead of time and creating a list of meals, but it's not best option to keep track of what I eat every day.

### What problem this app solved

I can search and track nutrients in one application.  
I don't need to calculate or write formulas in spreadsheets.

### what I learned through this project

I learned how to use the api provided by Edamam. It was a good opportunity to learn how to handle data as I have been interested in the nutrient API for some time. I will probably use this API in the future. It was a bit difficult to store in one array from two different APIs. I created the objects myself and combined them into one.
The units of serving are different, such as "per 100g" and "per person," and I had a hard time making it possible to change the serving amount for each.
And this was my first project since react18 was released, so I learned the syntax of a new root API introduced by react18.

## Built With

- [React.js](https://reactjs.org/)
- [Styled-Components](https://styled-components.com/)
- [Edamam_API](https://www.edamam.com/)

## Features

- Food Data Search(Fetch API)
- Store Data to LocalStorage
- Delete data from LocalStorage
- Change Serving Amounts
- Nutrient Aggregation
- Data Reset (Remove all data from LocalStorage)
- Manual registration of food data

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Kazumakr/Nutrain_mark1
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Get API Id and Key (https://www.edamam.com/) You need to get both Food Database API`s one and Recipe Search API's one.

   ```sh
   REACT_APP_APP_ID_RECIPE=
   REACT_APP_APP_KEY_RECIPE=
   REACT_APP_APP_ID_FOOD_DATABASE=
   REACT_APP_APP_KEY_FOOD_DATABASE=
   ```

4. start
   ```sh
   npm start
   ```

## Usage

### Food Data Search/Recipe search

### Store Data to LocalStorage

### Delete data from LocalStorage

### Change Serving Amounts

### Manual registration of food data

### Data Reset (Remove all data from LocalStorage)

## License

License under the [MIT License](LICENSE)

## References

- [React.Js](https://reactjs.org/)
- [DEV Community](https://dev.to/)
- [Styled-Components](https://styled-components.com/)
- [codepen](https://codepen.io/)
- [stackoverflow](https://stackoverflow.com/)
- [mdn_webDocs](https://developer.mozilla.org/)
- [w3school](https://www.w3schools.com/)
