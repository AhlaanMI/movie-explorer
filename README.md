# 🎬 Movie Explorer – Discover Your Favorite Films

Movie Explorer is a responsive, user-friendly React-based web application that allows users to explore movies, search for specific titles, view trending and now-playing films, toggle light/dark themes, and manage their personal list of favorite movies.

> ⚠️ **Disclaimer**: This project is a confidential assignment developed for a startup. Unauthorized access, use, or distribution is strictly prohibited.

---

## ✨ Features

### 🎥 Movie Discovery
- Browse **Now Playing** and **Trending Movies** powered by the TMDb API.
- View real-time movie posters, titles, ratings, genres, and release dates.

### 🔍 Search Functionality
- Search for movies by title with real-time results.
- Dynamic results powered by the TMDb Search API.
- **Infinite scrolling** or optional **Load More** button for a smoother experience.

### ⭐ Favorites Management
- Add or remove movies to/from your personal **Favorites** list.
- View and manage all your saved favorite movies.
- Persistent state with **localStorage**.

### 📃 Detailed Movie View
- Click on a movie to view full details:
  - Overview
  - Genre
  - Cast & Crew
  - Rating
  - Release Year
  - YouTube Trailer (via TMDb or embedded link)

### 🌗 Light/Dark Mode
- Toggle between **Light Mode** and **Dark Mode** for a personalized experience.

### 📱 Responsive UI
- Built with **Material-UI (MUI)** for responsive, mobile-first design.
- Collapsible mobile navigation drawer.

### 💾 Persistent State
- Favorites and last search query are stored in **localStorage**.

---

## 🔧 Technologies Used

- **Frontend**: React, React Router
- **API**: [TMDb API](https://developers.themoviedb.org/3)
- **Styling**: Material-UI (MUI), CSS
- **Icons**: Material-UI Icons
- **State Management**: React Context API
- **HTTP Client**: Axios

---

## 📁 Folder Structure

movie-explorer/
├── public/
├── src/
│ ├── components/
│ │ ├── MovieCard.jsx
│ │ ├── SearchBar.jsx
│ │ ├── MovieDetails.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Favorites.jsx
│ │ ├── MoviePage.jsx
│ ├── context/
│ │ └── MovieContext.js
│ ├── App.js
│ └── index.js
├── .env
├── package.json
└── README.md

yaml
Copy
Edit


---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer

```
2. Install Dependencies
```
npm install 
```
3. Add TMDb API Key
```
REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
```
You can obtain an API key by creating a free account at https://www.themoviedb.org.

4. Start the Development Server
```
npm start
```
Visit: http://localhost:3000

🔗 Live Demo
Deployed on Vercel / Netlify
🌐 Live App Link

🎯 Future Enhancements
✅ User Authentication with backend service

✅ Cast and Crew Details

✅ Advanced filters (genre, rating, release year)

✅ Pagination and better search UX

✅ Accessibility improvements and better ARIA support

🧪 Testing & Deployment
✅ Tested on Chrome, Firefox, Safari, and mobile browsers.

✅ Responsive design on desktop, tablet, and mobile.

✅ Deployment on Vercel / Netlify for fast CI/CD.

🤝 Contributing
Contributions are welcome!
Follow these steps:
```
# 1. Fork the repository
# 2. Create a new branch
git checkout -b feature-name

# 3. Commit your changes
git commit -m "Add feature-name"

# 4. Push to GitHub
git push origin feature-name

# 5. Submit a Pull Request
```
🙏 Acknowledgments
TMDb API

Material-UI for elegant UI components

YouTube for movie trailer embeds


