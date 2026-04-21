import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { homePage } from '../../site-content';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, AppIconComponent, PageHeroComponent, SectionTitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  readonly content = homePage;
}
