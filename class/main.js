class animal {
    constructor(name){
        this.name = name
    }
    run(){
        console.log(this.name + "跑很快");
    }
}

class dog extends animal{
    bark(){
        console.log('旺旺');
    }
}
const rich = new dog('rich');

rich.color = '白色'

rich.catch_ball = function(){
    console.log('接到球了');
}

rich.run();
rich.catch_ball();
console.log(rich.color);




