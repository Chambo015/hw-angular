import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photoUrl: string = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT12cP23udqvCqHW_2oAvK257g3oVQkv23tOumxtpfFOhHi8a5B'
  biography: string = 'William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft, along with his late childhood friend Paul Allen. During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being the largest individual shareholder until May 2014. He was a major entrepreneur of the microcomputer revolution of the 1970s and 1980s.'
  quotes: string[] = ['If you think your teacher is tough, wait till you get a boss.' ,'Life is not fair — get used to it!',
  'Success is a lousy teacher. It seduces smart people into thinking they can’t lose.', 'Be nice to nerds. Chances are you’ll end up working for one.']
  links: string[] = ['https://en.wikipedia.org/wiki/Bill_Gates',
  'https://www.gatesfoundation.org/',
  'https://www.gatesnotes.com/',
  'https://twitter.com/billgates']
}
