export default function getStudentsByLocation(locstudents, city) {
  if (locstudents instanceof Array) {
    return locstudents.filter((locstudent) => locstudent.location === city);
  }
  return [];
}
