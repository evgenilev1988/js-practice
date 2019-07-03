// Factory DP
function item1(options)
{
  this.name = options.name;
}

function item2(options)
{
  this.name = options.name;
}

function itemFactory(){}
itemFactory.prototype.itemClass = null;

itemFactory.prototype = {
  create:function(options)
  {
    switch(options.type){
      case "item1":
        this.itemClass = item1;
        break;
      case "item2":
        this.itemClass = item2;
        break;
      default:
        this.itemClass = null;
        break;
    }

    return new this.itemClass(options);
  }
}

var itemFac = new itemFactory();
var createItem1 = itemFac.create({type:"item1",name:"dummy1"})
console.log(createItem1);
console.log( createItem1 instanceof item1 );

// End Factory DP
