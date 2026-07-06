let ingredientList = new IngredientList(ingredients, "list");

function refresh() {
  ingredientList.refresh();
}

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

// RESET FIELDS
function clearSearch() {
  searchBar.value = "";
}

function resetLocations() {
  // Activate location buttons
  const locationsL = document
    .getElementsByClassName("location-filter-l")[0]
    .querySelectorAll(":scope > button");
  const locationsR = document
    .getElementsByClassName("location-filter-r")[0]
    .querySelectorAll(":scope > button");

  locationsL.forEach((button) => {
    if (button.classList.contains("inactive")) {
      button.classList.remove("inactive");
    }
  });

  locationsR.forEach((button) => {
    if (button.classList.contains("inactive")) {
      button.classList.remove("inactive");
    }
  });

  ingredientList.locationsFilter = locationsDefault;
}

function resetTypes() {
  // Activate location buttons
  const typesL = document
    .getElementsByClassName("type-filter-l")[0]
    .querySelectorAll("button");
  const typesR = document
    .getElementsByClassName("type-filter-r")[0]
    .querySelectorAll("button");

  typesL.forEach((button) => {
    if (button.classList.contains("inactive")) {
      button.classList.remove("inactive");
    }
  });

  typesR.forEach((button) => {
    if (button.classList.contains("inactive")) {
      button.classList.remove("inactive");
    }
  });

  ingredientList.typesFilter = typesDefault;
}

function resetRarity() {
  const rarity = document
    .getElementsByClassName("rarity-filter-content")[0]
    .querySelectorAll("button");

  rarity.forEach((button) => {
    if (button.classList.contains("inactive")) {
      button.classList.remove("inactive");
    }
  });

  ingredientList.rarityFilter = [1, 2, 3, 4];
}

function resetSort() {
  ingredientList.sortMode.key = "none";
  ingredientList.sortMode.mode = "ascending";
}

function resetMagimins() {
  // Clear magimin input fields
  aMinInput.value = "";
  aMaxInput.value = "";
  bMinInput.value = "";
  bMaxInput.value = "";
  cMinInput.value = "";
  cMaxInput.value = "";
  dMinInput.value = "";
  dMaxInput.value = "";
  eMinInput.value = "";
  eMaxInput.value = "";
  totalMinInput.value = "";
  totalMaxInput.value = "";

  ingredientList.magiminsFilter = {
    aMin: 0,
    aMax: 999,
    bMin: 0,
    bMax: 999,
    cMin: 0,
    cMax: 999,
    dMin: 0,
    dMax: 999,
    eMin: 0,
    eMax: 999,
    totalMin: 0,
    totalMax: 999,
  };
}

// RESET ALL
const resetAll = document.getElementById("reset-all");

function resetAllFields() {
  clearSearch();
  resetLocations();
  resetMagimins();
  resetRarity();
  resetTypes();
  resetSort();
  resetTraitButtons();
  resetAllMagiminToggles();
  resetAllHeaderIndicators();
  ingredientList.resetTraits();
}

resetAll.addEventListener("click", () => {
  resetAllFields();

  refresh();
});

// FILTER BUTTONS
// Locations
const locationAll = document.getElementById("location-all");
const locationNone = document.getElementById("location-none");

locationAll.addEventListener("click", () => {
  resetLocations();

  refresh();
});

locationNone.addEventListener("click", () => {
  ingredientList.locationsFilter = [];

  // Activate location buttons
  const locationsL = document
    .getElementsByClassName("location-filter-l")[0]
    .querySelectorAll(":scope > button");
  const locationsR = document
    .getElementsByClassName("location-filter-r")[0]
    .querySelectorAll(":scope > button");

  locationsL.forEach((button) => {
    if (!button.classList.contains("inactive")) {
      button.classList.add("inactive");
    }
  });

  locationsR.forEach((button) => {
    if (!button.classList.contains("inactive")) {
      button.classList.add("inactive");
    }
  });

  refresh();
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
    id.classList.toggle("inactive");

    const locationsList = ingredientList.locationsFilter;

    // Add / Remove location from filter locations list
    locationsList.includes(location)
      ? locationsList.splice(locationsList.indexOf(location), 1)
      : locationsList.push(location);

    refresh();
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
  resetTypes();

  refresh();
});

