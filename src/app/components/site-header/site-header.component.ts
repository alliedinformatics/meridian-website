import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { mainNavigation, siteMeta } from '../../site-content';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent {
  readonly links = mainNavigation;
  readonly brand = siteMeta;
  readonly mobileOpen = signal(false);

  toggleMobile(): void {
    this.mobileOpen.update((open) => !open);
  }
}
