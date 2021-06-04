let colors = [];

const cardsEl = document.querySelector(".cards");

function generateRandomColor() {
  let colorCode = "";

  // generating a 6-digit hexadecimal code
  for (let i = 0; i < 6; i++) {
    // generating a random number between 0 and 15
    let code = Math.floor(Math.random() * 16);
    // if the number is 9 or below, add it directly
    if (code <= 9) {
      colorCode += code;
    } else {
      // if the number is more than 9, get the hexcode and add it
      let hexCode = getHexCode(code);
      if (hexCode) colorCode += hexCode;
    }
  }
  // push the generated random color to the main array if it already doesn't exist
  if (!colors.includes(colorCode)) {
    colors.push(colorCode);
  }
}

// this function will return a hexcode corresponding to a code
function getHexCode(code) {
  switch (code) {
    case 10:
      return "a";
    case 11:
      return "b";
    case 12:
      return "c";
    case 13:
      return "d";
    case 14:
      return "e";
    case 15:
      return "f";
    default:
      return;
  }
}

function populateCards() {
  colors.forEach(color => {
    // create card element for each color
    const card = document.createElement("div");
    card.className = "card";

    const cardColor = document.createElement("div");
    cardColor.className = "card_color";
    // adding background color to each card
    cardColor.style.backgroundColor = `#${color}`;
    card.appendChild(cardColor);

    // creating the content of the cards
    const cardContent = document.createElement("div");
    cardContent.className = "card_content";

    const colorCode = document.createElement("span");
    colorCode.className = "color_code";
    // adding the color code for displaying
    colorCode.textContent = `#${color}`;

    const colorCopy = document.createElement("span");
    colorCopy.className = "color_copy";

    // creating copy icons
    const copyIcon = document.createElement("i");
    copyIcon.className = "far fa-copy";

    colorCopy.appendChild(copyIcon);
    cardContent.appendChild(colorCode);
    cardContent.appendChild(colorCopy);

    card.appendChild(cardContent);

    // appending the newly created card to the list of cards
    cardsEl.appendChild(card);
  });
}

// TODO: call automatically a certain number of times
generateRandomColor();
generateRandomColor();
generateRandomColor();
generateRandomColor();
generateRandomColor();
generateRandomColor();
generateRandomColor();
generateRandomColor();

populateCards();
