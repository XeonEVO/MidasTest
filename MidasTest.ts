// Question 1: hand score
function getHandScore(input: string): number {
    const cards: string[] = input.split(' '); // Split each card
    const suits: string[] = ['S', 'C', 'H', 'D']; // Available suits
    const ranks: { [key: string]: number } = {}; // Object to store the count of each rank for A-A-A
    
    // Count each rank
    for (const card of cards) {
        const rank = card[card.length - 1]; // Extract the rank from the card string
        ranks[rank] = (ranks[rank] || 0) + 1; // Add rank to ranks Object
    }
    
    // Check for three cards of the same rank
    const rankKeys = Object.keys(ranks);
    if (rankKeys.length === 1) {
        if (rankKeys[0] === 'A') {
            return 35;
        }
        return 32.5;
    }
    
    let maxScore = 0; // Initialize the maximum score
    
    // Count the score if three cards' ranks are not the same
    for (const suit of suits) {
        let suitScore = 0; // Initialize the score for the current suit
        
        for (const card of cards) {
            if (card.includes(suit)) { // Check if the card belongs to the current suit
                const rank = card.substring(1); // Get the rank of the card
                
                if (['J', 'Q', 'K'].includes(rank)) {
                    suitScore += 10; // J, Q, K are worth 10
                } else if (rank === 'A') {
                    suitScore += 11; // Aces are worth 11
                } else {
                    suitScore += parseInt(rank); // Regular cards are worth their number
                }
            }
        }
        
        if (suitScore > maxScore) {
            maxScore = suitScore; // Update the maximum score if the current suit's score is higher
        }
    }
    
    return maxScore;
}

console.log('Question 1: ' + getHandScore('S8 S10 CA'));

// Question 2: clock angle
function getClockAngle(hh_mm: string): number {
    const time = hh_mm.split(':'); // Split hours and minutes
    let hr = parseInt(time[0]); // Hours
    const min = parseInt(time[1]); // Minutes
    
    // Convert time format from 24hr to 12hr
    if (hr >= 12) {
        hr -= 12;
    }
    
    const angle = Math.abs(30 * hr - 5.5 * min); // Find the angle
    
    return Math.min(angle, 360 - angle);
}

console.log('Question 2: ' + getClockAngle("17:30"));

// Question 3: Remote Associates Test
function getQuestionPart(phrases:string[]): string[] {
    let answerPart = ""; 
    const questionPart: string[] = []
    
    // Check same string in first string
    if (phrases[0][0] === phrases[1][0] && phrases[1][0] === phrases[2][0]) {

        const Word: string[] = []

        for (let i = 0; i < phrases.length; i++) {
            Word.push(phrases[i])
        }

        const sortedWords = Word.sort() 
        const firstWord = sortedWords[0];
        const secondWord = sortedWords[1];

        // find answerPart
        for (let i = 0; i < firstWord.length; i++) {
            if (firstWord[i] === secondWord[i]) {
                answerPart += firstWord[i];
            } else {
                break;
            }
        }
    } else {
        const reverseWord: string[] = []

        // reverse Word from input
        for (let i = 0; i < phrases.length; i++) {
            reverseWord.push(phrases[i].split("").reverse().join(""))
        }

        const sortedWords = reverseWord.sort()
        const firstWord = sortedWords[0];
        const secondWord = sortedWords[1];

        // find answerPart
        for (let i = 0; i < firstWord.length; i++) {
            if (firstWord[i] === secondWord[i]) {
                answerPart += firstWord[i];
            } else {
            break;
            }
        }
        
        // reverse answer
        answerPart = answerPart.split("").reverse().join("")
    }

    // Manage question
    for (let i = 0; i < phrases.length; i++) {
        questionPart.push(phrases[i].replace(answerPart, '').trim())
    }
    
    return questionPart
}

console.log("Question 3:");
console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]));
console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]));



  

  

  
  
  
  
  
