export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (fStudent, nStudent) => fStudent.id || fStudent + nStudent.id,
      0,
    );
  }
  return 0;
}
