# 📢 Notice Board

A modern, responsive Notice Board application built with **Next.js**, **Prisma ORM**, **MySQL (TiDB Cloud)**, and **Tailwind CSS**.

The application allows users to create, view, edit, search, filter, and delete notices through a clean and responsive interface.

---

##  Features

-  View all notices
-  Create new notices
-  Edit existing notices
-  Delete notices with confirmation modal
-  Search notices by title or description
-  Filter notices by category
-  Display urgent and normal notices
-  Dashboard statistics
-  Fully responsive design
-  Modern UI using Tailwind CSS

---

##  Tech Stack

### Frontend
- Next.js (Pages Router)
- React.js
- Tailwind CSS
- Axios
- React Hot Toast
- Lucide React Icons

### Backend
- Next.js API Routes
- Prisma ORM
- MySQL (TiDB Cloud)

---

##  Project Structure

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

##  Prerequisites

Make sure you have the following installed:

- Node.js (v18 or later recommended)
- npm
- MySQL Database / TiDB Cloud
- Git

---

##  Installation

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/notice-board.git
```

### 2. Navigate to the project

```bash
cd notice-board
```

### 3. Install dependencies

```bash
npm install
```

---

##  Environment Variables

Create a `.env` file in the project root.

Example:

```env
DATABASE_URL="mysql://username:password@host:4000/database"
```

Replace the values with your own database credentials.

---

##  Database Setup

Generate Prisma Client

```bash
npx prisma generate
```

Synchronize the database schema

```bash
npx prisma db push
```

(Optional) Open Prisma Studio

```bash
npx prisma studio
```

---

##  Running the Project

Start the development server

```bash
npm run dev
```

Open your browser and visit

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/notices` | Fetch all notices |
| GET | `/api/notices/:id` | Fetch single notice |
| POST | `/api/notices` | Create a notice |
| PUT | `/api/notices/:id` | Update a notice |
| DELETE | `/api/notices/:id` | Delete a notice |

---

##  Screenshots

### Dashboard

![Dashboard](public/screenshots/dashboard.png)


### Add Notice

![Add Notice](public/screenshots/form.png)

### Edit Notice

![Delete Notice](public/screenshots/delete.png)

---



##  Author

**Aditya Ingawale**

- GitHub: 
- LinkedIn:

---

## License

This project is created for educational and assignment purposes.