import Effect from "./effect.tsx";

export default class Ingredient {



    constructor(_id, name, description, value, effects, image, type, qty) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.effects = effects;
        this.value = value;
        this.image = image;
        this.type = type;
        this.key = "";
        this.qty = qty
    }

    static from(_id, name, description, value, effects, image, type, qty) {
        return new Ingredient(
            _id,
            name,
            description,
            value,
            effects,
            image,
            type,
            qty
        );
    }
}
