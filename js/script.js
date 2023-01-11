for (let i = 0; i < 5; i++) {
	const header = document.createElement(`h${i + 1}`);
	document.body.append(header);
	header.innerText = `Rad ${i + 1}`;
	header.style.backgroundColor = `hsl(${156 + i * 10},60%,50%)`;
	header.style.fontSize = `${16 + i * 2}px`;
	header.style.textAlign = 'center';
}

//creates a div
const div = document.createElement('div');
document.body.append(div);
div.style.border = '10px solid';
div.style.padding = '10px';
div.style.display = 'flex';
div.style.justifyContent = 'space-around';

const numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//0-9
const listEl = document.createElement('ul');
div.append(listEl);
listEl.style.listStyleType = 'none';
/** 
 * TODO
//* set background to purple
//*make listitem black and white(nthchild)
//*make innerText black and white
//* make if statment for number 4,8 and sex
**/
numbersArr.map((number) => {
	const listItemEl = document.createElement('li');
	listItemEl.innerText = number;
	listEl.append(listItemEl);
});

//9-0

const reverseListEl = document.createElement('ul');
div.append(reverseListEl);
reverseListEl.style.listStyleType = 'none';

const highToLowNumbersArr = numbersArr.sort((a, b) => b - a);
console.log(highToLowNumbersArr);

highToLowNumbersArr.map((number) => {
	const reverseListItemEl = document.createElement('li');
	reverseListItemEl.innerText = number;
	reverseListEl.append(reverseListItemEl);
});

// ett-tio

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

const numbersInWordsEl = document.createElement('ul');
div.append(numbersInWordsEl);
numbersInWordsEl.style.listStyleType = 'none';

for (const number of arr) {
	const listItemEl = document.createElement('li');
	listItemEl.innerText = number;
	numbersInWordsEl.append(listItemEl);
	console.log(number);
}
