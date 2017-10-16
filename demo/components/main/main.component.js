class MainController {
    constructor(){
        this.names = [
            {name: "Inicio", state: 'app'},
            {name: "Primero", state: 'first-section'}
        ];
    }
}

export default {
    template: require('./main.html'),
    controller: [MainController],
    bindings: {}
  };