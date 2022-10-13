

class RandomNumberGenerator{
    value = undefined
    min = undefined
    max = undefined

    constructor(min, max){ 
        this.min = min
        this.max = max
    }

    perform(){
        this.value = 1 + Math.floor(Math.random()*(this.max-this.min + 1))
    }

    getValue(){
        return this.value 
    }
}

class ViewModel{
    
    constructor(randomNumberGenerator){    
        this.randomNumberGenerator =  randomNumberGenerator     
    }

    onButtonClicked(){
        randomNumberGenerator.perform()
        this.zufallszahl = randomNumberGenerator.getValue()
        viewModel.render()
    }
    
    render(){
        var body = document.getElementsByTagName("body")[0] 
        var div = document.getElementsByTagName("div")[0]
        var button = document.getElementsByTagName("button")[0]
        if(div){
            body.removeChild(div)
        }
        if(button){
            body.removeChild(button)
        }
        body.innerHTML = body.innerHTML + "<button> w&uuml;rfeln </button>" + `<div> ${this.zufallszahl} </div>`
        div = document.getElementsByTagName("div")[0]
        button = document.getElementsByTagName("button")[0]
        button.onclick = function(){
            viewModel.onButtonClicked()
        }
    }
}
    
var randomNumberGenerator = new RandomNumberGenerator(1,6) 
var viewModel = new ViewModel(randomNumberGenerator)
viewModel.render()






























 