import { Component, ViewChild } from '@angular/core';
import{ProductComponent} from './Product/product.component';

@Component({
  selector: 'my-app',
  template: `<employee-form [Carname]="carname" (childEvent)="CData=$event"></employee-form>
				<p>Value of child component: {{CData}}</p>				
				<button (Click)="OnClick()">Click me</button>
				{{clickMessage}}
				<ul style="text-decoration: none; list-style-type: none;">					
					<li style="display: inline-block;"><a [routerLink]="['/Product']">PRODUCT</a></li>
					<li><a [routerLink]="['/NotFound']">NOT FOUND</a></li>
				</ul>
				<router-outlet></router-outlet>
				<a href="['app/Product/product.html']" target="_blank">Products page</a><br /><br />
				<button type="button" (click)="increase()">Increase</button><br />
				<input type="button" (click)="decrease()" value="Decrease" />				
				`
})
export class AppComponent  {
	clickMessage = 'Hello';
	carname: string = "Bentley";
	public CData: number;
	
	OnClick(){
		this.clickMessage = 'Ankush Jassal';
	}
	//View child
	@ViewChild(ProductComponent)
	private numberComp: ProductComponent;
	increase(){
		this.numberComp.increaseByOne();
	}
	decrease(){
		this.numberComp.decreaseByOne();
	}
}
