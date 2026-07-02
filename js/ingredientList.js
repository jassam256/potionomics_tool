class IngredientList {
  constructor(list, rootId) {
    this.list = list;
    this.rootId = rootId;

    this.refresh(this.list);
  }

  // METHODS
  getRoot() {
    return document.getElementById(this.rootId);
  }

  refresh(list) {
    const root = this.getRoot();
    const sortedList = list;

    // Remove current elements
    root.replaceChildren();

    // For each ingredient
    sortedList.forEach((i) => {
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
        i.magimins.a +
        i.magimins.b +
        i.magimins.c +
        i.magimins.d +
        i.magimins.e;
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

      // Append row to root element
      root.append(row);
    });
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
