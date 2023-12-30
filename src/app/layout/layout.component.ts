import { Component, signal } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { NavGroup } from '../shared/interfaces/interfaces';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [CommonModule, HeaderComponent, SidebarComponent, RouterOutlet],
})
export class LayoutComponent {
  showSidebar = signal(false);
  title: string = '';
  navGroup: NavGroup[] = [
    {
      icon: 'assets/icons/dashboard.svg',
      title: 'Dashboard',
      link: '',
    },
    {
      icon: 'assets/icons/assesment.svg',
      title: 'Assessment',
      link: 'assessment',
    },
    {
      icon: 'assets/icons/library.svg',
      title: 'My Library',
      link: 'my-library',
      break:true
    },
    {
      icon: 'assets/icons/round-status.svg',
      title: 'Round status',
      link: 'status',
      auth: true,
    },
  ];
  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTitle(); // Update the title based on the current route
      });
  }
  private updateTitle() {
    const routeSnapshot = this.route.snapshot;
    const routeData = routeSnapshot.firstChild?.data;

    if (routeData && routeData['title']) {
      this.title = routeData['title'];
    } else {
      this.title = 'Default Title'; // Default title if no specific title is defined in the route data
    }
  }
  public openSidebar(): void {
    this.showSidebar.set(true);
  }
}
