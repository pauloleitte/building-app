import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [],
    imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule, MatInputModule, MatSnackBarModule,MatIconModule],
    exports: [MatProgressSpinnerModule,MatButtonModule, MatInputModule, MatSnackBarModule,MatIconModule],
    providers: [],
})
export class SharedModule { }