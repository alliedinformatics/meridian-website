import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { servicesPage } from '../../site-content';

@Component({
  selector: 'app-services-page',
  imports: [AppIconComponent, PageHeroComponent, SectionTitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss',
})
export class ServicesPageComponent {
  readonly content = servicesPage;
}
