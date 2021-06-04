const cardsEl = document.querySelector(".cards");

let colors = [];

function generateRandomColors(num) {
  let colorCode = "";
  let times = 1;

  while (times <= num) {
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
      colorCode = "";
    }
    times++;
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
  // reset the cards
  cardsEl.innerHTML = "";
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

    const copyMsg = document.createElement("span");
    copyMsg.className = "copy_msg";
    copyMsg.textContent = "Copy to Clipboard";

    // copy color code to clipboard
    copyIcon.addEventListener("click", () => {
      /* 
            select() function is available only to input/textarea elements. Hence, temporary creating an input with the value of the color code. select() function will select the value of the input and the execCommand('copy') will copy that selection. After it is copied, we are removing the input field from the DOM.    
        */
      const tempInput = document.createElement("input");
      // coverting the hexcode color code to uppercase
      tempInput.value = `#${color}`.toUpperCase();
      document.body.appendChild(tempInput);

      tempInput.select();
      document.execCommand("Copy");
      // change the tooltip message to indicate that copying is done
      copyMsg.textContent = "Copied!";

      tempInput.remove();
    });

    colorCopy.addEventListener("mouseenter", () => {
      copyMsg.style.visibility = "visible";
    });
    colorCopy.addEventListener("mouseleave", () => {
      copyMsg.style.visibility = "hidden";
      // when the user moves away from the button, change text back to default
      copyMsg.textContent = "Copy to Clipboard!";
    });

    colorCopy.appendChild(copyMsg);
    colorCopy.appendChild(copyIcon);
    cardContent.appendChild(colorCode);
    cardContent.appendChild(colorCopy);

    card.appendChild(cardContent);

    // appending the newly created card to the list of cards
    cardsEl.appendChild(card);
  });
}

window.addEventListener("scroll", () => {
  // how much the user has already scrolled down
  let scrollY = window.scrollY;
  // how much screen is visible currently
  let innerHeight = window.innerHeight;
  // height of the document
  let scrollHeight = document.documentElement.scrollHeight;

  /* 
  if whatver is on the screen + however much we have scrolled is greater than 90% of the document height, then we have almost scrolled till the end of the page
  */
  if (scrollY + innerHeight >= 0.9 * scrollHeight) {
    // generate 10 more colors and re-populate the cards
    generateRandomColors(10);
    populateCards();
  }
});

// generate 18 random colors on page load
generateRandomColors(18);
// populate the cards based on the generated colors
populateCards();
