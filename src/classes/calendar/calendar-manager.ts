import Calendar from "./index";
import {CalendarConfiguration} from "../../interfaces";
import {GameSettings} from "../foundry-interfacing/game-settings";
import {SettingNames} from "../../constants";

export default class CalendarManager {
    /**
     * A list of all calendars
     * @type {Calendar[]}
     */
    private static calendars: Record<string, Calendar>= {};

    private static activeId: string = '';

    public static initialize(){
        //TODO: Replace with loading from the game settings
        const calendars = <CalendarConfiguration[]>GameSettings.GetObjectSettings(SettingNames.CalendarConfiguration);
        if(calendars.length === 1 && !calendars[0]){
            calendars.shift();
        }
        if(calendars.length){

        } else {
            const cal = this.addCalendar({id: '', name: 'default'});
            cal.settingUpdate();
            this.activeId = cal.id;
        }
    }

    public static addCalendar(configuration: CalendarConfiguration): Calendar{
        const cal = new Calendar(configuration);
        this.calendars[cal.id] = cal;
        return this.calendars[cal.id];
    }

    public static getCalendar(id: string): Calendar | null {
        if(this.calendars.hasOwnProperty(id)){
            return this.calendars[id];
        } else {
            return null;
        }
    }

    public static getAllCalendars(): Calendar[] {
        const cals: Calendar[] = [];
        for(const [key, value] of Object.entries(this.calendars)){
            cals.push(value);
        }
        return cals;
    }

    public static getActiveCalendar(){
        return this.calendars[this.activeId];
    }
}