let ingredientList = new IngredientList(ingredients, "list");

// DEFAULT VALUES
const locationsDefault = [
  "Enchanted Forest",
  "Mushroom Mire",
  "Bone Wastes",
  "Storm Plains",
  "Ocean Coasts",
  "Shadow Steppe",
  "Sulfuric Falls",
  "Ice Craggs",
  "Crystalline Forest",
  "Arctic",
  "Dragon Oasis",
  "Crater",
  "Magical Wasteland",
];

const typesDefault = [
  "Bone",
  "Bug",
  "Essence",
  "Fish",
  "Flesh",
  "Flower",
  "Fruit",
  "Fungus",
  "Gem",
  "Mineral",
  "Ore",
  "Plant",
  "Mana",
  "Slime",
];

// FILTER BUTTONS
// Locations
const locationAll = document.getElementById("location-all");
const locationNone = document.getElementById("location-none");

locationAll.addEventListener("click", () => {
  ingredientList.locationsFilter = locationsDefault;

  ingredientList.refresh();
});

locationNone.addEventListener("click", () => {
  ingredientList.locationsFilter = [];

  ingredientList.refresh();
});

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
const typesAll = document.getElementById("types-all");
const typesNone = document.getElementById("types-none");

typesAll.addEventListener("click", () => {
  ingredientList.typesFilter = typesDefault;

  ingredientList.refresh();
});

typesNone.addEventListener("click", () => {
  ingredientList.typesFilter = [];

  ingredientList.refresh();
});

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

// Magimins
const aMinInput = document.getElementById("a-min");
const aMaxInput = document.getElementById("a-max");
const bMinInput = document.getElementById("b-min");
const bMaxInput = document.getElementById("b-max");
const cMinInput = document.getElementById("c-min");
const cMaxInput = document.getElementById("c-max");
const dMinInput = document.getElementById("d-min");
const dMaxInput = document.getElementById("d-max");
const eMinInput = document.getElementById("e-min");
const eMaxInput = document.getElementById("e-max");
const totalMinInput = document.getElementById("total-min");
const totalMaxInput = document.getElementById("total-max");

function addMagiminFilter(id, key) {
  id.addEventListener("change", () => {
    const magiminsFilter = ingredientList.magiminsFilter;

    // Set default values if empty
    if (id.value == "") {
      key.includes("Min")
        ? (magiminsFilter[key] = 0)
        : (magiminsFilter[key] = 999);
    } else magiminsFilter[key] = id.value;

    console.log(magiminsFilter[key]);

    ingredientList.refresh();
  });
}

addMagiminFilter(aMinInput, "aMin");
addMagiminFilter(aMaxInput, "aMax");
addMagiminFilter(bMinInput, "bMin");
addMagiminFilter(bMaxInput, "bMax");
addMagiminFilter(cMinInput, "cMin");
addMagiminFilter(cMaxInput, "cMax");
addMagiminFilter(dMinInput, "dMin");
addMagiminFilter(dMaxInput, "dMax");
addMagiminFilter(eMinInput, "eMin");
addMagiminFilter(eMaxInput, "eMax");
addMagiminFilter(totalMinInput, "totalMin");
addMagiminFilter(totalMaxInput, "totalMax");

// SEARCH
const searchBar = document.getElementById("search-string");
searchBar.addEventListener("change", () => {
  ingredientList.searchString = searchBar.value;

  ingredientList.refresh();
});
