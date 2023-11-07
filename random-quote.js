var quotes = [
    "Don't judge each day by the harvest you reap but by the seeds that you plant. — Robert Louis Stevenson",
    "\"If I had more time, I would have written a shorter letter. — Cicero\"",
    "\"We don't rise to the level of our expectations, we fall to the level of our training. — Archilochus\"",
    "\"If it's a priority you'll find a way. If it isn't, you'll find an excuse. — Jim Rohn\"",
    "\"The more we value things outside our control, the less control we have. — Epictetus\"",
    "\"Think of many things; do one. — Portuguese proverb\"",
    "\"It is not that we have a short time to live, but that we waste a lot of it. — Seneca\"",
    "\"We suffer more often in imagination than in reality — Seneca\"",
    "\"Difficulties strengthen the mind, as labor does the body — Seneca\"",
    "\"Luck is what happens when preparation meets opportunity — Seneca\"",
    "\"So called pleasures, when they go beyond a certain limit, are but punishments — Seneca\"",
    "\"If unwilling to rise in the morning, say to thyself, ‘I awake to do the work of a man — Marcus Aurelius\"",
    "\"How long are you going to wait before you demand the best for yourself? — Epictetus\"",
    "\"No amount of anxiety makes any difference to anything that is going to happen — Allan Watts\"",
    "\"Worrying is like paying a debt you don’t owe — Mark Twain\"",
    "\"It may seem difficult at first but everything is difficult at first — Miyamoto Musashi\"",
    "\"Man cannot remake himself without suffering, for he is both the marble and the sculptor — Alexis Carrel\"",
    "\"Not until we are lost do we begin to understand ourselves — Henry David Thoreau\"",
    "\"Be specific or be ignored.\"",
    "\"Go to bed smarter than when you woke up. — Charlie Munger\"",
    "\"Beauty is a product of repetition.\"",
    "\"Most things are not obtained simply because they are not attempted. — Balthasar Gracian\"",
    "\"Progress is deciding what to stop doing.\"",
    "\"Presentation matters.\"",
    "\"Your whole idea about yourself is borrowed – borrowed from those who have no idea of who they are themselves. — Osho\"",
    "\"However beautiful the strategy, you should occasionally look at the results. — Winston Churchill\"",
    "\"Do, or do not. There is no try. — Yoda\"",
    "\"The philosopher Carl Popper talked about scientific knowledge being based not in certainty but falsifiability through experimentation and criticism you would discover the truth as a single person with a dream you can live in a Dreamland of your own creation but if you surround yourself with smart people who don't engage in group think you can promote and develop more accurate and robust mental models that then allow you to have an impact on reality — Garry Tan\"",
    "\"Capital isn't scarce; vision is. — Sam Walton\"",
    "\"Strong opinions, loosely held — Jeff Bezos\"",
    "\"Go do something. Do the best thing you can think of. Put the best plan you have into practice. It’s not going to be perfect, and it’s going to change along the way. But it will change partly because you become disciplined, pursuing the path. And as you become disciplined you become wiser, and as you become wiser you become able to formulate better and better plans. — Jordan Petterson\"",
    "\"May the flowers remind us why the rain was necessary — Xan Oku\"",
    "\"The magic you are looking for is in the work you are avoiding\"",
    "\"Be hard to kill\""
];

function displayRandomQuote() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteDisplay").innerHTML = randomQuote;
}

// Add an event listener to the quote display element
document.getElementById('quoteDisplay').addEventListener('click', displayRandomQuote);


window.onload = displayRandomQuote;