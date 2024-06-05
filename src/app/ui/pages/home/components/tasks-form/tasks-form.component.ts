import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DialogComponent } from '@ui/components/dialog';

@Component({
  standalone: true,
  selector: 'tasks-form',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatSelectModule,
  ],
  templateUrl: './tasks-form.component.html',
  styleUrl: './tasks-form.component.scss',
})
export class TasksFormComponent extends DialogComponent {
  public formGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    isComplete: new FormControl('', [Validators.required]),
  });

  public ngOnInit(): void {
    this.dialogRef.afterOpened().subscribe(() => {
      this.formGroup.patchValue({
        title: this.data.task.title,
        description: this.data.task.description,
        isComplete: String(this.data.task.isComplete),
      });
    });
  }

  public handleCancelDialog(): void {
    super().handleCancelDialog();
  }

  public handleSubmit(): void {
    if (this.formGroup.valid) {
      this.dialogRef.close(this.formGroup.value);
    }
  }
}
