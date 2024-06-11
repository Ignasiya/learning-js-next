class AutoMobile {
    #horsePowers = 0;

    set horsePowers(value) {
        if (value < 0) throw new Error('Отрицательное количество сил');
        this.#horsePowers = value;
    }

    get horsePowers() {
        return this.#horsePowers;
    }

    constructor(power) {
        this.#horsePowers = power;
    }
}

let auto = new AutoMobile(100);

auto.horsePowers = -10;

