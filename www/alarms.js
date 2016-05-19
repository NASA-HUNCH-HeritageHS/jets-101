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
function alarms()
{
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getYear();
        if(year<=200)
        {
                year += 1900;
        }
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        days_in_month = new Array(12,12);
        total = 12;
		
		
		
        var date_today = day+' '+months[month]+' '+year;
        beg_j = date;
        beg_j.setDate(1);
        if(beg_j.getDate()==2)
        {
                beg_j=setDate(0);
        }
        beg_j = beg_j.getDay();
        document.write('<table class="alarm_calendar" onload="opacity(document.getElementById(\'alarm_body\'),0);"><tbody id="alarm_body"><tr><th colspan="3"> '+date_today+' </th></tr>');
        document.write('<tr class="alarm_d_weeks"><th>AM</th><th>PM</th></tr><tr>');
        column = 0;
        for(i=1;i<=total;i++)
        {
			
                if(column==0)
                {
                        document.write('<tr>');
                }
				
                document.write('<td><a class="tooltip"><span title=" ">'+i+":00"+'</span></a></td>');
				document.write('<td><a class="tooltip"><span title=" ">'+i+":00"+'</span></a></td>');
				
				
                column++;
				
                if(column==1)
                {
                        document.write('</tr>');
                        column=0;
                }
        }
        document.write('</tbody></table>');
        return true;
		
		//MAKE TASK SYSTEM WORK LIKE THE CALENDER TOOLTIP SYSTEM
	/* total = arr.length;
	for(i=0;i<=total-1;i++){
document.getElementsByClassName("tooltip")[i].title = arr[i];} */
}
 

/* function eventC() {
	arr = new Array("Go to Mr. Bishop's house.","b","Mi'Kyng","Work on Batch File","it was an inside joke.","6","7","8","9","10","11","12","13","14","15","frag","17","18","19","20","21","22","23");
	total = arr.length;
	for(i=0;i<=total-1;i++){
document.getElementsByClassName("tooltip")[i].title = arr[i];}
	
	
} */
// 

function eventA() {
	arr = new Array("Go to Mr. Bishop's house.","b","Mi'Kyng","Work on Batch File","it was an inside joke.","6","7","8","9","10","11","12","13","14","15","frag","17","18","19","20","21","22","23");
	total = arr.length;
	for(i=0;i<=total-1;i++){
document.getElementsByClassName("tooltip")[i].title = arr[i];}
	
	
}





