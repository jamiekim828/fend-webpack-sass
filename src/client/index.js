import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import { weatherData } from './js/weatherAPI';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/form.scss';
import './styles/footer.scss';
import './styles/header.scss';

console.log('name check', checkForName);

alert('I EXIST');

export { checkForName, handleSubmit, weatherData };
