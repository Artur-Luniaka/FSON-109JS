//Напиши клас Client який створює об'єкт
//з ​​властивостями login, email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email


class Client {
    #login;
    #email;

    constructor (login, email) {
        this.#login = login;
        this.#email= email;
    }
   
    get login() {
        return this.#login;
    }

    set login(newLogin) {
        this.#login = newLogin;
    }

    get email() {
        return this.#email;
    }

    set email(newEmail) {
        this.#email = newEmail;
    }
}

const user= new Client ("Ben", "123@gmail.com");
console.log( user );
console.log( user.login );

 user.login= "Den";

console.log( user.login );