var symbol = "ABCDEFGHIJKL"
var cInteractionCount=0
function tryCreateChoiceInteraction() {
  var create = confirm("Append choiceInteraction?")
  if (create) {
    var div = document.createElement("DIV")
    cInteractionCount++
    var id="cId"+cInteractionCount
    div.innerHTML = `選項數 <input type="number" min="2" name=${"choicecount"+id} max="12" value="4" id=${"choicecount"+id}  />` +
      `<input type="checkbox" id=${"multiple"+id} />多選題` +
      `<button onclick="arrangeChoices('${id}')">安排選項位置</button><span id=${"correct"+id}></span>` +
      `<div style="border: 1px solid black" id=${"editorchoices"+id}>` +
      `</div><button onclick="getXmlData('${id}')">GetXMLData</button>`
    document.getElementById("content").appendChild(div)
  }
  else {
    alert("CANCELED")
  }
}
function arrangeCheckbox(id) {
  var parser = new DOMParser();
  var correct = document.getElementById("correct"+id)
  var isMultiple = document.getElementById("multiple"+id).checked
  while (correct.firstChild) {
    correct.removeChild(correct.firstChild);
  }
  var n = document.getElementById("choicecount"+id).value
  for (var i = 0; i < n; i++) {
    var checkbox = document.createElement("input")
    if (isMultiple) {
      checkbox.setAttribute("type", "checkbox")
    }
    else {
      checkbox.setAttribute("type", "radio")
    }
    checkbox.setAttribute("value", symbol.substr(i, 1))
    var text = document.createTextNode(symbol.substr(i, 1))
    correct.appendChild(checkbox)
    correct.appendChild(text)
  }
}
function arrangeChoices(id) {
  var n = document.getElementById("choicecount"+id).value
  var div = document.getElementById('editorchoices'+id)
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  for (var i = 0; i < n; i++) {
    var c = document.createElement("div")
    var id1 = id+`choice${i}`
    c.setAttribute("id", id1)
    c.setAttribute("style", "border: 1px solid black")
    c.setAttribute("contenteditable", "true")
    c.innerText = symbol.substr(i, 1)
    div.appendChild(c)
    CKEDITOR.disableAutoInline = true
    CKEDITOR.inline(id1, {
      customConfig: '/js/itemBodyConfig.js'
    });
  }
  arrangeCheckbox(id)
}
function getXmlData(id) {
  //var prompt = CKEDITOR.instances.editorprompt.getData()
  var choices = []
  var n = document.getElementById("choicecount"+id).value
  for (var i = 0; i < n; i++) {
    choices.push(CKEDITOR.instances[id+`choice${i}`].getData())
  }
  //console.log(prompt)
  console.log(choices)
  //var itemid = document.getElementById("itemid").value
  itemid=id
  var text = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<assessmentItem ' +
    'xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" ' +
    'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
    'xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1  http://www.imsglobal.org/xsd/qti/qtiv2p2/imsqti_v2p1.xsd" ' +
    ' identifier="' + itemid + '" title="' + itemid +
    '" adaptive="false" timeDependent="false"></assessmentItem>'
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(text, "text/xml").documentElement;
  var itembody = parser.parseFromString('<itemBody>' + prompt + '</itemBody>', "text/xml").documentElement
  var choiceInteraction = parser.parseFromString('<choiceInteraction>' + '</choiceInteraction>', "text/xml").documentElement
  for (var i = 0; i < n; i++) {
    var simplechoice = parser.parseFromString('<simpleChoice>' + choices[i] + '</simpleChoice>', "text/xml").documentElement
    choiceInteraction.appendChild(simplechoice)
  }
  itembody.appendChild(choiceInteraction)
  xmlDoc.appendChild(itembody)
  var str = new XMLSerializer().serializeToString(xmlDoc)
  console.log(str)
  //console.log(xmlDoc)
  //var serializer=new XMLSerializer()
  //console.log(xmlDoc.serializer())
}
