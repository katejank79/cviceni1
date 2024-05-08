
/*HERE HOMEWORK
Objective: The objective of this assignment is to create a JavaScript program that analyzes a list of student grades
and provides various statistics using conditions and loops.
    Task Description: You are given an array of student grades (each grade is a number between 0 and 100).
    Your task is to create a JavaScript program that performs the following tasks:
    Calculate the average grade of all the students.
    Determine the highest and lowest grades in the array.
    Count how many students passed (grades >= 60) and how many failed (grades < 60).
    Identify the number of students in each grade range: 0-59, 60-69, 70-79, 80-89, 90-100.
Instructions:
    Create a JavaScript file named grade_analyzer.js.
    Define an array named grades containing a list of integers representing student grades.
    Implement functions to perform the tasks described above. You can define separate functions for each task or combine them as per your preference.
    Use loops to iterate over the array and conditions to perform the necessary calculations.
    Ensure your program provides clear and informative output, including the calculated statistics and any relevant messages.
    Test your program with different sets of grades to ensure it works correctly under various conditions.
    Add comments to your code to explain the purpose of each function and any complex logic.
    Example Output:
    Grade Data: [85, 72, 56, 90, 65, 78, 45, 88, 92, 70]
Average Grade: 73.3
Highest Grade:92
Lowest Grade: 45
Number of Passing Grades: 7
Number of Failing Grades: 3
Number of Students with Grades:
0-59: 1
60-69: 2
70-79: 2
80-89: 3
90-100: 2
*/

let grades = [85, 72, 56, 90, 65, 78, 45, 88, 92, 70];

//Calculate the average grade of all the students.
function calculateAverageGrade(grade) {
    let sum = 0;
    grades.forEach(grade => {
        sum += grade;
            });
    return sum / grades.length;
}

//Determine the highest and lowest grades in the array.
function highestGrade(grade) {
    let highestGrade = grades[0];
    grades.forEach(grade => {
        if (grade > highestGrade) {
            highestGrade = grade;
        }
    });
    return highestGrade;
}

function lowestGrade(grade) {
    let lowestGrade = grades[0];
    grades.forEach(grade => {
        if (grade < lowestGrade) {
            lowestGrade = grade;
        }
    });
    return lowestGrade;
}

//Count how many students passed (grades >= 60) and how many failed (grades < 60).
function passedFailedGrades(grades) {
    let passedGrades = 0;
    let failedGrades = 0;
    grades.forEach(grade => {
        if (grade >= 60) {
            passedGrades++;
        } else {
            failedGrades++;
        }
    })
    return {passedGrades, failedGrades};
    }

const {passedGrades, failedGrades} = passedFailedGrades(grades);


//Identify the number of students in each grade range: 0-59, 60-69, 70-79, 80-89, 90-100.
function numberOfStudentsInGradeRanges(grades) {
    let gradeRanges = {
        '0-59': 0,
        '60-69': 0,
        '70-79': 0,
        '80-89': 0,
        '90-100': 0
    };

    grades.forEach(grade => {
        if (grade >= 0 && grade <= 59) {
            gradeRanges['0-59']++;
        } else if (grade >= 60 && grade <= 69) {
            gradeRanges['60-69']++;
        } else if (grade >= 70 && grade <= 79) {
            gradeRanges['70-79']++;
        } else if (grade >= 80 && grade <= 89) {
            gradeRanges['80-89']++;
        } else if (grade >= 90 && grade <= 100) {
            gradeRanges['90-100']++;
        }
    });

    return gradeRanges;
}



console.log("Grade Data:", grades);
console.log("Average Grade:", calculateAverageGrade(grades));
console.log("Highest Grade:", highestGrade(grades));
console.log("Lowest Grade:", lowestGrade(grades));
console.log("Count of Passed Grades:", passedGrades);
console.log("Count of Failed Grades:", failedGrades);
console.log("Number of Students with Grades:");
const gradeRanges = numberOfStudentsInGradeRanges(grades);
for (let range in gradeRanges) {
    console.log(range + ":", gradeRanges[range]);
}