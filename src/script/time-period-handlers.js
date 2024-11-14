import animateValue from './animate-value';

const timePeriodSwitcher = document.querySelectorAll(
  '.time-period-switcher__button'
);
const timeCardList = document.getElementById('timeCards');

const updateCardContent = (cardElement, timePeriod) => {
  const currentTime = cardElement.querySelector(
    '.time-card__current-time span'
  );
  const previousTime = cardElement.querySelector(
    '.time-card__previous-time span'
  );

  const currentStart = parseInt(currentTime.textContent, 10);
  const previousStart = parseInt(previousTime.textContent, 10);

  animateValue(currentTime, currentStart, timePeriod.current, 500);
  animateValue(previousTime, previousStart, timePeriod.previous, 500);
};

const setActiveButton = (selectedButton) => {
  timePeriodSwitcher.forEach((button) => {
    button.classList.remove('time-period-switcher__button--active');
  });
  selectedButton.classList.add('time-period-switcher__button--active');
};

const attachPeriodSwitcherHandlers = (cardsData) => {
  timePeriodSwitcher.forEach((button) => {
    button.addEventListener('click', (e) => {
      setActiveButton(button);
      const timePeriod = e.target.innerText.toLowerCase();
      const timeCards = timeCardList.querySelectorAll('.time-card');

      cardsData.forEach((card, i) => {
        updateCardContent(timeCards[i], card.timeframes[timePeriod]);
      });
    });
  });
};

export default attachPeriodSwitcherHandlers;
