import ItemType from "./ItemType";

class Item {
    constructor(name, type, price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

const ItemDatabase = [
    new Item('Sword 1', ItemType.SWORD, 100),
    new Item('Shield 1', ItemType.SHIELD, 200),
    new Item('Shield 2', ItemType.SHIELD, 150),
    new Item('Sword 2', ItemType.SWORD, 120),
]

export default ItemDatabase;