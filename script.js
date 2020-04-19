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
    
    document.getElementById("NodeNetwork").innerHTML += "\
    	<div class='node'> \
				<div class='title'>"+this.title+"</div> \
      	<div class='info-line'> \
          <div class='label'>Description:</div> \
          <div class='data'>"+this.description+"</div> \
				</div> \
      	<div class='info-line'> \
          <div class='label'>Owner:</div> \
          <div class='data'>"+this.owner+"</div> \
				</div> \
      	<div class='info-line'> \
          <div class='label'>Deadline:</div> \
          <div class='data'>"+this.deadline+"</div> \
				</div> \
      	<div class='info-line'> \
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

