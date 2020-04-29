/*CLASSES*/
class Scene {
	constructor () {
  	this.html = "";
    this.applyCss = null;
  }
  paint(){
		//canvas.innerHTML = this.html;
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
		
    var node = allNodes.get(nodeId);
    this.html = "\
    	<div class='node'> \
				<div contenteditable class='title'> \
        	<p>"+node.title+"</p> \
				</div>\
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
		
    */
    super.applyCss = function(){
    	
        /* set to big and biased toward the top
          font-size: 24pt;
          height: 100px;
          width: 300px;
          margin-top: 85px; // this isn't working properly
          padding-top: 70px;
          border-style: none;
         */
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
		
    for (var i = 0; i< allNodes.size; i++){
      var node = allNodes.get(i+1);
      this.html += "\
        <div class='node' onclick='singleNodeScene.paint("+node.nodeId+")'> \
          <div class='title'> \
            <p>"+node.title+"</p> \
          </div>\
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
    }*/
    
    super.applyCss = function(){
      /*
      //CHANGE TO SMALL AND CENTERED
      font-size: 24pt;
      height: 100px;
      width: 300px;
      margin-top: 85px; // this isn't working properly
      padding-top: 70px;
      border-style: none;
      */
    };
    super.paint();
  }
}
class Node {
	constructor (nodeId, title, description, owner, deadline, status, parents, children) { 
  	this.nodeId = nodeId;
    console.log(this.nodeId);
    this.metadata = new Map();
    this.metadata.set("nodeId", nodeId);
    this.metadata.set("title", title);
    this.metadata.set("description", description);
    this.metadata.set("owner", owner);
    this.metadata.set("deadline", deadline);
    this.metadata.set("status", status);
    this.metadata.set("parents", parents);
    this.metadata.set("children", children);
    
    this.node = document.createElement("div");
    this.node.className = "node";
    this.node.onclick = this.test;
    canvas.appendChild(this.node);
    
    this.title = document.createElement("div");
    this.title.className = "title";
    this.node.appendChild(this.title);
    
    this.p = document.createElement("p");
    this.title.appendChild(this.p);
    
    this.textNodeForTitle = document.createTextNode(this.metadata.get("title"));
    this.p.appendChild(this.textNodeForTitle);
    
    /*
    
    <div class='node' onclick='singleNodeScene.paint("+node.nodeId+")'> \
          <div class='title'> \
            <p>"+node.title+"</p> \
          </div>\
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
        */
  }
        
	test(){
  	console.log("CLICKED: "+this.nodeId);
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
}
networkNodeScene.paint();

function createNode(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
