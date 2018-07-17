var wList = new Array();
var newWeather;
function Forecast(fcode, fdate, fday, fhigh, flow,ftext){
	this.fcode = fcode;
	this.fdate = fdate;
	this.fday = fday;
	this.fhigh = fhigh;
	this.flow = flow;
	this.ftext = ftext;
}
$(document).on("pagecreate","#mainPage",function(){
	console.log(" page is ready");
	$.getJSON("files/a3_torontoWeather.json",function(data){
		console.log(data);
		//Header
		$("h2").html(
		data.query.myData.studName + "<br>" + data.query.results.channel.lastBuildDate
		);
		$("#myPanel").html(
			"<ul style='list-style-type:none;'>" + 
				"<li>" + "<a href='#popupPageForWind' data-rel='dialog' class='ui-btn ui-icon-images/wind.png ui-btn-icon-right'> Wind </a>" + "</li>" +
				"<li>" + "<a href='#popupPageForAtmosphere' data-rel='dialog' class='ui-btn ui-icon-images/atmosphere ui-btn-icon-right'> Atmosphere</a> " + "</li>" + 
				"<li>" + "<a href='#popupPageForAstronomy' data-rel='dialog' class='ui-btn ui-icon-images/astronomy ui-btn-icon-right'> Astronomy </a> "+ "</li>" + 
			"</ul>"
		);
		$("#pageData").html(
			"<p> City: " + data.query.results.channel.location.city + "</p>" +
			"<p> Country: " + data.query.results.channel.location.country + "</p>" +
			"<p> Region: " + data.query.results.channel.location.region + "</p>" + 
			"<p> Lat: " + data.query.results.channel.item.lat + "</p>" +
			"<p> Long: " + data.query.results.channel.item.long + "</p>" + 
			"<img src='images/" + data.query.myData.weatherImg + "' width='150' height='150'>" +
			"<a href='#newPage' class='ui-btn ui-icon-" + data.query.myData.forecastIcon + " ui-btn-icon-right' > Forecast </a>" +
			"<a href='#dataEntryPage' class='ui-btn ui-icon-" + data.query.myData.deIcon + " ui-btn-icon-right'> Data Entry </a>" +
			"<a href='#dataRetrievalPage'  class='ui-btn ui-icon-" + data.query.myData.dIcon + " ui-btn-icon-right'>Data Retrieval</a>" 
			
		);
		
		$("footer").html(
			"<ul id='footerList' style='list-style-type:none;' >" +
				"<li>" + "<a href='#popupPageForAbout'  data-rel='dialog' class='ui-btn ui-icon-" +data.query.myData.aboutIcon + " ui-btn-icon-right' data-transition='pop'>"  + "About" + "</a>" +
				"</li>" +
				"<li>" + "<a href='https://www.theweathernetwork.com/ca/weather/ontario/burlington' class='ui-btn ui-icon-" +data.query.myData.otherIcon + " ui-btn-icon-right'>" + "Other" + "</a>" +
				"</li>"
			+ "</ul>"
		);
		
		
	});
});

$(document).on("pagecreate", "#popupPageForAbout", function(){
	$.getJSON("files/a3_torontoWeather.json",function(data){
	infovar = data.query.myData;
	$("#popupPageForAbout").html(

	"<ul data-role='popup' id='popPersInf' style='list-style-type:none;'>" + 
		"<li>" + 
		 "<img src='images/" + infovar.myPic + "' length='150' width='150'>" + 
		"</li>" +
		"<li>"  + 
			"NAME:" + " " + infovar.studName
		+ "</li>" +
		"<li>"  + 
			"STUDENT#:" + " " + infovar.studNumb
		+ "</li>" +
		"<li>"  + 
			"PROGRAM:" + " " + infovar.studProg
		+ "</li>" 
		
	+ "</ul>" + 
	"<a href='#mainPage'class='ui-btn ui-icon-back ui-btn-icon-top'>"+ "Back" + "</a>"
	)
});
});

