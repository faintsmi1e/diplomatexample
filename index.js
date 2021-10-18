
let lang = process.env.QLANG || 'EN';


switch(lang) {
  case 'EN':
    console.log('The pacak must do q twice');
    break;
  case 'RU':
    console.log('Пацак должен делать ку два раза');
    break;
  case 'UA':
    console.log('Пацак повинен робити ку два рази');
    break;
  default: 
    console.log('err');
    break;
};
