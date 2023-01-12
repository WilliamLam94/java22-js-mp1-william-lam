for (let i = 0; i < 5; i++) {
	const header = document.createElement(`h${i + 1}`);
	document.body.append(header);
	header.innerText = `Rad ${i + 1}`;
	header.style.backgroundColor = `hsl(${120 + i * 20},90%,85%)`;
	header.style.fontSize = `${16 + i * 2}px`;
	header.style.textAlign = 'center';
	header.style.color = '#6e6ef7';
}

//creates a div
const div = document.createElement('div');
document.body.append(div);
div.style.border = '1px solid';
div.style.padding = '10px';
div.style.display = 'flex';
div.style.justifyContent = 'space-around';

const numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/** 
 * TODO
//* set background to purple
//*make listitem black and white(nthchild)
//*make innerText black and white(nthchild)
//* make if statment for number 4,8 and sex
**/

//0-9
const listEl = document.createElement('ul');
div.append(listEl);
listEl.style.listStyleType = 'none';
listEl.style.textAlign = 'start';
listEl.style.backgroundColor = '#a8a8f0';
listEl.style.padding = '20px';

numbersArr.map((number) => {
	const listItemEl = document.createElement('li');
	listItemEl.innerText = number;
	listEl.append(listItemEl);
	listItemEl.style.backgroundColor = 'black';
	listItemEl.style.color = 'white';

	if (number % 2 == 1) {
		listItemEl.style.backgroundColor = 'white';
		listItemEl.style.color = 'black';
	}
	number++;
	console.log(number);
});

//9-0

const reverseListEl = document.createElement('ul');
div.append(reverseListEl);
reverseListEl.style.listStyleType = 'none';
reverseListEl.style.textAlign = 'center';
reverseListEl.style.backgroundColor = '#a8a8f0';
reverseListEl.style.padding = '20px';

const highToLowNumbersArr = numbersArr.sort((a, b) => b - a);

highToLowNumbersArr.map((number) => {
	const reverseListItemEl = document.createElement('li');
	reverseListItemEl.innerText = number;
	reverseListEl.append(reverseListItemEl);
	reverseListItemEl.style.backgroundColor = 'black';
	reverseListItemEl.style.color = 'white';

	if (number % 2 == 1) {
		reverseListItemEl.style.backgroundColor = 'white';
		reverseListItemEl.style.color = 'black';
	}
	number++;
	console.log(number);
});

// ett-tio

const arr = [
	' ett ',
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
numbersInWordsEl.style.textAlign = 'end';
numbersInWordsEl.style.backgroundColor = '#a8a8f0';
numbersInWordsEl.style.padding = '20px';

for (const number of arr) {
	const listItemEl = document.createElement('li');
	listItemEl.innerText = number;
	numbersInWordsEl.append(listItemEl);
	listItemEl.style.backgroundColor = 'black';
	listItemEl.style.color = 'white';

	console.log(number);
}
