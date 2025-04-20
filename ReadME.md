# Product Listing Application

## Description
This project is a full-stack application for listing and filtering products. It includes a **React + TypeScript + Vite** frontend and an **Express + TypeScript** backend. The application fetches product data from the backend, calculates prices dynamically based on gold prices, and displays them in a responsive UI.

## Features
- Dynamic product pricing based on gold prices.
- Responsive design with a carousel and product cards.
- Filtering products by price and popularity.
- Backend API for fetching and filtering product data.

## Project Structure
```
assignment/
├── frontend/   # React + TypeScript frontend
├── backend/    # Express + TypeScript backend
└── .gitignore  # Common ignore rules
```

## Installation

### Prerequisites
- Node.js
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd assignment
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

## Running the Application

### Backend
1. Create a `.env` file in the `backend` directory with the following variables:
   ```
   PORT=5000
   GOLD_API_URL=<gold-price-api-url>
   GOLD_API_KEY=<your-api-key>
   ```
2. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend
1. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

2. Open the application in your browser at `http://localhost:5173`.

## API Endpoints
- **GET /api/products**: Fetch all products with calculated prices.
- **GET /api/products/filter**: Fetch filtered products based on query parameters:
  - `minPrice`, `maxPrice`: Filter by price range.
  - `minPopularity`, `maxPopularity`: Filter by popularity score.

## License
This project is licensed under the [MIT License](LICENSE).
