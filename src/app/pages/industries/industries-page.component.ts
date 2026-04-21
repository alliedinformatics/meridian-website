import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { industriesPage } from '../../site-content';

@Component({
  selector: 'app-industries-page',
  imports: [AppIconComponent, PageHeroComponent, SectionTitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './industries-page.component.html',
  styleUrl: './industries-page.component.scss',
})
export class IndustriesPageComponent {
  readonly content = industriesPage;
}
