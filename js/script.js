for (let i = 0; i < 5; i++) {
	const header = document.createElement(`h${i + 1}`);
	document.body.append(header);
	header.innerText = `Rad ${i + 1}`;
	header.style.backgroundColor = `hsl(${156 + i * 10},60%,50%)`;
	header.style.fontSize = `${16 + i * 2}px`;
	header.style.textAlign = 'center';
}
const div = document.createElement('div');
document.body.append(div);
console.log(div);

const ol = document.createElement('ol');
document.body.append(ol);

for (let i = 0; i < 10; i++) {
	const li = document.createElement('li');
	ol.append(li);
	li.innerText = `${i + 0}`;
	li.style.listStyleType = 'none';
}

const ul = document.createElement('ul');
document.body.append(ul);

for (let i = 0; i < 10; i++) {
	const li = document.createElement('li');
	ul.append(li);
	li.innerText = `${9 + i * 0}`;
	li.style.listStyleType = 'none';
}

const arr = [
	'ett ',
	' två ',
	' tre ',
	' fyra ',
	' fem ',
	' sex ',
	' sju ',
	' åtta ',
	' nio ',
	' tio ',
];
for (const list of arr) {
	console.log(list);
	document.body.append(list);
}

//const arrTwo = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
//for (const list of arrOne) {
//	console.log(list);
//	document.body.append(list);
//}
