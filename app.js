var budgetController = (function () {
	// Some code here
})();

var UIController = (function () {
	return {
		getinput: function () {
			return {
				type: document.querySelector('.add__type').value, // Output - "inc" / "exp".
				description: document.querySelector('.add__description').value,
				value: document.querySelector('.add__value').value,
			};
		},
	};
})();

var appController = (function (budgetCtrl, UICtrl) {
	var ctrlAddItem = function () {
		// ToDo : 1. Get the filled input data.
		var input = UICtrl.getinput();

		// ToDo : 2. Add the item to the budget controller
		// ToDo : 3. Add the item to the UI
		// ToDo : 4. Calculate the budget
		// ToDo : 5. Display the budget on the UI
	};

	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function (event) {
		if (event.keyCode === 13 || event.which === 13) {
			ctrlAddItem();
		}
	});
})(budgetController, UIController);
