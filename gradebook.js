/*
This project uses a few functions to determine:
- Class average
- A student's letter grade
= If the student passed
= Type of message sent to student
*/


//gets an array of scores and obtains the average by using a loop to add them up
function getAverage(scores) {
    let sum = 0;
    let avg = 0;
  
    for (const score of scores) {
      sum += score;
    }
    
    avg = sum / scores.length;

    return avg;
  }
  
  // gets a score and determines the letter grade based on a predetermined range
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  //Determines if the grade is passing. As long as it is not "F", the function returns a true value
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  
  //Sends message with class average, student grade, and saying if they passed or not based on a grade above or below 60
  function studentMsg(totalScores, studentScore) {
    if (studentScore < 60){
    return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.";
    }else{
      return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
    }
  }

  //console output using functions
  console.log(hasPassingGrade(76));
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 95));