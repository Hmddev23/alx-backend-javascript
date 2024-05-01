export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const arr = new Int8Array(length);
  arr.fill(value, position, position + 1);
  return new DataView(arr.buffer);
}
