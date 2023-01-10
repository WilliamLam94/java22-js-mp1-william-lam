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
