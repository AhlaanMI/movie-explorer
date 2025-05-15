import React, { useContext, useEffect, useState, useCallback } from "react";
import { MovieContext } from "../pages/MovieContext";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar"; // Corrected import
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MovieCard from "./movieCard";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Home = () => {
  const {
    movies,
    setMovies,
    searchQuery,
    setSearchQuery,
    favorites,
    addFavorite,
    removeFavorite,
  } = useContext(MovieContext);

  const [showFavorites, setShowFavorites] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("now_playing"); // Default to "Now Playing"
  const isMobile = useMediaQuery("(max-width:600px)"); // Check if the screen width is less than 600px

  // Fetch movies from the API
  const fetchMovies = useCallback(async () => {
    try {
      const endpoint =
        currentCategory === "trending"
          ? `https://api.themoviedb.org/3/trending/movie/day?api_key=afd2d47edca8b07720fb22b6914c697a`
          : `https://api.themoviedb.org/3/movie/now_playing?api_key=afd2d47edca8b07720fb22b6914c697a`;

      const response = await fetch(endpoint);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }, [currentCategory, setMovies]);

  useEffect(() => {
    if (!showFavorites) {
      fetchMovies();
    }
  }, [fetchMovies, showFavorites]);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => {
                          setShowFavorites(false);
                          setCurrentCategory("now_playing");
                        }}
                      >
                        <ListItemText primary="Now Playing" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => {
                          setShowFavorites(false);
                          setCurrentCategory("trending");
                        }}
                      >
                        <ListItemText primary="Trending Movies" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => setShowFavorites(true)}>
                        <ListItemText primary="View Favorites" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Movie Explorer
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Movie Explorer
              </Typography>
              <Button
                color="inherit"
                onClick={() => {
                  setShowFavorites(false);
                  setCurrentCategory("now_playing");
                }}
              >
                Now Playing
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  setShowFavorites(false);
                  setCurrentCategory("trending");
                }}
              >
                Trending Movies
              </Button>
              <Button color="inherit" onClick={() => setShowFavorites(true)}>
                View Favorites
              </Button>
            </>
          )}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Search>
        </Toolbar>
      </AppBar>

      {/* Movie Cards */}
      <Box sx={{ padding: 2 }}>
        <Grid container spacing={2}>
          {(showFavorites ? favorites : movies).map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.id}>
              <MovieCard
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
                releaseYear={new Date(movie.release_date).getFullYear()}
                rating={movie.vote_average / 2}
                overview={movie.overview || "No overview available"} // Fallback for missing overview
                genre={movie.genre_ids?.join(", ") || "N/A"} // Fallback for missing genres
                cast="N/A" // Cast data is not available in this API call
                trailerLink={`https://www.youtube.com/results?search_query=${movie.title} trailer`} // Generate a YouTube search link
                onFavorite={() =>
                  favorites.some((fav) => fav.id === movie.id)
                    ? removeFavorite(movie.id)
                    : addFavorite(movie)
                }
                isFavorite={favorites.some((fav) => fav.id === movie.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
