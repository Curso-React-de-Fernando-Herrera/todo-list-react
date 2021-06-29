export const popupTick = () => {
  return `
    @keyframes popupTick {
      0% {
        transform: rotate(-45deg) translate(4%, -4%) scale(0.98);
      }
      40% {
        transform: rotate(-45deg) translate(4%, -4%) scale(1.05);
      }
      80% {
        transform: rotate(-45deg) translate(4%, -4%) scale(0.99);
      }
    }
  `
}