var ListNode = function (value) {
	this.value = value;
	this.previous = null;
	this.next = null;
};

var DoublyLinkedList = function () {
	this.head = null;
	this.tail = null;
};

DoublyLinkedList.prototype.head = function(){
	return this.head;
};

DoublyLinkedList.prototype.tail = function(){
	return this.tail;
};

DoublyLinkedList.prototype.append = function(value){
	var node = new ListNode(value);
    if(this.tail !== null){
	    this.tail.next = node;
        node.previous = this.tail;
    }
    else
        this.head = node;
	
	this.tail = node;
	return this;
};

DoublyLinkedList.prototype.getItemAt = function(index){
    var current = this.head;
	var position = 0;
    if(current === null)
         throw "Index out of bounds.";
    
	while(current.next !== null && position < index ){
		current = current.next;
		position++;
    }
  
    if(position < index)
		throw "Index out of bounds.";
    
    return current;
};

DoublyLinkedList.prototype.deleteAt = function(index){
	var current = this.getItemAt(index);
    if(current !== null){
		if(current.next !== null)
			current.next.previous = current.previous;
		if(current.previous !== null)
			current.previous.next = current.next;
		if(current === this.head)
			this.head = current.next;
		if(current === this.tail)
			this.tail = current.previous;
    }
	return this;
};

DoublyLinkedList.prototype.toArray = function(){
	var result =[];
	this.each(function(node){
		result.push(node.value);
	});
	return result;
};

DoublyLinkedList.prototype.insertAt = function(index, value){
    var current = this.getItemAt(index - 1);
    if(current !== null){
        
    }
	else if (current === this.head){
        
    }
	return result;
};

DoublyLinkedList.prototype.reverse = function(){

	return result;
};

DoublyLinkedList.prototype.each = function(process){
	var current = this.head;
	while(current !== null){
        process.call(this,current);
		current = current.next;
    }
	return result;
};

DoublyLinkedList.prototype.indexOf = function(value){
	var result = -1;
	var current = this.head;
	var position = 0;
	while(current !== null){
		if (current.value === value)
		{
			result = position;
			break;
		}
		current = current.next;
		position++;
    }
	return result;
};
