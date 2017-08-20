import mongoose from "mongoose";
import Inventory from "./../schema/InventorySchema";

export function createInventory(data, callback) {
    const inventoryModel = new Inventory(data);
    inventoryModel.save(function (err, inventory) {
        callback(err, inventory);
    })
}

export function getInventoryById(id, callback) {
    Inventory.findOne({ "id": parseInt(id) }, function (err, inventory) {
        callback(err, inventory)
    });
}

export function updateInventoryById(id, data, callback) {
    data.lastModifiedAt = new Date();
    Inventory.findOneAndUpdate({ "id": parseInt(id) }, data, { "new": true }, function (err, inventory) {
        callback(err, inventory);
    });
}