# Aquarium Store

A full-stack eCommerce web application for a Pet Care / Aquarium Store using JavaScript technologies.

## Project Structure

- `/backend` - Node.js + Express API
- `/frontend` - React + Vite frontend

## Backend Setup

1. Open a terminal in `backend`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and update values:
   - `MONGO_URI` (use your MongoDB Atlas URI or `mongodb://127.0.0.1:27017/aquarium` for local development)
   - `JWT_SECRET`
4. If using local MongoDB, make sure the MongoDB service is installed and running.
5. Start development server:
   ```bash
   npm run dev
   ```
5. Seed sample data:
   ```bash
   node scripts/seed.js
   ```

### Backend Contents

- `server.js` - Express server entrypoint
- `config/db.js` - MongoDB connection
- `controllers/` - Route controllers
- `routes/` - API routes
- `middleware/` - Authentication + error handling
- `models/` - Mongoose schemas
- `data/products.js` - Sample product data
- `scripts/seed.js` - Database seed script

## Frontend Setup

1. Open a terminal in `frontend`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and verify `VITE_API_URL`.
4. Start Vite development server:
   ```bash
   npm run dev
   ```

### Frontend Contents

- `src/App.jsx` - Routes and app shell
- `src/components/` - UI components and layout
- `src/pages/` - Pages for store, cart, checkout, auth, dashboard
- `src/redux/` - Redux store and slices
- `src/services/api.js` - Axios API client
- `src/index.css` - Tailwind styling

## API Base URL

- `http://localhost:5000/api`

## Available API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`
- `POST /api/orders`
- `GET /api/orders/myorders`
- `POST /api/products/:id/reviews`

## Notes

- Use MongoDB Atlas for the database connection, and make sure your current IP address is added to the Atlas cluster IP whitelist.
- If Atlas is unavailable during local development, the backend will attempt a fallback connection to `mongodb://127.0.0.1:27017/aquarium`.
- Admin routes require a JWT and admin privileges.
- A sample admin user is seeded via the backend seed script.

## Deployment

### Backend

Your backend is already deployed on Render. Make sure your Render service is configured with:
- `MONGO_URI` from MongoDB Atlas
- `JWT_SECRET`
- `NODE_ENV=production`

### Frontend

This repo includes Vercel support in `frontend/vercel.json`.

To deploy the frontend on Vercel:
1. Log in to Vercel and import the GitHub repo `tarikmanasiya325/aquaworld-shop`.
2. Set the project root to `frontend`.
3. Use:
   - Build command: `npm install && npm run build`
   - Output directory: `dist`
4. Add the environment variable:
   - `VITE_API_URL=https://aquaworld-shop.onrender.com/api`
5. Deploy and copy the live Vercel URL.

### Local Vercel deployment

If you want to deploy from the command line after logging in to Vercel:
```bash
cd frontend
npx vercel
```

Once deployed, the frontend will connect to your Render backend using `VITE_API_URL`.
