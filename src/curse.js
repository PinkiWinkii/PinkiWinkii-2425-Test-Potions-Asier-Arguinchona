export default class Curse {



    constructor( modifiers, _id, name, description, type, antidote_effects, poison_effects) {

        this.modifiers = modifiers;
        this._id = _id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.antidote_effects = antidote_effects;
        this.poison_effects = poison_effects;
        this.key = "";
    }

    static from(modifiers, _id, name, description, type, antidote_effects, poison_effects){
        return new Curse(
            modifiers,
            _id,
            name,
            description,
            type,
            antidote_effects,
            poison_effects,
        );
    }

}