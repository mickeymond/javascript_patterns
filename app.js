// Factory Pattern

function MemberFactory() {
	this.createMember = function(name, type) {
		let member;

		if (type === 'simple') {
			member = new SimpleMembership(name);
		} else if (type === 'standard') {
			member = new StandardMembership(name);
		} else if (type === 'super') {
			member = new SuperMembership(name);
		} else {
			throw new Error('Invalid Member Type');
		}

		member.type = type;

		member.define = function() {
			console.log(`${this.name} (${this.type}): ${this.cost}`);
		}

		return member;
	}
}

const SimpleMembership = function(name) {
	this.name = name;
	this.cost =  '$5';
}

const StandardMembership = function(name) {
	this.name = name;
	this.cost =  '$15';
}

const SuperMembership = function(name) {
	this.name = name;
	this.cost =  '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Michael Hammond', 'simple'));
members.push(factory.createMember('Samuel Hammond', 'standard'));
members.push(factory.createMember('Allan Turing', 'super'));

members.forEach(member => member.define());
