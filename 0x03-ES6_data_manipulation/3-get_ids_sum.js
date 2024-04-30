export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((red, { id }) => red + id, 0);
}
