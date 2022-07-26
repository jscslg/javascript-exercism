//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const messageTrim = message.trim();
  if (isQuestion(messageTrim) && isUpperCase(messageTrim)) {
    return "Calm down, I know what I'm doing!";
  }  
  if (isQuestion(messageTrim)) {
    return "Sure.";
  } 
  if (isBlank(messageTrim)) {
    return "Fine. Be that way!";
  } 
  if (isUpperCase(messageTrim)) {
    return "Whoa, chill out!";
  } 
  return "Whatever.";
};
const isQuestion = (message) => message.endsWith("?");
const isUpperCase = (message) =>
  !/[a-z]/.test(message) && /[A-Z]/.test(message);
const isBlank = (message) => message === "";
