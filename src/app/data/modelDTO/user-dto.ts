export class UserDto {
    private city: string;
    private email: string;
    private name: string;
    private phone: string;
    private photo: string;

    getUserCity(): string {
        return this.city;
    }

    setUserCity(value: string): UserDto {
        this.city = value;
        return this;
    }

    getUserEmail(): string {
        return this.email;
    }

    setUserEmail(value: string): UserDto {
        this.email = value;
        return this;
    }

    getUserName(): string {
        return this.name;
    }

    setUserName(value: string): UserDto {
        this.name = value;
        return this;
    }

    getUserPhone(): string {
        return this.phone;
    }

    setUserPhone(value: string): UserDto {
        this.phone = value;
        return this;
    }

    getUserPhoto(): string {
        return this.photo;
    }

    setUserPhoto(value: string): UserDto {
        this.photo = value;
        return this;
    }
}
