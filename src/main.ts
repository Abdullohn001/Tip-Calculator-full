const billInput = document.getElementById("billAmount") as HTMLInputElement;
const numPeopleInput = document.getElementById("numPeople") as HTMLInputElement;
const tipInputs = document.querySelectorAll(
  'input[name="tip"]'
) as NodeListOf<HTMLInputElement>;
const customTipInput = document.getElementById("customTip") as HTMLInputElement;
const tipAmountDisplay = document.getElementById("tipAmount") as HTMLElement;
const totalAmountDisplay = document.getElementById(
  "totalAmount"
) as HTMLElement;
const resetButton = document.getElementById("resetButton") as HTMLButtonElement;

function calculateTip() {
  const bill = parseFloat(billInput.value);
  const numPeople = parseInt(numPeopleInput.value, 10);
  let tipPercent = customTipInput.value ? parseFloat(customTipInput.value) : 0;

  tipInputs.forEach((input) => {
    if (input.checked) {
      tipPercent = parseFloat(input.value);
    }
  });

  const tipAmount = (bill * (tipPercent / 100)) / numPeople;
  const totalAmount = (bill + tipAmount) / numPeople;

  tipAmountDisplay.textContent = tipAmount ? tipAmount.toFixed(2) : "0.00";
  totalAmountDisplay.textContent = totalAmount
    ? totalAmount.toFixed(2)
    : "0.00";
}

function resetCalculator() {
  billInput.value = "";
  numPeopleInput.value = "";
  customTipInput.value = "";
  tipInputs.forEach((input) => (input.checked = false));
  tipAmountDisplay.textContent = "0.00";
  totalAmountDisplay.textContent = "0.00";
}

billInput.addEventListener("input", calculateTip);
numPeopleInput.addEventListener("input", calculateTip);
tipInputs.forEach((input) => input.addEventListener("change", calculateTip));
customTipInput.addEventListener("input", calculateTip);
resetButton.addEventListener("click", resetCalculator);
