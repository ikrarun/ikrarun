import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const position = writable<string>();
const sections = writable<Array<string>>([]);

function setIndicator() {
	if (browser) {
		const sections = document.querySelectorAll('section');
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5
		};
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					position.set(entry.target.id);
					//console.log(entry.target.id);
				}
			});
		}, options);
		sections.forEach((section) => {
			observer.observe(section);
		});
	}
}

function DoScroll(location: string) {
	if (browser && document) {
		var element = document?.getElementById(location);
		element?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
	}
}

const setSections = (data: string[]) => {
	sections.set(data);
};

var section: string[];
const allsections = () => {
	sections.subscribe((data) => {
		section = data;
	});
	return section;
};

export { setIndicator, DoScroll, setSections, position, allsections };
export default position;
