function reduce(array, callback, initialValue) {
	let acumulador=initialValue;
  for(i=0;array.length>i;i++){
      acumulador=callback(acumulador,array[i],i,array);
	}
  return acumulador;
}
 module.exports=reduce;