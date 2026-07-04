class IngredientList {
  constructor(list, rootId) {
    this.list = list;
    this.rootId = rootId;

    this.filteredList = [];
    this.searchString = "";

    this.locationsFilter = [
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

    this.typesFilter = [
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

    this.magiminsFilter = {
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

    this.rarityFilter = [1, 2, 3, 4];

    this.traitsFilter = [null, null, null, null, null];

    this.sortMode = { key: "none", mode: "ascending" };

    this.refresh();
  }

  // METHODS
  getRoot() {
    return document.getElementById(this.rootId);
  }

  searchList(string) {
    const results = [];
    const list = this.list;

    if (string != "") {
      list.forEach((ingredient) => {
        if (ingredient.name.toLowerCase().includes(string.toLowerCase())) {
          results.push(ingredient);
        }
      });
      return results;
    } else return list;
  }

  filterList(list) {
    let filteredList = [];

    list.forEach((ingredient) => {
      if (
        this.locationsFilter.includes(ingredient.location) &&
        this.typesFilter.includes(ingredient.type) &&
        this.filterMagimins(ingredient.magimins) &&
        this.filterRarity(ingredient.rarity) &&
        this.filterEachTrait(ingredient.traits)
      ) {
        filteredList.push(ingredient);
      }
    });

    this.filteredList = filteredList;
  }

  // Introduce flags to toggle each magimin on or off
  filterMagimins(i) {
    const a = i.a;
    const b = i.b;
    const c = i.c;
    const d = i.d;
    const e = i.e;
    const total = a + b + c + d + e;

    const magiminsFilter = this.magiminsFilter;

    const aMin = magiminsFilter.aMin;
    const aMax = magiminsFilter.aMax;
    const bMin = magiminsFilter.bMin;
    const bMax = magiminsFilter.bMax;
    const cMin = magiminsFilter.cMin;
    const cMax = magiminsFilter.cMax;
    const dMin = magiminsFilter.dMin;
    const dMax = magiminsFilter.dMax;
    const eMin = magiminsFilter.eMin;
    const eMax = magiminsFilter.eMax;
    const totalMin = magiminsFilter.totalMin;
    const totalMax = magiminsFilter.totalMax;

    if (
      a >= aMin &&
      a <= aMax &&
      b >= bMin &&
      b <= bMax &&
      c >= cMin &&
      c <= cMax &&
      d >= dMin &&
      d <= dMax &&
      e >= eMin &&
      e <= eMax &&
      total >= totalMin &&
      total <= totalMax
    ) {
      return true;
    } else return false;
  }

  filterRarity(rarity) {
    return this.rarityFilter.includes(rarity) ? true : false;
  }

  filterEachTrait(traits) {
    const filter = this.filterTrait;

    const tasteIndex = this.traitsFilter[0];
    const sensationIndex = this.traitsFilter[1];
    const aromaIndex = this.traitsFilter[2];
    const visualIndex = this.traitsFilter[3];
    const soundIndex = this.traitsFilter[4];

    return filter(traits.taste, tasteIndex) &&
      filter(traits.sensation, sensationIndex) &&
      filter(traits.aroma, aromaIndex) &&
      filter(traits.visual, visualIndex) &&
      filter(traits.sound, soundIndex)
      ? true
      : false;
  }

  filterTrait(trait, traitTarget) {
    const target = traitTarget;

    if (target == null) {
      return true;
    } else return target == trait ? true : false;
  }

  toggleTrait(traitId) {
    let traitTarget = this.traitsFilter;

    if (traitTarget[traitId] == null) {
      traitTarget[traitId] = 1;
    } else if (traitTarget[traitId] == 1) {
      traitTarget[traitId] = -1;
    } else if (traitTarget[traitId] == -1) {
      traitTarget[traitId] = 0;
    } else traitTarget[traitId] = null;

    refresh();
  }

  resetTraits() {
    this.traitsFilter = [null, null, null, null, null];
  }

  sortList() {
    const list = this.filteredList;
    const key = this.sortMode.key.split(".");

    let filteredList = [];

    if (this.keyIsString(key) == true) {
      filteredList = list.sort((a, b) => {
        const aValue = a[key].toLowerCase();
        const bValue = b[key].toLowerCase();

        let result = aValue - bValue;

        if (aValue < bValue) {
          return 1;
        } else if (aValue > bValue) {
          return -1;
        } else return 0;
      });
    } else if (key.length != 1) {
      filteredList = list.sort((a, b) => {
        if (key[1] == "total") {
          const totalA =
            a.magimins.a +
            a.magimins.b +
            a.magimins.c +
            a.magimins.d +
            a.magimins.e;

          const totalB =
            b.magimins.a +
            b.magimins.b +
            b.magimins.c +
            b.magimins.d +
            b.magimins.e;

          return totalA - totalB;
        }

        return a[key[0]][key[1]] - b[key[0]][key[1]];
      });
    } else
      filteredList = list.sort((a, b) => {
        return a[key] - b[key];
      });

    if (this.sortMode.mode != "ascending") {
      return filteredList.reverse();
    } else return filteredList;
  }

  setSortMode(key) {
    if (this.sortMode.key != key) {
      this.sortMode.mode = "ascending";
    }

    this.sortMode.key = key;

    if (this.sortMode.mode == "ascending") {
      this.sortMode.mode = "descending";
    } else this.sortMode.mode = "ascending";
  }

  keyIsString(key) {
    return key == "name" || key == "location" || key == "type" ? true : false;
  }

  refresh() {
    const root = this.getRoot();

    this.filterList(this.searchList(this.searchString));

    if (this.sortMode.key != "none") {
      this.sortList();
    }

    const list = this.filteredList;

    // Remove current elements
    root.replaceChildren();

    // For each ingredient
    list.forEach((ingredient) => {
      // Append row to root element
      root.append(this.renderRow(ingredient));
    });
  }

  renderRow(i) {
    // Create table elements
    // Create row element
    const row = document.createElement("tr");

    // Create columns
    const colId = document.createElement("td");
    const colImg = document.createElement("td");
    const colName = document.createElement("td");
    const colLocation = document.createElement("td");
    const colRarity = document.createElement("td");
    const colType = document.createElement("td");
    const colMagiminA = document.createElement("td");
    const colMagiminB = document.createElement("td");
    const colMagiminC = document.createElement("td");
    const colMagiminD = document.createElement("td");
    const colMagiminE = document.createElement("td");
    const colMagiminTotal = document.createElement("td");
    const colPrice = document.createElement("td");
    const colQuinn = document.createElement("td");
    const colTaste = document.createElement("td");
    const colSensation = document.createElement("td");
    const colAroma = document.createElement("td");
    const colVisual = document.createElement("td");
    const colSound = document.createElement("td");

    const coin = document.createElement("img");
    coin.setAttribute("src", "./img/Coin.webp");

    // Add classes to each column
    colId.classList.add("col-id");
    colImg.classList.add("col-img");
    colName.classList.add("col-name");
    colLocation.classList.add("col-location");
    colRarity.classList.add("col-rarity");
    colType.classList.add("col-type");
    colMagiminA.classList.add("col-mag-a");
    colMagiminB.classList.add("col-mag-b");
    colMagiminC.classList.add("col-mag-c");
    colMagiminD.classList.add("col-mag-d");
    colMagiminE.classList.add("col-mag-e");
    colMagiminTotal.classList.add("col-mag-total");
    colPrice.classList.add("col-price");
    colQuinn.classList.add("col-quinn");
    colTaste.classList.add("col-taste");
    colSensation.classList.add("col-sensation");
    colAroma.classList.add("col-aroma");
    colVisual.classList.add("col-visual");
    colSound.classList.add("col-sound");

    // Add text content
    colId.textContent = i.id;
    colImg.append(this.printIcon(i));
    colName.textContent = i.name;
    colLocation.textContent = i.location;
    colRarity.textContent = i.rarity;
    colType.textContent = i.type;
    colMagiminA.textContent = this.printMagmins(i, "a");
    colMagiminB.textContent = this.printMagmins(i, "b");
    colMagiminC.textContent = this.printMagmins(i, "c");
    colMagiminD.textContent = this.printMagmins(i, "d");
    colMagiminE.textContent = this.printMagmins(i, "e");
    // Sum of all magimins
    colMagiminTotal.textContent =
      i.magimins.a + i.magimins.b + i.magimins.c + i.magimins.d + i.magimins.e;
    colPrice.append(coin);
    colPrice.append(i.basePrice);
    colQuinn.textContent = i.quinnQuantity;
    colTaste.append(this.printTrait(i, "taste"));
    colSensation.append(this.printTrait(i, "sensation"));
    colAroma.append(this.printTrait(i, "aroma"));
    colVisual.append(this.printTrait(i, "visual"));
    colSound.append(this.printTrait(i, "sound"));

    // Add trait class
    colTaste.classList.add("trait");
    colSensation.classList.add("trait");
    colAroma.classList.add("trait");
    colVisual.classList.add("trait");
    colSound.classList.add("trait");

    // Append each column to row
    row.append(colId);
    row.append(colImg);
    row.append(colName);
    row.append(colLocation);
    row.append(colRarity);
    row.append(colType);
    row.append(colMagiminA);
    row.append(colMagiminB);
    row.append(colMagiminC);
    row.append(colMagiminD);
    row.append(colMagiminE);
    row.append(colMagiminTotal);
    row.append(colPrice);
    row.append(colQuinn);
    row.append(colTaste);
    row.append(colSensation);
    row.append(colAroma);
    row.append(colVisual);
    row.append(colSound);

    return row;
  }

  printIcon(ingredient) {
    let name = ingredient.name.split(" ");

    name = name.join("_");
    name = `${name}.webp`;

    const img = document.createElement("img");
    const imgPath = `./img/ingredients/${name}`;

    img.setAttribute("src", imgPath);
    return img;
  }

  printTrait(ingredient, trait) {
    let state = null;

    if (ingredient.traits[trait] == 0) {
      return "";
    } else if (ingredient.traits[trait] == 1) {
      state = "positive";
    } else state = "negative";

    const img = document.createElement("img");
    const imgPath = `./img/traits/${trait}_Trait_${state}.webp`;

    img.setAttribute("src", imgPath);

    return img;
  }

  printMagmins(ingredient, letter) {
    if (ingredient.magimins[letter] == 0) {
      return "";
    } else return ingredient.magimins[letter];
  }
}
