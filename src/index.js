import './css/index.css';
import $ from 'jquery';
import imgSrc from './imgSrc';

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
	for (let icon in imgSrc) {
		$(`${iconSelector}.${icon}`).attr({ src: imgSrc[icon].url, alt: `${icon} icon` });
	}
	initHeaderBehaviour();
}

$(main);
