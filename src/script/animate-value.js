const animateValue = (element, start, end, duration) => {
  const range = end - start;
  const startTime = Date.now();

  const update = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(start + range * progress);
    element.textContent = `${value}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  update();
};

export default animateValue;
