let ingredientList = new IngredientList(ingredients, "list");

// FILTER BUTTONS
// Locations
const efBtn = document.getElementById("toggle-ef");
const bwBtn = document.getElementById("toggle-bw");
const ocBtn = document.getElementById("toggle-oc");
const sfBtn = document.getElementById("toggle-sf");
const cfBtn = document.getElementById("toggle-cf");
const doBtn = document.getElementById("toggle-do");
const mwBtn = document.getElementById("toggle-mw");

const mmBtn = document.getElementById("toggle-mm");
const spBtn = document.getElementById("toggle-sp");
const ssBtn = document.getElementById("toggle-ss");
const icBtn = document.getElementById("toggle-ic");
const arBtn = document.getElementById("toggle-ar");
const crBtn = document.getElementById("toggle-cr");

function addLocationToggle(id, location) {
  id.addEventListener("click", () => {
    const locationsList = ingredientList.locationsFilter;

    // Add / Remove location from filter locations list
    locationsList.includes(location)
      ? locationsList.splice(locationsList.indexOf(location), 1)
      : locationsList.push(location);

    ingredientList.refresh();
  });
}

addLocationToggle(efBtn, "Enchanted Forest");
addLocationToggle(mmBtn, "Mushroom Mire");
addLocationToggle(bwBtn, "Bone Wastes");
addLocationToggle(spBtn, "Storm Plains");
addLocationToggle(ocBtn, "Ocean Coasts");
addLocationToggle(ssBtn, "Shadow Steppe");
addLocationToggle(sfBtn, "Sulfuric Falls");
addLocationToggle(icBtn, "Ice Craggs");
addLocationToggle(cfBtn, "Crystalline Forest");
addLocationToggle(arBtn, "Arctic");
addLocationToggle(doBtn, "Dragon Oasis");
addLocationToggle(crBtn, "Crater");
addLocationToggle(mwBtn, "Magical Wasteland");

// Types
const boneBtn = document.getElementById("bone");
const essenceBtn = document.getElementById("essence");
const fleshBtn = document.getElementById("flesh");
const fruitBtn = document.getElementById("fruit");
const gemBtn = document.getElementById("gem");
const oreBtn = document.getElementById("ore");
const manaBtn = document.getElementById("mana");

const bugBtn = document.getElementById("bug");
const fishBtn = document.getElementById("fish");
const flowerBtn = document.getElementById("flower");
const fungusBtn = document.getElementById("fungus");
const mineralBtn = document.getElementById("mineral");
const plantBtn = document.getElementById("plant");
const slimeBtn = document.getElementById("slime");

function addTypeToggle(id, type) {
  id.addEventListener("click", () => {
    const typesList = ingredientList.typesFilter;

    // Add / Remove types from filter types list
    typesList.includes(type)
      ? typesList.splice(typesList.indexOf(type), 1)
      : typesList.push(type);

    ingredientList.refresh();
  });
}

addTypeToggle(boneBtn, "Bone");
addTypeToggle(bugBtn, "Bug");
addTypeToggle(essenceBtn, "Essence");
addTypeToggle(fishBtn, "Fish");
addTypeToggle(fleshBtn, "Flesh");
addTypeToggle(flowerBtn, "Flower");
addTypeToggle(fruitBtn, "Fruit");
addTypeToggle(fungusBtn, "Fungus");
addTypeToggle(gemBtn, "Gem");
addTypeToggle(mineralBtn, "Mineral");
addTypeToggle(oreBtn, "Ore");
addTypeToggle(plantBtn, "Plant");
addTypeToggle(manaBtn, "Mana");
addTypeToggle(slimeBtn, "Slime");
