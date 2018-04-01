function searcher() {
    $(".data").html(" ");
    let link = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=12&prop=pageimages%7Cextracts&pilimit=max&exintro=&explaintext=&exsentences=1&exlimit=max&gsrsearch=${$(".searchquery ").val()}&origin=*`;
fetch(link)
  .then(res => res.json())
    .then((response)=>{
        //console.log(response);
        let res = response['query']['pages'];
        //console.log(res);
        var w = Object.keys(res);
        //console.log(w);
        for (var i = 0; i < 12; i++) {
            //console.log(res[w[i]]);
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
}).catch(()=>console.log('err'));
}