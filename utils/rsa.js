
const RSA = require('./wx_rsa')

// 私钥
var privateKey = '-----BEGIN PRIVATE KEY-----'+
'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCO2n7UyQImu4LEsR6aH/2/6eUmeBDFDu87SRM3zLA6rAyqXGQRw+dl8Nuz2rSoJhQ0+/Hdzkv6uaLA6e9q9ELtQjUDPYH0yXPO5RXyKNoxuNO8mvN+t7edo5Kw+8DMedf6/Ma07r0vKG4NMx/cVFLJns80J8aqDuf0+QjnMeCO9WECS19C6cMTQZetO2RGClIc1Xrqsr5sbfL58Y4f/ttF7LBNu5fmV4TKcneyDvFfV/WET5IQJueaVRKvdtUlkJS6Mv0ztVH2VPUb2JeF3wFeQdTIPR29v2amtJ+iv7t2PHF9Q8zOhSzxPGf72la1zvTmEwVueT+Msh8mujZ/f/vHAgMBAAECggEAZ8XhjMHYhjqA7FGeYWgL9XX7uM5PoFcRAog7JbXT70s8iCVFrIIbfrpRX33o7p164GKFeRN7rk9cI7fM7G00kRYfXJM57JDLR+iy4I88shIJ/mCxscPT5vgEf/ziOafpdbJaxuUHGVLNX1lcM7otyblL3B9o+fCKIDMofIqHDlGrasp0OLa4bHnFu/Jed59VSvrRzI9scdcYaVQ75XMVl34CxWbUWw9tDOa+Ul56gmGk/01u4HOYBkTlU1QGvOREkGAgARouvHatbTX6j4y5S7fjlaONtAOOVd3lsfuqAWyAfBVEQnb2mvUsEkurHxQFC9KSCGW3rPmd8vVdWdhugQKBgQDSKYXNB8/4WjofSJApsvABErZLg5EqpckSwY9yBhk2RX3U0L0LoleWWJKS28BQ5z3kNu+0JQ078y/90CSrqpY40b1Om7LQC+RfXvdOyK4rY+vHwetT3ce5E09M4SAMtHz4Q8llkXnmqSRiuIFw/Xr9ANbRITEOsgpq/vp6fGc57wKBgQCuAsTNXRGyyZ9P1uyPZTblp3shxP1kyyRTdo/wV8MruFvJyh3xC+1N1d75IrlqC/mtquHrhf6nFT6SZcmyqOeub0C5joi5dZLnMWW825u7Id0AhQ4acysSZvp9j1QUH3L6MHTaJBOHOnrWjGSnt2Lfl1TofP2C3/t8rjSR0NITqQKBgQCVR0cyDoWLu9MjG3DDHcXajUcNNmPrrhy4BOL2NBy+bvflLWvKksKyGTHrvMnK7aYJr3fuNo9C8Qc6uxkBEsdnjptv9ao6mufZUmRKAsOsMGpu1nBoftT5whyG2DXisGVAFy47xeyXibc9pB7Vekdc5Laxj2kALji2LW0PicPs4wKBgHJVZWQeM8PKkH/QEu0BLvnkepYsreXtR/gDHf5oW9e9Mao7wEKieJC85t3BgBx6s9n1Pq4XA8RaxBtDAC0AqAHIHboOOi3JX/XCUjut+/wP+vsdca/VXkagHRQk+bSjGVPkRNMUAzTGKvIPmw9MAo4xC9waTCQS8VXxzJ7Gm1HJAoGAIK2Lb1VdSkqHtrXSArLSaAXnvecdB51nlh0OH9aRsyxh2hUQ0hj3JbFOxS6CXymKouv8OvrAtcn6sKlYhkbHPhIje3vR2Ib4/cXbGH5zQViaFvcpSgXvGLb/VQPpEGl02Jg73S3ync86r4xi/50NAjmM9N3c7LS2rnsswvZPqqQ='+
'-----END PRIVATE KEY-----'

// 公钥
var publicKey = '-----BEGIN PUBLIC KEY-----'+
'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjtp+1MkCJruCxLEemh/9v+nlJngQxQ7vO0kTN8ywOqwMqlxkEcPnZfDbs9q0qCYUNPvx3c5L+rmiwOnvavRC7UI1Az2B9MlzzuUV8ijaMbjTvJrzfre3naOSsPvAzHnX+vzGtO69LyhuDTMf3FRSyZ7PNCfGqg7n9PkI5zHgjvVhAktfQunDE0GXrTtkRgpSHNV66rK+bG3y+fGOH/7bReywTbuX5leEynJ3sg7xX1f1hE+SECbnmlUSr3bVJZCUujL9M7VR9lT1G9iXhd8BXkHUyD0dvb9mprSfor+7djxxfUPMzoUs8Txn+9pWtc705hMFbnk/jLIfJro2f3/7xwIDAQAB'+
'-----END PUBLIC KEY-----'

function sign_rsa() {
  // 加签
  var sign_rsa = new RSA.RSAKey(); 
  sign_rsa = RSA.KEYUTIL.getKey(privateKey_pkcs1); 
  // console.log('签名RSA:')
  // console.log(sign_rsa)
  var hashAlg = 'sha1';
  var hSig = sign_rsa.signString("signData", hashAlg); 
  hSig = RSA.hex2b64(hSig); // hex 转 b64
  console.log("签名结果：" + hSig)

  // 验签
  var verify_rsa = new RSA.RSAKey();
  verify_rsa = RSA.KEYUTIL.getKey(publicKey_pkcs1);
  console.log('验签RSA:')
  console.log(verify_rsa)
  hSig = RSA.b64tohex(hSig)
  var ver = verify_rsa.verifyString("signData", hSig) 
  console.log('验签结果：' + ver)
}


// rsa加密
function encrypt_rsa(des3key) {
    // 加密 【加密字段长度不大于117】
    var encrypt_rsa = new RSA.RSAKey();
    encrypt_rsa = RSA.KEYUTIL.getKey(publicKey);
    // console.log('加密RSA:')
    // console.log(encrypt_rsa)
    var encStr = encrypt_rsa.encrypt(des3key)
    encStr = RSA.hex2b64(encStr);
    // console.log("加密结果：" + encStr)
    return encStr
}

// rsa解密
function decrypt_rsa(encStr) {
  var decrypt_rsa = new RSA.RSAKey();
  decrypt_rsa = RSA.KEYUTIL.getKey(privateKey);
  // console.log('解密RSA:')
  // console.log(decrypt_rsa)
  encStr = RSA.b64tohex(encStr)
  var decStr = decrypt_rsa.decrypt(encStr)
  // console.log("解密结果：" + decStr)
  return decStr
}

module.exports = {
  encrypt_rsa,
  decrypt_rsa
}