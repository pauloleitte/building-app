import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
    declarations: [],
    imports: [CommonModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatButtonModule, MatProgressSpinnerModule, MatInputModule, MatSnackBarModule, MatIconModule],
    exports: [MatToolbarModule, MatProgressSpinnerModule, MatMenuModule, MatSidenavModule, MatButtonModule, MatInputModule, MatSnackBarModule, MatIconModule],
    providers: [],
})
export class SharedModule { }