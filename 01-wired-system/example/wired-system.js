var scheme = {
  "type": "lamp",
  "children": [
    {
      "type": "xor",
      "children": [
        {
          "type": "and",
          "children": [
            {
              "type": "switch",
              "state": 0
            },
            {
              "type": "switch",
              "state": 1
            }
          ]
        },
        {
          "type": "not",
          "children": [
            {
              "type": "switch",
              "state": 1
            }
          ]
        }
      ]
    }
  ]
};

function isLampOn(node) {
  if ('state' in node) { return node; }

  var childrenStates = [];
  node.children.forEach(function(childNode) {
    childrenStates.push(isLampOn(childNode).state);
  });

  if(node.type === 'lamp') {
    node.state = childrenStates[0];
    return node;
  }

  switch(node.type) {
    case 'and':
      node.state = (childrenStates[0] && childrenStates[1]);
      break;
    case 'or':
      node.state = (childrenStates[0] || childrenStates[1]);
      break;
    case 'xor':
      node.state = (childrenStates[0] ^ childrenStates[1]);
      break;
    case 'not':
      node.state = (childrenStates[0] === 1 ? 0 : 1);
      break;
  }

  return node;
}

console.info(isLampOn(scheme).state);
