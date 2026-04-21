import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroContent } from '../../site-content';

@Component({
  selector: 'app-page-hero',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss',
})
export class PageHeroComponent {
  readonly content = input.required<HeroContent>();
}
