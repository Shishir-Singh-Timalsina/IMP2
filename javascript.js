function addPerson(){
    var name = document.getElementById("name").value;
    var node = document.createElement("LI");
    var textnode = document.createTextNode(name);
    node.appendChild(textnode);
    document.getElementById("nameDisplay").appendChild(node);
}