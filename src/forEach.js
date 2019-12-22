
const forEach=(array, callback)=> {
  for(let i=0; i < array.length;i++){
     var elem = array[i];
     callback(elem, i, array);
  }
}
module.exports=forEach;