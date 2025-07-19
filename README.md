Product Management Dashboard
A responsive web application built with Vite, React, and Tailwind CSS to manage product data. The dashboard displays product statistics, a searchable and paginated product table with drag-and-drop column reordering, and an in-memory cart system with a modal interface.
Table of Contents

Features
Folder Structure
Prerequisites
Setup Instructions


Features

Header: Includes navigation links, a search bar, a cart badge showing item count, and a user avatar.
Stats Cards: Displays key metrics: Total Products, Total Revenue, Low Stock Items, and Categories Count.
Product Table: 
Displays 1000+ mock product records with columns for ID, Image, Name, Category, Price, Stock, Status, and Actions.
Supports pagination (10 items per page), sorting by column, and drag-and-drop column reordering.
Actions include Add to Cart, Edit, Delete, and View Details (Edit/Delete/View are placeholders).


Cart Modal: A slide-out modal showing cart items with quantity controls, remove functionality, and total price calculation.
Search: Debounced search to filter products by name efficiently.
Responsive Design: Mobile-first layout using Tailwind CSS.

Folder Structure
/product-dashboard
├── /public
│   └── vite.svg                # Default Vite favicon
├── /src
│   ├── /components
│   │   ├── Header.jsx          # Header with navigation, search, and cart badge
│   │   ├── StatsCards.jsx      # Stats cards for dashboard metrics
│   │   ├── ProductTable.jsx    # Product table with pagination, search, and drag-and-drop
│   │   ├── CartModal.jsx       # Slide-out cart modal with quantity controls
│   │   └── SearchBar.jsx       # Search input with debounced search logic
│   ├── /utils
│   │   └── mockData.js         # Mock product data generation
│   ├── App.jsx                 # Main App component integrating all features
│   ├── main.jsx                # Entry point for React rendering
│   └── index.css               # Tailwind CSS configuration and custom styles
├── /.vscode
│   └── settings.json           # VS Code settings to suppress Tailwind linting warnings
├── index.html                  # Main HTML file
├── package.json                # Project dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration for Tailwind
└── README.md                   # Project documentation

Prerequisites

Node.js: Version 16.x or higher.
npm: Version 8.x or higher.
A modern web browser (e.g., Chrome, Firefox).

Setup Instructions

Clone the Project
npm install 


