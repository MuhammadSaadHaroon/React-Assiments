import { confetti } from "https://cdn.jsdelivr.net/npm/tsparticles-confetti/+esm";

const end = Date.now() + 5 * 1000;

// go Buckeyes!
const colors = ["#3169BC", "#ffffff"];

const run = () => {
  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.8 },
      colors: colors
    });

    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.8 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

run();