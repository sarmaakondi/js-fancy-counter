const counterElement = document.querySelector(".counter");
const counterTitleElement = document.querySelector(".counter__title");
const counterValElement = document.querySelector(".counter__value");
const increaseBtnElement = document.querySelector(".counter__button--increase");
const decreaseBtnElement = document.querySelector(".counter__button--decrease");
const resetBtnElement = document.querySelector(".counter__reset-button");

const minValue = 0;
const maxValue = 5;
const defaultMessage = "Fancy Counter";
const limitMessage = "Limit! Buy Pro for >5";

function incrementCounter() {
  increaseBtnElement.blur();
  counterValElement.textContent < maxValue
    ? counterValElement.textContent++
    : displayLimitMessage();
}

function decrementCounter() {
  decreaseBtnElement.blur();
  counterValElement.textContent > minValue && counterValElement.textContent--;
}

function resetCounter() {
  enableButtons();
  resetBtnElement.blur();
  counterValElement.textContent = minValue;
  counterTitleElement.textContent = defaultMessage;
  counterElement.classList.remove("counter--limit");
}

function displayLimitMessage() {
  disableButtons();
  counterValElement.textContent = maxValue;
  counterElement.classList.add("counter--limit");
  counterTitleElement.textContent = limitMessage;
}

function enableButtons() {
  increaseBtnElement.disabled = false;
  decreaseBtnElement.disabled = false;
}

function disableButtons() {
  increaseBtnElement.disabled = true;
  decreaseBtnElement.disabled = true;
}

increaseBtnElement.addEventListener("click", incrementCounter);
decreaseBtnElement.addEventListener("click", decrementCounter);
resetBtnElement.addEventListener("click", resetCounter);
document.addEventListener("keydown", incrementCounter);
