
🎉 Frontend Quiz Application

A beautifully designed, interactive quiz application built using React + TypeScript + Vite, styled with TailwindCSS, and animated using Framer Motion.
This project is inspired by a clean, modern UI similar to your Figma design — with smooth transitions, clickable answers, a progress bar, and a final score screen.


✨ Features

✔️ Modern and clean UI inspired by Figma
✔️ Fully interactive quiz
✔️ Smooth animated transitions
✔️ Progress bar updates for each question
✔️ Score calculation with a final results page
✔️ Mobile-responsive design
✔️ Built with React + TypeScript (best industry practice)
✔️ TailwindCSS for clean styling
✔️ Framer Motion animations

🛠 Tech Stack
Category	Technology
Frontend	React, TypeScript, Vite
Styling	TailwindCSS
Animations	Framer Motion
Assets	Custom icons + Google Fonts
Deployment	Vercel / Netlify
📁 Folder Structure
frontend-quiz/
 ├── public/
 │    └── quizzz.png          # Favicon / Logo
 ├── src/
 │    ├── assets/             # images, backgrounds
 │    ├── data/
 │    │    └── questions.ts   # quiz questions
 │    ├── pages/
 │    │    ├── HomeQuiz.tsx
 │    │    └── ResultPage.tsx
 │    ├── shared/
 │    │    ├── Navbar.tsx
 │    │    ├── Option.tsx
 │    │    ├── NavButtons.tsx
 │    │    ├── QuestionCard.tsx
 │    │    └── ProgressBar.tsx
 │    ├── App.tsx
 │    ├── index.css
 │    └── main.tsx
 ├── tailwind.config.js
 ├── postcss.config.js
 ├── tsconfig.json
 ├── vite.config.ts
 └── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/KavyaPandian/quizz-web-application
cd frontend-quiz

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev


It will run on:

http://localhost:5173

4️⃣ Build for production
npm run build

🎨 Fonts Used

Playfair Display (Headings)

Inter (Body text)

Added via Google Fonts:

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;600&display=swap" rel="stylesheet" />

🧠 How Scoring Works

Each correct answer → +1 score

Final score calculated as:

percentage = (correct_answers / total_questions) * 100

🚀 Deployment Guide (Vercel)
npm run build
vercel


Or drag-and-drop dist/ into Netlify.

🤝 Contributing

This project is open for improvements!
You can:

Add more questions

Improve UI/animations

Add a timer

Add categories for quizzes

Pull requests are welcome.

📄 License

MIT License — free to use & modify.

❤️ Author

Kavya Pandian
Frontend Developer
📧 kavyapandian15@gmail.com

🔗 GitHub: https://github.com/KavyaPandian
