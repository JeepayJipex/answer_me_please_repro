# Q&A Board

A full-stack Q&A platform built with Wasp framework, React, and SQLite. This project serves as a demonstration for my upcoming blog article (#).

## 🚀 Features

- Create and view questions
- Submit answers to questions
- Modern UI with Tailwind CSS and DaisyUI
- Full-stack type safety
- SQLite database with Prisma

## 🛠️ Tech Stack

- [Wasp](https://wasp-lang.dev/) - Full-stack framework
- [React](https://reactjs.org/) - Frontend framework
- SQLite - Database
- [Prisma](https://www.prisma.io/) - ORM
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [DaisyUI](https://daisyui.com/) - UI component library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm
- Wasp CLI

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/JeepayJipex/answer_me_please_repro.git
cd answer_me_please_repro
```

2. Install dependencies:
```bash
npm install
```

3. Run database migrations:
```bash
wasp db migrate-dev
```

4. Start the development server:
```bash
wasp start
```

The application will be available at `http://localhost:3000`

## 📝 Project Structure

```
├── .wasp/
├── migrations/
├── node_modules/
├── public/
├── src/
│   ├── answers/
│   │   ├── components/
│   │   │   └── AnswerComponents.tsx
│   │   ├── actions.ts
│   │   └── queries.ts
│   ├── app/
│   │   └── components/
│   │       └── Navbar.tsx
│   └── questions/
│       ├── components/
│       │   └── QuestionComponents.tsx
│       ├── pages/
│       │   └── QuestionPage.tsx
│       ├── actions.ts
│       ├── queries.ts
│       └── types.ts
├── Main.css
├── MainPage.tsx
├── vite-env.d.ts
├── waspLogo.png
├── .gitignore
├── .waspignore
├── .wasproot
├── main.wasp
├── package.json
├── postcss.config.js
├── schema.prisma
├── tailwind.config.cjs
├── tsconfig.json
└── vite.config.ts
```

## 🎨 UI Customization

The project uses Tailwind CSS with DaisyUI for styling. To modify the theme or styling:

1. Update `tailwind.config.cjs` for theme configuration
2. Add custom styles in `src/Main.css`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

Jean Mariette - [@JeepayJipex](https://github.com/JeepayJipex)

Project Link: [https://github.com/JeepayJipex/answer_me_please_repro](https://github.com/JeepayJipex/answer_me_please_repro)