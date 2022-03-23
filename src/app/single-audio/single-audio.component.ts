import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-audio',
  templateUrl: './single-audio.component.html',
  styleUrls: ['./single-audio.component.css']
})
export class SingleAudioComponent implements OnInit {
  @Input() file: any
 
  constructor() { 
  }
  btnVal = 'Mute'
 
  //change the text on the Btn
  // and mute/unmute the audio object
  mute() {
    if (this.btnVal == 'Mute') {
      this.file.isMute = true;
      this.btnVal = "Unmute"
      this.file.song.muted = true;
    }
    else {
      this.btnVal = 'Mute'
      this.file.song.muted = false;  
      this.file.isMute = false;
    }    
  }
  ngOnInit(): void {
  }

}
