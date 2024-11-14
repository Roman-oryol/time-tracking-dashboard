const timeCardList = document.getElementById('timeCards');
const modifierСlasses = [
  'work',
  'play',
  'study',
  'exercise',
  'social',
  'self-care',
];

const generateSkeletonHTML = (modifierClass) => {
  return `<div class="time-card time-card--${modifierClass}">
          <div class="time-card__body">
            <header class="time-card__header">
              <h3 class="skeleton skeleton-title"></h3>
              <button class="time-card__actions" type="button"></button>
            </header>
            <div class="time-card__content">
              <p class="time-card__current-time skeleton skeleton__current-time"><span></span></p>
              <p class="time-card__previous-time skeleton skeleton__previous-time"><span></span></p>
            </div>
          </div>
        </div>`;
};

const renderSkeletons = () => {
  const skeletons = modifierСlasses
    .map((modifierClass) => {
      return generateSkeletonHTML(modifierClass);
    })
    .join('');

  timeCardList.innerHTML = skeletons;
};

const getRenderSkeletons = () => {
  return renderSkeletons;
};

export default getRenderSkeletons;
