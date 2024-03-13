/**
 * A weak map endpoints & the numb of calls made.
 */
export const weakMap = new WeakMap();

/**
 * MAx numb of calls for endpoint.
 */
const MAX_EP_CALLS = 5;


export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_EP_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
