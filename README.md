# Getting Started 
![](pic1.png)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Acknowledgement
* Design file was provided on Figma by Scrimba
# How it works

* Card is divided into multiple components
    * Cardimage.jsx
        - Used to render the image part of the card by using props data from Cardbody.jsx
    * Cardbody.jsx 
        - Used to render the rest of the card which is title , location , paragraphs
        - Content is dynamic and is imported from Card.jsx using data.js as source
        - image src prop is passed to Cardimage component from here
    * Card.jsx
        - Map method is used to iterate everyother items in data.js and render a Cardbody and Cardimage  component and pass props to them . 
    * Data.js
        - contains data like title , imageUrl , title , location , dates 
        - Used to simulated server response .
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

