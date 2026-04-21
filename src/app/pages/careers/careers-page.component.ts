import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { careersPage } from '../../site-content';

@Component({
  selector: 'app-careers-page',
  imports: [AppIconComponent, PageHeroComponent, SectionTitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './careers-page.component.html',
  styleUrl: './careers-page.component.scss',
})
export class CareersPageComponent {
  readonly content = careersPage;
}
