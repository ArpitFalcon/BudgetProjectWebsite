var budgetController = (function () {
	// Some code here
})();

var UIController = (function () {
	// Some code here
})();

var appController = (function (budgetCtrl, UICtrl) {
	document.querySelector('.add__btn').addEventListener('click', function () {
		// ToDo : 1. Get the filled input data.
		// ToDo : 2. Add the item to the budget controller
		// ToDo : 3. Add the item to the UI
		// ToDo : 4. Calculate the budget
		// ToDo : 5. Display the budget on the UI
	});

	document.addEventListener('keypress', function (event) {});
})(budgetController, UIController);
