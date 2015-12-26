
function shop(location,minCustomersPerHour, maxCustomersPerHour, avgDonutsPerCustomer) {
 this.location = location;
 this.minCustomersPerHour = minCustomersPerHour;
 this.maxCustomersPerHour = maxCustomersPerHour;
 this.avgDonutsPerCustomer = avgDonutsPerCustomer;
 this.getRandomCustomer= function() {
   return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour;
 };

 this.hourlyDonuts = [];
 this.dailyDonuts =[];

 this.getAvgDonutSellForHourly = function(){
   for (var i = 0; i < 13; i++) {
     var hourly = Math.round(this.avgDonutsPerCustomer * this.getRandomCustomer());
     this.hourlyDonuts.push(hourly);
  }
};

 this.getDonutsPerDay = function() {
    var sum =0;
    for (var i=0; i<this.hourlyDonuts.length; i++) {
       sum +=this.hourlyDonuts[i];
    }
    this.dailyDonuts.push(sum);
 };
   this.getTableRow = function() {
     var tr = "<tr>";
     console.log(tr);
     tr += '<td>' + this.location + '</td>'
     this.hourlyDonuts.forEach(function(nDonut) {
         tr += "<td>" + nDonut + "</td>";
         console.log(tr);
     });
     tr += "<td>" + this.dailyDonuts[0] + "</td>";
     tr += "</tr>";
     console.log(tr);
     return tr;
 };


};

var downTown = new shop("Downtown",8,43,4.50);

var capitolHill = new shop("Capitol Hill",4,37,2.00);
var southLakeUnion = new shop("Sounth Lake Union", 9,23,6,33);
var wedgeWood = new shop("Wedgewood",2,28,1.25);
var ballard = new shop("Ballard",8,5,3.75);
var shops = [downTown, capitolHill, southLakeUnion, wedgeWood, ballard];

// var nextShop = new shop('loc', 'min', 'max', 'avg');

// var loc = document.getElementById('loc').value;
// var min = document.getElementById('min').value;
// var max = document.getElementById('max').value;
// var avg = document.getElementById('avg').value;
// shop.push(Shop);



var table = "<table>  <tr>  <th>Location</th>  <th>8 AM</th>  <th>9 AM</th>  " +
"<th>10 AM</th>  <th>11 AM</th>  <th>12 PM</th>  <th>1 PM</th><th>2 PM</th> "+
"  <th>3 PM</th>  <th>4 PM</th>  <th>5 PM</th>  <th>6 PM</th>  <th>7 PM</th>" +
"  '<th>8 PM</th>' <th>Total</th>  </tr>";

 shops.forEach(function(aShop) {
 aShop.getAvgDonutSellForHourly();

 console.log(aShop.hourlyDonuts);

 aShop.getDonutsPerDay();
 console.log(aShop.dailyDonuts);
 table += aShop.getTableRow();
} );
table += "</table>";
var container = document.getElementById("container");
container.innerHTML = table;


function myFunction() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "donut.jpg");
    x.setAttribute("width", '50');
    x.setAttribute("width", "50");

    document.body.appendChild(x);
}
// var handleSubmit = function(event) {
//   event.preventDefault();

//    if (!event.target.loc1.value || !event.target.min1.value || !event.target.max1.value || !event.target.avg1.value) {
//     return alert('Fields cannot be empty!');
//    }

   // var loc = event.target.loc1.value;
   // var min = event.target.min1.value;
   // var max = event.target.max1.value;
   // var avg = event.target.avg1.value;


// function generate() {
//   return 
// }
  
//["Downtown", "Capitol Hill", "South Lake Union", "Wedgewood", 'Ballard'];[8 , 4, 9, 2, 8];[43, 37, 23, 28, 58];

//[4.50, 2.00, 6.33, 1.25, 3.75];


  var ctx = document.getElementById("myChart").getContext("2d");
  var data = {
      labels: ["Downtown", "Capital Hill", "South Lake Union", "Wedgewood", "Ballard"],
      datasets: [
         {
            label: "Shops",
            fillColor: "#4ebf2c",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",

              data: shops.map(function(shop) { 
                return shop.dailyDonuts;
              })
          },

        
      ]
  };
  
  var myBarChart = new Chart(ctx).Bar(data, {
    barShowStroke: false
});