class TableController {
  constructor($filter) {
    this.$filter = $filter;
    this.arrayKey = [];
  }
  $onInit() {
    this.newConfig = [];
    this.order();
    this.selected = [];
    if (this.pagination) {
      this.prevLimit = this.pagination.limit;
      this.prevPage = this.pagination.page;
    }

  }

  order() {
    var salida = [];
    for (var item in this.objectConfig) {
      var ob = [item, this.objectConfig[item]];
      salida.push(ob);
    }
    salida.sort(function (a, b) {
      return (parseInt(a[1].order, 10) > parseInt(b[1].order, 10) ? 1 : -1);
    });
    this.newConfig = salida;
  }

  paginar() {
    if (this.prevLimit !== this.pagination.limit || this.prevPage !== this.pagination.page) {
      this.prevLimit = this.pagination.limit;
      this.prevPage = this.pagination.page;
      this.onPaginate({ page: this.pagination.page, limit: this.pagination.limit })
    }
  }

  $onChanges(cambios) {
    if (cambios.pagination && cambios.pagination.currentValue) {
      this.pagination = cambios.pagination.currentValue;
    }

    if(cambios.objectConfig){
      this.objectConfig = cambios.objectConfig.currentValue;
      this.arrayKeyFill();
    }

    if (cambios.actions && cambios.actions.currentValue) {
      if(!angular.isUndefined(cambios.actions.currentValue[0]) &&
      !angular.isUndefined(cambios.actions.currentValue[0].order)){
        let salida = [];
        salida.sort(function (a, b) {
          return (parseInt(a[1].order, 10) > parseInt(b[1].order, 10) ? 1 : -1);
        });
      }else{
        this.actions = angular.copy(cambios.actions.currentValue);
      }
    }



    if(cambios.objects && !angular.isUndefined(cambios.objects.currentValue)){
      let obs = cambios.objects.currentValue.length ? cambios.objects.currentValue : [cambios.objects.currentValue];
      if(this.arrayKey.length > 0){
        this.objects = this.arrayValueCheck(obs);
      }else{
        this.objects = obs;
      }

    }
  }

  arrayKeyFill(){
    if(this.objectConfig){
      for (var key in this.objectConfig) {
        if (this.objectConfig.hasOwnProperty(key)) {
          if(this.objectConfig[key].type === 'array-text' ||
             this.objectConfig[key].type === 'array-object'){
              this.arrayKey.push(key);
          }
        }
      }
    }
    // console.log("this.arrayKey", this.arrayKey);
  }

  arrayValueCheck(obs){
    // console.log(obs);
    for(let i = 0; i < obs.length; i++){
      for(let j = 0; j < this.arrayKey.length; j++){
        // console.log("this.arrayKey[j]", this.arrayKey[j]);
        if(obs[i][this.arrayKey[j]]){
          let arr = obs[i][this.arrayKey[j]];
          obs[i][this.arrayKey[j]] = arr.length ? arr : [arr];
        }

      }
    }
    return obs;
  }

  onSelect(object){
    // console.log("table component row selected");
    this.onSelection({object:object});
  }

  applyFilter(model, filter, option){
    if(filter){
      return this.$filter(filter)(model, option);
    }else{
      return model;
    }

    }
}

export const TableComponent = {
  template: require('./table.html'),
  // controller: TableController,
  controller: ['$filter', TableController],
  bindings: {
    'config': '<',
    'headers': '<',
    'objectConfig': '<',
    // 'objects': "=",
    'objects': "<",
    'actions': '<',
    'pagination': '<',
    'onPaginate': '&',
    'onAction': '&',
    'onSelection': '&',
    'onDeselection': '&'
  }
};
