$(document).ready(function() {
  $('#programmer').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://randomfox.ca/floof/",
      success: function(results) {
        console.log(results["image"]);
          $('#programmer-pic').attr("src", results["image"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
    $.ajax({
      dataType: "json",
      url: "https://v2.jokeapi.dev/joke/Programming",
      success: function(results) {
        if(results['joke'] === undefined){
          console.log(results["setup"]);
          console.log(results["delivery"]);
          var fixed = results['setup'] + " " + results['delivery'];
          console.log(fixed);
            $('#programmer-joke').text(fixed);
        }
        else{console.log(results["joke"]);
          $('#programmer-joke').text(results["joke"]);
        }
        $('h5').text("PROGRAM");
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
  $('#dark').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://randomfox.ca/floof/",
      success: function(results) {
        console.log(results["image"]);
          $('#dark-pic').attr("src", results["image"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
    $.ajax({
      dataType: "json",
      url: "https://v2.jokeapi.dev/joke/Dark",
      success: function(results) {
        if(results['joke'] === undefined){
          console.log(results["setup"]);
          console.log(results["delivery"]);
          var fixed = results['setup'] + " " + results['delivery'];
          console.log(fixed);
            $('#dark-joke').text(fixed);
        }
        else{console.log(results["joke"]);
          $('#dark-joke').text(results["joke"]);
        }
        $('h5').text("DARK");
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
  $('#pun').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://randomfox.ca/floof/",
      success: function(results) {
        console.log(results["image"]);
          $('#pun-pic').attr("src", results["image"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
    $.ajax({
      dataType: "json",
      url: "https://v2.jokeapi.dev/joke/Pun",
      success: function(results) {
        if(results['joke'] === undefined){
          console.log(results["setup"]);
          console.log(results["delivery"]);
          var fixed = results['setup'] + " " + results['delivery'];
          console.log(fixed);
            $('#pun-joke').text(fixed);
        }
        else{console.log(results["joke"]);
          $('#pun-joke').text(results["joke"]);
        }
        $('h5').text("PUN");
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
  $('#spooky').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://randomfox.ca/floof/",
      success: function(results) {
        console.log(results["image"]);
          $('#spooky-pic').attr("src", results["image"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
    $.ajax({
      dataType: "json",
      url: "https://v2.jokeapi.dev/joke/Spooky",
      success: function(results) {
        console.log(results["setup"]);
        console.log(results["delivery"]);
        var fixed = results['setup'] + " " + results['delivery'];
        console.log(fixed);
          $('#spooky-joke').text(fixed);
          $('h5').text("SPOOKY");
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
  $('#christmas').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://randomfox.ca/floof/",
      success: function(results) {
        console.log(results["image"]);
          $('#christmas-pic').attr("src", results["image"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
    $.ajax({
      dataType: "json",
      url: "https://v2.jokeapi.dev/joke/Christmas",
      success: function(results) {
        console.log(results["setup"]);
        console.log(results["delivery"]);
        var fixed = results['setup'] + " " + results['delivery'];
        console.log(fixed);
          $('#christmas-joke').text(fixed);
          $('h5').text("CHRISTMAS");
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
  $('#misc').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://randomfox.ca/floof/",
      success: function(results) {
        console.log(results["image"]);
          $('#misc-pic').attr("src", results["image"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
    $.ajax({
      dataType: "json",
      url: "https://v2.jokeapi.dev/joke/Misc",
      success: function(results) {
        if(results['joke'] === undefined){
          console.log(results["setup"]);
          console.log(results["delivery"]);
          var fixed = results['setup'] + " " + results['delivery'];
          console.log(fixed);
            $('#misc-joke').text(fixed);
        }
        else{console.log(results["joke"]);
          $('#misc-joke').text(results["joke"]);
        }
        $('h5').text("RANDOM");
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });





















});
