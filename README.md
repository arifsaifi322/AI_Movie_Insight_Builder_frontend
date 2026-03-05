# 🎬 AI Movie Insight Builder

AI Movie Insight Builder is a web application that analyzes audience sentiment for movies using real IMDb reviews.
Users can enter an IMDb Movie ID and receive structured information including movie details, audience reviews, and an AI-generated sentiment summary.

The project demonstrates full-stack development with a React frontend, Node.js backend, web scraping, and AI-based text summarization.

---

# 🌐 Live Application

Frontend
https://ai-movie-insight-builder-frontend.onrender.com/

Backend API
https://ai-movie-insight-builder-backend-t2bh.onrender.com

Frontend Repository
https://github.com/arifsaifi322/AI_Movie_Insight_Builder_frontend

Backend Repository
https://github.com/arifsaifi322/AI_Movie_Insight_Builder_-backend-

---

# ⚠️ Important (Render Free Tier Notice)

Both the frontend and backend are hosted on Render free tier.

Render free services automatically go into **sleep mode after inactivity**.
Because of this, the backend may take **30–60 seconds to wake up**.

### Before testing the app

First start the backend by opening this URL in your browser:

https://ai-movie-insight-builder-backend-t2bh.onrender.com/movie/tt4154756

This wakes up the backend service.

Then open the frontend:

https://ai-movie-insight-builder-frontend.onrender.com/

---

# 🧪 How to Use the Application

1. Open the frontend application.
2. Enter an **IMDb Movie ID** in the search box.

Example Movie IDs

```
tt4154756
tt1375666
tt0468569
```

3. Click search.

The application will display:

• Movie details
• Cast information
• Audience reviews from IMDb
• AI generated audience sentiment summary

---

# ⚙️ Setup Instructions

## 1. Clone Frontend

```bash
git clone https://github.com/arifsaifi322/AI_Movie_Insight_Builder_frontend.git
cd AI_Movie_Insight_Builder_frontend
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Frontend will run on

```
http://localhost:5173
```

---

## 2. Clone Backend

```bash
git clone https://github.com/arifsaifi322/AI_Movie_Insight_Builder_-backend-.git
cd AI_Movie_Insight_Builder_-backend-
```

Install dependencies

```bash
npm install
```

Start the backend server

```bash
node server.js
```

Backend will run on

```
http://localhost:5000
```

---

# 🧠 Tech Stack

Frontend

* React
* Vite
* CSS

Backend

* Node.js
* Express.js

Data & APIs

* OMDb API (movie information)
* IMDb review scraping

AI

* AI-based summarization for audience sentiment analysis

Deployment

* Render (frontend + backend)

---

# 🤔 Tech Stack Rationale

React was used to build a responsive and interactive user interface.
Vite was chosen for fast development builds and modern frontend tooling.

Node.js and Express were selected for backend development due to their efficiency in handling API requests and web scraping.

The OMDb API provides structured movie metadata, while IMDb review scraping allows collection of real audience opinions.

AI summarization is used to convert multiple audience reviews into a concise sentiment summary for easier interpretation.

---

# 📊 System Architecture

User
↓
React Frontend
↓
Node.js Backend API
↓
IMDb Reviews + OMDb API
↓
AI Sentiment Summary
↓
Frontend Display

---

# 📌 Assumptions

• Users provide valid IMDb movie IDs.
• IMDb page structure remains consistent for scraping reviews.
• OMDb API remains available and stable.
• AI summarization API is available for generating sentiment insights.

---

# 🚀 Future Improvements

• Add rating visualization and charts
• Improve AI sentiment accuracy
• Cache scraped reviews for faster performance
• Add trending movie analysis
• Deploy frontend on Vercel for faster performance

---

# 👨‍💻 Author

Arif Saifi

BCA Student | Full Stack Developer | AI Enthusiast
