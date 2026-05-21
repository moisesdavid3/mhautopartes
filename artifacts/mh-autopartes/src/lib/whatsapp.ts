const WA_NUMBERS = [
  "573148936236", // Palace 1
  "573206810978", // Palace 2
  "573245934555", // Palace 3
  "573245934559", // Chagualo 1
  "573245934557", // Chagualo 2
  "573024027858", // Chagualo 3
  "573011708636", // Chagualo 4
];

export function randomWaLink(text: string) {
  const number = WA_NUMBERS[Math.floor(Math.random() * WA_NUMBERS.length)];
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function randomWaNumber() {
  return WA_NUMBERS[Math.floor(Math.random() * WA_NUMBERS.length)];
}
