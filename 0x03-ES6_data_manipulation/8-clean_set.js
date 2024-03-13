export default function cleanSet(vSet, vStartString) {
  if (!vSet || !vStartString || !(vSet instanceof Set) || typeof vStartString !== 'string') {
    return '';
  }
  return Array.from(vSet)
    .filter((value) => value && value.startsWith(vStartString))
    .map((value) => value.replace(vStartString, ''))
    .join('-');
}
