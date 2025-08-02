require("dotenv").config();

"use strict";

const express = require("express");
const app = express();
const port = 5501;

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Fetch list of breeds from Dog API
app.get("/api/v1/breeds", async (request, response) => {
  try {
    const apiResponse = await fetch("https://api.thedogapi.com/v1/breeds", {
      headers: {
        "x-api-key": process.env.DOG_API_KEY,
      },
    });

    const data = await apiResponse.json();
    console.log("Received breeds data:", Array.isArray(data), data.length);
    response.json(data);
  } catch (error) {
    console.error("Server error in /api/v1/breeds:", error);
    response.status(500).json({ error: "Failed to fetch breeds" });
  }
});

// Fetch breed image
app.get("/api/breed-image/:breedId", async (request, response) => {
  try {
    const breedId = request.params.breedId;
    const apiResponse = await fetch(
      `https://api.thedogapi.com/v1/images/search?breed_id=${breedId}`,
      {
        headers: {
          "x-api-key": process.env.DOG_API_KEY,
        },
      }
    );

    const data = await apiResponse.json();
    response.json(data);
  } catch (error) {
    console.error("Server error in /api/breed-image:", error);
    response.status(500).json({ error: "Failed to fetch breed image" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log("Press Ctrl+C to stop.");
});