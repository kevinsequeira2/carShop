
function add(id) {
    
    if(id=="blueShirt"){

        let to=document.createElement('li');
        let node=document.createTextNode('blueShirt :$600000');
        to.appendChild(node);
        document.getElementById("table").appendChild(to);

    }
    if (id=="blackShirt") {
        let to=document.createElement('li');
        let node=document.createTextNode('blackShirt :$700000');
        to.appendChild(node);
        document.getElementById("table").appendChild(to);

    }
    
    if (id=="purpleShirt") {
        let to=document.createElement('li');
        let node=document.createTextNode('purpleShirt :$400000');
        to.appendChild(node);
        document.getElementById("table").appendChild(to);
    }

    if (id=="whiteShirt") {
        let to=document.createElement('li');
        let node=document.createTextNode('whiteShirt :$300000');
        to.appendChild(node);
        document.getElementById("table").appendChild(to);
    }


}
