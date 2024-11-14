const timeCardList = document.getElementById('timeCards');

const generateTimeCardHTML = ({ title, timeframes: { weekly } }) => {
  return `<div class="time-card time-card--${title
    .toLowerCase()
    .replace(' ', '-')}">
          <div class="time-card__body">
            <header class="time-card__header">
              <h3>${title}</h3>
              <button class="time-card__actions" type="button"><span class="visually-hidden">Options</span></button>
            </header>
            <div class="time-card__content">
              <p class="time-card__current-time"><span>${
                weekly.current
              }</span>hrs</p>
              <p class="time-card__previous-time">Last Week - <span>${
                weekly.previous
              }</span>hrs</p>
            </div>
          </div>
        </div>`;
};

const renderCards = (cards) => {
  timeCardList.innerHTML = '';
  const cardList = cards.map((card) => generateTimeCardHTML(card)).join('');
  timeCardList.innerHTML = cardList;
};

export default renderCards;