typesNone.addEventListener("click", () => {
  // Activate location buttons
  const typesL = document
    .getElementsByClassName("type-filter-l")[0]
    .querySelectorAll("button");
  const typesR = document
    .getElementsByClassName("type-filter-r")[0]
    .querySelectorAll("button");

  typesL.forEach((button) => {
    if (!button.classList.contains("inactive")) {
      button.classList.add("inactive");
    }
  });

  typesR.forEach((button) => {
    if (!button.classList.contains("inactive")) {
      button.classList.add("inactive");
    }
  });

  ingredientList.typesFilter = [];

  refresh();
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
    id.classList.toggle("inactive");

    const typesList = ingredientList.typesFilter;

    // Add / Remove types from filter types list
    typesList.includes(type)
      ? typesList.splice(typesList.indexOf(type), 1)
      : typesList.push(type);

    refresh();
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
const magiminClear = document.getElementById("magimin-clear");

magiminClear.addEventListener("click", () => {
  resetMagimins();
  resetAllMagiminToggles();

  refresh();
});

function addMagiminFilter(id, key) {
  id.addEventListener("change", () => {
    const magiminsFilter = ingredientList.magiminsFilter;

    // Set default values if empty
    if (id.value == "") {
      key.includes("Min")
        ? (magiminsFilter[key] = 0)
        : (magiminsFilter[key] = 999);
    } else magiminsFilter[key] = id.value;

    refresh();
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

// Magimin Toggles
const aToggle = document.getElementById("a-toggle");
const bToggle = document.getElementById("b-toggle");
const cToggle = document.getElementById("c-toggle");
const dToggle = document.getElementById("d-toggle");
const eToggle = document.getElementById("e-toggle");

function addMagiminToggle(id, type) {
  id.addEventListener("click", () => {
    if (id.classList.contains(`${type}-neutral`)) {
      id.classList.remove(`${type}-neutral`);
      id.classList.add(`${type}-active`);

      setMagiminValues(type, "1", "999");
    } else if (id.classList.contains(`${type}-active`)) {
      id.classList.remove(`${type}-active`);
      id.classList.add(`${type}-inactive`);

      setMagiminValues(type, "0", "0");
    } else if (id.classList.contains(`${type}-inactive`)) {
      id.classList.remove(`${type}-inactive`);
      id.classList.add(`${type}-neutral`);

      setMagiminValues(type, "", "");
    }

    refresh();
  });
}

function setMagiminValues(type, min, max) {
  const magiminsFilter = ingredientList.magiminsFilter;

  const minValue = document.getElementById(type + "-min");
  const maxValue = document.getElementById(type + "-max");

  minValue.value = min;
  maxValue.value = max;

  const keyMin = [type + "Min"];
  const keyMax = [type + "Max"];

  min == ""
    ? (magiminsFilter[keyMin] = 0)
    : (magiminsFilter[keyMin] = Number(min));
  max == ""
    ? (magiminsFilter[keyMax] = 999)
    : (magiminsFilter[keyMax] = Number(max));
}

addMagiminToggle(aToggle, "a");
addMagiminToggle(bToggle, "b");
addMagiminToggle(cToggle, "c");
addMagiminToggle(dToggle, "d");
addMagiminToggle(eToggle, "e");

function resetMagiminToggle(id, type) {
  const target = document.getElementById(id);

  if (target.classList.contains(`${type}-active`)) {
    target.classList.remove(`${type}-active`);
  }
  if (target.classList.contains(`${type}-inactive`)) {
    target.classList.remove(`${type}-inactive`);
  }
  if (!target.classList.contains(`${type}-neutral`)) {
    target.classList.add(`${type}-neutral`);
  }

  setMagiminValues(type, "", "");
}

function resetAllMagiminToggles() {
  resetMagiminToggle("a-toggle", "a");
  resetMagiminToggle("b-toggle", "b");
  resetMagiminToggle("c-toggle", "c");
  resetMagiminToggle("d-toggle", "d");
  resetMagiminToggle("e-toggle", "e");
}

// Rarity
const rarity1 = document.getElementById("rarity-1");
const rarity2 = document.getElementById("rarity-2");
const rarity3 = document.getElementById("rarity-3");
const rarity4 = document.getElementById("rarity-4");
const rarityAll = document.getElementById("rarity-all");
const rarityNone = document.getElementById("rarity-none");

rarityAll.addEventListener("click", () => {
  resetRarity();

  refresh();
});

rarityNone.addEventListener("click", () => {
  const rarity = document
    .getElementsByClassName("rarity-filter-content")[0]
    .querySelectorAll("button");

  rarity.forEach((button) => {
    if (!button.classList.contains("inactive")) {
      button.classList.add("inactive");
    }
  });

  ingredientList.rarityFilter = [];

  refresh();
});

function addRarityFilter(id, number) {
  id.addEventListener("click", () => {
    id.classList.toggle("inactive");

    const rarityFilter = ingredientList.rarityFilter;

    rarityFilter.includes(number)
      ? rarityFilter.splice(rarityFilter.indexOf(number), 1)
      : rarityFilter.push(number);

    refresh();
  });
}

addRarityFilter(rarity1, 1);
addRarityFilter(rarity2, 2);
addRarityFilter(rarity3, 3);
addRarityFilter(rarity4, 4);

// Traits
const tasteBtn = document.getElementById("taste-btn");
const sensationBtn = document.getElementById("sensation-btn");
const aromaBtn = document.getElementById("aroma-btn");
const visualBtn = document.getElementById("visual-btn");
const soundBtn = document.getElementById("sound-btn");

const resetTraits = document.getElementById("reset-traits");

resetTraits.addEventListener("click", () => {
  resetTraitButtons();

  ingredientList.resetTraits();

  refresh();
});

function resetTraitButtons() {
  const traits = document
    .getElementsByClassName("traits-filter-content")[0]
    .querySelectorAll("button");

  traits.forEach((button) => {
    const states = button.classList;
    if (states.contains("trait-positive")) {
      states.remove("trait-positive");
    }
    if (states.contains("trait-negative")) {
      states.remove("trait-negative");
    }
    if (states.contains("trait-none")) {
      states.remove("trait-none");
    }
  });
}

function addTraitToggle(id, traitId) {
  id.addEventListener("click", () => {
    // Change trait btn class
    let state = id.classList;

    if (state.contains("trait-positive")) {
      state.remove("trait-positive");
      state.add("trait-negative");
    } else if (state.contains("trait-negative")) {
      state.remove("trait-negative");
      state.add("trait-none");
    } else if (state.contains("trait-none")) {
      state.remove("trait-none");
    } else state.add("trait-positive");

    ingredientList.toggleTrait(traitId);

    refresh();
  });
}

addTraitToggle(tasteBtn, 0);
addTraitToggle(sensationBtn, 1);
addTraitToggle(aromaBtn, 2);
addTraitToggle(visualBtn, 3);
addTraitToggle(soundBtn, 4);

// SEARCH
const searchBar = document.getElementById("search-string");
searchBar.addEventListener("change", () => {
  ingredientList.searchString = searchBar.value;

  refresh();
});

// DROPDOWN TOGGLES
const magiminToggle = document.getElementById("magimin-toggle");
const locationToggle = document.getElementById("location-toggle");
const typeToggle = document.getElementById("type-toggle");
const traitsToggle = document.getElementById("traits-toggle");
const rarityToggle = document.getElementById("rarity-toggle");

const magiminDropdown = document.getElementById("magimin-filter");
const locationDropdown = document.getElementById("location-filter");
const typeDropdown = document.getElementById("type-filter");
const traitsDropdown = document.getElementById("traits-filter");
const rarityDropdown = document.getElementById("rarity-filter");

function addHideToggle(id, target) {
  id.addEventListener("click", () => {
    target.classList.toggle("hide");
  });
}

addHideToggle(magiminToggle, magiminDropdown);
addHideToggle(locationToggle, locationDropdown);
addHideToggle(typeToggle, typeDropdown);
addHideToggle(traitsToggle, traitsDropdown);
addHideToggle(rarityToggle, rarityDropdown);

// SORTING
const idSort = document.getElementById("header-id");
const iconSort = document.getElementById("header-icon");
const nameSort = document.getElementById("header-name");
const locationSort = document.getElementById("header-location");
const raritySort = document.getElementById("header-rarity");
const typeSort = document.getElementById("header-type");

const magASort = document.getElementById("header-mag-a");
const magBSort = document.getElementById("header-mag-b");
const magCSort = document.getElementById("header-mag-c");
const magDSort = document.getElementById("header-mag-d");
const magESort = document.getElementById("header-mag-e");
const magTotalSort = document.getElementById("header-mag-total");

const priceSort = document.getElementById("header-price");
const quinnSort = document.getElementById("header-quinn");

const tasteSort = document.getElementById("header-taste");
const sensationSort = document.getElementById("header-sensation");
const aromaSort = document.getElementById("header-aroma");
const visualSort = document.getElementById("header-visual");
const soundSort = document.getElementById("header-sound");

function addSortToggle(id, key) {
  id.addEventListener("click", () => {
    ingredientList.setSortMode(key);
    toggleHeaderIndicator(id);

    refresh();
  });
}

// INGREDIENT SORTING
addSortToggle(idSort, "id");
addSortToggle(iconSort, "id");
addSortToggle(nameSort, "name");
addSortToggle(locationSort, "location");
addSortToggle(raritySort, "rarity");
addSortToggle(typeSort, "type");

// MAGIMIN SORTING
addSortToggle(magASort, "magimins.a");
addSortToggle(magBSort, "magimins.b");
addSortToggle(magCSort, "magimins.c");
addSortToggle(magDSort, "magimins.d");
addSortToggle(magESort, "magimins.e");
addSortToggle(magTotalSort, "magimin.total");

// SHOP SORTING
addSortToggle(priceSort, "price");
addSortToggle(quinnSort, "quinnQuantity");

// TRAITS SORTING
addSortToggle(tasteSort, "traits.taste");
addSortToggle(sensationSort, "traits.sensation");
addSortToggle(aromaSort, "traits.aroma");
addSortToggle(visualSort, "traits.visual");
addSortToggle(soundSort, "traits.sound");

// HEADER SORT INDICATORS
function toggleHeaderIndicator(id) {
  // Remove all OTHER header classes
  const headers = document.getElementsByTagName("th");

  if (id.getAttribute("id") == "header-icon") {
    id = document.getElementById("header-id");
  }

  for (let header of headers) {
    if (header.getAttribute("id") != id.getAttribute("id")) {
      if (header.classList.contains("headerSortUp")) {
        header.classList.remove("headerSortUp");
      } else if (header.classList.contains("headerSortDown")) {
        header.classList.remove("headerSortDown");
      }
    }
  }

  if (id.classList.contains("headerSortUp")) {
    id.classList.remove("headerSortUp");
    id.classList.add("headerSortDown");
  } else if (id.classList.contains("headerSortDown")) {
    id.classList.remove("headerSortDown");
    id.classList.add("headerSortUp");
  } else id.classList.add("headerSortUp");
}

function resetAllHeaderIndicators() {
  const headers = document.getElementsByTagName("th");

  for (let header of headers) {
    if (header.classList.contains("headerSortUp")) {
      header.classList.remove("headerSortUp");
    } else if (header.classList.contains("headerSortDown")) {
      header.classList.remove("headerSortDown");
    }
  }
}
