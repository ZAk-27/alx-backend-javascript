export default function appendToEachArrayValue(array, appendString) {
  const nvArray = [];
  for (const val of array) {
    nvArray.push(appendString + val);
  }

  return nvArray;
}
