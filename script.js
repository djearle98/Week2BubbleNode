class node {
	constructor (nodeId, title, description, owner, deadline, status, parents, children) {
		this.nodeId = nodeId;
		this.title = title;
    this.description = description;
    this.owner = owner;
    this.deadline = deadline;
    this.status = status;
    this.parents = parents;
    this.children = children; 
    
    /*
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname">
		*/
    document.getElementById("NodeNetwork").innerHTML += "\
    	<div class='node'> \
      	<label for='title' style='display:none'>Title:</label> \
				<input disabled type='text' class='title' name='title' value='"+this.title+"'> \
      	<div class='line-item'> \
          <div class='label'>Description:</div> \
          <div class='data'>"+this.description+"</div> \
				</div> \
      	<div class='line-item'> \
          <div class='label'>Owner:</div> \
          <div class='data'>"+this.owner+"</div> \
				</div> \
      	<div class='line-item'> \
          <div class='label'>Deadline:</div> \
          <div class='data'>"+this.deadline+"</div> \
				</div> \
      	<div class='line-item'> \
          <div class='label'>Staus:</div> \
          <div class='data'>"+this.status+"</div> \
				</div> \
			</div>";
  }
}

var allNodes = new Map();
//initialize nodes
for (var i = 1; i<=9; i++) {
	allNodes.set(i, new node(i, "Node " + i,"This is Node " + i, "David", "12/12/2020", "Great", [], []));
  console.log(allNodes.get(i));
}

