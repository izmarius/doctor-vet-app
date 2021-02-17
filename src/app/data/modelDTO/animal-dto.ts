export class AnimalDto {
    private age: string;
    private birthDay: string;
    private bloodType: string;
    private name: string;
    private weight: string;

    constructor(age = '', birthDay = '', bloodType = '', name = '', weight = '') {
        this.age = age;
        this.birthDay = birthDay;
        this.bloodType = bloodType;
        this.name = name;
        this.weight = weight;
    }

    getAnimalAge(): string {
        return this.age;
    }

    setAnimalAge(value: string): AnimalDto {
        this.age = value;
        return this;
    }

    getAnimalBirthDay(): string {
        return this.birthDay;
    }

    setAnimalBirthDay(value: string): AnimalDto {
        this.birthDay = value;
        return this;
    }

    getAnimalBloodType(): string {
        return this.bloodType;
    }

    setAnimalBloodType(value: string): AnimalDto {
        this.bloodType = value;
        return this;
    }

    getAnimalName(): string {
        return this.name;
    }

    setAnimalName(value: string): AnimalDto {
        this.name = value;
        return this;
    }

    getAnimalWeight(): string {
        return this.weight;
    }

    setAnimalWeight(value: string): AnimalDto {
        this.weight = value;
        return this;
    }
}
