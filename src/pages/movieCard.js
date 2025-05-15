import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

const MovieCard = ({
  image,
  title,
  releaseYear,
  rating,
  overview,
  genre = "N/A", // Default value if genre is not provided
  cast = "N/A", // Default value if cast is not provided
  trailerLink,
  onFavorite,
  isFavorite,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Movie Card */}
      <Card
        sx={{ maxWidth: 345, margin: 2, cursor: "pointer" }}
        onClick={handleOpen}
      >
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Release Year: {releaseYear}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
            <Typography variant="body2" sx={{ marginRight: 1 }}>
              Rating:
            </Typography>
            <Rating value={rating} precision={0.5} readOnly />
          </Box>
        </CardContent>
      </Card>

      {/* Detailed View Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={title}
            sx={{ marginBottom: 2 }}
          />
          <Typography variant="body1" gutterBottom>
            <strong>Overview:</strong> {overview}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Genre:</strong> {genre}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Cast:</strong> {cast}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href={trailerLink}
            target="_blank"
            sx={{ marginTop: 2, marginRight: 2 }}
          >
            Watch Trailer
          </Button>
          <Button
            variant="contained"
            color={isFavorite ? "secondary" : "primary"}
            onClick={onFavorite}
            sx={{ marginTop: 2 }}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MovieCard;
