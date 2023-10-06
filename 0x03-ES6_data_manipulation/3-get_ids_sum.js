export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((idSum, student) => idSum + student.id, 0);
}
