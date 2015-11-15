
function donutShop(loc, minCPH, maxCPH, Avg) {
	this.loc = loc;
	this.minCPH = minCPH;
	this.maxCPH = maxCPH;
	this.Avg = Avg;

  this.randomCust = function() {
    return Math.floor(Math.random() * (this.maxCPH - this.minCPH) + this.minCPH);
  }
  hourlyRandom = [];
  this.AverageDonutsPerHour = function() {
     for (i=0; i<11; i++) 
      return this.Avg * this.randomCust(i);
    hourlyRandom.push(this.AverageDonutsPerHour);

  console.log(hourlyRandom);
  }
}

  var Downtown = new donutShop('Downtown', 8, 43, 4.5);
  var capitalHill = new donutShop ('Capital Hill', 4, 37, 2.00);
  var sLakeUnion = new donutShop ('South Lake Union', 9, 23, 6.33);
  var Wedgewood = new donutShop ('Wedgewood', 2, 28, 1.25);
  var Ballard = new donutShop ('Ballard', 8, 58, 3.75);


   var table = document.createElement('table');
   var tableRow = document.createElement('tr');
   var tableDataOne = document.createElement('td');
   var tableDataTwo = document.createElement('td');
   var tableDataThree = document.createElement('td');
   var tableDataFour = document.createElement('td');
   var tableDataFive = document.createElement('td');
   
   // var Downtown = {
   //     loc: 'Downtown',
   //     minCPH: 8,
   //     maxCPH: 43,
   //     Avg: 4.5,
   // };

   // var capitalHill = {
   //     loc: 'Capital Hill',
   //     minCPH: 4,
   //     maxCPH: 37,
   //     Avg: 2.00,
   // };

   // var sLakeUnion = {
   // 		loc: 'South Lake Union',
   // 		minCPH: 9,
   // 		maxCPH: 23,
   // 		Avg: 6.33,
   // };

   // var Wedgewood = {
   // 		loc: 'Wedgewood',
   // 		minCPH: 2, 
   // 		maxCPH: 28,
   // 		Avg: 1.25,
   // 	};

   // 	var Ballard = {
   // 		loc: 'Ballard',
   // 		minCPH: 8, 
   // 		maxCPH: 58,
   // 		Avg: 3.75,
   // 	};
   
   var shops = [Downtown, capitalHill, sLakeUnion, Wedgewood, Ballard];

   var shopTable = document.createElement('table');
   shops.forEach(function(donut) {
     var row = document.createElement('tr');
     var td1 = document.createElement('td');
     var td2 = document.createElement('td');
     var td3 = document.createElement('td');
     var td4 = document.createElement('td');
     var td5 = document.createElement('td');
     var td6 = document.createElement('td');
     var td7 = document.createElement('td');
     var randomCust = donut.randomCust();
     var AverageDonutsPerHour = donut.AverageDonutsPerHour();
      console.log(randomCust);

     td1.textContent = donut.loc;
     td2.textContent = donut.minCPH;
     td3.textContent = donut.maxCPH;
     td4.textContent = donut.Avg; 
     td5.textContent = randomCust;
     td6.textContent = AverageDonutsPerHour;
     td7.textContent = totalDonutsPerday;

     row.appendChild(td1);
     row.appendChild(td2);
 	   row.appendChild(td3);
     row.appendChild(td4);
     row.appendChild(td5);
     row.appendChild(td6);
     row.appendChild(td7);


     shopTable.appendChild(row);
   });

   document.body.appendChild(shopTable);

// = ['Downtown', 'Capital Hill', 'South Lake Union', 'Wedgewood', 'Ballard'];
// var 
