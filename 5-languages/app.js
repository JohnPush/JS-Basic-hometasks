/*5-languages*/

const languages = prompt('Введите ваш язык: en, ru, de, pt');

switch (languages) {
	case 'en':
    case 'En':
    case 'EN':
    case 'eN':
		console.log('Good afternoon!');
		break;
	case 'ru':
    case 'Ru':
    case 'RU':
    case 'rU':
		console.log('Добрый день!');
		break;
	case 'de':
    case 'De':
    case 'DE':
    case 'dE':
		console.log('Guten tag!');
		break;  
	default:
		console.log('Язык отсутствует');
}
