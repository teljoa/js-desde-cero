/*
Ejercicio 2: Sistema de gestión de notas
Imagina que eres un profesor y quieres llevar un sistema de notas para tus alumnos. 
Crea un objeto gradebook que contenga:

Un array de objetos llamado students, donde cada objeto tiene las siguientes propiedades: name, grades 
(un array de números) y average (promedio de sus notas).
Ejemplo inicial:

let gradebook = {
  students: [
    { name: "Ana", grades: [8, 7, 9], average: 0 },
    { name: "Luis", grades: [6, 8, 6], average: 0 },
    { name: "Maria", grades: [9, 10, 9], average: 0 }
  ]
};
Tareas:

1.Crea un método calculateAverage() que calcule el promedio de las notas de cada estudiante y lo almacene 
en la propiedad average.

2.Crea un método addStudent(name) que añada un nuevo estudiante con un array vacío de notas.

3.Crea un método addGrade(studentName, grade) que añada una nueva nota al array grades del estudiante 
especificado.

4.Utiliza los métodos avanzados de arrays para:

  Imprimir los nombres de los estudiantes cuya nota promedio sea mayor que 8.
  Crear un array con los nombres de todos los estudiantes que tienen al menos una nota mayor que 9.
  Ordenar los estudiantes en función de sus promedios, de mayor a menor.
*/
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