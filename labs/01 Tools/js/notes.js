
var notes = [], button;

function displayList() {
    'use strict';
    var i, table, note, node, html;
	table = document.getElementById('list');
	table.innerHTML = '';
	for (i = 0; i < notes.length; i += 1) {
		note = notes[i];
		node = document.createElement('tr');
		html = '<td>' + note.title + '</td><td>' + note.quantity + '</td><td><a href="#" onClick="deleteIndex(' + i + ')">delete</td>';
	    node.innerHTML = html;
		table.appendChild(node);
	}
}

function addItem() {
    'use strict';
    var textbox, itemText, newItem;
    textbox = document.getElementById('item');
	itemText = textbox.value;
	textbox.value = '';
	textbox.focus();
	newItem = {title: itemText, quantity: 1};
	notes.push(newItem);
	displayList();
}

function deleteIndex(i) {
    'use strict';
	notes.splice(i, 1);
	displayList();
}

button = document.getElementById('add');
button.onclick = addItem;
