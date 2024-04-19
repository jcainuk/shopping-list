const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

const addItem = (e) => {
  e.preventDefault();

  // Validate Input
  if (itemInput.value === "") {
    alert("Please add an item");
    return;
  }

  console.log("success");
};

// Event Listeners
itemForm.addEventListener("submit", addItem);
