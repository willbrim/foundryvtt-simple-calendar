[![foundry](https://img.shields.io/badge/dynamic/json.svg?url=https://github.com/vigoren/foundryvtt-simple-calendar/releases/latest/download/module.json&label=Foundry&query=$.compatibleCoreVersion&colorB=orange)](https://foundryvtt.com/releases/)
![GitHub package.json version](https://img.shields.io/github/package-json/v/vigoren/foundryvtt-simple-calendar)
[![license](https://img.shields.io/badge/license-MIT-blue)](https://github.com/vigoren/foundryvtt-simple-calendar/blob/main/LICENSE)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vigoren/foundryvtt-simple-calendar/Node.js%20CI)
[![codecov](https://codecov.io/gh/vigoren/foundryvtt-simple-calendar/branch/main/graph/badge.svg?token=43TJ117WP1)](https://codecov.io/gh/vigoren/foundryvtt-simple-calendar)
[![forge](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%&url=https://forge-vtt.com/api/bazaar/package/foundryvtt-simple-calendar&colorB=3d8b41)](https://forge-vtt.com/)
![GitHub release (latest by date)](https://img.shields.io/github/downloads/vigoren/foundryvtt-simple-calendar/latest/total)

![Logo](https://raw.githubusercontent.com/vigoren/foundryvtt-simple-calendar/main/docs/images/logo.png)

# Simple Calendar

A simple calendar module for [FoundryVTT](https://foundryvtt.com/) that is system independent. 

This module allows you to create a calendar with any number of months per year and any number of days per month for your game world.
It is intended as a way for a GM to show a calendar like interface that maps to their in game world.
The simple calendar module does not keep track of time or tie into any system to advance the day, date changing is a manual process by the GM.

If you are looking for a module that tracks in game time and has weather related effects I recommend you check out the [Calendar/Weather module](https://www.foundryvtt-hub.com/package/calendar-weather/).

## GM Features:

* Configure the calendar to meet your worlds needs
    * Set the year as well as add any prefix or postfix to the years name
    * Define how many months in a year
    * Set a custom name for each month
    * Set the number of days in each month
    * Choose if months are considered intercalary
    * Set up your own Leap Year rules
* Set and change the current day as your game story progresses
* Add notes to specific days on the calendar to remind yourself of events or other world related things
    * These notes can either be visible to players as well as the GM or just the GM
    
## Player Features:

* Browse a calendar interface to see the years, months and day of the game world
* Select days to see any notes/events specific to that day

## Installing The Module

There are 2 ways to install the module, using the module.json file or by manually downloading the zip file.

### module.json

To install using the module json file, use this link [https://github.com/vigoren/foundryvtt-simple-calendar/releases/latest/download/module.json](https://github.com/vigoren/foundryvtt-simple-calendar/releases/latest/download/module.json)

### Zip File

To install the most recent version of the module, view the releases section to the right of the main GitHub page. 
Selecting the latest release will bring you to a page where you can download the module.zip asset. This will contain everything you need to manually install the module.

## Accessing and using the Calendar
The module adds a calendar button to the basic controls section of the layer controls. Clicking on this will open the module window

![Calendar Button Location](https://raw.githubusercontent.com/vigoren/foundryvtt-simple-calendar/main/docs/images/layers-button.png)

The above image helps shows the controls, they are detailed out below.

Control | Description
------- | -----------
Previous/Next | Allow the user to change which month/year they are currently viewing.
Today Button | Changes the calendar so that the current day (in the game world) is visible and selected.
Blue Circle Day | This indicates the current day in the game world, can be changed by the GM
Green Circle Day | This indicates the day the user currently has selected. This will show any notes on this day.
Red Indicator | This shows on any days that have notes that the user can see. It will show the number of notes on that day up to 99.
Notes List | Any notes that appear in this list can be clicked on to open the note details.

### Note Details

The note details shows all the information about a specific note: the date the note is for, the title of the note and the content of the note.

![Calendar Button Location](https://raw.githubusercontent.com/vigoren/foundryvtt-simple-calendar/main/docs/images/note-view.png)

## Updating the Current Date
The GM version of the module looks a little different, with the addition of controls to change the current date and a button to enter the configuration. 

![GM View](https://raw.githubusercontent.com/vigoren/foundryvtt-simple-calendar/main/docs/images/gm-view.png)

The above image helps shows the controls, they are detailed out below.

Control | Description
------- | -----------
Day Back/Forward | This moves the current day forward or back one day.
Month Back/Forward | This moves the current month forward or back one month. The current day will be mapped to the same day as the old month, or the last day of the month if the old month has more days.
Year Back/Forward | This moves the current year forward or back one year. The current month and day will stay the same in the new year.
Apply | This will apply the changes, saving the new current day in the settings and updating all of the players calendars to reflect the new current day.
Configuration | This opens up the configuration dialog to allow the GM to fully customize the calendar.
Add New Note Button | This will open the add notes dialog to add a new note for the selected day.

## Adding, Editing and Removing notes

The GM has the ability to add new notes by clicking on the add new note button for a selected date. This will open a dialog where the details of the note can be filled out.

![Calendar Button Location](https://raw.githubusercontent.com/vigoren/foundryvtt-simple-calendar/main/docs/images/note-new.png)

Field | Description
------- | -----------
Note Title | The title for the note, this title will appear in the listing of notes for the day.
Player Visible | If this note can be seen by players or if it is for the GM only.
Note Repeats | If this note repeats weekly, monthly, yearly or never. If the note repeats monthly and it is on a day that some months don't have (eg the 31st) months that don't go to that day will not have this note.
Details | Here you can enter the details of a note using the built in text editor.

After all the details are filled out you can save the note.

**Important**: If you have not saved the content in the text editor using the text editor save button, a warning will appear when you try to save the note letting you know.

The GM can also edit or delete existing notes. To do this click on an existing note, at the bottom of the note view 2 additional buttons will be visible, Edit and Delete. 

Button | Description
------- | -----------
The Edit button | This will load the contents of the note in the same editor as creating a new note.
The Delete button | This will open up a confirmation dialog, where selecting delete again will permanently remove the note.

## Configuring Your calendar

Configuration of the calendar is straight forward. As the GM open the configuration dialog and start customizing your calendar!

### General Settings

This tab allows you to set some general settings for the entire calendar. 

#### Predefined Calendars

This setting lets you choose from a list of predefined calendars to get your calendar started with. The following calendars can be selected to configure the game calendar:

Calendar|Description|Initial Date
--------|-----------|-------------
Gregorian|This the standard real life calendar|The current date will be used
Eberron| This is the calendar from the Eberron setting for Dungeons and Dragons | Zarantyr 1, 998 YK
Exandrian |This is the calendar from the Exandria setting for Dungeons and Dragons | Horisal 1, 812 P.D.
Golarian | This is the calendar from the Pathfinder game | Abadius 1, 4710 AR
Greyhawk | This is the calendar from the Greyhawk setting for Dungeons and Dragons | Needfest 1, 591 cy
Harptos | This is the calendar used across Faerun in the Forgotten Realms | Hammer 1, 1495 DR
Warhammer | This is the calendar used by the Imperium in the Fantasy Warhammer game | Hexenstag 1, 2522

All of these calendars can be further customized after they are loaded. They are here to provide a simple starting point for your game.

#### Other Settings

These are the other settings availible under the General Settings tab

Setting | Description
-------- | ----------
Note Default Player Visibility | For new notes, if by default the player visibility option is checked or not.


### Year Settings

This tab allows you to change some settings about the years in your game world

Setting | Description
-------- | ----------
Current Year | The Current year your game world is in. This can be any positive number.
Year Prefix | Text that will appear before the year number.
Year Postfix | Text that will appear after the year number.

### Month Settings

This tab displays all the months that exist in the calendar. Here you can change month names, the number of days in a month, remove a month, add a new month or remove all months.

Setting | Description
-------- | ----------
Month Name | These text boxes for each month allow you to change the name of an existing month.
Number of Days | These text boxes for each month allow you to change the number of days in each month. A month can have a minimum of 0 days.
Intercalary Month | An intercalary month is one that does not follow the standard month numbering and is skipped.<br/>Example: If we were to add an intercalary month between January and February, January would still be considered the first month and February would be considered the second month. The new month does not get a number.<br/>Intercalary months also do not count towards the years total days nor do they affect the day of the week subsequent months start on.
Include Intercalary Month In Total Day Count | When you select a month to be intercalary, an option will show to include these days as part of the years total days and have its days afect the day of the week subsequent months start on. The month though still is not numbered.
Remove Button | These buttons for each month allow you to remove the month from the list.
Add New Month Button | This button will add a new month to the bottom of the list with a default name and number of days that you can then configure to your liking.
Remove All Months Button | This button will remove all of the months from the list. 


### Weekday Settings

This section displays all the weekdays that exist in the calendar. Weekdays are used to determine how wide the calendar display should be and how to make month days to each day of the week.

Setting | Description
-------- | ----------
Weekday Name | These text boxes for each weekday allow you to change the name of an existing weekday.
Remove Button | These buttons for each weekday allow you to remove the weekday from the list.
Add New Weekday Button | This button will add a new weekday to the bottom of the list with a default name that you can then configure to your liking.
Remove All Weekdays Button | This button will remove all of the weekdays from the list.

### Leap Year Settings

This section allows the GM to configure how leap years work for this calendar.

Setting | Description
-------- | ----------
Leap Year Rule | Which ruleset to follow when determining leap years. The options are <ul><li>None: The calendar contains no leap years</li><li>Gregorian: The calendars leap year rules are like the standard calendar (Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these years are leap years if they are exactly divisible by 400)</li><li>Custom: Allows you to specify n interval in years for when a leap year happens.</li></ul>
When Leap Years Happen | **This only appears if the Custom leap year rule is selected**.<br/>The number of years when a leap year occurs. Example a value of 5 would mean every 5th year is a leap year.
Months List | **This only appears if the Custom or Gregorian leap year rule is selected**.<br/>A list of months will appear that shows each month, and a textbox where you can change the number of days the corresponding month has during a leap year. A month can have a minimum of 0 leap year days.

After you have changed the settings to your liking don't forget to save the configuration by hitting the Save Configuration button!

## Macro's

You can create macros that will open up the Simple Calendar interface when used. To start create a new script macro and enter this as the command:

```javascript
SimpleCalendar.show();
```

**Important**: If this macro is intended to be useable by players don't forget to configure the Macros permissions for all players. It will need to be set to at least the "Limited", permission level.

The show function can take 3 parameters to set the year, month and day that the calendar opens up to.

Parameter|Type|Default|Details
---------|----|-------|-------
Year | number or null | null | The year to open the calendar too. If null is passed in it will open the calendar to the year the user last viewed
Month | number or null | null | The month to open the calendar too.<br/>The month is expected to start at 0, or be the index of the month to show. This way intercalary months can be easily chosen by using their index as they don't have a month number.<br/>-1 can be passed in to view the last month of the year.<br/>If null is passed in the calendar will open to the month the user last viewed.
Day | number or null | null | The day of the month to select.<br/>The day is expected to start at 1.<br/>-1 can be passed in to select the last day of the month.<br/>If null is passed in the selected day will be the last day the user selected, if any.

### Examples
All these examples assume we are using a standard Gregorian calendar.

Open the calendar to August 2003
```javascript
SimpleCalendar.show(2003, 7);
```

Open the calendar to December 1999 and select the 25th day
```javascript
SimpleCalendar.show(1999, 11, 25);
```
