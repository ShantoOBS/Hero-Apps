import { toast } from "react-toastify";

function getData() {

    const arr = localStorage.getItem("StoreItem");

    if (arr) {
        return JSON.parse(arr);
    }
    else return [];
}


function SaveData(id) {
    toast("Intalling App");
    const oldData = getData();

    const currentData = [...oldData, id];
    localStorage.setItem("StoreItem", JSON.stringify(currentData));
}

function removeData(id) {
    toast("Unstailling App");
    const arr = getData();
    const currentData = arr.filter((d) => d != id);
    localStorage.setItem("StoreItem", JSON.stringify(currentData));

}

export { getData, SaveData, removeData };

