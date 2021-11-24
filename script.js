var api_key = '8df48635'
var parameter = ''

function handle(e){
  if(e.keyCode === 13){
    var array = []   
    $("#form1").submit(function(event){
      event.preventDefault();
      var url = "http://www.omdbapi.com/?type=movie&apikey="+api_key;
      var result="";
      var search_value = $("#search").val();
      $.ajax({
        method: "GET",
        url: url+"&t="+search_value,
        success: function(data){
        result = `<div class="container resultcont">
                    <img src="${data.Poster}" class="img-thumbnail poster float-left" width="150px" height="150px"/>
                    <p>Title: ${data.Title}</p>
                    <p> Genre: ${data.Genre}</p>
                    <p> Release Date: ${data.Released}</p>
                    <p> Runtime: ${data.Runtime}</p>
                    <p>Ratings: ${data.imdbRating}</p>
                    <button class="btn btn-dark btn-block" id="wlbtn" onclick="watchlist()">Add</button>
                    </div>`
                  
          parameter = `<div class="container resultcont">
                        <img src="${data.Poster}" class="img-thumbnail poster float-left" width="150px" height="150px"/>
                        <p>Title: ${data.Title}</p>
                        <p> Genre: ${data.Genre}</p>
                        <p> Release Date: ${data.Released}</p>
                        <p> Runtime: ${data.Runtime}</p>
                        <p>Ratings: ${data.imdbRating}</p>
                        </div>`
          
          $("#searchresultdiv").html(result)
        }
      })

    })
}
}

function watchlist(){
  document.getElementById("wlbtn").setAttribute("style","display:none")
  var remove_btn = `<button class="btn btn-dark btn-block" float="right" id="wlbtn" onclick="removewatchlist()">Remove</button>`
  $("#watchlistdiv").html(parameter+remove_btn)
}

function removewatchlist(){
  var nothing = ``
  $("#watchlistdiv").html(nothing)
}