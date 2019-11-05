import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
	selector: 'app-validate-fields-submit-form',
	templateUrl: './validate-fields-submit-form.html',
	styles: []
})

export class ValidateForms implements OnInit{
	form: FormGroup;
	
	constructor(private formBuilder: FormBuilder){}
	
	ngOnInit(){
		this.form = this.formBuilder.group({
			name: [null, Validators.required],
			email: [null, [Validators.required, Validators.email]],
				address: this.formBuilder.group({
					street: [null, Validators.required],
					street2: [null],
					zipCode: [null, Validators.required],
					city: [null, Validators.required],
					state: [null, Validators.required],
					country: [null, Validators.required]
				})
		});	
	}
	isFieldValid(field: string){
		return !this.form.get(field).valid && this.form.get(field).touched;
	}
	displayFieldCss(field: string){
		return {
			'has-error': this.isFieldValid(field),
			'has-feedback': this.isFieldValid(field)
		};
	}
}
