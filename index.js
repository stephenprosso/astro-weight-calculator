$(document).ready(function() {

	var planets = [
		['Pluto', 0.06],
		['Neptune', 1.148],
		['Uranus', 0.917],
		['Saturn', 1.139],
		['Jupiter', 2.640],
		['Mars', 0.3895],
		['Moon', 0.1655],
		['Earth', 1],
		['Venus', 0.9032],
		['Mercury', 0.377],
		['Sun', 27.9]
	];
	planets = planets.reverse();

	for (var i = 0; i<planets.length; i++){
    var planetName = planets[i][0];
    var planetGrav = planets[i][1];
	   $("select").append("<option value=" + planetGrav + ">"+ planetName +"</option>");
   }
   $("#Clicker").click(computeValue);

  function computeValue(){
    var weight = $("#weight").val();
    var select = $("#planets option:selected").text();
    var theGravity = $("#planets option:selected").val();

    var result = (weight * theGravity);

  $("#result").text("If you were on " + select + ", you would weigh " + Math.round(result) + " lbs!")

  }

});
