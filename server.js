require("dotenv").config();

"use strict";

const express = require("express");
const app = express();
const port = 5500;

const apiKey = process.env.DOG_API_KEY;

app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Fetch list of breeds from Dog API
app.get("/api/breeds", async (req, res) => {
    try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds", { 
        headers: {
        "x-api-key": process.env.DOG_API_KEY,
        },
    });

    const data = await response.json();
    console.log("Received breeds data:", Array.isArray(data), data.length);

    res.json(data);
    } catch (error) {
    console.error("Server error in /api/breeds:", error);
    res.status(500).json({ error: "Failed to fetch breeds" });
    }
  });

// Fetch breed image
app.get("/api/breed-image/:breedId", async (req, res) => {
    try {
    const breedId = req.params.breedId;
    const response = await fetch(`https://api.thedogapi.com/v1/images/search?breed_id=${breedId}`, {
        headers: {
        "x-api-key": apiKey,
        },
    });

    const data = await response.json();
    res.json(data);
    } catch (error) {
    res.status(500).json({ error: "Failed to fetch breed image" });
    }
});

app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});