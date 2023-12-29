import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() icon: string | undefined;
  @Input() size: string = '15px';
  @Input() bgSize: string = this.setBgSize;
  @Input() color: string = 'black';
  @Input() bg: string = 'transparent';
  @Input() borderColor: string = 'transparent';
  @Input() rounded: 'none' | 'full' | 'sm'| 'md' = 'none';

  private get setBgSize(): string {
    const matchResult = this.size.match(/[\d\.]+/);
    if (matchResult && matchResult[0]) {
      return parseFloat(matchResult[0]) * 2 + 'px';
    } else {
      // Handle the case where there is no match or the match is null
      return '30px';
    }
  }
}
