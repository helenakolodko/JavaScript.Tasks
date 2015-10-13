var Node = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
};

var BinaryTree = function() {
    this.root = null;
}

BinaryTree.prototype.add = function(value) {
    var node = new Node(value),
		current, parent;
	if(this.root === null){
		this.root = node;
	}
	else {
		current = this.root;
		parent = this.root;
		while(current !==null){
			parent = current;
			if(current.value > value){
				current = current.left;
				if(current === null)
					parent.left = node;
			}
			else{
				current = current.right;
				if(current ===null)
					parent.right = node;
			}			
		}
	}
}

BinaryTree.prototype.contains = function(value) {
    var current = this.root,
		result = false;
	while(!result && current !== null){
		if(current.value === value)
			result = true;
		if(current.value > value)
			current = current.left;
		else
			current = current.right;		
	}
	return result;
}

BinaryTree.prototype.traversePreOrder = function(process) {
	function preOrder(node){
		if(node !== null){
			process.call(this, node);
			preOrder(node.left);
			preOrder(node.right);
		}
	}
	preOrder(this.root);
}

BinaryTree.prototype.toArray = function() {
    var result = [];
	this.traversePreOrder(function(node){
		result.push(node.value);
	});
	return result;
}

var ExtendedBinaryTree = function() {
}

ExtendedBinaryTree.prototype = Object.create(BinaryTree.prototype);
ExtendedBinaryTree.prototype.constructor = ExtendedBinaryTree;

ExtendedBinaryTree.prototype.remove = function() {
    
}