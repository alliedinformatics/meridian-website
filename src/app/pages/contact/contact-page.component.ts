import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { contactDetails, contactPage } from '../../site-content';

@Component({
  selector: 'app-contact-page',
  imports: [AppIconComponent, PageHeroComponent, SectionTitleComponent, ContactFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {
  readonly content = contactPage;
  readonly details = contactDetails;
}
