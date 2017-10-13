

class BreadcrumsController {

  constructor($transitions, $state) {
    this.$transitions = $transitions;
    this.$state = $state;
    this.steps = [];

    $transitions.onSuccess({}, () => {
     this.current();
    });

  }

  current() {
    let level = "^";
    let steps = (this.$state.current.name).split('.');
    let pre = [];
    for(let i = 0; i < steps.length; i++){
      let s = this.$state.get(level);

      if(s.name !== '' && !s.abstract && s.url !== 'dashboard'){
        let b = this.generateButton(s.url, s.name);
        pre.push(b);
      }else if(s.name !== '' && s.url !== 'dashboard'){
        let b = this.generateButton(s.url, s.name, s.abstract);
        pre.push(b);
      }
      level += '.^';
    }
    this.steps = pre.reverse();
    if(this.$state.current.url !== 'dashboard'){
      let current = this.generateButton(this.$state.current.url, this.$state.current.name);
      this.steps.push(current);
    }

  }



  generateButton(url, state, abstract) {
    if (url === '/') {
      let btn = { name: 'DASHBOARD', icon: 'dashboard', state: 'app.dashboard' };
      return btn;
    } else {
      let btn = { name: url === '/admin' ? 'administrar' : url.replace('/', ''),
    icon: url === '/admin' ? 'settings' : this.buscarIcono(state)};
      if (state && angular.isUndefined(abstract)) {
        let s = state.split('.');
        btn.state = s[s.length-1] === 'admin' ? '': state;
      }
      return btn;
    }

  }

  buscarIcono(state){
    // console.log(this.menu.length);
    let s = _.find(this.menu, ["state", state]);
    // console.log("buscar icono", s, state);
    if(s){
      return s.icon
    }else{
      // console.log("busqueda profunda");
      let icon = "";
      _.forEach(this.menu, (value)=>{
        if(value['items']){
          // console.log("value['items']", value['items']);
          let out = _.find(value['items'], ["state", state]);
          // console.log("profunda out ", out);
          if(out){
              icon = out.icon
              return;
          }
        }
      });
      return icon;
    }
  }

  $onInit() {
    this.current();
  }



}

export const BreadcrumsComponent = {
  template: require('./breadcrums.html'),
  controller: ['$transitions', '$state', BreadcrumsController],
  bindings: {
    menu: '<'
  }
};
