
function donutShop(loc, minCPH, maxCPH, Avg, AvgHrPerDay) {
	this.loc = loc;
	this.minCPH = minCPH;
	this.maxCPH = maxCPH;
	this.Avg = Avg;
	this.AvgHrPerDay = AvgHrPerDay

}
var Downtown = new donutShop('Downtown', 8, 43, 4.5, 12.714);
var capitalHill = new donutShop ('Capital Hill', 4, 37, 2.00, 14.714);
var sLakeUnion = new donutShop ('South Lake Union', 9, 23, 6.33, 11);
var Wedgewood = new donutShop ('Wedgewood', 2, 28, 1.25, 11.714);
var Ballard = new donutShop ('Ballard', 8, 58, 3.75, 11.714);

    var table = document.createElement('table');
   var tableRow = document.createElement('tr');
   var tableDataOne = document.createElement('td');
   var tableDataTwo = document.createElement('td');
   var tableDataThree = document.createElement('td');
   var tableDataFour = document.createElement('td');
   var tableDataFive = document.createElement('td');
   
   var Downtown = {
       loc: 'Downtown',
       minCPH: 8,
       maxCPH: 43,
       Avg: 4.5,
       AvgHrPerDay: 12.714
   };

   var capitalHill = {
       loc: 'capitalHill',
       minCPH: 4,
       maxCPH: 37,
       Avg: 2.00,
       AvgHrPerDay: 14.714
   };

   var sLakeUnion = {
   		loc: 'sLakeUnion',
   		minCPH: 9,
   		maxCPH: 23,
   		Avg: 6.33,
   		AvgHrPerDay: 11
   };

   var Wedgewood = {
   		loc: 'Wedgewood',
   		minCPH: 2, 
   		maxCPH: 28,
   		Avg: 1.25,
   		AvgHrPerDay: 11.714
   	};

   	var Ballard = {
   		loc: 'Ballard',
   		minCPH: 8, 
   		maxCPH: 58,
   		Avg: 3.75,
   		AvgHrPerDay: 11.714
   	};
   
   var shops = [Downtown, capitalHill, sLakeUnion, Wedgewood, Ballard];

   var shopTable = document.createElement('table');
   shops.forEach(function(donut) {
     var row = document.createElement('tr');
     var td1 = document.createElement('td');
     var td2 = document.createElement('td');
     var td3 = document.createElement('td');
     var td4 = document.createElement('td');
     var td5 = document.createElement('td');

     td1.textContent = donut.loc;
     td2.textContent = donut.minCPH;
     td3.textContent = donut.maxCPH;
     td4.textContent = donut.Avg; 
     td5.textContent = donut.AvgHrPerDay;

     row.appendChild(td1);
     row.appendChild(td2);
 	   row.appendChild(td3);
     row.appendChild(td4);
     row.appendChild(td5);

     shopTable.appendChild(row);
   });

   document.body.appendChild(shopTable);

// = ['Downtown', 'Capital Hill', 'South Lake Union', 'Wedgewood', 'Ballard'];
// var 
