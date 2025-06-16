<!-- README.md -->

# VoidQuiz

![Project Logo](public/logo.png) <!-- Replace with your logo if you have one -->

**VoidQuiz** is a themable quiz web app built with Angular, PrimeNG, and Tailwind CSS.
It features a variety of pop culture quiz topics (films, music, Marvel, Disney, history, and more), instant feedback, and a clean, mobile-friendly interface.

---

## Table of Contents

<!-- * [Demo](#demo) -->

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
  <!-- * [Contributing](#contributing) -->
  <!-- * [License](#license) -->
  <!-- * [Acknowledgements](#acknowledgements) -->
- [Contact](#contact)

<!-- ---

## Demo

Check out a live demo: **coming soon!**
Or run locally at [http://localhost:4200](http://localhost:4200).

![Screenshot](public/screenshot.png) Add or replace with your screenshot -->

---

## Tech Stack

**Frontend:**

- Angular 19
- PrimeNG
- Tailwind CSS

**Backend:**

- None (all quiz data is local to the frontend)

**Database:**

- None (data is loaded from static TypeScript files)

**Tools:**

- Angular CLI
- ESLint, Prettier, Husky
- Karma/Jasmine (unit testing)

---

## Getting Started

### Prerequisites

- Node.js (>=20.x)
- npm

### Installation

```bash
git clone https://github.com/Ange230700/void_quiz.git
cd void_quiz
npm install
```

---

## Running the Project

Start the frontend:

```bash
npm start
# or
ng serve
```

Open [http://localhost:4200](http://localhost:4200) to use the app.

---

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── thematics/       # Thematic selection page
│   │   │   ├── quiz/            # Quiz logic & UI
│   │   │   └── result/          # Result and feedback UI
│   │   ├── models/              # TypeScript interfaces for quiz data
│   │   ├── services/            # QuizService (loads questions, feedback)
│   │   ├── app.component.ts     # Main app shell
│   │   └── app.routes.ts        # Angular routes
│   ├── data/                    # Quiz data for each topic/theme
│   ├── styles.css               # Tailwind & PrimeNG global styles
│   └── index.html               # App entrypoint
├── public/                      # Static assets (logo, favicon, screenshots)
├── package.json
├── angular.json
├── tsconfig.json
└── ...
```

---

## API Documentation

No backend API required.
Quiz questions and topics are loaded from static TypeScript modules in `src/data/`.
If you want to provide quiz data from a server, you can adapt the service layer to fetch from a REST API.

---

## Testing

To run unit tests:

```bash
npm test
# or
ng test
```

Angular uses Karma and Jasmine for unit testing by default.

---

## Deployment

To build the production bundle:

```bash
npm run build
# or
ng build
```

Deploy the contents of `dist/void_quiz/` to your favorite static hosting (Vercel, Netlify, GitHub Pages, etc.).

---

## Environment Variables

VoidQuiz does not require any environment variables by default.
If you add an API or other features, document your `.env` keys here.

<!-- ---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

Code formatting and linting are enforced via Prettier, ESLint, and Husky hooks. -->

<!-- ---

## License

MIT License -->

<!-- ---

## Acknowledgements

Special thanks to the following libraries, frameworks, and contributors:

* [Angular](https://angular.io/)
* [PrimeNG](https://primeng.org/)
* [Tailwind CSS](https://tailwindcss.com/) -->

---

## Contact

Ange KOUAKOU – [kouakouangeericstephane@gmail.com](mailto:kouakouangeericstephane@gmail.com)

[Project Link](https://github.com/Ange230700/void_quiz)
