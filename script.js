/*CLASSES*/
class Scene {
	constructor () {
  	this.html = "";
    this.applyCss = null;
  }
  paint(){
		canvas.innerHTML = this.html;
    this.applyCss(); 
  }
}
class SingleNodeScene extends Scene {
	constructor () {
  	super();
  }
  paint(nodeId){
    /*
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname">
		*/
    var node = allNodes.get(nodeId);
    this.html = "\
    	<div class='node'> \
      	<label for='title' style='display:none'>Title:</label> \
				<input disabled type='text' class='title' name='title' value='"+node.title+"'> \
      	<div class='line-item'> \
          <div class='label'>Description:</div> \
          <div class='data'>"+node.description+"</div> \
				</div> \
      	<div class='line-item'> \
          <div class='label'>Owner:</div> \
          <div class='data'>"+node.owner+"</div> \
				</div> \
      	<div class='line-item'> \
          <div class='label'>Deadline:</div> \
          <div class='data'>"+node.deadline+"</div> \
				</div> \
      	<div class='line-item'> \
          <div class='label'>Staus:</div> \
          <div class='data'>"+node.status+"</div> \
				</div> \
			</div>";
		
    
    super.applyCss = function(){
      //canvas.getElementsByClassName("node")[0].style.backgroundColor = "blue";
    };
    super.paint();
  }
}
class NetworkNodeScene extends Scene {
	constructor () {
  	super();
  }
  paint(){
    /*
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname">
		*/
    for (var i = 0; i< allNodes.size; i++){
      var node = allNodes.get(i+1);
      this.html += "\
        <div class='node' onclick='singleNodeScene.paint("+node.nodeId+")'> \
          <label for='title' style='display:none'>Title:</label> \
          <input disabled type='text' class='title' name='title' value='"+node.title+"'> \
          <div class='line-item'> \
            <div class='label'>Description:</div> \
            <div class='data'>"+node.description+"</div> \
          </div> \
          <div class='line-item'> \
            <div class='label'>Owner:</div> \
            <div class='data'>"+node.owner+"</div> \
          </div> \
          <div class='line-item'> \
            <div class='label'>Deadline:</div> \
            <div class='data'>"+node.deadline+"</div> \
          </div> \
          <div class='line-item'> \
            <div class='label'>Staus:</div> \
            <div class='data'>"+node.status+"</div> \
          </div> \
        </div>";
    }
    
    super.applyCss = function(){
      canvas.getElementsByClassName("node")[0].style.backgroundColor = "blue";
    };
    super.paint();
  }
}
class Node {
	constructor (nodeId, title, description, owner, deadline, status, parents, children) {
		this.nodeId = nodeId;
		this.title = title;
    this.description = description;
    this.owner = owner;
    this.deadline = deadline;
    this.status = status;
    this.parents = parents;
    this.children = children; 
  }
}

/*VARIABLES*/
var canvas = document.getElementById("canvas");
var allNodes = new Map();
var singleNodeScene = new SingleNodeScene();
var networkNodeScene = new NetworkNodeScene();

/*INIT*/
for (var i = 1; i<=9; i++) {
	allNodes.set(i, new Node(i, "Node " + i,"This is Node " + i, "David", "12/12/2020", "Great", [], []));
  //console.log(allNodes.get(i));
}
networkNodeScene.paint();
