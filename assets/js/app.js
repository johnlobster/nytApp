// What to track
// apiKey
var apiKey = "eghU7piI8ExzfgOeOYJnysUiA2lv1nMX";
var searchTerm = "obama";
// apiURL
var apiURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + apiKey;
// search term
// console.log(apiURL);
var numberOfArticles = 5;

function searchArticles(searchTerm) {
    var apiURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + apiKey;

    $.ajax({
        url: apiURL,
        method: "GET"
    }).then(function (response) {

        $("#newsreturn").empty(); // remove all previous data
        for (i = 0; i < numberOfArticles; i++) {
            var newDiv = $("<div>");
            var aTag = $("<a>");
            aTag.attr("href", response.response.docs[i].web_url);
            aTag.text(response.response.docs[i].web_url);
            var h6Tag = $("<h6>");
            h6Tag.text(response.response.docs[i].headline.main);
            newDiv.append(h6Tag).append(aTag);
            console.log(response.response.docs[i]);
            $("#newsreturn").append(newDiv);
        }
        // console.log(apiURL);
    });

}
searchArticles("trump");

// What to do
// get the search Term
// display the results
// make an api call
var newsButtons


