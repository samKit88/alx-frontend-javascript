export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents.filter((student) => student.location === city).map((student) => {
    let grade = newGrades.filter(
      (studentGrade) => studentGrade.studentId === student.id,
    ).map(
      (studentGrade) => studentGrade.grade,
    )[0];
    if ((grade === null) || (grade === undefined)) grade = 'N/A';
    return { ...student, grade };
  });
}
