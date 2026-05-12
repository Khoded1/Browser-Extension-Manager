function createCard(extension) {
	const cardExtension = document.createElement('div');
	cardExtension.classList.add('main_container');
	cardExtension.dataset.active = extension.isActive;
	cardExtension.innerHTML = `
      <div class="flex gap-5">
        <img src="${extension.logo}" alt="${extension.name}" class="self-start">
        <div class="flex flex-col gap-2">
          <h2 class="card-heading">${extension.name}</h2>
          <p class="paragraph-color">${extension.description}</p>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <button class="remove-button">Remove</button>
        <label class="switch">
          <input type="checkbox" ${extension.isActive ? 'checked' : ''}>
          <span class="slider round"></span>
        </label>
      </div>
    `;

	return cardExtension;
}
function renderCards(filter) {
	currentFilter = filter;
	card.innerHTML = ''; // clear grid
	const filtered = allExtensions.filter(ext => {
		if (filter === 'active') return ext.isActive === true;
		if (filter === 'inactive') return ext.isActive === false;
		return true; // "all"
	});
	filtered.forEach(ext => {
		card.appendChild(createCard(ext));
	});
}
fetch('extension.json')
	.then(response => response.json())
	.then(data => {
		allExtensions = data;
		renderCards('all');
	})
	.catch(error => console.error('Error loading data:', error));