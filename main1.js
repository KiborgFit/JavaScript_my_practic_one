const gender = prompt('ВЫ МУЖЧИНА или ЖЕНЩИНА?  буква "М" или буква "Ж"')
const age = prompt('СКОЛЬКО ВАМ ЛЕТ?')
 
if (age > 60 && gender === 'М' ) 
gender = confirm("Вы дедушка");

else if ( age > 21 && age < 59 && gender === 'М' )
gender = confirm('Вы мужчина');

else if ( age > 12 && age < 20 && gender === 'М' )
gender = confirm('Вы юноша');

else if ( age < 11 && gender === 'М' )
gender = confirm('Вы мальчишка');

else if (age > 56 && gender === 'Ж' ) 
gender = confirm("Вы бабушка");

else if ( age > 21 && age < 55  && gender === 'Ж' )
gender = confirm('Вы женщина');

else if ( age > 12 && age < 20  && gender === 'Ж' )
gender = confirm('Вы девушка');

else if ( age < 11 && gender === 'Ж' )
gender = confirm('Вы девчока');


