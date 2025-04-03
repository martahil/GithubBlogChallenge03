# Github Blog

##### React + TypeScript + Vite

A blogging application that fetches and displays posts from a GitHub repository's issues, along with user profile information.

![My Project Screenshot](/src/assets/website-screenshot.png)

## Features

- Displaying GitHub profile information: the profile section showcases user details retrieved from GitHub's API, including avatar, name, username, professional occupation, company, and follower count.
- Displays a list of posts fetched from GitHub's API, where each post corresponds to a repository issue.
- Filtering posts by keyword: a search input allows filtering posts dynamically based on user-provided keywords, displaying only the matching results.
- Calculates posts number (counter)
- Detailed Post Display: for each individual post, displays the title, author, posting date, number of comments, and full content, all retrieved from GitHub via its API.

## Technologies Used

- Vite: Fast development environment for modern web applications.
- styled-components: For styling components with dynamic themes.
    - global styles for consistent design.
- phosphor-react: Icon library for a modern UI.
- context (React Context API) – Manages and provides post data across the application.
- data consumed from GitHub's API to retrieve repository issues as blog posts and fetch user details for display on the website.
- axios used for making HTTP requfaça uma ests to GitHub's API.
- client-side navigation with React Router, defining routes for the homepage and individual post pages.
- react-markdown for parsing and displaying markdown text.
- react-syntax-highlighter for syntax highlighting within code blocks.
- dracula theme applied to the syntax highlighter for a consistent dark mode styling.

## Figma Design

The design for the Github Blog website was based on the following Figma file:
https://www.figma.com/community/file/1138814951106121051

## Challenge Information

This project was built to fulfill the challenge of the ReactJS course from RocketSeat.
Instructions can be found here:<br>
https://efficient-sloth-d85.notion.site/Desafio-03-Github-Blog-13593953670346908462ddc648d42cf1

