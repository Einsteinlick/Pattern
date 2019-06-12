class Singleton{
    constructor() {
        if (Singleton.hasOwnProperty('singleton'))
            return Singleton.singleton;
        Object.defineProperty(Singleton, 'singleton',{
            value: this,
            enumerable:false,
            writable:false,
            configurable:false
        });
    }
}

const instance1 = new Singleton, instance2 = new Singleton;
console.log(instance1 === instance2);
console.log(instance1 === Singleton.singleton); 
console.log(instance2 === Singleton.singleton); 
