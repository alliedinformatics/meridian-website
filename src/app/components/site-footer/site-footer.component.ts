import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppIconComponent } from '../app-icon/app-icon.component';
import { contactDetails, siteMeta } from '../../site-content';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, AppIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {
  readonly brand = siteMeta;
  readonly contact = contactDetails;
}
