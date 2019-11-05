import {Component} from '@angular/core';
import {AppService} from './found.service';

@Component({
	selector: 'my-product',
	template: `Hi you are at Products page<br />
				<input #box (keyup.enter)="OnEnter(box.value)" />
				<p>{{value}}</p>
				<p>Count: {{num}}</p>
				<button (click)="increment()">Click increment</button>
				<button (click)="decrement()">Click decrement</button><br /><br />
				<div>
				<input (keyup)="onKey($event)" (click)="onClick" />
				
				</div>
				
			  `,
			  providers: [AppService]
})

export class ProductComponent{
	value1: string;
	value: string = "";
	constructor(private _appService: AppService){}
	isActive: boolean = false;
	
	//view child
	message: string = "";
	count: number = 0;
	increaseByOne(){
		this.count = this.count + 1;
		this.message="message Count:-" + this.count;
	}
	decreaseByOne(){
		this.count = this.count - 1;
		this.message = "Message Count:-" + this.count;
	}
	//ends
		
	onKey(event: any){
		this.isActive = true;
		this.value += event.target.value;
	}
	
	ngOnInit(): void{
		this.value = this._appService.getApp();
	}
	
	/*OnEnter(value:string){
		this.value:string
	}*/
	num = 0;
	increment(){		
		this.num++;
	}
	decrement(){
		this.num--;
	}
}