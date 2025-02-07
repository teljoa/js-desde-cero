let gradebook = {
    students: [
      { name: "Ana", grades: [8, 7, 9], average: 0 },
      { name: "Luis", grades: [6, 8, 6], average: 0 },
      { name: "Maria", grades: [9, 10, 9], average: 0 }
    ]
  };
  
  //1
  
  function calculateAverage(){
    gradebook.students.forEach(student => {
      const total = student.grades.reduce((sum, grade) => sum + grade, 0);
      student.average = total / student.grades.length;
    });
  }
  
  gradebook.calculateAverage();
  
  console.log(gradebook);
  
  //2
  
  function addStudent(name){
    gradebook.students.push({ name, grades: [], average: 0 });
  }
  
  gradebook.addStudent('Paco');
  
  console.log(gradebook);
  
  //3
  
  function addGrade(studentName, grade){
    const student = gradebook.students.find(i => i.name === studentName);
      if (student) {
        student.grades.push(grade);
        this.calculateAverage();
      }
  }
  
  gradebook.addGrade("Ana",4);
  
  console.log(gradebook);
  
  //4
  
  //a
  
  const highAchievers = gradebook.students.filter(student => student.average > 8);
  
  console.log(highAchievers);
  
  //b
  
  const topStudents = gradebook.students.filter(student => student.grades.some(grade => grade > 9));
  
  console.log(topStudents);
  
  //c
  
  const sortedStudents = gradebook.students.sort((a, b) => b.average - a.average);
  
  console.log(sortedStudents);