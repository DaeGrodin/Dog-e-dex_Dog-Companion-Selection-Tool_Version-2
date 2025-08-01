async function fetchBreeds() {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds", {
      headers: {
        "x-api-key": apiKey
      }
    });

    const data = await response.json();
    createBreedmenu(data);
  } catch (error) {
    console.error("Failed to fetch breeds:", error);
  }
}

function createBreedmenu(breeds) {
  const select = document.getElementById("breed-select");

  breeds.forEach(breed => {
    const option = document.createElement("option");
    option.value = breed.id;
    option.textContent = breed.name;
    select.appendChild(option);
  });

  select.addEventListener("change", (event) => {
    const breedId = event.target.value;
    if (breedId) {
      fetchBreedImage(breedId);
    }
  });
}

async function fetchBreedImage(breedId) {
  try {
    const response = await fetch(`https://api.thedogapi.com/v1/images/search?breed_id=${breedId}`, {
      headers: {
        "x-api-key": apiKey
      }
    });

    const data = await response.json();
    const img = document.getElementById("dog-image");

    if (data.length > 0 && data[0].url) {
      img.src = data[0].url;
      img.alt = data[0].breeds[0]?.name || "Dog";
    } else {
      img.src = "";
      img.alt = "No image found";
    }
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchBreeds);
