      /* ----------------NAV ------------------ */
      var navContainer = document.getElementById("page-leftbar");
	  var nav1Home = document.getElementById("nav1Home");
	  var nav2Data = document.getElementById("nav2Data");

	  
	  // Did the user choose CSV or Manual Data? Default is CSV.
	  var globalCSV = 1;
	  // Did the user choose 2 or 3 column visualizations? Default is Two
	  var globalTwoOrThree = 2;
	  // What step did the user reach? Default 1. Used to determine availability of steps.
	  var globalLevelReached = 1;
	  
	  $('#nav1Home').addClass("active");
	  nav1Home.addEventListener("click", goStep1, false);
	  
	  var nav3Preview = document.getElementById("nav3Preview");
	  nav3Preview.addEventListener("click", goStep3, false);
	  nav3Preview.addEventListener("mouseover", step3MouseOver, false);
	  var nav4View = document.getElementById("nav4View");
	  nav4View.addEventListener("click", goStep5, false);
	  
	  /* ---------------------- END NAV ---------------- */
      var step2Link = document.getElementById("step2Link");
	  step2Link.addEventListener("click", goStep2, false);
	  var step3Link = document.getElementById("step3Link");
	  step3Link.addEventListener("mouseover", step3MouseOver, false);
	  var step4Link = document.getElementById("step4Link");
	  step4Link.addEventListener("mouseover", step4MouseOver, false);
	  var step1ChooseData = document.getElementsByTagName("section")[0]; //no longer needed.
	  var chooseCSV = document.getElementById("goCSVUpload");
	  chooseCSV.addEventListener("click",showCSV,false);
	  var chooseHTML = document.getElementById("goManualData");
	  chooseHTML.addEventListener("click",showHTML,false);
	  var step2DataCSV = document.getElementById("step2DataCSV");
	  var step2DataHTML = document.getElementById("step2DataHTML");
	  var viewCSVVisualizations = document.getElementById("viewCSVVisualizations");
	  viewCSVVisualizations.addEventListener("click",viewCSVVisualizationList,false);
	  var viewCSV3Visualizations = document.getElementById("viewCSV3Visualizations");
	  viewCSV3Visualizations.addEventListener("click",viewCSV3VisualizationsList,false);
	  var viewHTMLVisualizations = document.getElementById("viewHTMLVisualizations");
	  viewHTMLVisualizations.addEventListener("click",viewHTMLVisualizationList,false);
	  var viewHTML3Visualizations = document.getElementById("viewHTML3Visualizations");
	  viewHTML3Visualizations.addEventListener("click",viewHTML3VisualizationList,false);
	  
	  var showStep5 = document.getElementById("showStep5");
	  showStep5.addEventListener("click", goStep5, false);
	  function goStep1() {
		  $('#page-leftbar ul li[0]').addClass("active");
		  $('#step1ChooseData').show();
		  $('#step2DataCSV').hide();
		  $('#step2DataHTML').hide();
		  $('#step3ChooseCSVVisualizations').hide();
		  $('#step3ChooseHTMLVisualizations').hide();
		  $('#step4ShowCSVVisualizations').hide();
		  $('#step4ShowHTMLVisualizations').hide();
	  }

	  function goStep2() {
		  $('#nav1Home').removeClass("active");
		  $('#nav2Data').addClass("active");
		  $('#nav3Preview').removeClass("active");
		  $('#nav4View').removeClass("active");
		  $('#step1ChooseData').hide();
		  console.log(globalCSV);
		  if(globalCSV == 1) {
    		  $('#step2DataCSV').show();
		  } else {
	    	  $('#step2DataHTML').show();
			  console.log('decide two or three');
			  //if database is populated and column [0][2] has a value show three, otherwise show two.
		  }
		  $('#step3ChooseCSVVisualizations').hide();
		  $('#step3ChooseHTMLVisualizations').hide();
		  $('#step4ShowVisualizations').hide();
		  if(globalLevelReached < 2) {
            globalLevelReached = 2
		  } else {
			$('#viewCSVVisualizations').disable(true);			  
			$('#viewCSV3Visualizations').disable(true);			  
			$('#viewHTMLVisualizations').disable(true);			  
			$('#viewHTML3Visualizations').disable(true);			  
		  }

	  }
	  function goStep3() {
		  if(globalLevelReached >= 3) {
		  
		    $('#nav1Home').removeClass("active");
		    $('#nav2Data').removeClass("active");
		    $('#nav3Preview').addClass("active");
		    $('#nav4View').removeClass("active");
		    $('#step1ChooseData').hide();
   		    $('#step2DataCSV').hide();
		    $('#step2DataHTML').hide();
		    if(globalCSV == 1) {
				if(globalTwoOrThree==2){
			      $('#step3ChooseCSVVisualizations').hide();
			    }else{
			      $('#step3ChooseCSVVisualizations').hide();
		    	}
			} else {
				if(globalTwoOrThree==2){
			      $('#step3ChooseHTMLVisualizations').hide();
			    }else{
			      $('#step3ChooseHTMLVisualizations').hide();
		    	}
				
			}
		    $('#step4ShowVisualizations').show();
			$('#step5ShowCarousel').hide();
			console.log('level reached' + globalLevelReached);
		  }
	  }
	  function step3MouseOver(){
		  if(globalLevelReached >= 3) {
			  $('#step3Link').addClass("mousePointer");
			  $('#step3Link').removeClass("mouseDefault");
		  } else {
			  $('#step3Link').removeClass("mousePointer");
			  $('#step3Link').addClass("mouseDefault");
		  }
	  }
	  function goStep4() {
		  if(globalLevelReached >= 4) {
			  $('#nav1Home').removeClass("active");
			  $('#nav2Data').removeClass("active");
			  $('#nav3Preview').removeClass("active");
			  $('#nav4View').addClass("active");
			  $('#step1ChooseData').hide();
			  $('#step2DataCSV').hide();
			  $('#step2DataHTML').hide();
			  $('#step3ChooseCSVVisualizations').hide();
			  $('#step3ChooseHTMLVisualizations').hide();
			  $('#step4ShowVisualizations').show();
		  }
	  }
	  function goStep5() {
		  if(globalLevelReached >= 3) {
			  $('#nav1Home').removeClass("active");
			  $('#nav2Data').removeClass("active");
			  $('#nav3Preview').removeClass("active");
			  $('#nav4View').addClass("active");
			  $('#step1ChooseData').hide();
			  $('#step2DataCSV').hide();
			  $('#step2DataHTML').hide();
			  $('#step3ChooseCSVVisualizations').hide();
			  $('#step3ChooseHTMLVisualizations').hide();
			  $('#step4ShowVisualizations').hide();
			  $('#step5ShowCarousel').show();
			  $('#showStep5').disable(true);
		  }
		  //get which visualizations are selected.  $('#' + id).is(":checked")  $('#checkbox').is(':checked');
		  var indicatorCount = 1;
		  
		  if(globalLevelReached == 3) {
			  if($('#chkStackedGrouped').is(':checked') === true){
				  if (indicatorCount == 0){
					  $( ".carousel-inner" ).append( "<div class='item active'><div id='stackedGroupedLarge'></div></div>");
				  } else {
					  $( ".carousel-inner" ).append( "<div class='item'><div id='stackedGroupedLarge'></div></div>");
				  }
				  $( ".carousel-indicators" ).append( "<li data-target='#myCarousel' data-slide-to='" + indicatorCount +"'></li>" );
				  indicatorCount++;
				  if(globalCSV == 0) {
					  var theStackedGroupedGraph = new Graph(visualization=9, size=600, jsonDataReceived=jsonData);
				  } else {
					  var theStackedGroupedGraph = new Graph(visualization=8, size=600, jsonDataReceived=theCSV3Data);
				  }
			  }
			  if($('#chkStreamGraph').is(':checked') === true){
				  if (indicatorCount == 0){
					  $( ".carousel-inner" ).append( "<div class='item active'><div id='streamgraphLarge'></div></div>" );
				  } else {
					  $( ".carousel-inner" ).append( "<div class='item'><div id='streamgraphLarge'></div></div>" );
				  }
				  $( ".carousel-indicators" ).append( "<li data-target='#myCarousel' data-slide-to='" + indicatorCount +"'></li>" );
				  indicatorCount++;
				  if(globalCSV == 0) {
					  var theStreamgraphGraph = new Graph(visualization=11, size=600, jsonDataReceived=jsonData);
				  } else {
					  var theStreamgraphGraph = new Graph(visualization=10, size=600, jsonDataReceived=theCSV3Data);
				  }
			  }
	
			  if($('#chkBoxPlot').is(':checked') === true){
				  if (indicatorCount == 0){
					  $( ".carousel-inner" ).append( "<div class='item active'><div id='boxPlotLarge'></div></div>" );
				  } else {
					  $( ".carousel-inner" ).append( "<div class='item'><div id='boxPlotLarge'></div></div>" );
				  }
				  $( ".carousel-indicators" ).append( "<li data-target='#myCarousel' data-slide-to='" + indicatorCount +"'></li>" );
				  indicatorCount++;
				  if(globalCSV == 0) {
					  var theBoxPlotGraph = new Graph(visualization=15, size=600, jsonDataReceived=jsonData);
				  } else {
					  var theBoxPlotGraph = new Graph(visualization=14, size=600, jsonDataReceived=theCSV3Data);
				  }
			  }
			  if($('#chkDotPlot').is(':checked') === true){
				  if (indicatorCount == 0){
					  $( ".carousel-inner" ).append( "<div class='item active'><div id='dotPlotLarge'></div></div>" );
				  } else {
					  $( ".carousel-inner" ).append( "<div class='item'><div id='dotPlotLarge'></div></div>" );
				  }
				  $( ".carousel-indicators" ).append( "<li data-target='#myCarousel' data-slide-to='" + indicatorCount +"'></li>" );
				  indicatorCount++;
				  if(globalCSV == 0) {
					  var theDotPlotGraph = new Graph(visualization=17, size=600, jsonDataReceived=jsonData);
				  } else {
					  var theDotPlotGraph = new Graph(visualization=16, size=600, jsonDataReceived=theCSV3Data);
				  }
			  }
			  if($('#chkSunBurst').is(':checked') === true){
				  if (indicatorCount == 0){
					  $( ".carousel-inner" ).append( "<div class='item active'><div id='sunBurstLarge'><div id='chartLarge'></div></div></div>" );
				  } else {
					  $( ".carousel-inner" ).append( "<div class='item'><div id='sunBurstLarge'><div id='chartLarge'></div></div></div>" );
				  }
				  $( ".carousel-indicators" ).append( "<li data-target='#myCarousel' data-slide-to='" + indicatorCount +"'></li>" );
				  indicatorCount++;
				  if(globalCSV == 0) {
					  var theSunBurstGraph = new Graph(visualization=13, size=600, jsonDataReceived=jsonData);
				  } else {
					  var theSunBurstGraph = new Graph(visualization=12, size=600, jsonDataReceived=theCSV3Data);
				  }
			  }
			  if($('#chkBubble').is(':checked') === true){
				  if (indicatorCount == 0){
					  $( ".carousel-inner" ).append( "<div class='item active'><div id='bubbleContainerLarge'></div></div>" );
				  } else {
					  $( ".carousel-inner" ).append( "<div class='item'><div id='bubbleContainerLarge'></div></div>" );
				  }
				  $( ".carousel-indicators" ).append( "<li data-target='#myCarousel' data-slide-to='" + indicatorCount +"'></li>" );
				  indicatorCount++;
				  if(globalCSV == 0) {
					  var theBigBubbleGraph = new Graph(visualization=1, size=600, jsonDataReceived=jsonData);
				  } else {
					  var theBigBubbleGraph = new Graph(visualization=0, size=600, jsonDataReceived=theCSVData);
				  }
			  }
			  if($('#chkDonutPie').is(':checked') === true){
				  if (indicatorCount == 0){
					  $( ".carousel-inner" ).append( "<div class='item active'><div id='donutPieLarge'></div></div>" );
				  } else {
					  $( ".carousel-inner" ).append( "<div class='item'><div id='donutPieLarge'></div></div>" );
				  }
				  $( ".carousel-indicators" ).append( "<li data-target='#myCarousel' data-slide-to='" + indicatorCount +"'></li>" );
				  indicatorCount++;
				  if(globalCSV == 0) {
					  var theBigDonutPieGraph = new Graph(visualization=5, size=600, jsonDataReceived=jsonData);
				  } else {
					  var theBigBubbleGraph = new Graph(visualization=4, size=600, jsonDataReceived=theCSVData);
				  }
			  }
			  if($('#chkTreeMap').is(':checked') === true){
				  if (indicatorCount == 0){
					  $( ".carousel-inner" ).append( "<div class='item active'><div id='treeMapLarge'></div></div>" );
				  } else {
					  $( ".carousel-inner" ).append( "<div class='item'><div id='treeMapLarge'></div></div>" );
				  }
				  $( ".carousel-indicators" ).append( "<li data-target='#myCarousel' data-slide-to='" + indicatorCount +"'></li>" );
				  indicatorCount++;
				  if(globalCSV == 0) {
					  var theBigTreeMapGraph = new Graph(visualization=3, size=600, jsonDataReceived=jsonData);
				  } else {
					  var theBigTreeMapGraph = new Graph(visualization=2, size=600, jsonDataReceived=theCSVData);
				  }
			  }
			  if($('#chkRadial0').is(':checked') === true){
				  if (indicatorCount == 0){
					  $( ".carousel-inner" ).append( "<div class='item active'><div id='radial0Large'></div></div>" );
				  } else {
					  $( ".carousel-inner" ).append( "<div class='item'><div id='radial0Large'></div></div>" );
				  }
				  $( ".carousel-indicators" ).append( "<li data-target='#myCarousel' data-slide-to='" + indicatorCount +"'></li>" );
				  indicatorCount++;
				  if(globalCSV == 0) {
					  var theRadial0Graph = new Graph(visualization=7, size=600, jsonDataReceived=jsonData);
				  } else {
					  var theRadial0Graph = new Graph(visualization=6, size=600, jsonDataReceived=theCSVData);
				  }
			  }
			  if($('#chkRadial1').is(':checked') === true){
				  if (indicatorCount == 0){
					  $( ".carousel-inner" ).append( "<div class='item active'><div id='radial1Large'></div></div>" );
				  } else {
					  $( ".carousel-inner" ).append( "<div class='item'><div id='radial1Large'></div></div>" );
				  }
				  $( ".carousel-indicators" ).append( "<li data-target='#myCarousel' data-slide-to='" + indicatorCount +"'></li>" );
				  indicatorCount++;
				  if(globalCSV == 0) {
					  var theRadial1Graph = new Graph(visualization=7, size=600, jsonDataReceived=jsonData);
				  } else {
					  var theRadial1Graph = new Graph(visualization=6, size=600, jsonDataReceived=theCSVData);
				  }
			  }
			  if($('#chkRadial2').is(':checked') === true){
				  if (indicatorCount == 0){
					  $( ".carousel-inner" ).append( "<div class='item active'><div id='radial2Large'></div></div>" );
				  } else {
					  $( ".carousel-inner" ).append( "<div class='item'><div id='radial2Large'></div></div>" );
				  }
				  $( ".carousel-indicators" ).append( "<li data-target='#myCarousel' data-slide-to='" + indicatorCount +"'></li>" );
				  indicatorCount++;
				  if(globalCSV == 0) {
					  var theRadial2Graph = new Graph(visualization=7, size=600, jsonDataReceived=jsonData);
				  } else {
					  var theRadial2Graph = new Graph(visualization=6, size=600, jsonDataReceived=theCSVData);
				  }
			  }
			  if($('#chkRadial3').is(':checked') === true){
				  if (indicatorCount == 0){
					  $( ".carousel-inner" ).append( "<div class='item active'><div id='radial3Large'></div></div>" );
				  } else {
					  $( ".carousel-inner" ).append( "<div class='item'><div id='radial3Large'></div></div>" );
				  }
				  $( ".carousel-indicators" ).append( "<li data-target='#myCarousel' data-slide-to='" + indicatorCount +"'></li>" );
				  indicatorCount++;
				  if(globalCSV == 0) {
					  var theRadial3Graph = new Graph(visualization=7, size=600, jsonDataReceived=jsonData);
				  } else {
					  var theRadial3Graph = new Graph(visualization=6, size=600, jsonDataReceived=theCSVData);
				  }
			  }
			  if($('#chkRadial4').is(':checked') === true){
				  if (indicatorCount == 0){
					  $( ".carousel-inner" ).append( "<div class='item active'><div id='radial4Large'></div></div>" );
				  } else {
					  $( ".carousel-inner" ).append( "<div class='item'><div id='radial4Large'></div></div>" );
				  }
				  $( ".carousel-indicators" ).append( "<li data-target='#myCarousel' data-slide-to='" + indicatorCount +"'></li>" );
				  indicatorCount++;
				  if(globalCSV == 0) {
					  var theRadial4Graph = new Graph(visualization=7, size=600, jsonDataReceived=jsonData);
				  } else {
					  var theRadial4Graph = new Graph(visualization=6, size=600, jsonDataReceived=theCSVData);
				  }
			  }
			  if($('#chkRadial5').is(':checked') === true){
				  if (indicatorCount == 0){
					  $( ".carousel-inner" ).append( "<div class='item active'><div id='radial5Large'></div></div>" );
				  } else {
					  $( ".carousel-inner" ).append( "<div class='item'><div id='radial5Large'></div></div>" );
				  }
				  $( ".carousel-indicators" ).append( "<li data-target='#myCarousel' data-slide-to='" + indicatorCount +"'></li>" );
				  indicatorCount++;
				  if(globalCSV == 0) {
					  var theRadial5Graph = new Graph(visualization=7, size=600, jsonDataReceived=jsonData);
				  } else {
					  var theRadial5Graph = new Graph(visualization=6, size=600, jsonDataReceived=theCSVData);
				  }
			  }
	  		  globalLevelReached = 4;

		  }
}

	  function step4MouseOver(){
		  if(globalLevelReached >= 4) {
			  $('#step4Link').addClass("mousePointer");
			  $('#step4Link').removeClass("mouseDefault");
		  } else {
			  $('#step4Link').removeClass("mousePointer");
			  $('#step4Link').addClass("mouseDefault");
		  }
	  }	  
      function showCSV() {
		  $('#step1ChooseData').hide();
          $('#nav1Home').removeClass("active");
		  $('#nav2Data').addClass("active");		  
		  $('#nav3Preview').removeClass("active");
		  $('#nav4View').removeClass("active");
		  $('#step2DataCSV').show();
		  $('#step2DataHTML').hide();
     	  globalCSV = 1;
		  if(globalLevelReached < 2) {
            globalLevelReached = 2
		  }
		  
	  }
	  function showHTML() {
		  $('#step1ChooseData').hide();
          $('#nav1Home').removeClass("active");
		  $('#nav2Data').addClass("active");
		  $('#nav3Preview').removeClass("active");
		  $('#nav4View').removeClass("active");
		  
		  globalCSV = 0;
		  console.log('show data HTML');
		  $('#step2DataHTML').show();
		  initiateDatabase();
		  if(globalLevelReached < 2) {
            globalLevelReached = 2
		  }
	  }
	  function showStep1ChooseData() {
		  $('#step1ChooseData').show();
		  $('#step2DataCSV').hide();
		  $('#step2DataHTML').hide();
	  }
	  var theCSVData;
	  function viewCSVVisualizationList() {
		  globalTwoOrThree = 2;
          $('#nav1Home').removeClass("active");
		  $('#nav2Data').removeClass("active");
		  $('#nav3Preview').addClass("active");
		  
		  $('#step2DataCSV').hide();
		  $('#step3ChooseCSVVisualizations').show();
  		  $('#csvVisualizations3').hide();
		  console.log('csvData');
		  d3.csv("Bubble.csv", function(error, data){
		    console.log(data);
			console.log(data.length);
			var count = 0;
			for (var k in data[0]) {
				if (data[0].hasOwnProperty(k)) {
				   ++count;
				}
			}
			console.log(count);
			console.log(data[0]);
			$('#csvColumnsRows').text('CSV File has ' + count + ' columns and ' + data.length + ' rows.');
			if(count == 2){
			  // show the list of 2-column visualizations.
			  $('csvVisualizations2').show();
			}
			// pass data to global variable for use in later function
			theCSVData = data;
			// add step 4 code here - csv - 2 column
			
				
			  $('#step2DataCSV').hide();
			  $('#step3ChooseCSVVisualizations').hide();
			  $('#step4ShowVisualizations').show();
			  $('#showCSV3Visualizations').hide();
			  $('#showCSVVisualizations').hide();
			  $('#showHTML3Visualizations').hide();
			  $('#showHTMLVisualizations').disable(true);
			  $('#viewCSV3Visualizations').disable(true);
			  
	
			  $('#stackedGroupedContainer').hide();
			  $('#streamGraphContainer').hide();
			  $('#boxPlotContainer').hide();
			  $('#dotPlotContainer').hide();
			  $('#sunBurstContainer').hide();
			  
			  console.log('here');
			  var thisGraph = new Graph(visualization=0, size=200, jsonDataReceived=jsonData);
			  var thisGraph2 = new Graph(visualization=4, size=200, jsonDataReceived=jsonData);
			  console.log(theCSVData);
			  var thisGraph4 = new Graph(visualization=2, size=200, jsonDataReceived=theCSVData);
			  var thisGraph3 = new Graph(visualization=6, size=200, jsonDataReceived=theCSVData);
			
			
			
			
			
		  });
		  if(globalLevelReached < 3) {
            globalLevelReached = 3
		  }
	  }
	  function viewHTMLVisualizationList() {
		  globalTwoOrThree = 2;
          $('#nav1Home').removeClass("active");
		  $('#nav2Data').removeClass("active");
		  $('#nav3Preview').addClass("active");
		  $('#step2DataHTML').hide();
		  $('#step3ChooseHTMLVisualizations').show();
  		  $('#htmlVisualizations3').hide();
		  console.log('csvData');
		  d3.csv("Bubble.csv", function(error, data){
		    console.log(data);
			console.log(data.length);
			var count = 0;
			for (var k in data[0]) {
				if (data[0].hasOwnProperty(k)) {
				   ++count;
				}
			}
			console.log(count);
			console.log(data[0]);
			$('#csvColumnsRows').text('CSV File has ' + count + 'columns and ' + data.length + ' rows.');
			if(count == 2){
			  // show the list of 2-column visualizations.
			  $('csvVisualizations2').show();
			}
			// pass data to global variable for use in later function
			theCSVData = data;
		  });
		  // need jsonData - html - 2
		  $('#step2DataCSV').hide();
          $('#step3ChooseHTMLVisualizations').hide();
		  $('#step4ShowVisualizations').show();	
          
		  $('#showCSV3Visualizations').hide();
		  $('#showCSVVisualizations').hide();
		  $('#showHTMLVisualizations').hide();
		  $('#showHTML3Visualizations').hide();
		  $('#showHTMLVisualizations').disable(true);
		  $('#viewHTML3Visualizations').disable(true);
		  
		  $('#stackedGroupedContainer').hide();
          $('#streamGraphContainer').hide();
          $('#boxPlotContainer').hide();
		  $('#dotPlotContainer').hide();
          $('#sunBurstContainer').hide();
		  
	  	  var jsonSession = JSON.stringify(session);
		  console.log(jsonSession);
	
		  console.log(jsonData);
	  	  var thisNewGraph = new Graph(visualization=1, size=200, jsonDataReceived=jsonData);
		  //console.log('fire a tree too');
	  	  var thisNewGraph = new Graph(visualization=5, size=200, jsonDataReceived=jsonData);
		  //console.log(clusteredData);
		  var thisNewGraph3 = new Graph(visualization=3, size=200, jsonDataReceived=jsonData);
		  var thisNewGraph3 = new Graph(visualization=7, size=200, jsonDataReceived=jsonData);
		  //var thisNewGraph4 = new Graph(visualization=9, size=200, jsonDataReceived=jsonSession);



		  if(globalLevelReached < 3) {
            globalLevelReached = 3
		  }
		  
	  }

	  function viewCSV3VisualizationsList() {
		  if(globalLevelReached < 3) {
            globalLevelReached = 3
		  }
		  globalTwoOrThree = 3;
          $('#nav1Home').removeClass("active");
		  $('#nav2Data').removeClass("active");
		  $('#nav3Preview').addClass("active");
		  $('#step2DataCSV').hide();
		  $('#step3ChooseCSVVisualizations').show();
		  $('#csvVisualizations2').hide();
		  console.log('csvData');
		  d3.csv("Bubble3.csv?" + Math.random(), function(error, data){
		    console.log(data);
			console.log(data.length);
			var count = 0;
			for (var k in data[0]) {
				if (data[0].hasOwnProperty(k)) {
				   ++count;
				}
			}
			console.log(count);
			console.log(data[0]);
			$('#csvColumnsRows').text('CSV File has ' + count + 'columns and ' + data.length + ' rows.');
			if(count == 2){
			  // show the list of 2-column visualizations.
			  $('csvVisualizations2').show();
			}
			// pass data to global variable for use in later function
			theCSV3Data = data;
			
			// add step 4 code here - csv - 3 column
			  $('#step2DataCSV').hide();
			  $('#step3ChooseCSVVisualizations').hide();
			  $('#step4ShowVisualizations').show();
			  $('#showCSV3Visualizations').hide();
			  $('#showCSVVisualizations').hide();
			  $('#showHTMLVisualizations').hide();
			  $('#showHTML3Visualizations').hide();
			  $('#viewCSVVisualizations').disable(true);
			  
			  $('#bubbleContainer').hide();
			  $('#donutPie').hide();
			  $('#allVisualizations').hide();
			  
			  
			  console.log('here csv 3');
			  
			  console.log(theCSVData);
			  console.log(theCSV3Data);
			  
			  var thisGraph4 = new Graph(visualization=8, size=200, jsonDataReceived=theCSV3Data);
			  var thisGraph5 = new Graph(visualization=10, size=200, jsonDataReceived=theCSV3Data);
			  var thisGraph6 = new Graph(visualization=12, size=200, jsonDataReceived=theCSV3Data);
			  var thisGraph7 = new Graph(visualization=14, size=200, jsonDataReceived=theCSV3Data);
			  var thisGraph8 = new Graph(visualization=16, size=200, jsonDataReceived=theCSV3Data);
						
		  });
		  
	  }
	  
      function viewHTML3VisualizationList() {
		  if(globalLevelReached < 3) {
            globalLevelReached = 3
		  }
		  globalTwoOrThree = 3;
          $('#nav1Home').removeClass("active");
		  $('#nav2Data').removeClass("active");
		  $('#nav3Preview').addClass("active");
		  $('#step2DataHTML').hide();
		  $('#step3ChooseHTMLVisualizations').show();
  		  $('#htmlVisualizations2').hide();
		  // need jsonData - html - 3
		  $('#step2DataCSV').hide();
          $('#step3ChooseHTMLVisualizations').hide();
		  $('#step4ShowVisualizations').show();
		  $('#showCSV3Visualizations').hide();
		  $('#showCSVVisualizations').hide();
		  $('#showHTMLVisualizations').hide();
		  $('#showHTML3Visualizations').disable(true);
		  $('#viewHTMLVisualizations').disable(true);
		  

          $('#bubbleContainer').hide();
		  $('#donutPie').hide();
		  $('#div0').hide();
		  $('#allVisualizations').hide();
		  
		  console.log('here html 3');
  	  	  
		  console.log(jsonData);
  	  	  
  	  	  var thisGraph4 = new Graph(visualization=9, size=200, jsonDataReceived=jsonData);
  	  	  var thisGraph5 = new Graph(visualization=11, size=200, jsonDataReceived=jsonData);
  	  	  var thisGraph6 = new Graph(visualization=13, size=200, jsonDataReceived=jsonData);
  	  	  var thisGraph7 = new Graph(visualization=15, size=200, jsonDataReceived=jsonData);
  	  	  var thisGraph8 = new Graph(visualization=17, size=200, jsonDataReceived=jsonData);
		  
	  }

	  // FILE UPLOAD
	  var drop;
	  databox = document.getElementById('dropCSVFile');
      drop = document.getElementById('dropCSVFile');
	  selectCSVFile = document.getElementById('selectCSVFile');
	  selectCSVFile.addEventListener('change', dropped);
      drop.addEventListener('dragenter',function(e){e.preventDefault();});
      drop.addEventListener('dragover',function(e){e.preventDefault();});
      drop.addEventListener('drop',dropped);
      function dropped(e){
        e.preventDefault();
		if(e.dataTransfer !== undefined){
    	    var files = e.dataTransfer.files;
		} else {
	        var files = e.target.files;	
		}
		if(files.length){
			var list = '';
			for(var f = 0; f < files.length; f++) {
				var file = files[f];
				list += '<div>File: ' + file.name;
				list += '<br><span><progress value="0" max="100">0%</progress></span>';
				list += '</div>';
			}
			databox.innerHTML = list;
			var count = 0;
			var upload = function(){
				var myfile = files[count];
				var data = new FormData();
				data.append('file',myfile);
				var url = "CSV-upload.cfm";
				var request = new XMLHttpRequest();
				var xmlupload = request.upload;
				
				xmlupload.addEventListener('progress',function(e){
					if(e.lengthComputable){
						var child = count + 1;
						var per = parseInt(e.loaded / e.total * 100);
						var progressbar = databox.querySelector("div:nth-child(" + child + ") > span > progress");
						progressbar.value = per;
						progressbar.innerHTML = per + '%';
					}
				});
				request.addEventListener('load',function(){
					var child = count + 1;
					var elem = databox.querySelector("div:nth-child(" + child + ") > span");
					elem.innerHTML = '<strong>Done! File uploaded successfully.</strong>';
					count++;
					if(count < files.length) {
						upload();
					}
				});
				request.open("POST",url,true);
				request.send(data);
			}
			upload();
		}
      }
      //MANUAL INPUT
	  var chooseTwoOrThree = document.getElementById("chooseTwoOrThree");
	  chooseTwoOrThree.addEventListener("change", showHideColumn3, false);
	  var addRow = document.getElementById("addRow");
	  
	  $('#clientDataTable').on('click', '.deleteRow', function(e) {
        var theKeyword = e.target.getAttribute("data-id");
		if(confirm('Are you sure?')) {
			var deleteTransaction = db.transaction(['sampleItems'], "readwrite");
			var itemStore = deleteTransaction.objectStore('sampleItems');
		    var request = itemStore.delete(theKeyword);
			$('tr[row-id="' + theKeyword + '"]').hide();
			//$("tr[RowID='" + rowID + "']").show();
		}
      });
	  $('#deleteRows').click(function(){
		console.log('delete all rows');
		if(confirm('Are you sure?')) {
          var myTransaction = db.transaction(['sampleItems'], "readwrite");
		  var myStore = myTransaction.objectStore('sampleItems');
		  var newCursor = myStore.openCursor();
		  newCursor.addEventListener('success', deletelist);
		  function deletelist(){
			var cursor = newCursor.result;
		  	if(cursor) {
			  cursor.delete();
			  console.log('deleted');
			  cursor.continue();
			  console.log('deleted');
			}
		  }
		  $('#clientDataTable tbody tr').hide();
			//$("tr[RowID='" + rowID + "']").show();
		}
	  });
	  addRow.addEventListener("click", addTableRow, false);
	  /*
	  var rowList = document.querySelectorAll(".deleteRow");
	    for (var f=0; f < rowList.length; f++){
		  rowList[f].addEventListener('click',deleteTheRow);
	  } */
	  
	  function deleteTheRow(e){
		  console.log('delete');
	  }
	  function showHideColumn3(e) {

		  console.log(e.target.value);
		  if(e.target.value == 3) {
			  $('.column3').show();
		  } else {
			  $('.column3').hide();
		  }
	  }

      // DATABASE
	  var db;
	  var databaseData = document.getElementById("databaseData");
	  
	  function initiateDatabase() {
		  var request = indexedDB.open('visualizationData', 2);
		  request.addEventListener('error', showDatabaseError, false);
		  request.addEventListener('success', startApp, false);
		  request.addEventListener('upgradeneeded', createDatabase, false);
		  request.onblocked = function() {
            console.log("Your database version can't be upgraded because the app is open somewhere else.");
          }
	  }
	  function showDatabaseError(e) {
		  console.log('Error: ' + e.code) + ' ' + e.message;
	  }
	  function startApp(e) {
		  db = e.target.result;
		  show();
		  console.log(db.objectStoreNames);
		  //return true
		  console.log('database started: db');
	  }
	  function createDatabase(e){
		  var database = e.target.result;
		  console.log('seems ok = create database: ' + database)
		  var visualizationData = database.createObjectStore('sampleItems', {keyPath: 'itemid'});
		  visualizationData.createIndex('SortByValue','itemValue1', {unique: false});
	  }

	  function addTableRow() {
		  var itemid = document.getElementById("itemid").value;
		  var itemValue1 = document.getElementById("itemValue1").value;
		  var itemValue2 = document.getElementById("itemValue2").value;
		  console.log('seems ok = add table row. reference database db: ' + db)
		  var insertTransaction = db.transaction(['sampleItems'], "readwrite");
		  var itemStore = insertTransaction.objectStore('sampleItems');
		  var request = itemStore.add({itemid: itemid, itemValue1: itemValue1, itemValue2: itemValue2});
		  request.addEventListener("success", show);
		  document.getElementById("itemid").value = '';
		  document.getElementById("itemValue1").value = '';
		  document.getElementById("itemValue2").value = '';

	  }
	  function show() {
		  databaseData.innerHTML = '';
		  var myTransaction = db.transaction(['sampleItems']);
		  var myStore = myTransaction.objectStore('sampleItems');
		  var newCursor = myStore.openCursor();
		  newCursor.addEventListener('success', showlist);
	  }
	  var i = 0;
	  var jsonData = [];
	  var session = {
	    'screens': []
	  };
	  //var clusteredData= [];
	  var item;

	  function showlist(e) {
		  var cursor = e.target.result;
		  if(cursor){
		    databaseData.innerHTML += '<tr row-id="' + cursor.value.itemid + '"><td>' + cursor.value.itemid + '</td><td>' + cursor.value.itemValue1 + '</td><td class="column3">' + cursor.value.itemValue2 + '</td><td><input type="submit" id="deleteRow" value="Delete Row" data-id="' + cursor.value.itemid + '" class="btn btn-danger deleteRow"></td></tr>';
			item = {'name' : cursor.value.itemid, 'value' : cursor.value.itemValue1, 'value2' : cursor.value.itemValue2 };
            jsonData.push(item);
			//console.log('name'+ cursor.value.itemid + 'value' + cursor.value.itemValue1 + 'value2' + cursor.value.itemValue2);
			session.screens.push({ 'name': cursor.value.itemid, 'value': cursor.value.itemValue1, 'value2': cursor.value.itemValue2 });
			//clusteredData.graphData.push(item);
				if($.isNumeric(cursor.value.itemValue2)) {
					console.log('it is a number');
					$('#chooseTwoOrThree').val(3);
					$('.column3').show();
				} else {
					console.log('not a number');
					$('.column3').hide();
				}
			i++;
            
			cursor.continue();
		  }
		  if(i > 3){
			$('#step3chooseVisualizations').show();
		  }
	  }
	
	
	  var showHTMLVisualizations = document.getElementById("showHTMLVisualizations");
	  showHTMLVisualizations.addEventListener("click", showHTMLD3Visualizations, false);
	  var showHTML3Visualizations = document.getElementById("showHTML3Visualizations");
	  showHTML3Visualizations.addEventListener("click", showHTML3D3Visualizations, false);
	  var showCSVVisualizations = document.getElementById("showCSVVisualizations");
	  showCSVVisualizations.addEventListener("click", showCSVD3Visualizations, false);
	  var showCSV3Visualizations = document.getElementById("showCSV3Visualizations");
	  showCSV3Visualizations.addEventListener("click", showCSV3D3Visualizations, false);

      // Disable function
      jQuery.fn.extend({
        disable: function(state) {
          return this.each(function() {
            this.disabled = state;
          });
        }
      });

      function showHTMLD3Visualizations() {
		  $('#nav1Home').removeClass("active");
		  $('#nav2Data').removeClass("active");
		  $('#nav3Preview').removeClass("active");
		  $('#nav4View').addClass("active");
          // copy from here to step 3
		  $('#step2DataCSV').hide();
          $('#step3ChooseHTMLVisualizations').hide();
		  $('#step4ShowVisualizations').show();	
          $('#stackedGroupedContainer').hide();
		  $('#showCSV3Visualizations').hide();
		  $('#showCSVVisualizations').hide();
		  $('#showHTMLVisualizations').hide();
		  $('#showHTML3Visualizations').hide();
		  $('#showHTMLVisualizations').disable(true);
		  $('#viewHTML3Visualizations').disable(true);
		  
		  
          $('#streamGraphContainer').hide();
          $('#boxPlotContainer').hide();
		  $('#dotPlotContainer').hide();
          $('#sunBurstContainer').hide();
		  
	  	  var jsonSession = JSON.stringify(session);
		  console.log(jsonSession);
	
		  console.log(jsonData);
	  	  var thisNewGraph = new Graph(visualization=1, size=200, jsonDataReceived=jsonData);
		  //console.log('fire a tree too');
	  	  var thisNewGraph = new Graph(visualization=5, size=200, jsonDataReceived=jsonData);
		  //console.log(clusteredData);
		  var thisNewGraph3 = new Graph(visualization=3, size=200, jsonDataReceived=jsonData);
		  var thisNewGraph3 = new Graph(visualization=7, size=200, jsonDataReceived=jsonData);
		  //var thisNewGraph4 = new Graph(visualization=9, size=200, jsonDataReceived=jsonSession);
	  }
	  function showHTML3D3Visualizations() {
		  $('#nav1Home').removeClass("active");
		  $('#nav2Data').removeClass("active");
		  $('#nav3Preview').removeClass("active");
		  $('#nav4View').addClass("active");
		  
		  // COPY FROM HERE TO STEP 3.
		  $('#step2DataCSV').hide();
          $('#step3ChooseHTMLVisualizations').hide();
		  $('#step4ShowVisualizations').show();
		  $('#showCSV3Visualizations').hide();
		  $('#showCSVVisualizations').hide();
		  $('#showHTMLVisualizations').hide();
		  $('#showHTML3Visualizations').disable(true);
		  $('#viewHTMLVisualizations').disable(true);
		  
		  

          $('#bubbleContainer').hide();
		  $('#donutPie').hide();
		  $('#div0').hide();
		  $('#allVisualizations').hide();
		  
		  console.log('here html 3');
  	  	  
		  console.log(jsonData);
  	  	  
  	  	  var thisGraph4 = new Graph(visualization=9, size=200, jsonDataReceived=jsonData);
  	  	  var thisGraph5 = new Graph(visualization=11, size=200, jsonDataReceived=jsonData);
  	  	  var thisGraph6 = new Graph(visualization=13, size=200, jsonDataReceived=jsonData);
  	  	  var thisGraph7 = new Graph(visualization=15, size=200, jsonDataReceived=jsonData);
  	  	  var thisGraph8 = new Graph(visualization=17, size=200, jsonDataReceived=jsonData);
	  }
	  function showCSVD3Visualizations() {
		  $('#nav1Home').removeClass("active");
		  $('#nav2Data').removeClass("active");
		  $('#nav3Preview').removeClass("active");
		  $('#nav4View').addClass("active");
		  // copied from here.
		  $('#step2DataCSV').hide();
	  	  $('#step3ChooseCSVVisualizations').hide();
		  $('#step4ShowVisualizations').show();
		  $('#showCSV3Visualizations').hide();
		  $('#showCSVVisualizations').hide();
		  $('#showHTML3Visualizations').hide();
		  $('#showHTMLVisualizations').disable(true);
		  $('#viewCSV3Visualizations').disable(true);
		  

          $('#stackedGroupedContainer').hide();
		  $('#streamGraphContainer').hide();
		  $('#boxPlotContainer').hide();
  		  $('#dotPlotContainer').hide();
		  $('#sunBurstContainer').hide();
		  
		  console.log('here');
  	  	  var thisGraph = new Graph(visualization=0, size=200, jsonDataReceived=jsonData);
  	  	  var thisGraph2 = new Graph(visualization=4, size=200, jsonDataReceived=jsonData);
		  console.log(theCSVData);
  	  	  var thisGraph4 = new Graph(visualization=2, size=200, jsonDataReceived=theCSVData);
  	  	  var thisGraph3 = new Graph(visualization=6, size=200, jsonDataReceived=theCSVData);
	  }
	  function showCSV3D3Visualizations() {
		  $('#nav1Home').removeClass("active");
		  $('#nav2Data').removeClass("active");
		  $('#nav3Preview').removeClass("active");
		  $('#nav4View').addClass("active");
		  // copied from here.
		  $('#step2DataCSV').hide();
	  	  $('#step3ChooseCSVVisualizations').hide();
		  $('#step4ShowVisualizations').show();
		  $('#showCSV3Visualizations').hide();
		  $('#showCSVVisualizations').hide();
		  $('#showHTMLVisualizations').hide();
		  $('#showHTML3Visualizations').hide();
		  $('#viewCSVVisualizations').disable(true);
		  
		  $('#bubbleContainer').hide();
		  $('#donutPie').hide();
		  $('#allVisualizations').hide();
		  
		  
		  console.log('here csv 3');
  	  	  
		  console.log(theCSVData);
  	  	  
  	  	  var thisGraph4 = new Graph(visualization=8, size=200, jsonDataReceived=theCSV3Data);
  	  	  var thisGraph5 = new Graph(visualization=10, size=200, jsonDataReceived=theCSV3Data);
  	  	  var thisGraph6 = new Graph(visualization=12, size=200, jsonDataReceived=theCSV3Data);
  	  	  var thisGraph7 = new Graph(visualization=14, size=200, jsonDataReceived=theCSV3Data);
  	  	  var thisGraph8 = new Graph(visualization=16, size=200, jsonDataReceived=theCSV3Data);
	  }
