const rangeSlider = document.querySelector(".pricing__slider");
const sliderValue = document.querySelector("[value]");
const pricingPlan = document.querySelector(".pricing__plan");
const switcher = document.querySelector(".pricing__switcher");
const switchButton = document.querySelector(".pricing__switch-button");
const prices = [8, 12, 16, 24, 36];
const pageViews = ["10K", "50K", "100K", "500K", "1M"];
rangeSlider.addEventListener("input", (e) => {
  const value = e.target.value;
  if (switcher.style.background === "var(--strong-cyan)") {
    sliderValue.textContent = `$${
      prices[rangeSlider.value] * 12 - prices[rangeSlider.value] * 12 * 0.25
    }.00`.slice(0, 7);
    return;
  }
  sliderValue.textContent = `$${prices[value]}.00`;
  pricingPlan.textContent = `${pageViews[value]} Pageviews`;
});
//
let x = false;
switchButton.addEventListener("click", () => {
  x = !x;
  switcher.style.justifyContent = !x ? "flex-start" : "flex-end";
  switcher.style.background = x
    ? "var(--strong-cyan)"
    : "var(--light-grayish-blue-toggle)";
  sliderValue.textContent = x
    ? `$${
        prices[rangeSlider.value] * 12 - prices[rangeSlider.value] * 12 * 0.25
      }.00`.slice(0, 6)
    : `$${prices[rangeSlider.value]}.00`;
});
