const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

 function secondIndex(text, symbol) {

  var counter = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] === symbol && ++counter == 2) {
      return i
    }
  }
  return undefined;
}



function renameFiles(a) {
  var mapped = a.map(function(el, i) {
    return  el ;
    });

    
  let b=a;
  let d=a;
  let c=mapped.sort();let count=0;
  for(let j=1;j<c.length;j++)
  {
    for(let i=0;i<j;i++)
    if(b[i]==c[j]){
      count++;
b[secondIndex(b,c[j])]=c[j].concat(`(${count})`)
    }
    else count =0;
  }
  return b;
  for(let j=0;j<a.length;j++)
{
  
}



 for(let j=0;j<b.length;j++)
{
  count=0
for(let i=0;i<j;i++)
{
  if(b[i]==b[j]) count++;
}
if(k) b.push(a[j]);
}
}

module.exports = {
  renameFiles
};
