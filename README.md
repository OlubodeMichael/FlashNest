<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# FLASHNEST

<em>Empower Your Learning Journey with Interactive Flashcards</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/OlubodeMichael/FlashNest?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/OlubodeMichael/FlashNest?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/OlubodeMichael/FlashNest?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Redis-FF4438.svg?style=flat&logo=Redis&logoColor=white" alt="Redis">
<img src="https://img.shields.io/badge/Mongoose-F04D35.svg?style=flat&logo=Mongoose&logoColor=white" alt="Mongoose">
<img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat&logo=dotenv&logoColor=black" alt=".ENV">
<br>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Passport-34E27A.svg?style=flat&logo=Passport&logoColor=white" alt="Passport">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/CSS-663399.svg?style=flat&logo=CSS&logoColor=white" alt="CSS">

</div>
<br>

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)
- [Roadmap](#roadmap)

---

## Overview

FlashNest is an innovative developer tool designed to revolutionize the way users create and manage flashcards for effective learning. 

**Why FlashNest?**

This project empowers developers to build interactive learning tools, seamlessly integrating user management and AI functionalities. The core features include:

- 🎓 **AI-Generated Flashcards:** Create flashcards from various inputs, enhancing learning efficiency.
- 🔒 **Comprehensive User Management:** Simplifies authentication and profile management, addressing security concerns.
- 📚 **Dynamic Deck Management:** Easily create, update, and delete study decks for streamlined content organization.
- ⚙️ **Robust Error Handling:** Implements custom error management, improving application reliability.
- 🚀 **Real-Time Data Handling:** Utilizes Redis for caching, ensuring fast data retrieval and improved performance.
- 📱 **Responsive Design:** Built with Next.js and Tailwind CSS for a seamless user experience across devices.

---

## Features

|      | Component       | Details                              |
| :--- | :-------------- | :----------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Microservices-oriented</li><li>Client-Server model</li><li>React for frontend, Node.js for backend</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>ESLint for linting</li><li>Prettier for code formatting</li><li>Consistent coding standards across JavaScript and CSS</li></ul> |
| 📄 | **Documentation** | <ul><li>README.md for project overview</li><li>Inline comments for clarity</li><li>API documentation using JSDoc</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Passport for authentication</li><li>Redis for caching</li><li>NodeMailer for email services</li><li>JWT for secure token handling</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Separation of concerns (frontend and backend)</li><li>Reusable React components</li><li>Express middleware for handling requests</li></ul> |
| 🧪 | **Testing**       | <ul><li>Unit tests with Jest</li><li>Integration tests with Supertest</li><li>Continuous integration setup with npm scripts</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Optimized asset loading with TailwindCSS</li><li>Server-side rendering with Next.js</li><li>Efficient database queries with Mongoose</li></ul> |
| 🛡️ | **Security**      | <ul><li>Helmet for HTTP headers security</li><li>Rate limiting with express-rate-limit</li><li>Input validation with validator and xss-clean</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Core libraries: React, Express, Mongoose</li><li>Development tools: ESLint, Prettier</li><li>Security: Helmet, bcryptjs</li></ul> |
| 🚀 | **Scalability**   | <ul><li>Microservices architecture allows independent scaling</li><li>Redis for session management and caching</li><li>Load balancing strategies can be implemented</li></ul> |

---

## Project Structure

```sh
└── FlashNest/
    ├── backend
    │   ├── .gitignore
    │   ├── app.js
    │   ├── config
    │   ├── controllers
    │   ├── middleware
    │   ├── models
    │   ├── package.json
    │   ├── routes
    │   ├── server.js
    │   └── utils
    └── frontend
        ├── .gitignore
        ├── README.md
        ├── app
        ├── context
        ├── eslint.config.mjs
        ├── jsconfig.json
        ├── middleware.js
        ├── next.config.mjs
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.mjs
        ├── public
        └── utils
```

---

### Project Index

<details open>
	<summary><b><code>FLASHNEST/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
			</table>
		</blockquote>
	</details>
	<!-- backend Submodule -->
	<details>
		<summary><b>backend</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ backend</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/app.js'>app.js</a></b></td>
					<td style='padding: 8px;'>- Establishes the core Express application for the backend of the project, integrating essential middleware for security, logging, and request handling<br>- It configures routes for user management, decks, flashcards, and AI functionalities, while also implementing CORS policies and error handling<br>- This foundational setup ensures a secure and efficient API structure, facilitating seamless communication between the client and server components of the application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/server.js'>server.js</a></b></td>
					<td style='padding: 8px;'>- Establishes a connection to a MongoDB database using Mongoose, ensuring that the application can interact with the database effectively<br>- It also initializes the server by listening on a specified port, enabling the backend application to handle incoming requests<br>- This foundational setup is crucial for the overall architecture, facilitating data management and server communication within the project.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the backend configuration for a Flask-based learning application, outlining essential dependencies and scripts for development and testing<br>- It facilitates user authentication, data handling, and security measures, ensuring a robust environment for building and managing features<br>- The integration of various libraries enhances functionality, enabling seamless interactions with databases and external services while maintaining application integrity and performance.</td>
				</tr>
			</table>
			<!-- routes Submodule -->
			<details>
				<summary><b>routes</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ backend.routes</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/routes/DecksRoute.js'>DecksRoute.js</a></b></td>
							<td style='padding: 8px;'>- Facilitates the management of decks within the application by defining routes for creating, retrieving, updating, and deleting decks<br>- It integrates authentication to ensure secure access to these operations and establishes a connection to flashcard-related routes, enhancing the overall functionality of the backend architecture<br>- This structure supports a seamless user experience in managing educational content.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/routes/flashcardsRoute.js'>flashcardsRoute.js</a></b></td>
							<td style='padding: 8px;'>- Facilitates the management of flashcards within a deck by defining routes for retrieving, creating, updating, and deleting flashcards<br>- It ensures that all operations are protected by authentication, allowing only authorized users to interact with the flashcard data<br>- This component plays a crucial role in the backend architecture, enabling seamless integration of flashcard functionalities into the overall application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/routes/usersRoute.js'>usersRoute.js</a></b></td>
							<td style='padding: 8px;'>- UsersRoute serves as a crucial component of the backend architecture, facilitating user authentication and management<br>- It enables functionalities such as Google authentication, password recovery, user profile updates, and account deletion<br>- By integrating with controllers for authentication and user operations, it ensures secure access to user-related actions while maintaining a streamlined experience for user interactions within the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/routes/aiRoute.js'>aiRoute.js</a></b></td>
							<td style='padding: 8px;'>- Facilitates the creation and management of AI-generated flashcards within the application<br>- It defines routes for users to preview flashcards based on uploaded content while ensuring secure access through authentication and rate limiting<br>- This component plays a crucial role in enhancing user interaction with AI features, contributing to the overall functionality of the backend architecture.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- controllers Submodule -->
			<details>
				<summary><b>controllers</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ backend.controllers</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/controllers/flashcardController.js'>flashcardController.js</a></b></td>
							<td style='padding: 8px;'>- Flashcard controller manages the core functionalities related to flashcards within the application<br>- It facilitates the retrieval, creation, updating, and deletion of flashcards, ensuring user-specific data handling<br>- By integrating with the Flashcard model, it supports both individual and bulk operations, enhancing user experience in organizing and accessing their learning materials effectively<br>- This component is essential for maintaining the applications interactive learning features.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/controllers/deckController.js'>deckController.js</a></b></td>
							<td style='padding: 8px;'>- DeckController manages the creation, retrieval, updating, and deletion of user-specific decks within the application<br>- It facilitates interactions with the Deck model, ensuring that users can effectively manage their flashcard decks<br>- By handling asynchronous operations and error management, it enhances the overall user experience while maintaining data integrity and responsiveness in the backend architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/controllers/userController.js'>userController.js</a></b></td>
							<td style='padding: 8px;'>- UserController facilitates user management within the application by providing essential functionalities such as retrieving user details, updating user information (excluding passwords), and deactivating user accounts<br>- It ensures secure handling of user data while maintaining a clear separation of responsibilities, guiding users to appropriate routes for password updates<br>- This controller plays a crucial role in enhancing user experience and data integrity within the overall codebase architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/controllers/authController.js'>authController.js</a></b></td>
							<td style='padding: 8px;'>- AuthController manages user authentication and authorization within the application<br>- It facilitates user sign-up and login processes, generates and verifies JWT tokens, and handles password resets<br>- Additionally, it ensures secure cookie management for session handling and integrates email notifications for user onboarding and password recovery<br>- This controller is essential for maintaining user security and access control across the entire codebase architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/controllers/aiController.js'>aiController.js</a></b></td>
							<td style='padding: 8px;'>- Facilitates the generation of study flashcards based on user-provided topics, text, or files<br>- It validates input, processes content from various formats, and interacts with the OpenRouter API to create flashcards<br>- The response is structured as a JSON array, ensuring users receive a clean and usable format for their study materials, enhancing the overall educational experience within the application.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- models Submodule -->
			<details>
				<summary><b>models</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ backend.models</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/models/Deck.js'>Deck.js</a></b></td>
							<td style='padding: 8px;'>- Defines a Mongoose schema for managing decks within the application, establishing a structure that associates each deck with a user and includes essential attributes such as title, description, and creation date<br>- This model facilitates the organization of flashcards linked to each deck, enhancing the overall functionality of the application by enabling users to create and manage their personalized study materials effectively.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/models/Flashcard.js'>Flashcard.js</a></b></td>
							<td style='padding: 8px;'>- Defines the Flashcard model within the backend architecture, facilitating the creation and management of flashcards associated with specific users and decks<br>- It ensures that each flashcard contains essential attributes such as a question and answer, while also tracking creation and update timestamps<br>- This model plays a crucial role in the overall functionality of the application, enabling effective study and learning experiences for users.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/models/User.js'>User.js</a></b></td>
							<td style='padding: 8px;'>- User model defines the structure and behavior of user data within the application, facilitating user registration, authentication, and management<br>- It ensures data integrity through validation and hashing of passwords, while also providing mechanisms for password reset and tracking changes<br>- This model plays a crucial role in maintaining user-related functionalities across the codebase, supporting secure and efficient user interactions.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- utils Submodule -->
			<details>
				<summary><b>utils</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ backend.utils</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/utils/appError.js'>appError.js</a></b></td>
							<td style='padding: 8px;'>- AppError serves as a custom error handling mechanism within the backend architecture, enhancing the applications ability to manage and categorize errors effectively<br>- By distinguishing between operational and programming errors, it provides clear feedback on the nature of issues encountered, thereby improving the overall robustness and user experience of the application<br>- This utility is essential for maintaining consistent error responses across the codebase.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/utils/catchAsync.js'>catchAsync.js</a></b></td>
							<td style='padding: 8px;'>- Enhances error handling in asynchronous route handlers by wrapping them in a function that catches any errors and passes them to the next middleware<br>- This utility streamlines the management of asynchronous operations within the backend architecture, ensuring that unhandled promise rejections are properly addressed, thereby improving the overall robustness and reliability of the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/utils/redisClient.js'>redisClient.js</a></b></td>
							<td style='padding: 8px;'>- Establishes a Redis client connection for the backend architecture, enabling efficient data caching and storage<br>- By connecting to a Redis instance, it enhances application performance and scalability, allowing for quick data retrieval and management<br>- Error handling is incorporated to ensure reliability, contributing to the overall robustness of the systems data handling capabilities.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- config Submodule -->
			<details>
				<summary><b>config</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ backend.config</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/config/email.js'>email.js</a></b></td>
							<td style='padding: 8px;'>- Email configuration and sending functionality are established to facilitate communication within the application<br>- Utilizing Nodemailer, it enables the dispatch of emails with customizable content, enhancing user engagement and notifications<br>- By integrating environment variables for sensitive information, it ensures secure and flexible email handling, contributing to the overall architectures robustness and maintainability in the backend.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/config/passport.js'>passport.js</a></b></td>
							<td style='padding: 8px;'>- Integrates Google authentication into the application, enabling users to log in using their Google accounts<br>- By leveraging the Google OAuth 2.0 strategy, it facilitates user management by finding or creating user records based on their Google profile information<br>- Additionally, it handles user session management, ensuring a seamless experience across the application<br>- This component is essential for enhancing user engagement and streamlining the authentication process.</td>
						</tr>
					</table>
					<!-- templates Submodule -->
					<details>
						<summary><b>templates</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ backend.config.templates</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/config/templates/welcomeEmail.js'>welcomeEmail.js</a></b></td>
									<td style='padding: 8px;'>- Welcome email template generates a visually appealing and personalized HTML email for new users of FlashNest<br>- It aims to enhance user engagement by providing a warm introduction, encouraging them to start using the platform<br>- By incorporating dynamic elements like the users first name, it fosters a welcoming atmosphere, ultimately driving users to explore the features of FlashNest and begin their learning journey.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- middleware Submodule -->
			<details>
				<summary><b>middleware</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ backend.middleware</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/backend/middleware/rateLimtter.js'>rateLimtter.js</a></b></td>
							<td style='padding: 8px;'>- Implements a rate limiting middleware that controls the number of requests a user can make within a specified time window<br>- By tracking user requests, it prevents abuse and ensures fair usage of resources<br>- When a user exceeds the defined limit, it responds with an error message, promoting a stable and reliable backend service within the overall architecture of the project.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- frontend Submodule -->
	<details>
		<summary><b>frontend</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ frontend</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/jsconfig.json'>jsconfig.json</a></b></td>
					<td style='padding: 8px;'>- Facilitates module resolution within the frontend codebase by defining path aliases<br>- This configuration enhances code readability and maintainability, allowing developers to reference files using simplified paths<br>- By streamlining imports, it contributes to a more organized project structure, ultimately improving the development experience and fostering collaboration among team members.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/postcss.config.mjs'>postcss.config.mjs</a></b></td>
					<td style='padding: 8px;'>- Configures PostCSS to utilize Tailwind CSS as a plugin, enabling streamlined styling and responsive design capabilities within the frontend architecture<br>- This setup enhances the overall user interface by allowing developers to leverage Tailwinds utility-first approach, ensuring a consistent and efficient styling process across the project<br>- The integration supports a modern development workflow, promoting maintainability and scalability in the codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/middleware.js'>middleware.js</a></b></td>
					<td style='padding: 8px;'>- Middleware functionality ensures secure access control within the application by managing user authentication through JSON Web Tokens (JWT)<br>- It redirects users based on their authentication status, preventing unauthorized access to protected routes while guiding logged-in users away from login and signup pages<br>- This component plays a crucial role in maintaining the integrity of the user experience across the projects frontend architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/package-lock.json'>package-lock.json</a></b></td>
					<td style='padding: 8px;'>- Project Summary## OverviewThe <code>frontend/package-lock.json</code> file is a crucial component of the project's architecture, specifically designed to manage and lock the dependencies for the frontend application<br>- This file ensures that all the necessary libraries and packages required for the frontend to function correctly are consistently installed across different environments.## PurposeThe primary purpose of this file is to provide a detailed snapshot of the exact versions of the dependencies used in the frontend application, including libraries such as React, Next.js, and Framer Motion<br>- By locking these versions, the project maintains stability and predictability, preventing potential issues that could arise from version mismatches during development and deployment.## UseIn the context of the overall codebase, this file plays a vital role in facilitating a smooth development experience<br>- It allows developers to quickly set up their local environments with the same dependencies, ensuring that the application behaves consistently regardless of where it is run<br>- This is particularly important in collaborative projects where multiple developers are working on the same codebase.By managing dependencies effectively, the <code>package-lock.json</code> file contributes to the reliability and maintainability of the frontend application, ultimately enhancing the user experience and the overall quality of the project.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/eslint.config.mjs'>eslint.config.mjs</a></b></td>
					<td style='padding: 8px;'>- Configures ESLint for the frontend of the project, ensuring adherence to coding standards and best practices<br>- By extending Next.js and core web vitals configurations, it enhances code quality while allowing specific rules to be customized<br>- This setup promotes a consistent coding style across the codebase, facilitating collaboration and reducing potential errors during development.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/next.config.mjs'>next.config.mjs</a></b></td>
					<td style='padding: 8px;'>- Configures the Next.js application to enhance security and manage cross-origin resource sharing (CORS) settings<br>- By defining specific headers, it ensures that the frontend can communicate effectively with backend services, whether in production or local development<br>- This setup is crucial for maintaining a seamless user experience while adhering to best practices for web application security.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the frontend environment for a web application, utilizing Next.js for server-side rendering and React for building user interfaces<br>- It manages essential dependencies for animations, state management, and styling, while also incorporating development tools for linting and code quality<br>- This setup facilitates a streamlined development process, enabling efficient building, testing, and deployment of the application.</td>
				</tr>
			</table>
			<!-- context Submodule -->
			<details>
				<summary><b>context</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ frontend.context</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/context/StudyContext.js'>StudyContext.js</a></b></td>
							<td style='padding: 8px;'>- StudyContext serves as a central hub for managing the state and interactions related to study decks and flashcards within the application<br>- It facilitates the creation, retrieval, updating, and deletion of decks and flashcards while also handling loading states and errors<br>- Additionally, it integrates AI capabilities for enhanced user interaction, providing a seamless experience for users engaging with study materials.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/context/AuthProvider.js'>AuthProvider.js</a></b></td>
							<td style='padding: 8px;'>- AuthProvider serves as a central authentication context for managing user sessions within the application<br>- It facilitates user registration, login, logout, and profile management while handling loading states and errors<br>- By providing a consistent interface for authentication-related operations, it enhances the user experience and ensures secure access to protected resources throughout the codebase.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/context/AiContext.js'>AiContext.js</a></b></td>
							<td style='padding: 8px;'>- AiContext facilitates the management of AI-generated flashcards within the application<br>- It provides a context for storing flashcards, handling loading states, and managing errors<br>- By enabling users to preview and save flashcards through API interactions, it enhances the user experience in creating and organizing educational content, seamlessly integrating with the broader project architecture focused on interactive learning tools.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- app Submodule -->
			<details>
				<summary><b>app</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ frontend.app</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/globals.css'>globals.css</a></b></td>
							<td style='padding: 8px;'>- Defines global styles for the application, establishing a consistent visual theme and responsive design<br>- It sets background and foreground colors based on user preferences, ensuring accessibility in both light and dark modes<br>- By integrating Tailwind CSS, it enhances the overall aesthetic and usability, contributing to a cohesive user experience across the frontend architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/layout.js'>layout.js</a></b></td>
							<td style='padding: 8px;'>- Establishes the foundational layout for the FlashNest application, integrating essential context providers for authentication, study management, and AI functionalities<br>- It sets the overall metadata for the platform, ensuring a cohesive user experience while applying custom fonts for enhanced aesthetics<br>- The layout serves as a wrapper for all child components, facilitating a structured and responsive interface for users engaging with the flashcard learning platform.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/page.js'>page.js</a></b></td>
							<td style='padding: 8px;'>The component rotates through a predefined list of impactful words, reinforcing the applications mission to empower users to learn and grow in various aspects of their lives.-<strong>Responsive DesignThe implementation includes a mobile menu toggle, ensuring accessibility and usability across different devices.-</strong>Smooth AnimationsUtilizing the <code>framer-motion</code> library, the component incorporates animations that enhance the visual appeal and user engagement, making transitions between words smooth and visually appealing.Overall, <code>page.js</code> plays a crucial role in the user interface, aligning with the projects goal of providing an interactive and motivating learning environment.</td>
						</tr>
					</table>
					<!-- login Submodule -->
					<details>
						<summary><b>login</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ frontend.app.login</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/login/page.js'>page.js</a></b></td>
									<td style='padding: 8px;'>- Login functionality enables users to securely access their accounts within the FlashNest application<br>- It facilitates user authentication through email and password input, while also providing options for password visibility and account recovery<br>- The design emphasizes user experience with a responsive layout and visual feedback, guiding users towards their personalized learning journey with flashcards after successful login.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- _components Submodule -->
					<details>
						<summary><b>_components</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ frontend.app._components</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/_components/FlashcardList.js'>FlashcardList.js</a></b></td>
									<td style='padding: 8px;'>- FlashcardList serves as a dynamic component for displaying a collection of flashcards within the application<br>- It facilitates user interaction by allowing the editing of existing flashcards and the creation of new ones<br>- The component adapts its layout based on user preferences, ensuring an organized presentation of flashcards, while also providing feedback when no flashcards are available, encouraging users to engage with the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/_components/DeckForm.js'>DeckForm.js</a></b></td>
									<td style='padding: 8px;'>- DeckForm component facilitates the creation and updating of study decks within the application<br>- It provides a user-friendly interface for inputting essential details such as title, description, category, and visibility settings<br>- By integrating with the StudyContext, it ensures seamless data management and feedback handling, enhancing the overall user experience in managing study resources effectively.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/_components/deck.js'>deck.js</a></b></td>
									<td style='padding: 8px;'>- Deck component facilitates the display and management of study decks within the application<br>- It allows users to view deck details, edit, and delete decks through interactive modals<br>- The component enhances user experience by providing visual feedback and confirmation for critical actions, ensuring that users can manage their study materials effectively while maintaining data integrity.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/_components/FlashcardViewer.js'>FlashcardViewer.js</a></b></td>
									<td style='padding: 8px;'>- FlashcardViewer serves as a dynamic interface for displaying and navigating through a collection of flashcards<br>- It allows users to view questions and answers, flip cards for additional information, and navigate between cards using buttons or keyboard shortcuts<br>- This component enhances the learning experience by providing an interactive way to engage with flashcard content, making it a vital part of the educational tools architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/_components/LoadingSpinner.js'>LoadingSpinner.js</a></b></td>
									<td style='padding: 8px;'>- LoadingSpinner serves as a visual indicator within the FlashNest application, enhancing user experience during content loading<br>- Positioned centrally on the screen, it combines branding elements with an animated spinner, signaling to users that the application is processing their request<br>- This component contributes to the overall architecture by ensuring a seamless and engaging interface, maintaining user engagement while data is being fetched or processed.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/_components/FlashcardListItem.js'>FlashcardListItem.js</a></b></td>
									<td style='padding: 8px;'>- FlashcardListItem serves as a dynamic component for rendering individual flashcards within a list view, enhancing user interaction through animations and a clean design<br>- It displays essential flashcard details, including the question, answer, and creation date, while providing an edit option for user convenience<br>- This component integrates seamlessly into the broader architecture, contributing to an engaging and interactive flashcard application experience.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/_components/Modal.js'>Modal.js</a></b></td>
									<td style='padding: 8px;'>- Modal component enhances user experience by providing a dynamic and accessible overlay for displaying content<br>- It manages visibility based on user interactions, supports keyboard navigation for accessibility, and prevents background scrolling when active<br>- The component integrates animations for smooth transitions, ensuring a visually appealing presentation while allowing users to easily close the modal through various interactions, including an escape key press.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/_components/FlashcardForm.js'>FlashcardForm.js</a></b></td>
									<td style='padding: 8px;'>- FlashcardForm facilitates the creation and editing of flashcards within the application<br>- It provides a user-friendly interface for inputting essential details such as questions, answers, hints, and tags, while ensuring data validation<br>- By integrating with the StudyContext, it allows users to manage flashcards effectively, enhancing their study experience through seamless updates and notifications upon successful submissions.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/_components/flashcard.js'>flashcard.js</a></b></td>
									<td style='padding: 8px;'>- Flashcard component enhances user engagement by providing an interactive way to study content through a visually appealing card flip animation<br>- It displays a question on one side and the answer on the reverse, allowing users to test their knowledge<br>- Additional features such as hints, tags, and customizable deck information enrich the learning experience, making it a vital part of the educational application’s user interface.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/_components/InlineSpinner.js'>InlineSpinner.js</a></b></td>
									<td style='padding: 8px;'>- InlineSpinner serves as a visual loading indicator within the frontend application, enhancing user experience by providing feedback during asynchronous operations<br>- Its integration into the component architecture allows for seamless display of loading states, ensuring that users remain informed while content is being processed<br>- This contributes to a polished and responsive interface, aligning with the overall goal of delivering a smooth and engaging user experience.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/_components/DeckHeader.js'>DeckHeader.js</a></b></td>
									<td style='padding: 8px;'>- DeckHeader serves as a user interface component that presents essential information about a flashcard deck, including its title, description, creation date, and card count<br>- It facilitates user interaction by providing options to navigate back to the decks overview and to edit the deck details through a modal form<br>- This component enhances the overall user experience by allowing seamless management of deck content within the application.</td>
								</tr>
							</table>
							<!-- UI Submodule -->
							<details>
								<summary><b>UI</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ frontend.app._components.UI</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/_components/UI/DashboardPage.js'>DashboardPage.js</a></b></td>
											<td style='padding: 8px;'>- DashboardPage serves as a central hub for users to engage with their study materials, showcasing personalized statistics and recent decks<br>- It enhances user experience by providing a welcoming interface, displaying progress metrics, and facilitating easy navigation to learning resources<br>- The component integrates seamlessly with authentication and study contexts, allowing users to manage their decks effectively while tracking their learning journey.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/_components/UI/AiFlashcardPreview.js'>AiFlashcardPreview.js</a></b></td>
											<td style='padding: 8px;'>- AiFlashcardPreview serves as a user interface component that displays AI-generated flashcards for a specified deck<br>- It manages the loading state, handles errors, and allows users to save or regenerate flashcards<br>- By integrating with the AiContext, it enhances the overall user experience by providing interactive features that facilitate the study process, making learning more engaging and efficient.</td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- dashboard Submodule -->
					<details>
						<summary><b>dashboard</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ frontend.app.dashboard</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/dashboard/layout.js'>layout.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates the layout and navigation of the dashboard within the application, providing a user-friendly interface for accessing various features such as decks, flashcard generation, and account settings<br>- It manages user authentication states, displays loading indicators, and adapts to mobile and desktop views, ensuring a seamless experience for users while maintaining an organized structure for content presentation.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/dashboard/page.js'>page.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates user authentication and access control for the dashboard interface within the application<br>- It verifies the presence and validity of a JWT token stored in cookies, ensuring that only authenticated users can access the dashboard<br>- If authentication fails, it redirects users to the login page with appropriate error messages, thereby enhancing security and user experience in the overall codebase architecture.</td>
								</tr>
							</table>
							<!-- generate Submodule -->
							<details>
								<summary><b>generate</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ frontend.app.dashboard.generate</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/dashboard/generate/page.js'>page.js</a></b></td>
											<td style='padding: 8px;'>- Select a deck from their collection to which the flashcards will be added.-Input text or choose a topic to generate flashcards.-Upload files to extract content for flashcard creation.-Preview generated flashcards before saving them to their decks.By integrating with the Study and AI contexts, the component ensures a seamless user experience, providing real-time feedback and notifications for actions taken within the application<br>- The use of state management allows for dynamic updates, ensuring that users can interact with the component efficiently.Overall, <code>GenerateFlashcards</code> plays a crucial role in enhancing the educational tools available in the application, making it easier for users to create personalized study materials.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- decks Submodule -->
							<details>
								<summary><b>decks</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ frontend.app.dashboard.decks</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/dashboard/decks/page.js'>page.js</a></b></td>
											<td style='padding: 8px;'>- Deck management functionality enables users to create, edit, and delete flashcard decks within the application<br>- It provides a user-friendly interface for searching and filtering decks based on various criteria, enhancing the study experience<br>- Additionally, it integrates modal components for deck creation and editing, ensuring a seamless interaction for users to manage their learning resources effectively.</td>
										</tr>
									</table>
									<!-- [id] Submodule -->
									<details>
										<summary><b>[id]</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ frontend.app.dashboard.decks.[id]</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/dashboard/decks/[id]/page.js'>page.js</a></b></td>
													<td style='padding: 8px;'>- DeckDetails component serves as a dynamic interface for displaying and managing flashcard decks within the application<br>- It fetches and presents deck information, allows users to create and edit flashcards, and provides a viewer for navigating through flashcards<br>- Additionally, it handles loading states and error scenarios, ensuring a seamless user experience while interacting with the study materials.</td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- quiz Submodule -->
							<details>
								<summary><b>quiz</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ frontend.app.dashboard.quiz</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/dashboard/quiz/page.js'>page.js</a></b></td>
											<td style='padding: 8px;'>- Facilitates the rendering of the Quiz component within the dashboard of the frontend application<br>- By providing a dedicated space for quiz-related content, it enhances user engagement and interaction, contributing to the overall functionality of the application<br>- This component plays a crucial role in delivering educational content, aligning with the projects goal of creating an interactive learning experience.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- account Submodule -->
							<details>
								<summary><b>account</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ frontend.app.dashboard.account</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/dashboard/account/page.js'>page.js</a></b></td>
											<td style='padding: 8px;'>- Account management interface facilitates user profile updates within the application<br>- It allows users to edit personal information such as name and email, change passwords, and delete their accounts<br>- By integrating with the authentication context, it ensures that changes are securely processed and provides a responsive user experience, enhancing overall account management capabilities in the dashboard.</td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- reset-password Submodule -->
					<details>
						<summary><b>reset-password</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ frontend.app.reset-password</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/reset-password/page.js'>page.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates the password reset process for users by providing a user-friendly interface to enter and confirm a new password<br>- It validates input for security, handles error and success messages, and integrates with authentication services to ensure a seamless experience<br>- This component is essential for maintaining user account security within the broader application architecture, enhancing user trust and engagement.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- signup Submodule -->
					<details>
						<summary><b>signup</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ frontend.app.signup</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/signup/page.js'>page.js</a></b></td>
									<td style='padding: 8px;'>- The component captures essential user information, including first name, last name, email, and password, ensuring a smooth signup experience.-<strong>ValidationIt includes basic validation to ensure that required fields are filled out correctly, enhancing data integrity and user experience.-</strong>Loading and Error StatesThe component manages loading states and displays error messages, providing feedback to users during the signup process.-**NavigationUpon successful registration, it utilizes routing capabilities to navigate users to the appropriate page, integrating seamlessly with the overall application flow.## Purpose in the CodebaseThis component is integral to the overall architecture of the project, as it not only supports user onboarding but also interacts with the authentication context to manage user sessions<br>- By enabling new users to register, it lays the foundation for user engagement and retention within the application.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- forgot-password Submodule -->
					<details>
						<summary><b>forgot-password</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ frontend.app.forgot-password</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/app/forgot-password/page.js'>page.js</a></b></td>
									<td style='padding: 8px;'>- ForgotPassword component facilitates the user experience for password recovery within the application<br>- It allows users to input their email address to request a password reset link, providing feedback on the success or failure of the request<br>- This component integrates seamlessly with the authentication context, enhancing the overall security and usability of the application by ensuring users can regain access to their accounts efficiently.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- utils Submodule -->
			<details>
				<summary><b>utils</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ frontend.utils</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/FlashNest/blob/master/frontend/utils/dateUtils.js'>dateUtils.js</a></b></td>
							<td style='padding: 8px;'>- Date utility functions enhance the frontend by providing human-readable date formatting<br>- They convert date strings or Date objects into user-friendly formats, display relative time differences, and format date ranges<br>- Additionally, they ensure valid date inputs, returning appropriate messages for invalid cases<br>- These functions contribute to a more intuitive user experience by presenting dates and times in a clear and accessible manner.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### Installation

Build FlashNest from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/OlubodeMichael/FlashNest
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd FlashNest
    ```

3. **Install the dependencies:**

**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### Testing

Flashnest uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

## Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

<div align="left"><a href="#top">⬆ Return</a></div>

---
