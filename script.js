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

  const learners = {};
  const result =[];




  if (ag.course_id !== course.id) {
    throw new Error("AssignmentGroup's course_id does not match the CourseInfo.id.")
  }

  for (let i = 0; i < submissions.length; i++) {

    const submission = submissions[i];
    const learner_id = submission.learner_id;
    const assignment_id = submission.assignment_id;
    const sub = submission.submission;
    


    let assignment = null;
    for (let j = 0; j < ag.assignments.length; j++) {
      if (ag.assignments[j].id == assignment_id) {
        assignment = ag.assignments[j]; // this is the asignment we're loking for.
        break;  // when i found the assigment i want, I break my loop for assigments, i found the assigment i needed
      }

    }
     if(!learners[learner_id]){
    learners[learner_id] = {
      id: learner_id,
      avg: 0,
      
      assignments: {
        score:0,
      points:0,
      }
    }
    };


    let learner = learners[learner_id];
    const pointsPossible = assignment.points_possible;
    let score = sub.score;// varibable for score
  


    if (new Date(sub.submitted_at) > new Date(assignment.due_at)) {

      score = score * 0.90;
    }

    const percentage = score / pointsPossible;
    learner[assignment_id] = percentage;
   
    score = score;
    let points = pointsPossible;
    learner.avg = score/points
     

   
  }
  console.log(learners);


  


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
  }

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);