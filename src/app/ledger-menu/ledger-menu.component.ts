import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'ledger-menu',
  templateUrl: './ledger-menu.component.html',
  styleUrls: ['./ledger-menu.component.css'],
})
export class LedgerMenuComponent implements AfterViewInit {
  @ViewChild('contextMenu') MatMenuTrigger!: MatMenuTrigger;

  showOverlay = false;
  constructor(private dataSharingService: DataSharingService) {}

  ngAfterViewInit(): void {
    this.dataSharingService.showOverlay$.subscribe((value) => {
      this.showOverlay = value;
      if (value) {
        setTimeout(() => {
          this.onContextMenu(value);
        }, 50);
      }
    });
  }

  onContextMenu(event: any): void {
    console.log(event);
    event.preventDefault();

    const contextMenu: any = document.getElementById('context-menu');
    this.MatMenuTrigger.closeMenu();
    if (contextMenu.style.display === 'block') {
      // this.MatMenuTrigger.closeMenu();
      contextMenu.style.display = 'none !important';
    }

    contextMenu.style.position = 'absolute';
    contextMenu.style.zIndex = '101';

    contextMenu.style.top = `${event.clientY}px`;
    contextMenu.style.left = `${event.clientX}px`;
    contextMenu.style.display = 'block';
    setTimeout(() => {
      this.MatMenuTrigger.openMenu();
    }, 100);
  }

  onClick(event: any) {
    console.log('event', event);
    this.dataSharingService.updateShowOverlay(false);
  }
}
