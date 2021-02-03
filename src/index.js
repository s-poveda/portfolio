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
  $('img.icon.discord').attr('src', imgSrc.discord).attr('alt', 'Discord icon');
  $('img.icon.node').attr('src', imgSrc.node).attr('alt', 'NodeJS icon');
	initHeaderBehaviour();
}

$(main);
