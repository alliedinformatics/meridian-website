import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { aboutPage } from '../../site-content';

@Component({
  selector: 'app-about-page',
  imports: [PageHeroComponent, SectionTitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {
  readonly content = aboutPage;
}
