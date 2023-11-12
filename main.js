document.getElementById("apply-button").addEventListener("click", function () {
  //   1000
  const mainPrice = document.getElementById("number");
  const mainValue = mainPrice.innerText;

  //   make 30% discount
  const discount = (30 / 100) * mainValue;
  const discountValue = mainValue - discount;

  //   add coupon
  const enterCoupon = document.getElementById("coupon");
  const couponValue = enterCoupon.value;

  //   input field
  const finalPrice = document.getElementById("textArea");
  if (couponValue === "DISC30") {
    finalPrice.value = discountValue;
  } else {
    finalPrice.value = mainValue;
  }

  //   coupon activate
});
