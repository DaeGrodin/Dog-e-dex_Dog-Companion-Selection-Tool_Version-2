async function loadBreeds() {
  try {
    const response = await fetch("/api/v1/breeds");
    const data = await response.json();
    createBreedmenu(data);
  } catch (error) {
    console.error(error);
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

  // Add event listener to load image on change
  select.addEventListener("change", async (event) => {
    const breedId = event.target.value;
    if (breedId) {
      await fetchBreedImage(breedId);
    }
  });
}

async function fetchBreedImage(breedId) {
  try {
    const response = await fetch(`/api/breed-image/${breedId}`);
    const data = await response.json();
    const imgElement = document.getElementById("dog-image");

    if (data.length > 0 && data[0].url) {
      imgElement.src = data[0].url;
      imgElement.alt = data[0].breeds[0]?.name || "Dog";
    } else {
      imgElement.src = "";
      imgElement.alt = "No image found";
    }
  } catch (error) {
      console.error("Error fetching breed image:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadBreeds);
