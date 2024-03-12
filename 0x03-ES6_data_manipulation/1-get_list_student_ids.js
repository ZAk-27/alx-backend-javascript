
export default function getListStudentIds(listudents) {
  if (listudents instanceof Array) {
    return listudents.map((listudent) => listudent.id);
  }
  return [];
}
