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
   for (var i = 0; i < 12; i++) {
     var hourly = Math.round(this.avgDonutsPerCustomer * this.getRandomCustomer());
     this.hourlyDonuts.push(hourly);
  }
};
 /*this.donutsPerDay = function() {
 var sum = this.hourlyDonuts.reduce(function(total,next){
   return total + next
 });
 };
 };*/
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

var table = "<table>  <tr>  <th>Location</th>  <th>8 AM</th>  <th>9 AM</th>  " +
"<th>10 AM</th>  <th>11 AM</th>  <th>12 PM</th>  <th>1 PM</th><th>2 PM</th> "+
"  <th>3 PM</th>  <th>4 PM</th>  <th>5 PM</th>  <th>6 PM</th>  <th>7 PM</th>" +
"  <th>Total</th>  </tr>";

shops.forEach(function(aShop) {
 aShop.getAvgDonutSellForHourly();
//Downtown.donutsPerDay();
 console.log(aShop.hourlyDonuts);
//console.log(Downtown.donutsPerDay);
 aShop.getDonutsPerDay();
 console.log(aShop.dailyDonuts);
 table += aShop.getTableRow();
} );
table += "</table>";
var container = document.getElementById("container");
container.innerHTML = table;
//["Downtown", "Capitol Hill", "South Lake Union", "Wedgewood", 'Ballard'];[8 , 4, 9, 2, 8];[43, 37, 23, 28, 58];

//[4.50, 2.00, 6.33, 1.25, 3.75];