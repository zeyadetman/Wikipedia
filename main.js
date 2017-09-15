function searcher() {
    $(".data").html(" ");
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=12&prop=pageimages%7Cextracts&pilimit=max&exintro=&explaintext=&exsentences=1&exlimit=max&gsrsearch=${$(".searchquery ").val()}`,
        "method": "GET",
        "headers": {
            "cache-control": "no-cache",
            "postman-token": "ba2e8bb7-fd67-4767-9d9d-959783f71f08"
        }
    }

    $.ajax(settings).done(function(response) {
        //console.log(response);
        var res = response['query']['pages'];
        var w = Object.keys(res);
        //console.log(w);
        for (var i = 0; i < 12; i++) {
            //  console.log(res[w[i]]);
            var src = "null";
            if (res[w[i]]['thumbnail'] == undefined)
                src = null;
            else {
                src = res[w[i]]['thumbnail']['source'];
            }
            $(".data").append(`<div class="col-md-3 item"> <img class="img-responsive img-rounded" src="${src}">
            <a href="https://en.wikipedia.org/?curid=${res[w[i]]['pageid']}" target="_blank">${res[w[i]]['title']}</a>
            <p class="description">${res[w[i]]['extract']}</p></div>`);

        }
    });
}