$(document).on("pagecreate", "#popupPageForWind", function(){
	$.getJSON("files/a3_torontoWeather.json",function(data){
	windV = data.query.results.channel.wind;
	$("#popupPageForWind").html(

	"<ul data-role='popup' id='popupInfoForWind' style='list-style-type:none;'>" + 
		
		"<li>"  + 
			"CHILL:" + " " + windV.chill
		+ "</li>" +
		"<li>"  + 
			"DIRECTION:" + " " + windV.direction
		+ "</li>" +
		"<li>"  + 
			"SPEED:" + " " + windV.speed
		+ "</li>" 
		
	+ "</ul>" + 
	"<a href='#mainPage'class='ui-btn ui-icon-back ui-btn-icon-top'>"+ "Back" + "</a>"
	)
});
});

$(document).on("pagebeforeshow", "#popupPageForAtmosphere", function(){
	$.getJSON("files/a3_torontoWeather.json",function(data){
	atmV = data.query.results.channel.atmosphere;
	$("#popupPageForAtmosphere").html(

	"<ul data-role='popup' id='popupInfoForAtmosphere' style='list-style-type:none;'>" + 
		
		"<li>"  + 
			"HUMIDITY:" + " " + atmV.humidity
		+ "</li>" +
		"<li>"  + 
			"PRESSURE:" + " " + atmV.pressure
		+ "</li>" +
		"<li>"  + 
			"RISING:" + " " + atmV.rising
		+ "</li>" +
		"<li>"  + 
			"VISIBILITY:" + " " + atmV.visibility
		+ "</li>" 
		
	+ "</ul>" + 
	"<a href='#mainPage'class='ui-btn ui-icon-back ui-btn-icon-top'>"+ "Back" + "</a>"
	)
});
});

$(document).on("pagecreate", "#popupPageForAstronomy", function(){
	$.getJSON("files/a3_torontoWeather.json",function(data){
	astV = data.query.results.channel.astronomy;
	$("#popupPageForAstronomy").html(

	"<ul data-role='popup' id='popupInfoForAstronomy' style='list-style-type:none;'>" + 
		
		"<li>"  + 
			"SUNRISE:" + " " + astV.sunrise
		+ "</li>" +
		"<li>"  + 
			"SUNSET:" + " " + astV.sunset
		+ "</li>" 
		
	+ "</ul>" + 
	"<a href='#mainPage'class='ui-btn ui-icon-back ui-btn-icon-top'>"+ "Back" + "</a>"
	)
});
});

$(document).on("pagecreate","#newPage", function(x){
	$.getJSON("files/a3_torontoWeather.json", function(data){
		start = data.query.results.channel.item.forecast;
		for(x=0; x<start.length; x++){
			newWeather = new Forecast(
			start[x].code,
			start[x].date,
			start[x].day,
			start[x].high,
			start[x].low,
			start[x].text
			);
			wList.push(newWeather);
			
		}//end of  for loop.
		
		
		for(x=0; x<wList.length; x++){
			
			$("#data2").append(
			"<section data-role='collapsible' id='sectionL'>" + 
					"<h4> Date:" + wList[x].fdate + "</h4>" + 
					"<p>" +"Code:"  +" " + wList[x].fcode + "<br>" +
					        "Day:"+ " "+wList[x].fday + "<br>" + 
							"High:" +" "+ wList[x].fhigh + "<br>" + 
							"Low:" +" "+ wList[x].flow + "<br>" + 
							"Text:" +" " +wList[x].ftext +
					"</p>" + 
			"</section>"
			);
			
		}
		$("#data2").append(
		"<a href='#mainPage' class='ui-btn ui-icon-back ui-btn-icon-right'> Back </a>"
		);
		$("#data2").collapsibleset("refresh");
		
	});
});

$(document).ready(function() {	
	// Save data to localStorage
	$("#submitButton").click(function() {
	/*
	if an input has #id, $("#id");
	if no id or radio/checkbox = $("input[name='input']");
	*/
	localStorage.setItem("email", $("#uEmail").val());
	
	localStorage.setItem("city", 
				$("input[name='city']:checked").attr("value"));
				
	localStorage.setItem("comments", $("#uComment").val());
	
	
	alert("Manpreet, Submit was successful");
	
	});	

	


});


	$(document).on("pageshow", "#dataRetrievalPage", function() {
		for(x=0; x< localStorage.length; x++){
			key = localStorage.key(x);
			val = localStorage.getItem(key);
			$("#retrievedContent").append(key + "-" + val + "<br>");
	}
	});