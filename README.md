# Stranger Things Fan Wiki

An unofficial, fan-made wiki dedicated to the television series *Stranger Things*, developed as a group laboratory activity for a web development course.

## Overview

The website presents eight characters of the series through a home page overview. Each character is shown as a picture card that links to a dedicated profile page. Four additional pages, reachable through buttons and the navigation bar, provide a summary of the story, notable locations, a glossary and a trivia quiz.

## Featured characters

Eleven, Jim Hopper, Mike Wheeler, Dustin Henderson, Will Byers, Max Mayfield, Steve Harrington and Joyce Byers.

## Features

- Home page overview with a picture card for every character and a live search filter
- Individual character profiles containing a biography, personality traits, relationships, a quick facts panel and a spoiler note
- Previous and next navigation between character profiles
- Additional pages: The Story So Far, Places in Hawkins, Glossary and a six-question Trivia Quiz
- Upside Down mode, a theme switch that is remembered across pages
- Responsive layout, keyboard navigation support and reduced motion support

## Technologies

- HTML5
- CSS3 (custom properties, grid and flexbox)
- Vanilla JavaScript (no frameworks or external libraries)

## Project structure

```
index.html            Home page
story.html            The story so far
places.html           Places in Hawkins
glossary.html         Glossary
quiz.html             Trivia quiz
css/style.css         Shared stylesheet
js/main.js            Theme switch, animated lights and search filter
js/quiz.js            Quiz logic
characters/           One HTML page per character
assets/characters/    Character pictures
```

## Running the project locally

1. Clone the repository: `git clone <repository-url>`
2. Open the project folder.
3. Open `index.html` in a web browser, or serve the folder with the Live Server extension in Visual Studio Code.

No build step or installation is required.

## Deployment

The site can be published with GitHub Pages: open the repository settings, select Pages, choose Deploy from a branch, select the `main` branch and the `/ (root)` folder, then save. 

## Character pictures

Pictures are loaded from `assets/characters/` using the file names `eleven.jpg`, `jim-hopper.jpg`, `mike.jpg`, `dustin.jpg`, `will.jpg`, `max.jpg`, `steve.jpg` and `joyce.jpg`. A placeholder with the character's initials is shown for any picture that is not present.

## Team contributions

Work was divided equally among four members. Individual contributions are recorded in the commit history and pull requests of this repository.

| Member | Character profiles | Additional page | Shared file |
|---|---|---|---|
| Dellosa, Karylle Lynn L. | Eleven, Jim Hopper | story.html | css/style.css |
| Hayag, Carmel Mariane T. | Mike Wheeler, Dustin Henderson | places.html | index.html |
| Java, Armisty Genia L. | Will Byers, Max Mayfield | quiz.html, js/quiz.js | js/main.js |
| Padillo, Reymart T. | Steve Harrington, Joyce Byers | glossary.html | README.md, final testing |

## Disclaimer

This project is a non-commercial fan work created for educational purposes. *Stranger Things* and its characters are the property of Netflix and the Duffer Brothers. This project is not affiliated with or endorsed by them. All descriptions are written by the project team, and spoiler notes cover the series up to Season 4.