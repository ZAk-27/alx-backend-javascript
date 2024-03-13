export default function hasValuesFromArray(vSet, vArray) {
  return vArray.every((value) => vSet.has(value));
}
