// Basic Structure
(function() {
	//  Declare private vars and functions
	
	return {
		// Declare public vars and functions
	}
})();


// Standard Module Pattern
const UICtrl = (function() {
	const changeText = function(text) {
		const element = document.querySelector('h1');
		element.textContent = text;
		console.log(text);
	}

	return {
		callChangeText: function(text = 'Hello World') {
			changeText(text);
		}
	}
})();

// Standard Module Pattern Test
document.querySelector('#change-btn').addEventListener('click', function(e) {
	const textInput = document.querySelector('#text');
	const text = textInput.value;
	if (text !== '') {
		UICtrl.callChangeText(text);
	} else {
		UICtrl.callChangeText();
	}
	textInput.value = '';
});

// Revealing Module Pattern
const ItemCtrl = (function() {
	let data = [];

	function add(item) {
		data.push(item);
		console.log('Item Added...');
	}

	function get(id) {
		return data.find(item => id == item.id);
	}

	return {
		add,
		get
	}
})();

ItemCtrl.add({id: 1, name: 'Mark'});
ItemCtrl.add({id: 2, name: 'Jonas'});

console.log(ItemCtrl.get(1));
