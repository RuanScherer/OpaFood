import { sign } from "jsonwebtoken";

interface IPayload {
  _id: string
  name: string
}

const validateDocument = (document: string) => {
 
  document = document.replace(/[^\d]+/g,'');

  if(document == '') return false;
   
  if (document.length != 14) return false;

  if (document == "00000000000000" || 
    document == "11111111111111" || 
    document == "22222222222222" || 
    document == "33333333333333" || 
    document == "44444444444444" || 
    document == "55555555555555" || 
    document == "66666666666666" || 
    document == "77777777777777" || 
    document == "88888888888888" || 
    document == "99999999999999") return false;
       
  
  let length = document.length - 2
  let numbers = document.substring(0, length);
  const digits = document.substring(length);
  let sum = 0;
  let pos = length - 7;
  
  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers.charAt(length - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (result != parseInt(digits.charAt(0))) return false;
       
  length = length + 1;
  numbers = document.substring(0,length);
  sum = 0;
  pos = length - 7;
  
  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers.charAt(length - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  
  result = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (result != parseInt(digits.charAt(1))) return false;
         
  return true; 
}

const generateToken = (_id: string, name: string) => sign({ _id, name }, process.env.SECRET_KEY)

export { validateDocument, generateToken }