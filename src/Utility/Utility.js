
function getData() {

    const arr = localStorage.getItem("StoreItem");

    if (arr) {
        return JSON.parse(arr);
    }
    else return [];
}


function SaveData(id) {
    alert("item added,,,");
    const oldData = getData();

    const currentData = [...oldData, id];
    localStorage.setItem("StoreItem", JSON.stringify(currentData));
}

function removeData(id) {
    alert("Unstailling App,,,,");
    const arr = getData();
    const curr = arr.filter((d) => d != id);

    const currentData = [...curr, id];
    localStorage.setItem("StoreItem", JSON.stringify(currentData));

}

export { getData, SaveData, removeData };

