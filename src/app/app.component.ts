import { Component } from '@angular/core';
import { Education, Experience, Rating } from './Interfaces';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  firstName : string = 'Eraly'
  lastName: string = 'Aisahanov'
  position: string = 'Front-End Developer'
  desc: string = " I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow."
  photoURL: string = 'https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg'
  educations: Education[] = [
    {
      title: 'Fr developer',
      city: 'San Fr, CA',
      date: {
        start: new Date(2011, 0),
        end: new Date(2015, 1),
      },
      desc: 'did This and that',
      university: 'Sample Institute of technology',
    },
    {
      title: 'Fr developer',
      city: 'San Monica, CA',
      date: {
        start: new Date(2011, 0),
        end: new Date(2015, 1),
      },
      desc: 'did This and that, did This and that',
      university: 'Akount',
    },
  ]
  experience: Experience[] = [{
    position: 'C# developer',
    city: 'San Fr, CA',
    date: {
      start: new Date(2015, 1),
      end: new Date(2017, 1),
    },
    desc: 'did This and that, did This and that, did This and that',
    company: 'Microsoft'
  },
  {
    position: 'Angular developer',
    city: 'San Monica, CA',
    date: {
      start: new Date(2017, 6),
      end: new Date(2022, 1),
    },
    desc: 'did This and that, did This and that, did This and that',
    company: 'Google'
  }]

  skills: Record<string, Rating> = {
    'Javascript': 4,
    'CSS': 3,
    'HTML': 4,
    'Vue': 3,
    'Angular': 5
  }

  Interests: string[] = ['Football', 'programming','books', 'VideoGames']
}
