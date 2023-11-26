$(function() {
    "use strict";

   
    // chart 2

		var ctx = document.getElementById("chart2").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ["Teachers", "Students", "Paid Students", "Free students"],
					datasets: [{
						backgroundColor: [
							"#ffffff",
							"#7934F3",
							"#FF8800",
							"#F43643"
						],
						data: [140,750,240,510],
						borderWidth: [0, 0, 0, 0]
					}]
				},
			options: {
				maintainAspectRatio: false,
			   legend: {
				 position :"bottom",	
				 display: false,
				    labels: {
					  fontColor: '#ddd',  
					  boxWidth:15
				   }
				}
				,
				tooltips: {
				  displayColors:false
				}
			   }
			});
		

		
		
   });	 
 


   // HTML dosyasındaki input ve img elementlerine referans alın
