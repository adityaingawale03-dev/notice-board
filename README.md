# 📢 Notice Board

A modern, responsive Notice Board application built with **Next.js**, **Prisma ORM**, **MySQL (TiDB Cloud)**, and **Tailwind CSS**.

The application allows users to create, view, edit, search, filter, and delete notices through a clean and responsive interface.

---

# 🚀 Features

- 📄 View all notices
- ➕ Create new notices
- ✏️ Edit existing notices
- 🗑️ Delete notices with confirmation modal
- 🔍 Search notices by title or description
- 📂 Filter notices by category
- ⭐ Display urgent and normal notices
- 📊 Dashboard statistics
- 📱 Fully responsive design
- 🎨 Modern UI using Tailwind CSS

---

# 🛠️ Tech Stack

## Frontend

- Next.js (Pages Router)
- React.js
- Tailwind CSS
- Axios
- React Hot Toast
- Lucide React

## Backend

- Next.js API Routes
- Prisma ORM
- MySQL (TiDB Cloud)

---

# 📁 Project Structure

```
notice-board/
│
├── components/
│   ├── DeleteModal.js
│   ├── Navbar.js
│   ├── NoticeCard.js
│   ├── NoticeForm.js
│   ├── SearchFilter.js
│   └── StatsCards.js
│
├── lib/
│   └── prisma.js
│
├── pages/
│   ├── api/
│   │   └── notices/
│   ├── edit/
│   ├── _app.js
│   ├── _document.js
│   ├── add.js
│   └── index.js
│
├── prisma/
│   └── schema.prisma
│
├── public/
├── styles/
└── README.md
```

---

# ⚙️ Prerequisites

Before running the project, ensure the following are installed:

- Node.js (v18 or later)
- npm
- Git
- MySQL database (or TiDB Cloud)

---

# ▶️ Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/adityaingawale03-dev/notice-board.git
```

### 2. Navigate into the project

```bash
cd notice-board
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Create a `.env` file in the project root and add:

```env
DATABASE_URL="mysql://username:password@host:4000/database"
```

Replace the connection string with your own database credentials.

### 5. Generate Prisma Client

```bash
npx prisma generate
```

### 6. Push the Prisma schema to the database

```bash
npx prisma db push
```

### 7. Start the development server

```bash
npm run dev
```

Open your browser and navigate to:

```
http://localhost:3000
```

---

# 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notices` | Get all notices |
| GET | `/api/notices/:id` | Get a notice by ID |
| POST | `/api/notices` | Create a notice |
| PUT | `/api/notices/:id` | Update a notice |
| DELETE | `/api/notices/:id` | Delete a notice |

---

# 📷 Screenshots

### Dashboard

![Dashboard](./public/screenshots/dashboard.png)

### Add Notice

![Add Notice](./public/screenshots/form.png)

### Delete Confirmation

![Delete Confirmation](./public/screenshots/delete.png)

---

# 🔮 One Thing I Would Improve With More Time

Given more time, I would implement **user authentication and authorization** so that only authenticated users can create, edit, or delete notices. I would also introduce **pagination**, **image uploads using cloud storage**, and **form validation with React Hook Form and Zod** to improve scalability, usability, and maintainability.

---

# 🤖 Where and How AI Was Used

AI was used as a development assistant throughout the project. It helped with:

- Planning the overall project structure.
- Understanding Prisma and Next.js concepts.
- Improving React component organization and code reusability.
- Generating and refining UI components using Tailwind CSS.
- Debugging errors during development.
- Writing and improving documentation (README).

All generated code and suggestions were reviewed, tested, and modified as needed before being incorporated into the final application.

---

# 👨‍💻 Author

**Aditya Ingawale**

- GitHub:(https://github.com/adityaingawale03-dev)

---

# 📄 License

This project was developed as part of a technical assignment and is intended for educational purposes.