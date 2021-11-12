import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService, private fb: FormBuilder, private auth: AuthService) {}

  technology:any=[];
  version:any=[];

  email: FormControl;
  fullUser: FormGroup;

  ngOnInit(){
    //email
    this.email = new FormControl('', {
      validators: [Validators.required, Validators.email],
      asyncValidators: this.userService.uniqueEmailValidator(),
    });
    this.email.statusChanges.subscribe((status) => console.log(status));

    // vers
    this.technology = this.auth.technology();

    //full user
    this.fullUser = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birth: ['', Validators.required],
      technologies: [this.technology,  Validators.required],
      versions: [this.version, Validators.required],
      email: this.email,
      hobbies: this.fb.array([], Validators.required)
    });

    this.fullUser.valueChanges.subscribe((value) => console.log(value));
  }


  get getHobbies() {
    return this.fullUser.get('hobbies') as FormArray;
  }

  addHobby(){
    const hobby = this.fb.group({
      name: [],
      duration: [],
    }) 

    this.getHobbies.push(hobby);
  }

  deleteHobby(i: number){
    this.getHobbies.removeAt(i);
  }

  onSubmit(): void{
    console.log(this.fullUser);
  }

  onSelect(technology){
    this.version = this.auth.version()
    .filter(e=> 
     e.id == technology.target.value);
  }
}


