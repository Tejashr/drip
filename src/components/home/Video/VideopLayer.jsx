import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import video from "/assets/videos/video-3.mp4";
import "./video.css";
import { useNavigate } from "react-router-dom";
export default function BasicCard() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column nowrap",
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          padding: 0,
          margin: 0,
          height: "100%",
          width: "100%",
          background: "#000000",
          borderRadius: 0,
        }}
      >
        <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.5,
          }}
          autoPlay
          loop
          muted
          poster="https://assets.codepen.io/6093409/river.jpg"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="hero-text">
          <h1>Sneak into Extraordinary</h1>
          <h2>Where Adventure Meets Style in Quirky Sneaker Bliss</h2>
        </div>

        <button
          className="shop-now-btn"
          onClick={() => {
            scrollTo(0, 0);
            navigate("product-listing");
          }}
        >
          Shop Now
        </button>
      </Card>
    </Box>
  );
}
