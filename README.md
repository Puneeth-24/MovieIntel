# 🎬 MovieIntel

MovieIntel is a React-based movie search application that allows users to find movies using the OMDb API. Users can search for movies by title, view a list of search results, and click on any movie to view detailed information including plot, cast, and IMDb rating.

## 🚀 Features

- 🔍 Search for movies using the OMDb API
- 📝 View detailed movie information including director, writer, genre, plot, and IMDb rating
- 📄 Fallback poster images for movies without posters
- ⚡ Clear search results with a single click
- 📱 Responsive design for mobile and desktop
- 🌐 Client-side routing using React Router

## 📁 Project Structure

```text
src/
├── components/
│   ├── MovieCard.jsx
│   ├── MovieList.jsx
│   └── SearchBar.jsx
├── pages/
│   ├── Home.jsx
│   └── MovieDetail.jsx
├── images/
│   └── default-movie.jpg
├── style/
│   └── App.css
├── App.jsx
├── Layout.jsx
└── main.jsx
```

## ⚙️ Setup Instructions
1. **Clone the repository**

```bash
git clone https://github.com/your-username/movieintel.git
cd movieintel
```

2. **Install dependencies**

```bash
npm install
```
3. **Get an OMDb API key**

- Visit OMDb API
- Sign up for a free API key

4. **Configure environment variables**

Create a .env file in the root and add:
```env
VITE_OMDB_API_KEY=your_api_key_here
```

5.Run the development server

```bash
npm run dev
```

## 🛠 Built With
- React
- React Router
- Axios
- Vite
- OMDb API

## 🎥 Demo

[![Watch the demo](https://img.youtube.com/vi/mADZhz-XLF0/0.jpg)](https://youtu.be/mADZhz-XLF0)

