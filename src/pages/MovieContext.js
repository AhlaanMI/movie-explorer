import React, { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("lastSearch") || ""
  ); // Load last search from localStorage
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  ); // Load favorites from localStorage

  // Save last search to localStorage
  useEffect(() => {
    localStorage.setItem("lastSearch", searchQuery);
  }, [searchQuery]);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (movieId) => {
    setFavorites(favorites.filter((fav) => fav.id !== movieId));
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        searchQuery,
        setSearchQuery,
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
