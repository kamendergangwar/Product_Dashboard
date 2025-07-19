# 🚀 Product Management Dashboard

A modern and responsive web application built using **Vite**, **React**, and **Tailwind CSS** for managing product data with ease. It features a real-time product dashboard, drag-and-drop table functionality, an in-memory cart system, and clean UI design optimized for performance.

---

## 📚 Table of Contents

- [✨ Features](#-features)
- [🗂️ Folder Structure](#-folder-structure)
- [⚙️ Prerequisites](#️-prerequisites)
- [🛠️ Setup Instructions](#-setup-instructions)
- [📌 License](#-license)

---

## ✨ Features

### 📌 Dashboard Overview
- **Header** with navigation, debounced search bar, cart item count, and user avatar.
- **Stats Cards** for key metrics:
  - Total Products
  - Total Revenue
  - Low Stock Items
  - Categories Count

### 📋 Product Table
- Renders **1000+ mock products**
- Columns: `ID`, `Image`, `Name`, `Category`, `Price`, `Stock`, `Status`, `Actions`
- Features:
  - ✅ Pagination (10 items per page)
  - ✅ Sorting by columns
  - ✅ Drag-and-drop column reordering
  - ✅ Actions (Add to Cart, Edit, Delete, View Details - placeholders)

### 🛒 Cart Modal
- Slide-out interface with:
  - Product quantity controls
  - Remove item functionality
  - Total price calculation

### 🔍 Debounced Search
- Instant filtering of products by name with delay optimization

### 📱 Responsive Design
- Fully mobile-first and responsive with **Tailwind CSS**

---

## 🗂️ Folder Structure

```
product-dashboard/
├── public/
│   └── vite.svg                 # Default Vite favicon
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Header with navigation, search, cart badge
│   │   ├── StatsCards.jsx       # Dashboard metric cards
│   │   ├── ProductTable.jsx     # Product table (pagination, DnD, actions)
│   │   ├── CartModal.jsx        # Cart slide-out modal
│   │   └── SearchBar.jsx        # Debounced search input
│   ├── utils/
│   │   └── mockData.js          # Mock data generator for products
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Tailwind base and custom styles
├── .vscode/
│   └── settings.json            # Tailwind linting suppressor
├── index.html                   # Root HTML file
├── package.json                 # Project dependencies and scripts
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
└── README.md                    # Project documentation
```

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: `v16.x` or higher (preferably `v20.19.0`+)
- **npm**: `v8.x` or higher
- A modern browser like **Chrome**, **Firefox**, or **Edge**

---

## 🛠️ Setup Instructions

### 📥 1. Clone the Repository

```bash
git clone <https://github.com/kamendergangwar/Product_Dashboard.git>
cd product-dashboard
```

### 📦 2. Install Dependencies

```bash
npm install
```

### 🔧 3. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

Output will be generated in the `/dist` directory.

---


