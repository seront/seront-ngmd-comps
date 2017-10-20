class BreadcrumsController {

  constructor($transitions, $state) {
    this.$transitions = $transitions;
    this.$state = $state;
    this.steps = [];
    $transitions.onSuccess({}, () => {
     this.build();
    });

  }

  build() {
    let level = "";
    let steps = ((this.$state.current.name).split('.')).length;
    this.steps = [];
    let pre = [];

    for(let i = 0; i < steps; i++){
      let s = i == 0 ? this.$state.current : this.$state.get(level);
      pre.push(this.generateButton(s));
      level += '.^';
    }
    
    if(angular.isArray(this.names)){
      this.steps = this.maskName(pre.reverse());  
    }else{
      this.steps = pre.reverse();
    }
    
  }

  last(array){
    return array[array.length - 1];
  }

  generateButton(state) {
    return {
      icon: state.icon,
      state: state.abstact? state.name : '',
      name: this.last(state.name.split('.'))
    }
  }

  maskName(buttons){
    for(let index in this.names){
      for(let i = 0; i < buttons.length; i++){
        if(this.names[index].state === buttons[i].name){
          buttons[i].name = this.names[index].name;
          break;
        }
      }
    }
    return buttons;
  }

  $onInit(){
    if(!angular.isUndefined(this.config)){
      this.config.iconColor = angular.isUndefined(this.config.iconColor) ? 'md-primary' : this.config.iconColor;
    }else{
      this.setDefaults();
    }
    
    this.build();
  }

  setDefaults(){
    this.config = {
      // iconColor: 'md-primary',
      iconColorLast: 'md-primary'
    };
  }
}

export default {
  template: require('./breadcrums.html'),
  controller: ['$transitions', '$state', BreadcrumsController],
  bindings: {
    names: '<',
    config: '<'
  }
};
