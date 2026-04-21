import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconName } from '../../site-content';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app-icon.component.html',
  styleUrl: './app-icon.component.scss',
})
export class AppIconComponent {
  readonly name = input.required<IconName>();
  readonly decorative = input(true);
}
