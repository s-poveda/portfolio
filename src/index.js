import './css/index.css';
import $ from 'jquery';
import imgSrc from './imgSrc';

function main() {
  $('img.discord').attr('src', imgSrc.discord);
  $('img.node').attr('src', imgSrc.node);
}

$(main);
