/* class AlarmClock
 *
 * This class contains all of the information to implement an alarm clock
 * It stores up to two alarms.  You may set the alarms, check whether the
 * alarm as gone off, update the time, etc.
 */
public class AlarmClock
{
	// these are instance variables - each alarm clock has its
	// own copy of these variables
	// current time
	private int currentHour;
	private int currentMinute;
	private int currentSecond;
	
	// time of the alarm(s)
	private int[] alarmHour;
	private int[] alarmMinute;

	// whether alarm is on or off
	private boolean[] alarmOn;

	// this is the constructor - this is called when "new"
	// is called, when the object is first created
	// this contains code to initialize all variables in object
	// this is a special method - it has no return value (and no void)
	public AlarmClock()
	{
		currentHour = 
		currentMinute = 
		currentSecond = 

		alarmHour = new int[2];
		alarmMinute = new int[2];
		alarmOn = new boolean[2];

		// set both alarms to off


	}
	

	// now we put all of the methods
	// each method that we want code from outside the class to call is public
	// each method that we only want code from inside the class to call is private
	/* setAlarm
	 * inputs: alarm number, hour, minute
	 * outputs: none
	 * purpose: sets one of the alarms to the hour and minute specified
 	 * It also turns on the alarm
	 */
	public void setAlarm(int alarm, int hour, int minute)
	{
		// make sure the alarm number is valid


		
		// set that alarm



		// turn on alarm

	}
	
	/* turnOffAlarm
	 * inputs: the alarm number
	 * outputs: none
	 * purpose: This turns off an alarm. 
	 */
	public void turnOffAlarm(int alarm)
	{
		// make sure the alarm number is valid


		// turn off alarm
	}

	/* turnOnAlarm
	 * inputs: the alarm number
	 * outputs: none
	 * purpose: This turns on an alarm.  This assumes the alarm time has 
	 * already been set.
	 */
	public void turnOnAlarm(int alarm)
	{
		// make sure the alarm number is valid



		// turn on alarm

	}

	/* setTime
	 * inputs: hour, minute, second
	 * outputs: none
	 * purpose: This updates the current time to the values
	 * passed in.
	 */
	public void setTime(int hour, int minute, int second)
	{
		currentHour = hour;
		currentMinute = minute;
		currentSecond = second;
	}

	/* tick
 	 * inputs: none
	 * outputs: none
	 * purpose: This gets called each second.  It updates the current time
	 * of the clock and sets of the alarm if necessary
	 */
	public void tick()
	{
		// print out tick, then tock, then tick, etc.
		if (seconds % 2 == 0)
			System.out.println("Tick");
		else
			System.out.println("Tock");

		// increment the time








		// check to see if an alarm should go off



	}

	/* soundAlarm
	 * inputs: none
	 * outputs: none 
	 * purpose: this gets called by tick when the alarm goes off
	 *   It sounds an alarm 
	 */
	private void soundAlarm()
	{
		System.out.println("Alarm!!**************************");
	}

} // end of class AlarmClock
