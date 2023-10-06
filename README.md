# Adoleta Jogos App
# Description
Adoleta Jogos App is a mobile application developed with React Native, intended to provide an interactive catalog of board games. Each game is presented with a visual card that, when clicked, provides further details about the particular game. Developed with a clean and straightforward UI, users can smoothly navigate through the app, exploring various games, and learning about their details.

# Features
Explore Games: View the various games available in the publisher's catalog.
Game Details: Get detailed information about a game by tapping on its card.
Interactive UI: Easy navigation with intuitive interfaces.

# Technologies Used
- Javascript
-  React Native

# Installation & Setup
Prerequisites
Ensure you've Node.js and npm installed. The project utilizes Expo CLI, so ensure to install it using:

npm install -g expo-cli

Navigate into the project folder and install dependencies using npm:

cd [Your Project Name]
npm install

To start the project, run:
expo start

# Code Structure Overview
Key Files and Directories
App.js: Main entry point that initializes the React Native app.
screens/: Directory that contains all the screen components. For example, arquimedes.js contains the component for the Arquimedes game details screen.
src/images/: Directory storing all image assets used in the app.

# Main Components
# HomeScreen Component
The HomeScreen component is designed to showcase a list of board games in a visually engaging manner. This is achieved using a scrollable view, where each game is exhibited with an appealing image and its respective name. Users can delve into detailed information about each game by tapping the "Saiba mais!" button.

Layout
Images: Square images representing each game are displayed, with the game’s name presented above the image.
Button: Below each image, a button labeled "Saiba mais!" allows users to navigate to detailed screens for each game.
Navbar: A navigation bar is fixed at the bottom, providing quick access to home, Instagram, and the online store.

Navigation
Tapping on a game's "Saiba mais!" button navigates the user to a detailed screen about the game (Currently, all buttons navigate to the 'Arquimedes' screen as a placeholder).
Icons in the navbar serve as shortcuts for navigating to the home screen, opening the Instagram profile, and visiting the online store.

Code Features
SquareImage Component: A functional component that receives an image file as a prop and renders it in a defined style.
openInstagramProfile(): A function to navigate to Adoleta Jogos’ Instagram, attempting to open the Instagram app first and, if unavailable, redirecting to the web browser.
openCartURL(): A function to navigate the user to Adoleta Jogos’ online store using a web browser.
React Navigation: Utilizes a stack navigator from @react-navigation/native-stack to manage screen transitions and stack history.

Styling
Colors: Consistent use of brand colors (#F39200, #592F6C, #F1F2E7, and others).
Card Style: Each game is presented within a card, with added style for a border, border-radius, margin, padding, and text alignment.
Navbar: Positioned absolutely at the bottom, contains icons to navigate to various sections/platforms, and adjusts height based on the OS (iOS/Android).
Custom Button: Utilizes a specific background color, padding, border-radius, text alignment, and font size/color to maintain a uniform UI appearance.

User Interaction
Touchables: TouchableOpacity is used to make the game images and buttons interactive, triggering navigation and functionality on tap.

# ArquimedesScreen component 
The Arquimedes component uses various visual and functional elements to create an appealing detail screen, such as images, icons, text, external links, and a YouTube video.

Image and Button:
An image (a logo) and a "Buy Now" button are prominently displayed at the top of the screen.
The button navigates the user to an online shopping cart through the openCartURL function.

Detailed Information:
Below the image and button, there's a ScrollView that allows content to be scrolled vertically.
Inside this ScrollView, detailed information about the game such as age, number of players, duration, and card quantity is displayed using icon-text pairs.

Description:
Following the detailed information, there's a description text about the game "Arquimedes".

Video Embedding:
A YouTube video is embedded via the YoutubeIframe component. The video can be played directly from this screen.
Navigation Bar:

At the bottom of the screen, there's a navigation bar with icons to navigate home, open the Instagram profile (through openInstagramProfile), and open the shopping cart.

