function once(fn){
  let result, ran = false;
  return function proxy(){
    if(ran){
      return result
    }
    ran = true
    result = fn.apply(this,arguments)
    fn = null
    return result
  }
}
