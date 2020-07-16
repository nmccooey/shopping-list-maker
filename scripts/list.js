const addItemModal = document.querySelector("#add-item-modal");
const addItemForm = document.querySelector("#add-item-form");
const submitButton = document.querySelector("#submit-button");

const itemName = document.querySelector("#item-name");
const quantity = document.querySelector("#quantity");

let itemList = [];

submitButton.addEventListener("click", function(){
    $('#add-item-modal').modal('hide');


    let newItem = {itemName:itemName.value, quantity:quantity.value};

    itemList.push(newItem);
    addItemForm.reset();
    render(newItem);
});

function render(newItem) {
    const table = document.querySelector(".table");
    
    // New Row.
    const newRow = document.createElement("tr");
    newRow.setAttribute("index", itemList.indexOf(newItem));
    table.appendChild(newRow);

    // 3 New TD's.
    const itemNameTD = document.createElement("td");
    const quantityTD = document.createElement("td");
    const deleteButtonTD = document.createElement("td");

    // Set name and quantity.
    itemNameTD.innerText = itemList[itemList.length -1].itemName;
    quantityTD.innerText = itemList[itemList.length-1].quantity;

    newRow.appendChild(itemNameTD);
    newRow.appendChild(quantityTD);
    newRow.appendChild(deleteButtonTD);

    // Create delete button.
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButtonTD.appendChild(deleteButton);

    deleteButton.addEventListener("click", function(){
        // get index and remove from list.
        let index = newRow.getAttribute("index");
        itemList.splice(index, 1);

        // update table.
        
    });
}