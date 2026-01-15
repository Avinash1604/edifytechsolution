import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  client: string;
  description: string;
  iTunesUrl?: string;
  googlePlayUrl?: string;
  websiteUrl?: string;
  status?: string;
}

interface WorkCategory {
  title: string;
  projects: Project[];
}

@Component({
  selector: 'app-works',
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
  workCategories: WorkCategory[] = [
    {
      title: 'Mobile Applications',
      projects: [
        {
          title: 'VS Relay',
          client: 'Victor Stanley',
          description: "Victor Stanley brings you Relay, the only tool you’ll need for efficient waste collection—now right on your iPhone. Optimize your trash collection with Relay. Best used in conjunction with Relay sensors on your outdoor waste containers, this app lets you know when a trash can needs to be emptied, and can provide turn-by-turn routing to navigate you to it. You can notify your team members that a container was collected, submit reports if you notice a trash can was damaged or relocated, and receive an interactive list of every container that needs to be emptied at any given time.",
          iTunesUrl: 'https://apps.apple.com/in/app/vs-relay/id1568311295'
        },
        {
          title: 'Everything Education',
          client: 'Everything Education',
          description: 'Everything Education is basically developed for students in the UK region. Students can select languages like English, Mathematics and Science. Students can give exams related to the subjects and test their knowledge against the subjects. The app has Free as well as Paid versions.',
          iTunesUrl: 'https://apps.apple.com/qa/app/everything-education/id6480463324',
          googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.app.everythingeducation'
        },
        {
          title: 'Kartesa',
          client: 'Vihara LLC',
          description: 'ECommerce Application. Through this application the user can order the groceries. Checkout page is there. Payment gateway has been integrated. All the data have been fetched from the server. The items shown as image along with the details about each.',
          googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.kartesa&hl=en',
          iTunesUrl: 'https://itunes.apple.com/us/app/kartesa/id1061643840?mt=8'
        },
        {
          title: 'Barber App',
          client: 'Agaze Technologies',
          description: 'Barber App gives all the salon locations in the google maps in the Dutch Place and you can also get all the details of the particular salon.',
          googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.salon.barber.barber'
        },
        {
          title: 'Who’s Next?',
          client: 'Reshad',
          description: "The best app to help you make decisions is now available in the store! With the app 'Who's Next' you can avoid discussions or making choices in a fun and easy way. Whether you're alone, with friends, family or colleagues, with 'Who's Next' there's no discussion and choosing becomes easy! Can't decide who's doing the dishes tonight? Let the 'Who's Next' app decide for you! Download the app for free and enjoy.",
          iTunesUrl: 'https://itunes.apple.com/us/app/whosnext/id1034939528?ls=1&mt=8',
          googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.who.whosnext'
        },
        {
          title: 'IBC Tamil',
          client: 'IBC Tamil',
          description: 'IBC Tamil Television broadcasts infotainment for worldwide viewers of all ages via satellite and streaming from our website and apps. Our content includes breaking news, live events and a huge range of entertainment, including game shows, dance and singing competitions.',
          googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.tamil.ibctamil&hl=en'
        },
        {
          title: 'Kannada Times',
          client: 'Blluetek Group',
          description: 'Kannada Times is an Online and Print Media.',
          googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.kannada.times'
        },
        {
          title: 'Sanjevani',
          client: 'Blluetek Group',
          description: 'The Largest Selling Kannada Daily\nThe First Kannada Paper to Adapt Digital Technology\nThe First Newspaper to Use the latest Communication Network\nThe First Kannada Newspaper to Reach Rural Readers',
          googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.sunjev.sanjevani'
        },
        {
          title: 'JumpQs',
          client: 'Agaze Technologies',
          description: 'Reduce your wait times from hours to just a few minutes at fine dining restaurants in Bangalore. JumpQs allows you to see restaurant wait times in real time and seats you right from the App.',
          iTunesUrl: 'https://itunes.apple.com/in/app/jumpqs/id930163943'
        },
        {
          title: 'SpotLunch',
          client: 'Agaze Technologies',
          description: "Facetoface networking during lunch that's what Spotluch is all about! Why at lunch? Because lunchtime meetings usually fit into people's schedules better.",
          websiteUrl: 'http://www.spotlunch.com',
          status: 'iOS Application is under testing phase will be live soon.'
        },
        {
          title: 'AAJA',
          client: 'Kousik Rajendran',
          description: 'Aaja is the simple, private and reliable way to share and receive arrival times with friends and family.',
          googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.aaja&hl=en'
        },
        {
          title: 'Adviteeya',
          client: 'Adviteeya',
          description: 'Through this application the user can book the cab or auto and also check the buses near him. Once the user boards the cab or auto he can see the estimated time and distance for the travel. He can also share the cab/auto details to his phone contacts.',
          status: 'The Application is in Testing Phase.'
        }
      ]
    },
    {
      title: 'Websites',
      projects: [
        {
          title: '6th Generation Intelligence',
          client: '101 Solutions',
          description: '',
          websiteUrl: 'www.6gintel.com'
        },
        {
          title: 'Sithagam',
          client: '101 Solutions',
          description: '',
          websiteUrl: 'www.sithagam.org'
        },
        {
          title: 'Blluetek Group',
          client: 'Blluetek Group',
          description: '',
          websiteUrl: 'http://www.blluetekgroup.com'
        }
      ]
    }
  ];

  isModalOpen = false;
  selectedCategory: WorkCategory | null = null;

  openModal(category: WorkCategory) {
    this.selectedCategory = category;
    this.isModalOpen = true;
  }

  closeModal() {
    this.selectedCategory = null;
    this.isModalOpen = false;
  }
}
