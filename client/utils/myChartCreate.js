angular.module("myChartCreate")
	.factory('createObjectChartJs', function () {

		function crateChartJs(data,title,value,chart){
			console.log(value);

			var config = {
				type: 'bar',
				data: {
					datasets: [{
					data: [
					value.positionOne,
					value.positionTwo,
					value.positionThree,
					value.positionFour,
					value.positionFive,
				],
				backgroundColor: [
					"#FF7965",
					"#50ADF5",
					"#6FB07F",
					"#6877e5",
					"#FFCB45",
				],
					label: 'Expenditures'
				}],
				labels: [
					data[0].name,
					data[1].name,
					data[2].name,
					data[3].name,
					data[4].name
					]
				},
				options: {
					scales : {
						xAxes : [ {
							gridLines : {
								display : false
							}
						}],
						yAxes : [ {
							gridLines : {
								display : false
							}
						}]
					},
					responsive: true,
					legend: {
					position: 'bottom'
				},
				title: {
					display: false,
					text: title
				},
				animation: {
					animateScale: true,
					animateRotate: true
				},
				tooltips: {
					callbacks: {
						label: function(tooltipItem, data) {

								var dataset = data.datasets[tooltipItem.datasetIndex];
								var label = data.labels[tooltipItem.index];

								var currentValue = dataset.data[tooltipItem.index];

								return currentValue + "%";
							}
						}
					}
				}
			};

		var ctx = document.getElementById(chart).getContext("2d");
		window.myDoughnut = new Chart(ctx, config); {}

		}

		function positionProvince(data){
			var obj = {
				positionOne :  data[0].num,
				positionTwo :  data[1].num,
				positionThree: data[2].num,
				positionFour : data[3].num,
				positionFive : data[4].num
			};

			return obj;
		}

		function  orderDescendingData(ranking){

			var rankingOrder = ranking.sort(function(obj1,obj2){

						for(var property in obj1) {
							prop1=property;
						}
						for(property in obj2) {
							prop2=property;
						}
						return obj2[prop2]-obj1[prop1];
					});

				return rankingOrder;
		}

		function getFirsFivePosition(firstFivePos,ranking){

			var total = ranking[0].num+ranking[1].num+ranking[2].num+ranking[3].num+ranking[4].num;

			firstFivePos.positionOne = tantPercent(ranking[0].num,total);
			firstFivePos.positionTwo = tantPercent(ranking[1].num,total);
			firstFivePos.positionThree = tantPercent(ranking[2].num,total);
			firstFivePos.positionFour = tantPercent(ranking[3].num,total);
			firstFivePos.positionFive = tantPercent(ranking[4].num,total);

		}

		function tantPercent(num,total){
				var perCent = ((num/total)*100).toFixed(2);
				return perCent;
		}

		return{
			crateChartJs : crateChartJs,
			positionProvince : positionProvince,
			orderDescendingData : orderDescendingData,
			getFirsFivePosition : getFirsFivePosition
		};
});