// This class implemets CoR design pattern

export class AbstractSequencePhase {

	constructor(context, delayBefore, delayAfter) {
		this.context = context;
		this.successor;
		this.delayBefore = delayBefore;
		this.delayAfter = delayAfter;
	}
	
	setSuccessor(successor) {
		this.successor = successor;
	}

	callSuccessor() {
		var self = this;		
		
		if (self.successor) {
			setTimeout(function() {
				self.successor.run();
				}, 
				this.delayAfter);	
		}
		
	} 

	act() {
		// OVERWRITE IN INHERITED CLASS
		// INCLUDE callSuccessor() THERE
	}

	run() {
		var self = this;
		setTimeout(self.act.bind(self), this.delayBefore);	
	}
	
}