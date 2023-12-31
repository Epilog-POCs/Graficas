var categories = [];
var minCategories = 5;
var maxCategories = 20;

var subcategories = [];
var minSubcategories = 5;
var maxSubcategories = 20;


function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomString(length) {
  var result = [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() *
                                             charactersLength)));
  }
  return result.join('');
}

function generateCategories(){
  var total = Math.floor(Math.random() * (maxCategories - minCategories) + minCategories);
  for(var i = 1; i <= total; i++){
    var drilldown = randomString(10);
    var categorie = {
      name: `Categoria ${i}`,
      y: getRandomBetween(1000, 10000),
      drilldown: drilldown
    }
    var subcategorie = {
      name: `Subcategoria ${i}`,
      y: getRandomBetween(1000, 10000),
      id: drilldown,
      data: generateSubCategories(i)
    }
    subcategories.push(subcategorie)
    categories.push(categorie)
  }
}

function generateSubCategories(indice, subindice=1){
  var items = [];
  var total = Math.floor(Math.random() * (maxSubcategories - minSubcategories) + minSubcategories);
  for(var i = 1; i <= total; i++){
    var drilldown = randomString(10);
    var obj = {
      name: `Subcategoria ${indice}.${i}`,
      y: getRandomBetween(100, 1000),
      drilldown: drilldown
    }
    var subcategorie = {
      name: `Subcategoria ${i}`,
      y: getRandomBetween(1000, 10000),
      id: drilldown,
      data: generateElements(i)
    }
    subcategories.push(subcategorie)

    items.push(obj)
  }
  return items;
}

function generateElements(indice, subindice=1){
  var items = [];
  var total = Math.floor(Math.random() * (maxSubcategories - minSubcategories) + minSubcategories);
  for(var i = 1; i <= total; i++){
    var obj = [`Elemento ${i}`,getRandomBetween(100, 1000)]
    items.push(obj)
  }
  return items;
}

function generateData(){
  var data = [];
  for(var i = 1; i <= 12; i++){
    var element = {y: getRandomBetween(2,30)}
    data.push(element)
  }
  return data;
}
function generateSubData(){
  var data = [];
  for(var i = 1; i <= 12; i++){
    var element = {y: getRandomBetween(2,30)}
    data.push(element)
  }
  return data;

}

function generateLineCategories(){
  var total = Math.floor(Math.random() * (maxCategories - minCategories) + minCategories);
  for(var i = 1; i <= total; i++){    
    var categorie = {
      name: `Categoria ${i}`,
      data: generateData(),
    }
    categories.push(categorie)
  }
}

function generateLineSubCategories(){
  var total = Math.floor(Math.random() * (maxCategories - minCategories) + minCategories);
  var subcategories = [];
  for(var i = 1; i <= total; i++){

    var subcategorie = {
      name: `Categoria ${i}`,
      data: generateSubData(),
    }
    subcategories.push(subcategorie)
  }
  return subcategories;
}




