let darkmode = localStorage.getItem('dark-mode');
const themeSwitch = document.getElementById('theme_switch');

const enableDarkMode = () => {
	localStorage.setItem('darkmode', 'enabled');
	document.body.classList.add('dark-mode');
};
const disableDarkMode = () => {
	localStorage.setItem('darkmode', 'disabled');
	document.body.classList.remove('dark-mode');
};
if (darkmode === 'enabled') {
	enableDarkMode();
}
themeSwitch.addEventListener('click', () => {
	darkmode = localStorage.getItem('dark-mode');
	document.body.classList.toggle('dark-mode');

	// darkmode = localStorage.getItem('dark-mode');
	// darkmode !== 'enabled' ? enableDarkMode() : disableDarkMode();
});
