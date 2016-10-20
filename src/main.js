import domready from 'domready';
import App from './app';

require('./scss/main.scss');

domready(() => {

	new App();

});
