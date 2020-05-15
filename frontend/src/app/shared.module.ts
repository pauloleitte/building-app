import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [],
    imports: [CommonModule, MatProgressSpinnerModule, MatInputModule, MatSnackBarModule],
    exports: [MatProgressSpinnerModule, MatInputModule, MatSnackBarModule],
    providers: [],
})
export class SharedModule { }