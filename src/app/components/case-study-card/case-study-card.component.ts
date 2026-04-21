import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CaseStudyCard } from '../../site-content';

@Component({
  selector: 'app-case-study-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './case-study-card.component.html',
  styleUrl: './case-study-card.component.scss',
})
export class CaseStudyCardComponent {
  readonly study = input.required<CaseStudyCard>();
}
