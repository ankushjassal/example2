import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Employee} from './Employee';

@Component({
	selector: 'employee-form',
	templateUrl: './Employee.html'
})

export class EmployeeComponent{
	
	@Input()
	Carname: string;
	
	@Output()
	childEvent = new EventEmitter();
	onChange(value: any[]){
		this.childEvent.emit(value);
	}
		
	model = new Employee(1, 'Ankush Jassal', 'City');
	value: string = "";
	welcome: string;
	games: [{
		game: string,
		platform: string,
		release: string
	}];
	constructor(){
		this.welcome="Display games"
		
		this.games = [{
			game: "Deus Ex: Mankind Divided",
			platform: 'Xbox One, PS3 & PS4',
			release: "23 August"
		},
		{
			game : "Hue",
            platform: " Xbox One, PS4, Vita, PC",
            release : "August 23"
        },
        {
            game : "The Huntsman: Winter's Curse",
            platform: "PS4",
            release : "August 23"
        },
        {
            game : "The Huntsman: Winter's Curse",
            platform: "PS4",
            release : "August 23"
		}
	  ]
	};
};
