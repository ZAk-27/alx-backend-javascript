export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  for (const [ky, val] of map.entries()) {
    if (val === 1) map.set(ky, 100);
  }
  return map;
}
