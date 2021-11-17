import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatTableModule,
        MatGridListModule
    ],
    exports:[
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatTableModule,
        MatGridListModule
    ],
})

export class MaterialModule{}