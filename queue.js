function Queue(){
	this.head = null;
	this.tail = null;
	this.count = 0;
}

function Node(value){
	this.value = value;
	this.next = null;
}

Queue.prototype.enqueue = function(value){
	let node = new Node(value);
	if(!this.head){
		this.head = node;
		this.tail = node;
	} else {
		this.tail.next = node;
		this.tail = node;
	}
	this.count++;
	return this;
}

Queue.prototype.dequeue = function(){
	if(!this.head){
		return null;
	}
	let output = this.head;
	this.head = this.head.next;
	this.count--;
	return output;
}

Queue.prototype.front = function(){
	if(!this.head){
		return null;
	}
	return this.head;
}

Queue.prototype.size = function(){
	return this.count;
}

Queue.prototype.contians = function(value){
	if(!this.head){
		return null
	}
	let current = this.head;
	while(current){
		if(current.value == value){
			return current;
		}
		current = current.next;
	}
	return null;
}

Queue.prototype.isEmpty = function(){
	if(this.head){
		return false
	}
	return true;
}

a = new Queue();
a.enqueue(1).enqueue(2);
a.dequeue();
console.log(a);