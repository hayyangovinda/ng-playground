import {
  Component,
  ElementRef,
  Input,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MockdataService } from '../mockdata.service';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'ark-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css'],
})
export class LedgerComponent {
  @ViewChildren('checkbox') checkboxes!: QueryList<ElementRef>;
  @Input() data: any = [];
  @Input() activeUser: string = '';
  mockData = this.mockdataService.mockData;
  @ViewChild(MatMenuTrigger, { static: true }) matMenuTrigger!: MatMenuTrigger;

  menuTopLeftPosition = { x: '0', y: '0' };

  expandedRows: any = {};
  sortedByDate = false;
  sortedBySealNo = false;
  sortedByLabel = false;
  sortedByDebit = false;
  sortedByCredit = false;
  sortedByAmount = false;
  selectedRows: any = [];
  constructor(
    private mockdataService: MockdataService,
    private renderer: Renderer2
  ) {
    window.addEventListener('scroll', this.onClick);
  }

  toggleRow(index: number, chevron: any): void {
    console.log('clicked');
    if (!this.expandedRows[index]) {
      this.expandedRows[index] = true;
      this.renderer.setStyle(chevron, 'transform', 'rotate(180deg)');
    } else {
      this.expandedRows[index] = false;
      this.renderer.setStyle(chevron, 'transform', 'rotate(0deg)');
    }
  }

  sortbyDate() {
    if (!this.sortedByDate) {
      this.mockData.sort((a, b) => {
        const dateComarison =
          Number(new Date(a.date)) - Number(new Date(b.date));

        this.sortedByDate = true;
        return dateComarison;
      });
    } else {
      this.mockData.sort((a, b) => {
        const dateComarison =
          Number(new Date(b.date)) - Number(new Date(a.date));

        this.sortedByDate = false;
        return dateComarison;
      });
    }
  }

  sortbySealNo() {
    if (!this.sortedBySealNo) {
      this.mockData.sort((a, b) => {
        const sealNoComarison = Number(a.sealNumber) - Number(b.sealNumber);

        this.sortedBySealNo = true;
        return sealNoComarison;
      });
    } else {
      this.mockData.sort((a, b) => {
        const sealNoComarison = Number(b.sealNumber) - Number(a.sealNumber);

        this.sortedBySealNo = false;
        return sealNoComarison;
      });
    }
  }

  onFileSelected(event: any, i: number) {
    const file = event.target.files[0];
    if (file) {
      const label = file.name.split('.')[0];
      const user = this.activeUser;
      const date = new Date().toISOString().split('T')[0];
      this.mockData[i].documents.push({
        date,
        label,
        user,
      });
      console.log('Selected file:', file);
    }
  }
  deleteDocument(i: number, j: number) {
    this.mockData[i].documents.splice(j, 1);
  }

  onCheckboxChange(event: any, i: number, j: number) {
    const id = i + '-' + j;
    const docs = this.data[i].docs.length;

    const checkbox = event.target;
    if (checkbox.checked) {
      for (let k = 0; k < docs; k++) {
        const id = i + '-' + k;
        this.selectedRows.push(id);
      }
    } else {
      for (let k = 0; k < docs; k++) {
        const id = i + '-' + k;
        this.selectedRows = this.selectedRows.filter(
          (value: string) => value !== id
        );
      }
    }
  }

  onMainCheckboxChange(event: any) {
    const input = event.target;
    const checked = input.checked;

    this.checkboxes.forEach((checkbox, i) => {
      checkbox.nativeElement.checked = checked;
    });

    this.selectedRows = checked
      ? this.data.reduce((acc: any[], entry: any, i: number) => {
          return [
            ...acc,
            ...entry.docs.map((_: any, j: number) => `${i}-${j}`),
          ];
        }, [])
      : [];
  }

  onContextMenu(event: any) {
    event.preventDefault();
    console.log(event.clientY);
    const contextMenu: any = document.getElementById('context-menu');
    if (contextMenu.style.display === 'block') {
      contextMenu.style.display = 'none';
      contextMenu.click();

      return;
    }
    contextMenu.click();
    contextMenu.style.position = 'absolute';
    contextMenu.style.zIndex = '100';

    contextMenu.style.top = `${event.clientY}px`;
    contextMenu.style.left = `${event.clientX}px`;
    contextMenu.style.display = 'block';
  }
  onClick(event: any) {
    console.log(event);
    const contextMenu: any = document.getElementById('context-menu');
    contextMenu.style.display = 'none';
  }
}
