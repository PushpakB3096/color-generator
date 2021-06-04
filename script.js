let colors = ["f2f4c3", "f98404", "ffffc7", "4ca1a3", "b6c9f0", "e4bad4"];

const cardsEl = document.querySelector(".cards");

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

populateCards();
