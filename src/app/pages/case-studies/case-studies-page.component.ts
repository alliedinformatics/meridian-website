import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CaseStudyCardComponent } from '../../components/case-study-card/case-study-card.component';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { caseStudiesPage } from '../../site-content';

@Component({
  selector: 'app-case-studies-page',
  imports: [PageHeroComponent, SectionTitleComponent, CaseStudyCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './case-studies-page.component.html',
  styleUrl: './case-studies-page.component.scss',
})
export class CaseStudiesPageComponent {
  readonly content = caseStudiesPage;
}
