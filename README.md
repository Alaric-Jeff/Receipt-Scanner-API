<h1 align="center">🧾 Receipt Scanner API</h1>
<p align="center">
  A powerful Node.js backend service to extract useful receipt data via OCR.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Multer-4A154B?style=flat-square"/>
  <img src="https://img.shields.io/badge/Tesseract OCR-FF8C00?style=flat-square"/>
</p>

---

## 📌 Overview

**Receipt-Scanner-API** is a backend service that lets users upload receipt images and automatically extracts item names, prices, and total amounts using OCR (Optical Character Recognition). Useful for:
- Expense tracking
- Budgeting tools
- Business bookkeeping

---

## ⚙️ Features

- 🧾 Upload receipt images
- 🔍 Extract structured data via **Tesseract OCR**
- 🧠 Clean, modular codebase using **TypeScript**
- 🧰 File handling with **Multer**
- 🗃️ Database management with **Prisma** & **PostgreSQL**
- 🧪 Extendable structure for future improvements

---

## 🛠️ Tech Stack

### 🚀 Backend

- **Node.js**
- **Express.js**
- **TypeScript**
- **Tesseract OCR**
- **Multer**
- **Prisma ORM**
- **PostgreSQL**

### 📦 Packages

- `tesseract.js` – OCR engine
- `multer` – File upload middleware
- `winston` – Logging
- `dotenv` – Environment variable support
- `bcryptjs` – (optional if user auth added)

---

## 📂 Project Structure

```bash
Backend/
├── dist/                   # Compiled JS output from TypeScript
├── logs/                  # App logs
├── node_modules/          # Installed packages
├── prisma/                # Prisma schema and migrations
├── src/                   # Main source files
│   ├── uploads/           # Uploaded receipt images
│   ├── utils/             # Utility modules
│   │   ├── logger.ts
│   │   ├── multer.ts
│   │   └── tesseractConfig.ts
│   └── app.ts             # Main app entry
├── .env                   # Environment variables
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
├── LICENSE
└── README.md
