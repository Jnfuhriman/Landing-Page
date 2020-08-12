$(document).ready(getQuote());

function getQuote() {
    url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function (data) {
        console.log(data);
        $("#quote").html("<p>" + data.quoteText + "</p>");
        $("#author").html("<p>- " + data.quoteAuthor + "</p>");
        if (data.quoteAuthor == "") {
            $("#author").html("<p>- " + "Anon" + "</p>");
        }

    });
}

$("#main h1").delay(1000).animate({ opacity: 1 }, 700);
$("#main p").delay(2500).animate({ opacity: 1 }, 700);
$("#main .button").delay(3500).animate({ opacity: 1 }, 700);


