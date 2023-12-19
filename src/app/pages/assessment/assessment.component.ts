import { Component } from '@angular/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { TabComponent } from "../../components/tabs/tab/tab.component";

@Component({
    selector: 'app-assessment',
    standalone: true,
    templateUrl: './assessment.component.html',
    styleUrl: './assessment.component.scss',
    imports: [TabsComponent, TabComponent]
})
export class AssessmentComponent {

}
