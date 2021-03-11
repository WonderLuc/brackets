module.exports = function check(str, bracketsConfig) {
  let patterns = bracketsConfig.map(el=>el.join(""));
  for(let i=0; i< patterns.length;i++){
      if(str.includes(patterns[i])){
          str = str.replace(patterns[i],"");
          i = -1;
      }
  }
  return str == ""? true:false;
}
