// Get references to the HTML elements
const catImage = document.getElementById("cat-image");
const backgroundSelect = document.getElementById("background-select");
const bodySelect = document.getElementById("base-select");
const hatSelect = document.getElementById("hat-select");
const mouthSelect = document.getElementById("mouth-select");
const eyesSelect = document.getElementById("eyes-select");
const clothesSelect = document.getElementById("clothes-select");
const randomizeBtn = document.getElementById("randomize-btn");
const downloadLink = document.getElementById("download-link");

// Set up an object to store the current cat traits
let catTraits = {
  background: backgroundSelect.value,
  body: bodySelect.value,
  hat: hatSelect.value,
  mouth: mouthSelect.value,
  eyes: eyesSelect.value,
  clothes: clothesSelect.value,
};

function updateCatImage() {
  const baseUrl = "assets/";
  const backgroundUrl = baseUrl + catTraits.background;
  const bodyUrl = baseUrl + catTraits.body;
  const clothesUrl =
    catTraits.clothes !== "" ? baseUrl + catTraits.clothes : "";
  const hatUrl = catTraits.hat !== "" ? baseUrl + catTraits.hat : "";
  const mouthUrl = catTraits.mouth !== "" ? baseUrl + catTraits.mouth : "";
  const eyesUrl = catTraits.eyes !== "" ? baseUrl + catTraits.eyes : "";

  // Set the background image
  backgroundImg.setAttribute("src", backgroundUrl);

  // Set the body image
  bodyImg.setAttribute("src", bodyUrl);

  // Set the clothes image
  if (clothesUrl !== "") {
    clothesImg.setAttribute("src", clothesUrl);
    clothesImg.classList.add("show");
  } else {
    clothesImg.setAttribute("src", "");
    clothesImg.classList.remove("show");
  }

  // Set the eyes image
  if (eyesUrl !== "") {
    eyesImg.setAttribute("src", eyesUrl);
    eyesImg.classList.add("show");
  } else {
    eyesImg.setAttribute("src", "");
    eyesImg.classList.remove("show");
  }

  // Set the hat image
  if (hatUrl !== "") {
    hatImg.setAttribute("src", hatUrl);
    hatImg.classList.add("show");
  } else {
    hatImg.setAttribute("src", "");
    hatImg.classList.remove("show");
  }

  // Set the mouth image
  if (mouthUrl !== "") {
    mouthImg.setAttribute("src", mouthUrl);
    mouthImg.classList.add("show");
  } else {
    mouthImg.setAttribute("src", "");
    mouthImg.classList.remove("show");
  }

  // Build the image URL with the selected traits
  let imageUrl = `cat.png?background=${backgroundUrl}&body=${bodyUrl}`;
  if (clothesUrl !== "") {
    imageUrl += `&clothes=${clothesUrl}`;
  }
  if (eyesUrl !== "") {
    imageUrl += `&eyes=${eyesUrl}`;
  }
  if (hatUrl !== "") {
    imageUrl += `&hat=${hatUrl}`;
  }
  if (mouthUrl !== "") {
    imageUrl += `&mouth=${mouthUrl}`;
  }

  // Update the download link
  downloadLink.setAttribute("href", imageUrl);
}

// Function to randomize the cat traits
function randomizeCatTraits() {
  const backgrounds = [
    "Blue$11.78.png",
    "Crimson$11.78.png",
    "Mint$13.22.png",
    "Orange$13.22.png",
    "Pink$13.22.png",
    "Red$11.78.png",
    "Violet$13.22.png",
    "White$11.78.png",
    "Yellow$11.78.png",
  ];
  const bodies = [
    "Alien.png",
    "Black Skeleton.png",
    "Blue Alien.png",
    "Blue Skeleton.png",
    "Bubble Gum.png",
    "Copper.png",
    "Diamong.png",
    "Galaxy.png",
    "Gold.png",
    "Green Skeleton.png",
    "Mummy.png",
    "Platinum Robot.png",
    "Red Skeleton.png",
    "Robot.png",
    "Silver.png",
    "Skeleton.png",
    "White Skeleton.png",
    "White Tiger.png",
    "Yellow Skeleton.png",
    "Zombie.png",
  ];
  const hats = [
    "Antennae.png",
    "Arrow.png",
    "Beanie Black.png",
    "Black Horns.png",
    "Bunny.png",
    "Cap Black.png",
    "Cowboy.png",
    "Crown.png",
    "Empty.png",
    "Gold Horns.png",
    "Halo.png",
    "Red Horns.png",
    "Skull.png",
    "Soldier_s Helmet.png",
    "Strawhat.png",
    "Top Hat.png",
  ];
  const mouths = [
    "Bubble Gum.png",
    "Cigar.png",
    "Gape.png",
    "Lollipop.png",
    "Normal.png",
    "Nyan.png",
    "Rainbow.png",
    "Shocked.png",
    "Skeleton.png",
    "Smile.png",
    "Smirk.png",
  ];
  const eyes = [
    "Aviator.png",
    "Cute.png",
    "Disco.png",
    "Evil.png",
    "Eye Patch.png",
    "Fire.png",
    "Heart.png",
    "Heterochromia.png",
    "Laser.png",
    "Monocole.png",
    "Normal.png",
    "Odin Eye Patch.png",
    "Rainbow.png",
    "Red.png",
    "Retro.png",
    "Scuba.png",
    "Shades.png",
    "Sleep Mask.png",
    "Solemn.png",
  ];
  const clothes = [
    "Black Toga.png",
    "Collared Shirt.png",
    "Empty.png",
    "King_s Garb.png",
    "Soldier_s Uniform.png",
    "Tuxedo.png",
    "Vest.png",
    "White Toga.png",
  ];

  catTraits.background =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];
  catTraits.body = bodies[Math.floor(Math.random() * bodies.length)];
  catTraits.hat = hats[Math.floor(Math.random() * hats.length)];
  catTraits.mouth = mouths[Math.floor(Math.random() * mouths.length)];
  catTraits.eyes = eyes[Math.floor(Math.random() * eyes.length)];
  catTraits.clothes = clothes[Math.floor(Math.random() * clothes.length)];

  // Update the dropdown menus to reflect the new traits
  backgroundSelect.value = catTraits.background;
  bodySelect.value = catTraits.body;
  hatSelect.value = catTraits.hat;
  mouthSelect.value = catTraits.mouth;
  eyesSelect.value = catTraits.eyes;
  clothesSelect.value = catTraits.clothes;

  updateCatImage();
}

// Event listeners for when the dropdown menus change
backgroundSelect.addEventListener("change", () => {
  catTraits.background = backgroundSelect.value;
  updateCatImage();
});

bodySelect.addEventListener("change", () => {
  catTraits.body = bodySelect.value;
  updateCatImage();
});

hatSelect.addEventListener("change", () => {
  catTraits.hat = hatSelect.value;
  updateCatImage();
});

mouthSelect.addEventListener("change", () => {
  catTraits.mouth = mouthSelect.value;
  updateCatImage();
});

eyesSelect.addEventListener("change", () => {
  catTraits.eyes = eyesSelect.value;
  updateCatImage();
});

clothesSelect.addEventListener("change", () => {
  catTraits.clothes = clothesSelect.value;
  updateCatImage();
});

// Event listener for the randomize button
randomizeBtn.addEventListener("click", () => {
  randomizeCatTraits();
});

// Call the updateCatImage function to initialize the cat image
updateCatImage();
