# 🎬 AI Movie Insight Builder

AI Movie Insight Builder is a full-stack web application that analyzes **audience sentiment from IMDb reviews** and generates an **AI-powered summary**.

Users can enter an IMDb movie ID and instantly see:

• Movie details
• Audience reviews
• AI-generated sentiment analysis

The project demonstrates **full-stack development, web scraping, and AI integration**.

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

# ⚠️ Render Free Tier Notice

Both frontend and backend are deployed on **Render free tier**.

Render automatically **puts services to sleep after inactivity**, so the backend may take **30–60 seconds to wake up**.

To start the backend service first, open:

https://ai-movie-insight-builder-backend-t2bh.onrender.com/movie/tt4154756

Then open the frontend:

https://ai-movie-insight-builder-frontend.onrender.com/

---

# 🧪 How to Use

1. Open the frontend application
2. Enter an **IMDb Movie ID**

Example IDs

```
tt4154756
tt1375666
tt0468569
```

3. Click search

The application will display:

• Movie information
• Audience reviews
• AI sentiment summary

---

# ⚙️ Setup Instructions

## Clone Frontend

```bash
git clone https://github.com/arifsaifi322/AI_Movie_Insight_Builder_frontend.git
cd AI_Movie_Insight_Builder_frontend
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🧠 Tech Stack

Frontend

• React
• Vite
• CSS

Backend

• Node.js
• Express.js

Data

• OMDb API
• IMDb review scraping

AI

• OpenAI-compatible API for sentiment analysis

Deployment

• Render

---

# 🤔 Technology Choices & Rationale

### Why React + Vite

React was chosen for building a **dynamic and interactive UI**.

Vite was selected because it provides:

• Extremely fast development builds
• Modern JavaScript tooling
• Simpler configuration compared to older bundlers

I am currently **not deeply familiar with Next.js**, so using React + Vite allowed faster development and clearer control over the frontend architecture.

---

### Why Node.js + Express Backend

Node.js and Express were used because they provide:

• Simple REST API development
• Excellent support for scraping and external APIs
• Easy integration with AI services

---

### Why Render for Deployment

This project is deployed using **Render**.

The main reason is that I currently have **more practical experience deploying applications on Render** compared to platforms such as AWS.

Render provides:

• Simple GitHub integration
• Easy backend deployment
• Free tier hosting for personal projects

While I am still learning **AWS and other cloud services**, Render allowed me to quickly deploy and test the full application.

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
AI Sentiment Analysis
↓
Frontend Display

---

# 📌 Assumptions

• Users provide valid IMDb IDs
• IMDb review structure remains relatively stable
• OMDb API remains available
• AI API returns responses in the expected format

---

# 🚀 Future Improvements

• Add rating visualization charts
• Improve AI sentiment accuracy
• Cache reviews in a database
• Add trending movie insights
• Deploy frontend on Vercel for faster CDN delivery

---

# 👨‍💻 Author

Arif Saifi

BCA Student | Full Stack Developer | AI Enthusiast
