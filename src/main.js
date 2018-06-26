function defaultDiscountRate() {
	return .10;
}

function applyDiscount(cost, discount = defaultDiscountRate()) {
	return cost - (cost * discount);
}

alert(applyDiscount(100));
