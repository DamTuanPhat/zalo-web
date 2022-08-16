import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { DevelopersComponent } from "./developers/developers.component";
import { FeaturedComponent } from "./featured/featured.component";
import { HelpComponent } from "./help/help.component";
import { LegalReportComponent } from "./legal-report/legal-report.component";
import { OfficialAccountComponent } from "./official-account/official-account.component";
import { SecurityComponent } from "./security/security.component";
import { ZaloPcComponent } from "./zalo-pc/zalo-pc.component";

const routes: Routes = [
    {path: '', component: ZaloPcComponent},
    {path: 'features', component: FeaturedComponent},
    {path: 'official-account', component: OfficialAccountComponent},
    {path: 'developers', component: DevelopersComponent},
    {path: 'security', component: SecurityComponent},
    {path: 'help', component: HelpComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'legal-report', component: LegalReportComponent},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class BodyRoutingModule {}