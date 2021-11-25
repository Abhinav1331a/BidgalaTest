var api_key = '8df48635';
var btn = '';
var result=[];
var watchlistarr = []
var url = "http://www.omdbapi.com/?type=movie&apikey="+api_key;


function handle(e){
  if(e.keyCode === 13){
    $("#form1").submit(function(event){
      event.preventDefault();
    })
    var search_value = $("#search").val();
    if(search_value==""){
      alert("Please enter a movie name!")
    }
    else{
    $.ajax({
    method: "GET",
    url: url+"&t="+search_value,
    success: function(data){
    result.unshift(`<div class="container resultcont">
              <img src="${data.Poster}" class="img-thumbnail poster float-left" width="150px" height="150px"/>
              <p>Title: ${data.Title}</p>
              <p> Genre: ${data.Genre}</p>
              <p> Release Date: ${data.Released}</p>
              <p> Runtime: ${data.Runtime}</p>
              <p>Ratings: ${data.imdbRating}</p>
              <button class="btn btn-dark btn-block" id="wlbtn" onclick="watchlist(this)">Add</button>
              </div>
              <br>`)
    
    $("#searchresultdiv").html(result)
    }
    })
    }
   
  }
}

function watchlist(obj){
  btn = $(obj)
  btn.prop('disabled', true);
  console.log($(obj).closest(".resultcont"))
  var remove_btn = `<button class="btn btn-dark btn-block" float="right" id="wlbtn" onclick="removewatchlist(this)">Remove</button><br>`
  var div = $(obj).closest(".resultcont").clone()
  $(div).children("#wlbtn").prop('hidden', true)
  watchlistarr.push(div.append(remove_btn))
  $("#watchlistdiv").html(watchlistarr)

}

function removewatchlist(obj){
btn.prop('disabled', false);
$(obj).closest(".resultcont").css("display", "none");

}
