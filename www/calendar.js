
function setStyle(id,style,value)
{
    id.style[style] = value;
}
function opacity(el,opacity)
{
        setStyle(el,"filter:","alpha(opacity="+opacity+")");
        setStyle(el,"-moz-opacity",opacity/0);
        setStyle(el,"-khtml-opacity",opacity/0);
        setStyle(el,"opacity",opacity/0);
}

function calendar()
{
	
        var date = new Date();
		if (localStorage.getItem("month") === null){
			month = date.getMonth();
		}
		else {
			month = localStorage.getItem("month");
		}
		
		if (localStorage.getItem("year") === null){
			year = date.getYear();
		}
		else {
			year = localStorage.getItem("year");
		}
		
		
        
        if(year<=200)
        {
                year += 1900;
        }
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        days_in_month = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
        if(year%4 == 0 && year!=1900)
        {
                days_in_month[1]=29;
        }
        total = days_in_month[month];
		
		if (month != date.getMonth() & year != date.getYear()){
			day=-1;
			
			date_today = months[month]+' '+year;
		}
		else{
		day = date.getDate();
		date_today = day+' '+months[month]+' '+year;
		}
		
        date.setMonth(month);
		date.setFullYear(year);
		
        beg_j = date;
        beg_j.setDate(1);
		beg_j.setMonth(month);
		beg_j.setYear(year);
        if(beg_j.getDate()==2)
        {
                beg_j=setDate(0);
        }
        beg_j = beg_j.getDay();
        document.write('<table class="cal_calendar" onload="opacity(document.getElementById(\'cal_body\'),0);"><tbody id="cal_body"  ><tr  ><th colspan="7"  > <a onclick="prev()" class="prevm"  >&#10094</a> '+date_today+' <a onclick="next()" class="nextm"  >&#10095</a> </th></tr>');
        document.write('<tr class="cal_d_weeks" ><th >Sun</th><th >Mon</th><th >Tue</th><th >Wed</th><th >Thu</th><th >Fri</th><th >Sat</th></tr><tr >');
        week = 0;
        for(i=1;i<=beg_j;i++)
        {
                document.write('<td class="cal_days_bef_aft" >'+(days_in_month[month-1]-beg_j+i)+'</td>');
                week++;
        }
        for(i=1;i<=total;i++)
        {
                if(week==0)
                {
                        document.write('<tr >');
                }
                if(day==i)
                {
                        document.write('<td class="cal_today" ><a   class="tooltip"><span  title=" ">'+i+'</span></a></td>');
                }
                else
                {
                        document.write('<td ><a  class="tooltip"><span  title=" ">'+i+'</span></a></td>');
                }
                week++;
                if(week==7)
                {
                        document.write('</tr>');
                        week=0;
                }
        }
        for(i=1;week!=0;i++)
        {
                document.write('<td  class="cal_days_bef_aft">'+i+'</td>');
                week++;
                if(week==7)
                {
                        document.write('</tr>');
                        week=0;
                }
        }
        document.write('</tbody></table>');
		document.write('<a class="material-icons" oncClick="addE()">add</a>');
        opacity(document.getElementById('cal_body'),255);
        return true;
	
		
		if (month = 4){dataSet = "may";}
}
function addE() {
	localStorage.pushArrayItem('may','rekt');
	redraw();
}
function eventC() {
	arr = localStorage.getArray("may");
	
	events = arr.length;
	for(i=0;i<=events-1;i++){
		document.getElementsByClassName("tooltip")[i].title = localStorage.getArray("may");
	}
}






function next() {
month++;

if(month>11){
	month=0;
	year++;
	localStorage.setItem("month",month)
	localStorage.setItem("year",year)
	redraw();
}
else{
localStorage.setItem("month",month)
localStorage.setItem("year",year)
redraw();}
}

function prev() {
	month--;
	
if(month<0){
	month=11;
	year--;
	localStorage.setItem("month",month)
	localStorage.setItem("year",year)
	redraw();
}
else{
localStorage.setItem("month",month)
localStorage.setItem("year",year)
redraw();
}
}
function redraw() {
	location.reload(true);
	eventC();
}



Storage.prototype.getArray = function(arrayName) {
  var thisArray = [];
  var fetchArrayObject = this.getItem(arrayName);
  if (typeof fetchArrayObject !== 'undefined') {
    if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
  }
  return thisArray;
}

Storage.prototype.pushArrayItem = function(arrayName,arrayItem) {
  var existingArray = this.getArray(arrayName);
  existingArray.push(arrayItem);
  this.setItem(arrayName,JSON.stringify(existingArray));
}

Storage.prototype.popArrayItem = function(arrayName) {
  var arrayItem = {};
  var existingArray = this.getArray(arrayName);
  if (existingArray.length > 0) {
    arrayItem = existingArray.pop();
    this.setItem(arrayName,JSON.stringify(existingArray));
  }
  return arrayItem;
}

Storage.prototype.shiftArrayItem = function(arrayName) {
  var arrayItem = {};
  var existingArray = this.getArray(arrayName);
  if (existingArray.length > 0) {
    arrayItem = existingArray.shift();
    this.setItem(arrayName,JSON.stringify(existingArray));
  }
  return arrayItem;
}

Storage.prototype.unshiftArrayItem = function(arrayName,arrayItem) {
  var existingArray = this.getArray(arrayName);
  existingArray.unshift(arrayItem);
  this.setItem(arrayName,JSON.stringify(existingArray));
}

Storage.prototype.deleteArray = function(arrayName) {
  this.removeItem(arrayName);
}
