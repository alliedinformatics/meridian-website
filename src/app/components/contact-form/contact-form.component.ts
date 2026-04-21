import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { contactDetails } from '../../site-content';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly inquiryRecipient = contactDetails.email;

  readonly submitted = signal(false);
  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    organization: [''],
    topic: ['consulting'],
    message: ['', Validators.required],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.submitted.set(false);
      return;
    }

    const { name, email, organization, topic, message } = this.form.getRawValue();
    const topicLabel = this.topicLabel(topic);
    const subject = `[Website Inquiry] ${topicLabel} - ${organization || name}`;
    const body = [
      'New inquiry from meridiansoftsol.com',
      '',
      `Name: ${name}`,
      `Work Email: ${email}`,
      `Organization: ${organization || 'Not provided'}`,
      `Topic: ${topicLabel}`,
      '',
      'Message:',
      message,
    ].join('\n');

    const mailtoUrl =
      `mailto:${this.inquiryRecipient}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    globalThis.location.href = mailtoUrl;

    this.submitted.set(true);
    this.form.reset({
      name: '',
      email: '',
      organization: '',
      topic: 'consulting',
      message: '',
    });
  }

  showError(controlName: 'name' | 'email' | 'message'): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }

  private topicLabel(topic: string): string {
    const topicLabels: Record<string, string> = {
      consulting: 'Consulting inquiry',
      services: 'Services discussion',
      careers: 'Careers',
      other: 'Other',
    };

    return topicLabels[topic] ?? 'General inquiry';
  }
}
