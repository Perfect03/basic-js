const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  alphavite = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  isNormal = true;
  constructor (isNormal) {
    if (isNormal === false) this.isNormal = false;
    else this.isNormal = true;
  }
  encrypt(message,key) {
    if (!message || !key) throw Error('Incorrect arguments!');
    let result = [];
    let entryMessage = message.split('');
    let entryKey = key
                      .repeat(Math.ceil(message.length / key.length))
                      .substring(0,message.length)
                      .split('');
    for (let i = 0;i < entryMessage.length;i++){
      if (!~this.alphavite.indexOf(entryMessage[i].toUpperCase())){
        entryKey.splice(i,0," ");
        entryKey.pop();
      }
    }
    for (let i = 0; i < entryMessage.length; i++){
      if (!~this.alphavite.indexOf(entryMessage[i].toUpperCase())) {
        result[i] = entryMessage[i];
        continue;
      }
      result[i] =  this.alphavite[(+this.alphavite.indexOf(entryMessage[i].toUpperCase()) + +this.alphavite.indexOf(entryKey[i].toUpperCase()))%26];
    }
    if (this.isNormal){
      return result.join('')
    } else return result.reverse().join('');
    
  }    
  decrypt(encryptedMessage,key) {
    if (!encryptedMessage || !key) throw Error('Incorrect arguments!');
    let result = [];
    let entryMessage = encryptedMessage.split('');
    let entryKey = key
                      .repeat(Math.ceil(encryptedMessage.length / key.length))
                      .substring(0,encryptedMessage.length)
                      .split('');
    for (let i = 0;i < entryMessage.length;i++){
      if (!~this.alphavite.indexOf(entryMessage[i].toUpperCase())){
        entryKey.splice(i,0," ");
        entryKey.pop();
      }
    }
    for (let i = 0; i < entryMessage.length; i++){
      if (!~this.alphavite.indexOf(entryMessage[i].toUpperCase())) {
        result[i] = entryMessage[i];
        continue;
      }
      result[i] =  this.alphavite[(+this.alphavite.indexOf(entryMessage[i].toUpperCase()) - +this.alphavite.indexOf(entryKey[i].toUpperCase())+ 26 ) % 26];
    }
    if (this.isNormal){
      return result.join('')
    } else return result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
