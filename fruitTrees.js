class Tree {
    constructor(tree_age,tree_height, treeMatrueAge,treeHealthStatus,treeLimitAge,treeStopAge) {
        this._age = tree_age;
        this._height = tree_height;
        this._fruits = [];
        this.harvested = '';
        this._healthStatus = treeHealthStatus;
        this._MatrueAge = treeMatrueAge;;
        this._limitAge = treeLimitAge;
        this._stopAge = treeStopAge;
    }

    // getter

    get age() {
        return this._age; 
    }

    get height() {
        this._height;
    }

    get fruits() {
        return this._fruits;
    }

    get healthStatus() {
        return this._healthStatus;
    }

    get harvested() {
        return this._harvested;
    }

    get matureAge() {
        return this._matureAge;
    }

    get limitAge() {
        return this._limitAge;
    }

    get _stopAge() {
        return this._stopAge;
    }

    // setter
    set age(value) {
        this._age = value;
    }

    // grow
    grow() {
        let addingHeight = 0;
        this._age++;

        if(this.age < this._limitAge) {
            addingHeight = Math.round(Math.random()*100)/100
            this.height += addingHeight;
        }

        if (this.age >= this._stopAge){
            this._healthStatus = false;
        };
        return this;
    } 

    // produce some fruits
    produceFruits() {

        if (this.age >= this._MatrueAge) {
            console.log("berbuah")
        }

        if(this.age >= this._MatrueAge) {
            let fruitstotal = math.raound(math.random *100);
            for (let i = 0; i < fruitstotal; i++);
            this.fruits.push(i);
        }
    }

    // get some fruit
   
    harvest() { 
    
    }
}

//class fruits
class Fruits {
    constructor(num) {
        this.quality = setquality(num);
    } 
    setQuality(num) {
        if(Math.random() > num){
            this.quality = 'good'
        } else {
            this.quality = 'bad'
        }
    }

}