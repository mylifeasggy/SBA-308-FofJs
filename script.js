// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const learnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
   


const result = getLearnerData(CourseInfo, AssignmentGroup, learnerSubmissions);

function getLearnerData(CourseInfo, AssignmentGroup, learnerSubmissions) {

    if (AssignmentGroup.course_id !== CourseInfo.id) {
      throw new Error("Invalid input: AssignmentGroup's course_id does not match the CourseInfo.id.")
    }

}

try {
 getLearnerData(CourseInfo, AssignmentGroup, learnerSubmissions)
    console.log('Yay! Data is completed without error.')
} catch (error){

    console.error(`We don't have that information`, error.message);
  }







// 1. Generate an array of unique students ids (MAP)

const uniqueStudentid = [];

for (let i = 0; i < learnerSubmissions.length; i++){

        const studentid = learnerSubmissions[i]
         uniqueStudentid.push(studentid.learner_id)
     
}

// console.log(uniqueStudentid)

let noDuplicateId = uniqueStudentid

noDuplicateId = new Set(noDuplicateId)

let uniqueLearnesId = [...noDuplicateId]

// console.log(uniqueLearnesId)

  // 2.convert it into array of object where you have a key called id

let idsLearners= [];
for (let i = 0; i < uniqueLearnesId.length; i++) {        //Because of the length of UniqueLearners
   const object = {

              id:   uniqueLearnesId[i]
}
                idsLearners.push (object);
}
            console.log(idsLearners)



 //3. get the assignments and calulcate the grade
  // find the assignment for each student and thier score


  // idsLearners[0]['1'] = learnerSubmissions[0].submission.score/ AssignmentGroup.assignments[0].points_possible
  // idsLearners[0]['2'] = learnerSubmissions[1].submission.score/AssignmentGroup.assignments[1].points_possible
  // idsLearners[0]['3'] = learnerSubmissions[2].submission.score/AssignmentGroup.assignments[2].points_possible
  // idsLearners[1]['1'] = learnerSubmissions[3].submission.score/AssignmentGroup.assignments[0].points_possible
  // idsLearners[1]['2'] = learnerSubmissions[4].submission.score/AssignmentGroup.assignments[1].points_possible
  
 
  // console.log(idsLearners)

  for (let i = 0; i < learnerSubmissions.length; i++){
    let submission = submission[i];
    const assignment_id = submission.assignment_id;
 

    let assignment=0;

    for (let j = i; j < AssignmentGroup.length; j++){
     if(AssignmentGroup[j].id === assignment_id ){

      assignment += AssignmentGroup[j];
      break;

     }

    }

  }

  console.log(assignment)

// avg (add assignment scores together )/ (points possible)

// let pointPoss= AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible
// let asScore = learnerSubmissions[0].submission.score + learnerSubmissions[1].submission.score
// console.log(asScore/pointPoss)




// const assignmentId =[];
// for(let i = 0; i <learnerSubmissions.length; i++){
//          assignmentId.push(learnerSubmissions[i].assignment_id)
// }



 
//     // here, we would process this data to achieve the desired result.
//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];
  
//     return result;
//   }
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);
//
