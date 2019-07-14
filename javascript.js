var quotes = [
'This is heavy. -Marty McFly',
'Do or do not, there is no try. - Yoda',
'Have you ever seen the devil dance in the pale moonlight? -Joker',
'Hamburgers. The cornerstone of any nutritious breakfast. - Jules Winnfeld',
'With great power, comes great responsiblity.- Ben Parker',
'The things you own end up owning you. - Tyler Durden',
'He who attacks first always wins. - L',
'I am not the one at fault. The world is. - Lelouch',
'Believe in yourselves. Try. Do good. - George Feeny'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}