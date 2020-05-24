import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SharedService } from './services/shared.service';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, MatSortModule, MatPaginatorModule,MatTableModule, MatListModule, MatCardModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatButtonModule, MatProgressSpinnerModule, MatInputModule, MatSnackBarModule, MatIconModule],
  exports: [MatToolbarModule,MatSortModule, MatPaginatorModule, LoadingComponent, MatTableModule, MatListModule, MatCardModule, MatProgressSpinnerModule, MatMenuModule, MatSidenavModule, MatButtonModule, MatInputModule, MatSnackBarModule, MatIconModule],
  providers: [SharedService],
})
export class SharedModule { }
