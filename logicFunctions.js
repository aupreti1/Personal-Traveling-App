//Each answer requires it's own identifier
//Each identifier will increment accordingly via the user's response
//At the end of the quiz the identifier with the highest count will be the "winner"
//Display the answer and reset quiz
//Pass results from previous question to the next page using localcache

//Personality traits:
// A. SECLUDED ---NUMBERS RANGE TO BE ASSIGNED
// B. TOURISTIC
// C. OUTDOORS
// D. HISTORICAL
// E. PARTY
// F. RELAXING
// G. FOODIE
// 
//
let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;