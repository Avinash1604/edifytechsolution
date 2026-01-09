import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { ProcessComponent } from './components/process/process.component';
import { TeamComponent } from './components/team/team.component';
import { WorksComponent } from './components/works/works.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    ProcessComponent,
    TeamComponent,
    WorksComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
