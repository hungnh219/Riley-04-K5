import ItemType from "./ItemType_31";
import Item from "./ItemModel_31";

const ItemDatabase = [
    new Item("Kiếm", ItemType.ItemType.SWORD, ItemType.ItemUsageType.EQUIPMENT, 2, "3"),
    new Item("Kiếm", ItemType.ItemType.SWORD, ItemType.ItemUsageType.EQUIPMENT, 2, "3"),
    new Item("Kiem 1", ItemType.ItemType.SWORD, ItemType.ItemUsageType.EQUIPMENT, 2, "6"),
    new Item("Bình Máu", ItemType.ItemType.HEALTH_POTION, ItemType.ItemUsageType.CONSUMABLE, 4, "6"),
    new Item("Mana", ItemType.ItemType.MANA_POTION, ItemType.ItemUsageType.EQUIPMENT, 5, "6"),
    new Item("Khiên", ItemType.ItemType.HEALTH_POTION, ItemType.ItemUsageType.CONSUMABLE, 3, "6"),
    new Item("Dược phẩm 1", ItemType.ItemType.HEALTH_POTION, ItemType.ItemUsageType.EQUIPMENT, 2, "6"),
    new Item("Dược phẩm 2", ItemType.ItemType.HEALTH_POTION, ItemType.ItemUsageType.CONSUMABLE, 1, "6"),
];

console.log(ItemDatabase);

export default ItemDatabase;