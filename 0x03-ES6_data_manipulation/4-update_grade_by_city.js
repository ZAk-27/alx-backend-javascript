export default function updateStudentGradeByCity(listudents, loc, newGrades) {
  const defGrade = { grade: 'N/A' };

  if (listudents instanceof Array) {
    return listudents
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defGrade).grade,
      }));
  }
  return [];
}
