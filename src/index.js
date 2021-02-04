import $ from 'jquery';
import imageSrc from './imageSrc';
import iconSrc from './iconSrc';
import './css/index.css';

function initHeaderBehaviour() {
	const
		headerLimit = Math.floor($('header').height()),
	 	navbar = $('nav'),
	 	navHeight = Math.floor($(navbar).height());

	window.onscroll = () => {
		if (window.pageYOffset >= (headerLimit - (navHeight >> 1))) {
			$(navbar).addClass('sticky');
		} else {
			$(navbar).removeClass('sticky');
		}
	};
}

function main() {
	const iconSelector = 'img.icon';
	for (let icon in iconSrc) {
		$(`${iconSelector}.${icon}`).attr({ src: iconSrc[icon].url, alt: iconSrc[icon].alt });
	}
	const imageSelector = 'img.image';
	for (let image in imageSrc) {
		$(`${imageSelector}.${image}`).attr({ src: imageSrc[image].url, alt: imageSrc[image].alt });
	}
	initHeaderBehaviour();
}

$(main);
