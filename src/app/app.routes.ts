import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about/about-page.component';
import { CareersPageComponent } from './pages/careers/careers-page.component';
import { CaseStudiesPageComponent } from './pages/case-studies/case-studies-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { IndustriesPageComponent } from './pages/industries/industries-page.component';
import { ServicesPageComponent } from './pages/services/services-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Modern Microsoft Consulting for Enterprise Transformation' },
  { path: 'services', component: ServicesPageComponent, title: 'Services' },
  { path: 'industries', component: IndustriesPageComponent, title: 'Industries' },
  { path: 'case-studies', component: CaseStudiesPageComponent, title: 'Case Studies' },
  { path: 'about', component: AboutPageComponent, title: 'About Meridian' },
  { path: 'careers', component: CareersPageComponent, title: 'Careers' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact Meridian' },
  { path: 'contactus', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'contactus.html', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'requirements', redirectTo: 'careers', pathMatch: 'full' },
  { path: 'requirements.html', redirectTo: 'careers', pathMatch: 'full' },
  { path: 'job.html', redirectTo: 'careers', pathMatch: 'full' },
  { path: 'index.html', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
