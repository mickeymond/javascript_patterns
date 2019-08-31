// // Observer Pattern using ES6 Classes

class EventObserver {
	constructor() {
    this.observers = [];
  }

  subscribe(fn) {
		this.observers.push(fn);
		console.log(`You are now subscribed to ${fn.name}`);
  }
  
  unsubscribe(fn) {
		this.observers = this.observers.filter(observer => observer !== fn);
		console.log(`You are now unsubscribed to ${fn.name}`);
  }
  
  fire() {
		this.observers.forEach(observer => observer.call());
	}
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', event => {
	click.subscribe(getCurrentMilliseconds);
});

document.querySelector('.sub-unsub-ms').addEventListener('click', event => {
	click.unsubscribe(getCurrentMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', event => {
	click.subscribe(getCurrentSeconds);
});

document.querySelector('.sub-unsub-s').addEventListener('click', event => {
	click.unsubscribe(getCurrentSeconds);
});

document.querySelector('.fire').addEventListener('click', event => {
	click.fire();
});



// Click Handler
const getCurrentMilliseconds = function() {
	console.log(`Current Milliseconds: ${(new Date()).getMilliseconds()}`);
}

const getCurrentSeconds = function() {
	console.log(`Current Seconds: ${(new Date()).getSeconds()}`);
}
