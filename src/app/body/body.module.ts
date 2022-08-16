import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../shared/shared.module";
import { BodyRoutingModule } from "./body-routing.module";
// import { BodyComponent } from "./body.component";
import { ZaloPcComponent } from "./zalo-pc/zalo-pc.component";
import { FeaturedComponent } from './featured/featured.component';
import { OfficialAccountComponent } from './official-account/official-account.component';
import { DevelopersComponent } from './developers/developers.component';
import { SecurityComponent } from './security/security.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { LegalReportComponent } from './legal-report/legal-report.component';

@NgModule({
    declarations: [
        // BodyComponent,
        ZaloPcComponent,
        FeaturedComponent,
        OfficialAccountComponent,
        DevelopersComponent,
        SecurityComponent,
        HelpComponent,
        ContactComponent,
        LegalReportComponent,
    ],
    imports: [
        RouterModule,
        SharedModule,
        BodyRoutingModule,
    ]
})

export class BodyModule{}