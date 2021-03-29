
import CryptoJS from './crypto-js'

// 3des加密
function encrypt_3des(data, key) {
	var keyHex = CryptoJS.enc.Utf8.parse(key);
	var encrypted = CryptoJS.DES.encrypt(data, keyHex, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}

// 3des解密
function decrypt_3des(ciphertext, key) {
	var keyHex = CryptoJS.enc.Utf8.parse(key)
  var decrypted = CryptoJS.DES.decrypt({
    ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
  }, keyHex, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
  });
	var result_value = decrypted.toString(CryptoJS.enc.Utf8);
  return result_value;
}

module.exports = {
  encrypt_3des,
	decrypt_3des
}