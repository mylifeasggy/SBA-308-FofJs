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
  const LearnerSubmissions = [
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
   



function getLearnerData(course, ag, submissions) {

    if (ag.course_id !== course.id) {
      throw new Error("AssignmentGroup's course_id does not match the CourseInfo.id.")
    }



// try {
// getLearnerData(course, ag, submissions)
//     console.log('Yay! Data is completed without error.')

// } catch (error){

//     console.error(`We don't have that information`, error.message);
//   }


// 1. Generate an array of unique students ids (MAP)



for (let i = 0; i < submissions.length; i++) {
  let assignment = null;

  for (let j = 0; ag.assignments.length; j++) {
    if (ag.assignments[j].id === submissions.assignment_id) {
      assignment = ag.assignments[j];
      break;
    }


  }

}
console.log(assignment)
}

// let noDuplicateId = uniqueStudentid

// noDuplicateId = new Set(noDuplicateId)

// let uniqueLearnesId = [...noDuplicateId]

// // console.log(uniqueLearnesId)

  // 2.convert it into array of object where you have a key called id

// let idsLearners= [];
// for (let i = 0; i < uniqueLearnesId.length; i++) {        //Because of the length of UniqueLearners
//    const object = {

//               id:   uniqueLearnesId[i]
// }
//                 idsLearners.push (object);
// }
//             console.log(idsLearners)



 //3. get the assignments and calulcate the grade
  // find the assignment for each student and thier score


  // idsLearners[0]['1'] = LearnerSubmissions[0].submission.score/ AssignmentGroup.assignments[0].points_possible
  // idsLearners[0]['2'] = LearnerSubmissions[1].submission.score/AssignmentGroup.assignments[1].points_possible
  // idsLearners[0]['3'] = LearnerSubmissions[2].submission.score/AssignmentGroup.assignments[2].points_possible
  // idsLearners[1]['1'] = LearnerSubmissions[3].submission.score/AssignmentGroup.assignments[0].points_possible
  // idsLearners[1]['2'] = LearnerSubmissions[4].submission.score/AssignmentGroup.assignments[1].points_possible
  
 
  // console.log(idsLearners)

  // for (let i = 0; i < LearnerSubmissions.length; i++){
  //             submission[i]
  //   const assignment_id = submission.assignment_id;
 

  //   let assignment=0;

  //   for (let j = i; j < AssignmentGroup.length; j++){
  //    if(AssignmentGroup[j].id === assignment_id ){

  //     assignment += AssignmentGroup[j];
  //     break;

  //    }

  //   }

  // }

  // console.log(assignment)

// avg (add assignment scores together )/ (points possible)
// let pointsPossible=0;
// let totalScore=0;

// for (i = 0; i < AssignmentGroup.length; i++){

// pointsPossible+= AssignmentGroup.assignments[i].points_possible 

// }
// for (j = 0; j < LearnerSubmissions.length; j++){
// totalScore+=LearnerSubmissions[i].submission.score 
// }

// if ( pointsPossible > 0 ){
// console.log (totalScore/pointsPossible)

// }else {
//    console.log(`${pointsPossible} is zero and we can not calculate average`)
// }

// let pointPoss= AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible
// let asScore = LearnerSubmissions[0].submission.score + LearnerSubmissions[1].submission.score
// console.log(asScore/pointPoss)




// const assignmentId =[];
// for(let i = 0; i <LearnerSubmissions.length; i++){
//          assignmentId.push(LearnerSubmissions[i].assignment_id)
// }


// function getLearnerData(course, ag, submissions) {

 
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
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);
//
