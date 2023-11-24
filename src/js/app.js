const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

const props = ["name", "level"];

export default function orderByProps(object, props) {
    const result = [];
    for (let i = 0; i < props.length; i++) {
        for(const prop in object) {
            if(prop == props[i]) {
                result.push({key: prop, value: object[prop]});
                Object.defineProperty(object, prop, {
                    enumerable: false
                })
            }
        }
    }
    const remainder = Object.keys(object).sort();
    for(let j = 0; j < remainder.length; j++) {
        for(const prop in object) {
            if (remainder[j] === prop) {
                result.push({key: prop, value: object[prop]});
            }
        }
    }
    return result;
}

console.log(orderByProps(obj, props));
