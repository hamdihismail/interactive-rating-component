const ratings = [...document.querySelectorAll('.rating')];
const submitBtn = document.querySelector('.btn');
const selectionResult = document.querySelector('.selections-result');
const thankCard = document.querySelector('.thank-you-card');

// ratings numbers

ratings.forEach((number) => {
  number.addEventListener('mouseover', (e) => {
    const rateNum = e.target;
    addClass(rateNum, 'hoverNumber');
  });
});

ratings.forEach((number) => {
  number.addEventListener('mouseout', (e) => {
    const rateNum = e.target;
    removeClass(rateNum, 'hoverNumber');
  });
});
ratings.forEach((number) => {
  number.addEventListener('click', (e) => {
    const rateNum = e.target;
    const num = parseInt(rateNum.textContent);
    console.log(num);
    ratings.forEach((i) => {
      removeClass(i, 'activeNumber');
    });
    addClass(rateNum, 'activeNumber');
    return (selectionResult.innerHTML = `You selected ${num} out of 5`);
  });
});

// submit button

submitBtn.addEventListener('mousedown', (e) => {
  const submit = e.target;
  addClass(submit, 'hoverBtn');
});
submitBtn.addEventListener('mouseup', (e) => {
  const submit = e.target;
  removeClass(submit, 'hoverBtn');
});
submitBtn.addEventListener('click', () => {
  thankCard.classList.toggle('hide');
});

// add/remove functions
const addClass = (e, state) => {
  e.classList.add(`${state}`);
};
const removeClass = (e, state) => {
  e.classList.remove(`${state}`);
};
