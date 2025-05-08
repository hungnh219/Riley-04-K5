
import Item from "./item";

const ItemType = {
    consumable: "consumable",
    equipment: "equipment"
}

const ItemDatabase = [
    new Item("Kiếm", "2", 2, ItemType.consumable, "3"),
    new Item("Giáo", "1", 2, ItemType.consumable, "6"),
    new Item("Bình Máu", "2", 4, ItemType.consumable, "6"),
    new Item("Mana", "3", 5, ItemType.consumable, "6"),
    new Item("Khiên", "4", 3, ItemType.consumable, "6"),
    new Item("Dược phẩm 1", "1", 2, ItemType.consumable, "6"),
    new Item("Dược phẩm 2", "1", 1, ItemType.consumable, "6"),
    // new Item("Bình máu", "potion", 5, ItemType.consumable, "Hồi 50 HP"),
    // new Item("Kiếm sắt", "sword", 1, ItemType.equipment, "Tăng 10 sát thương"),
    // new Item("Kiếm sắt1", "sword", 1, ItemType.equipment, "Tăng 10 sát thương"),
    // new Item("Kiếm sắt2", "sword", 1, ItemType.equipment, "Tăng 10 sát thương"),
    // new Item("Kiếm sắt3", "sword", 1, ItemType.equipment, "Tăng 10 sát thương"),
    // new Item("Kiếm sắt4", "sword", 1, ItemType.equipment, "Tăng 10 sát thương"),
];

export default ItemDatabase;