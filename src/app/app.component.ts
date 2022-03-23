import { Component,ViewEncapsulation  } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular-loop-machine';
  path = "../assets/loop-files/"
  numOfSongs = 8
  loop = 'Loop'
  loopBol = false;

  //create 8 audio object 
  mySong0  = new Audio();
  mySong1  = new Audio();
  mySong2  = new Audio();
  mySong3  = new Audio();
  mySong4  = new Audio();
  mySong5  = new Audio();
  mySong6  = new Audio();
  mySong7  = new Audio();

  //create object for each chanls with all the details
  
  files = [
    {
      name: 'mySong0',
      path: this.path + '_tambourine_shake_higher',
      isMute: false,
      color: '#34568B',
      song: this.mySong0
    },
    {
      name: 'mySong1',
      path: this.path + 'all-track',
      isMute: false,
      color: '#FF6F61',
      song: this.mySong1
      
    },
    {
      name: 'mySong2',
      path: this.path + 'bvoc',
      isMute: false,
      color: '#6B5B95',
      song: this.mySong2
    },
    {
      name: 'mySong3',
      path: this.path + 'drums',
      isMute: false,
      color: '#88B04B',
      song: this.mySong3

    },
    {
      name: 'mySong4',
      path: this.path + 'hehevoc',
      isMute: false,
      color: '#F7CAC9',
      song: this.mySong4
    },
    {
      name: 'mySong5',
      path: this.path + 'highvoc',
      isMute: false,
      color: '#92A8D1',
      song: this.mySong5
    },
    {
      name: 'mySong6',
      path: this.path + 'jibrish',
      isMute: false,
      color: '#955251',
      song: this.mySong6
    },
    {
      name: 'mySong7',
      path: this.path + 'lead1',
      isMute: false,
      color: '#B565A7',
      song: this.mySong7
    },    
  ];



  // function call when play button click.
  // play the song for each elemnet in the array, 
  playSongs() { 
    this.files.forEach(element => {
      console.log(typeof(element));
      element.song.src = element.path + '.mp3';
      element.song.load();
      element.song.play();   
    });
  }

  stopSongs() {
    if (!this.files[0].song.paused) { // check if the playlist is not alreay paused. 
      this.playSongs();
    }
  }

  loopSongs() {
    //change the text on the button:
    if (this.loop == 'Unloop' ) {
      this.loop = 'Loop';
      this.loopBol = false;
    }
    else {
      this.loop = 'Unloop';
      this.loopBol = true;
      //in 10 seconds do something
    }
    //interval that check if the audio ended, and if there is a loop order.
      interval(1000).subscribe(x => {
        if (this.files[0].song.ended && this.loopBol) {  
          this.playSongs();
      }
    });
    
  }
}

