$.ajax({
  url: "https://apis.is/tv/ruv",
  type: "GET",
  dataType: "json",
  success: function(response) {
    for (var i = 0; i < response.results.length; i++) {
      var current = response.results[i];
      var date2 = new Date(current.startTime);
      var getminutes = function() {
        if (date2.getMinutes() < 10) {
          return "0" + date2.getMinutes();
        }
        return date2.getMinutes(); 
      };
      
      var description = function(){
          if (typeof current.description === 'undefined' || !current.description) {
            return "Engin lýsing";
          }
          return current.description;
        }
       
      $("table").append(
        "<tr><td>" +
          date2.getHours() +
          ":" +
          getminutes() +
          "</td><td>" +
          current.title +
          "</td><td>" +
          current.duration +
          "</td><td>" +
          description() +
          "</tr>"
      );
    }
  },
  error: function(response2) {
    $("#Error").text("Ekki náðist samband við vefþjónustu");
  }
});