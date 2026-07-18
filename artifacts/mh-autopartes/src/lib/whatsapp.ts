const WA_NUMBERS = [
  "573245934555",
];

export function randomWaLink(text: string) {
  const number = WA_NUMBERS[Math.floor(Math.random() * WA_NUMBERS.length)];
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function randomWaNumber() {
  return WA_NUMBERS[Math.floor(Math.random() * WA_NUMBERS.length)];
}
