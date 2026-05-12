// Sample data for extensions
let allExtensions = [];
let currentFilter = 'all';

async function fetchExtensions() {
	try {
		const response = await fetch('./extension.json');
		const data = await response.json();
		const cardExtension = document.querySelector(
			'.extensions_list_container',
		);
		data.forEach(extension => {
			const card = document.createElement('div');
			card.classList.add('main_container');
			card.dataset.active = extension.isActive;
			card.classList.add(
				extension.isActive ? 'card-active' : 'card-inactive',
			);
			card.innerHTML = `
          	<div class="flex main_header_con ">
            	<img src="${extension.logo}" alt="${extension.name}" class="extension-logo">
            	<div class="flex extension-title-con">
          		 	<h2 class="extension-heading">${extension.name}</h2>
            		<p class="extension-paragraph">${extension.description}</p>
            	</div>
          	</div>
          	<div class="flex main_btns_container">
            		<button class="remove_btn">Remove</button>
            	<label class="toggle">
              		<input type="checkbox" ${extension.isActive ? 'checked' : ''}>
              		<span class="slider"></span>
            	 </label>
          	</div>
        	`;
			cardExtension.appendChild(card);
		});
		allExtensions = data;
		renderCards('all');
	} catch (error) {
		console.error('Error fetching extensions:', error);
	}
}

function renderCards(filter = currentFilter) {
	currentFilter = filter;
	const cards = document.querySelectorAll('.main_container');
	cards.forEach(card => {
		const isActive = card.dataset.active === 'true';
		card.classList.toggle('card-active', isActive);
		card.classList.toggle('card-inactive', !isActive);
		if (filter === 'all') {
			card.style.display = 'block';
		} else if (filter === 'active') {
			card.style.display = isActive ? 'block' : 'none';
		} else if (filter === 'inactive') {
			card.style.display = isActive ? 'none' : 'block';
		}
	});

	const tabs = document.querySelectorAll('.tab_container button');
	tabs.forEach(tab => {
		tab.classList.toggle('active', tab.dataset.filter === filter);
	});
}

window.renderCards = renderCards;

const tabButtons = document.querySelectorAll('.tab_container button');
tabButtons.forEach(button => {
	button.addEventListener('click', () => {
		renderCards(button.dataset.filter);
	});
});

fetchExtensions();
