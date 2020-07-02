var budgetController = (function () {
	var Expense = function (id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function (id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var allExpenses = [];
	var allIncomes = [];

	var data = {
		allItems: {
			exp: [],
			inc: [],
		},
		totals: {
			exp: 0,
			inc: 0,
		},
	};
})();

var UIController = (function () {
	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn',
	};

	return {
		getinput: function () {
			return {
				type: document.querySelector(DOMstrings.inputType).value, // Output - "inc" / "exp".
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value,
			};
		},

		getDOMstrings: function () {
			return DOMstrings;
		},
	};
})();

var controller = (function (budgetCtrl, UICtrl) {
	var setupEventListeners = function () {
		var DOM = UICtrl.getDOMstrings();
		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function (event) {
			if (event.keyCode === 13 || event.which === 13) {
				ctrlAddItem();
			}
		});
	};

	var ctrlAddItem = function () {
		// ToDo : 1. Get the filled input data.
		var input = UICtrl.getinput();

		// ToDo : 2. Add the item to the budget controller
		// ToDo : 3. Add the item to the UI
		// ToDo : 4. Calculate the budget
		// ToDo : 5. Display the budget on the UI
	};

	return {
		init: function () {
			console.log('Application has started');
			setupEventListeners();
		},
	};
})(budgetController, UIController);

// Only line of code that is going to be outside.
controller.init();
