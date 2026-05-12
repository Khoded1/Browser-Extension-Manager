const extensionsContainer = document.querySelector(
	'.extensions_list_container',
);

if (extensionsContainer) {
	extensionsContainer.addEventListener('change', function (event) {
		const target = event.target;
		if (!target.matches('.toggle input')) return;
		const item = target.closest('.main_container');
		const isActive = target.checked;
		item.dataset.active = isActive;
		item.classList.toggle('card-active', isActive);
		item.classList.toggle('card-inactive', !isActive);
		const activeTab = document.querySelector('.tab_container button.active');
		const filter = activeTab ? activeTab.dataset.filter : 'all';
		if (window.renderCards) window.renderCards(filter);
		console.log('Toggle changed:', isActive);
	});

	extensionsContainer.addEventListener('click', function (event) {
		const target = event.target;
		if (!target.matches('.remove_btn')) return;

		const item = target.closest('.main_container');
		const checkbox = item.querySelector('.toggle input');
		if (checkbox) checkbox.checked = false;
		item.dataset.active = false;
		item.classList.remove('card-active');
		item.classList.add('card-inactive');

		const activeTab = document.querySelector('.tab_container button.active');
		const filter = activeTab ? activeTab.dataset.filter : 'all';
		if (window.renderCards) window.renderCards(filter);
	});
}
