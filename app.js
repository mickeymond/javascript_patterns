// The Singleton Pattern

const Singleton = (function() {
	let instance;

	function createInstance(name) {
		const object = new Object({name});
		return object;
	}

	return {
		getInstance: function(name) {
			if (!instance) {
				instance = createInstance(name);
			}
			return instance;
		}
	}
})();

const instanceA = Singleton.getInstance('Oliver Van');
const instanceB = Singleton.getInstance('Michael Smith');
console.log(instanceA); // Logs Oliver Van Object
console.log(instanceB); // Logs Oliver Van as well hence Singleton
