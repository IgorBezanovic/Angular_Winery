import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VineService } from 'src/app/service/vine.service';
import { Wine } from '../model/vino';

@Component({
  selector: 'app-add-vine',
  templateUrl: './add-vine.component.html',
  styleUrls: ['./add-vine.component.css']
})
export class AddVineComponent implements OnInit {
  wine :Wine;
	wineForm :FormGroup;

  constructor(private fb: FormBuilder, private service :VineService, private router :Router,
    private route :ActivatedRoute) { 
    this.createForm();
  }

  ngOnInit() {
    let id :string = this.route.snapshot.params.id;
      console.log('id param from URL: ', id);     
      if (id){
        this.service.get(Number(id)).subscribe(
          wine => {
            this.wine = wine;
            this.wineForm.patchValue(this.wine);    
          }
        );        
      }
    }

    createForm(){
      this.wineForm = this.fb.group({
        'name': ["", [Validators.required, Validators.minLength(2)]],
        'year': ["", Validators.required],
        'grapes': ["", Validators.required],
        'country': ["", Validators.required],
        'region': ["", Validators.required],
        'description': ["", Validators.required]
      });
    }

    onSubmit(){
      let submittedWine :Wine = new Wine(this.wineForm.value);
      if(this.wine && this.wine._id){
        submittedWine._id = this.wine._id;
        this.service.update(submittedWine).subscribe(
          wine => {
            this.wineForm.reset();
            this.router.navigate(['wines/']);      
          }
        );
      }else{

        this.service.add(submittedWine).subscribe(
          wine => {
            this.wineForm.reset();
            this.router.navigate(['wines/']); 
          }
        );
      }
      
    }
}
