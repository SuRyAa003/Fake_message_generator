import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule,FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-android-messager',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './android-messager.component.html',
  styleUrl: './android-messager.component.css'
})
export class AndroidMessagerComponent implements OnInit {

    public androidForm = this.fb.group({
      anTime:[this.getCurrentTime()],
      anBattery:['50'],
      anShowBatt:[true],
      anConnection:['LTE'],
      anContactName:['Tim Cook'],
      anContactStatus:[`Last seen ${this.getCurrentTime()}`],
      anIsCharging:[false],
      anIsOnline:[true]
    })
  public connectionsList = [
    { value: 'LTE', viewValue: 'LTE' },
    { value: 'WiFi', viewValue: 'WiFi' },
    { value: '4G', viewValue: '4G' },
    { value: '5G', viewValue: '5G' },

  ]

  constructor(
    public fb:FormBuilder
  ){}

  ngOnInit(): void {
   this.androidForm.valueChanges.subscribe((res)=>{
      console.log(res)
    })
  }

  public getCurrentHours:number =  new Date().getHours();
  getCurrentTime():string{
    const currentDate = new Date();
    return `${currentDate.getHours()}:${currentDate.getMinutes()}` //HH:MM
  }

  showChargingPercentage():string{
    const batteryPercent = Number(this.androidForm?.value?.anBattery)

    if(batteryPercent >= 10 &&  batteryPercent <= 20){
      return 'bi bi-battery-low text-warning fs_20';
    }else if(batteryPercent >= 30 && batteryPercent <= 80){
      return 'bi bi-battery-half fs_20';
    }else if(batteryPercent >= 10 && batteryPercent <= 1){
      return 'bi bi-battery text-danger fs_20';
    }else if(batteryPercent >= 80 && batteryPercent <= 100){
      return 'bi bi-battery-full fs_20';
    }
    else{
      return 'bi bi-battery fs_20';
    } 

    //<i class="bi bi-battery-charging text-success"></i>
  }

  getFirstAndLastName(): string {
    const fullName = this.androidForm?.value?.anContactName ?? "";
    const parts = fullName.trim().split(/\s+/);

    const first = parts[0]?.[0] ?? '';
    const last = parts.length > 1 ? parts.at(-1)![0] : '';

    return `${first}${last}`;
  }

  submitData(){
    console.log(this.androidForm);
  }



}
