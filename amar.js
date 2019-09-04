// var students=[{"name":"Amar","marks":[50,60,30]},{"name":"Birbal","marks":[40,80,65]},{"name":"Rohit","marks":[40,80,65]}];
//
//
// for(var student of students){
//     console.log(student);
//      var sum=0;
//      var avg=0;
//     //
//     //
//     for (var mark of student.marks){
//         console.log(mark)
//         sum=sum+mark;
//
//     }
//     console.log(sum);
//     avg=sum/student.marks.length;
//     console.log(avg);
//     console.log(student.name + 'scored' +)
// }
var students = [{
    "name": "Amar",
    "subjects": [{subjectNames: 'english', marks: [10, 20, 40]}, {subjectNames: 'maths', marks: [10, 20, 30]}]
},
    {
        "name": "sdfadsf",
        "subjects": [{subjectNames: 'english', marks: [10, 20, 20]}, {subjectNames: 'maths', marks: [10, 20, 30]}]
    }];


for (var student of students) {
    // console.dir(student, {depth:null});

    for (var subject of student.subjects) {

        // // //
        sum = 0;
        for (var mark of subject.marks) {
            sum = sum + mark;


        }
        console.log(student.name + 'scored' + sum + 'in' + subject.subjectNames);
    }


}

