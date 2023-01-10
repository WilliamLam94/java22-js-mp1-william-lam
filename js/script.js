for (let i = 0; i < 5; i++) {
	const header = document.createElement(`h${i + 1}`);
	document.body.append(header);
	header.innerText = `Rad ${i + 1}`;
	header.style.backgroundColor = `hsl(${156 + i * 10},60%,50%)`;
	header.style.fontSize = `${16 + i * 2}px`;
	header.style.textAlign = 'center';
}
const div = document.createElement('div');
console.log(div);

const arrOne = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const list of arrOne) {
	console.log(list);
	document.body.append(list);
}

//const arrTwo = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
//for (const list of arrOne) {
//	console.log(list);
//	document.body.append(list);
//}
