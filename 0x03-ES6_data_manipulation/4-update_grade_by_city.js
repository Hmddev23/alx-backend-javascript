export default function updateStudentGradeByCity(listStudents, tarLoc, newGrades) {
  return listStudents
    .filter(({ location }) => location === tarLoc)
    .map((obj) => {
      const xtargetNewGrade = newGrades.filter(({ studentId }) => studentId === obj.id);
      const { grade = 'N/A' } = xtargetNewGrade.length > 0 ? xtargetNewGrade[0] : {};
      return { ...obj, grade };
    });
}
