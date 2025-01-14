export default class Potion {

    constructor(name) {
        this.name = name;
    }

    static failed() {
        return new FailedPotion("Failed Potion", 0);
    }
}

// Poción de Antídoto
export class Antidote extends Potion {

    constructor( modifiers, _id, name, description, type, antidote_effects) {
        super(name);
        
        this.modifiers = modifiers;
        this._id = _id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.antidote_effects = antidote_effects;
    }
}

// Poción de Veneno
export class Poison extends Potion {

    constructor( modifiers, _id, name, description, type, poison_effects) {
        super(name);
        
        this.modifiers = modifiers;
        this._id = _id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.poisonEffects = poison_effects;
    }
}

// Poción Elixir
export class Elixir extends Potion {

    constructor(name, potionEffect, modifier_value, duration, affected_attr) {

        super(name);

        this.potionEffect = potionEffect;
        this.duration = duration;
        this.modifier_value = modifier_value;
        this.affected_attr = affected_attr;
    }
}

// Poción Veneno
export class Venom extends Potion {


    constructor(name, potionEffect, modifier_value, duration, affected_attr) {

        super(name);

        this.potionEffect = potionEffect;
        this.duration = duration;
        this.modifier_value = modifier_value;
        this.affected_attr = affected_attr;
    }
}

// Poción Esencia
export class Essence extends Potion {

    modifier_value;

    constructor(name, modifier_value) {
        super(name);
        this.modifier_value = modifier_value;
    }
}

// Poción Stench
export class Stench extends Potion {

    modifier_value;

    constructor(name, modifier_value) {
        super(name);
        this.modifier_value = modifier_value;
    }
}

// Poción fallida
export class FailedPotion extends Potion {

    modifier_value
    
    constructor(name, modifier_value) {
        super(name);
        this.modifier_value = modifier_value;
    }
}

// Poción fallida
export class PurificationPotion extends Potion {

    modifier_value
    
    constructor(name, modifier_value) {
        super(name);
        this.modifier_value = modifier_value;
    }
}
