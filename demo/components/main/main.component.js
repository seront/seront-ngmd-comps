import menuConfig from './main.config';
class MainController {
    constructor(){
        this.names = [ 
            {name: "Inicio", state: 'app'}, 
            {name: "Primero", state: 'first-section'} 
        ]; 

       this.menu = menuConfig.menu;
       this.configMenuToolbar = menuConfig.configMenuToolbar;
       this.configMenu = menuConfig.configMenu;
    }
}

export default {
    template: require('./main.html'),
    controller: [MainController],
    bindings: {}
  };