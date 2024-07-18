import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockdataService {
  constructor() {}
  mockData = [
    {
      date: '01.07.2024',
      sealNumber: 1001,
      docs: [
        {
          label:
            'Label A1 lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          debit: 100.0,
          credit: 50.0,
          amount: 150.0,
        },
      ],
      documents: [
        {
          date: '2024-07-01',
          user: 'John Doe',
          label: 'Document A',
        },
        {
          date: '2024-07-02',
          user: 'Jane Smith',
          label: 'Document B',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-01',
          dateTo: '2024-07-07',
          repeat: 7,
        },
        {
          dateFrom: '2024-08-01',
          dateTo: '2024-08-31',
          repeat: 30,
        },
      ],
    },
    {
      date: '02.07.2024',
      sealNumber: 1002,
      docs: [
        {
          label:
            'Label B1 lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          debit: 150.0,
          credit: 100.0,
          amount: 250.0,
        },
        {
          label:
            'Label B2 lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          debit: 300.0,
          credit: 150.0,
          amount: 450.0,
        },
      ],
      documents: [
        {
          date: '2024-07-03',
          user: 'Alice Johnson',
          label: 'Document C',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-10',
          dateTo: '2024-07-15',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-15',
          dateTo: '2024-08-20',
          repeat: 5,
        },
      ],
    },
    {
      date: '03.07.2024',
      sealNumber: 1003,
      docs: [
        {
          label:
            'Label C1 lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          debit: 200.0,
          credit: 80.0,
          amount: 280.0,
        },
      ],
      documents: [
        {
          date: '2024-07-05',
          user: 'Bob Brown',
          label: 'Document D',
        },
        {
          date: '2024-07-07',
          user: 'Emily Green',
          label: 'Document E',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-20',
          dateTo: '2024-07-25',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-25',
          dateTo: '2024-08-30',
          repeat: 5,
        },
      ],
    },
    {
      date: '04.07.2024',
      sealNumber: 1004,
      docs: [
        {
          label:
            'Label D1 lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          debit: 120.0,
          credit: 60.0,
          amount: 180.0,
        },
        {
          label:
            'Label D2 lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          debit: 250.0,
          credit: 120.0,
          amount: 370.0,
        },
      ],
      documents: [
        {
          date: '2024-07-10',
          user: 'Charlie Davis',
          label: 'Document F',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-15',
          dateTo: '2024-07-20',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-10',
          dateTo: '2024-08-15',
          repeat: 5,
        },
      ],
    },
    {
      date: '05.07.2024',
      sealNumber: 1005,
      docs: [
        {
          label:
            'Label E1 lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          debit: 180.0,
          credit: 90.0,
          amount: 270.0,
        },
      ],
      documents: [
        {
          date: '2024-07-12',
          user: 'David Wilson',
          label: 'Document G',
        },
        {
          date: '2024-07-15',
          user: 'Eva Martinez',
          label: 'Document H',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-25',
          dateTo: '2024-07-30',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-20',
          dateTo: '2024-08-25',
          repeat: 5,
        },
      ],
    },
    {
      date: '06.07.2024',
      sealNumber: 1006,
      docs: [
        {
          label:
            'Label F1 lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          debit: 160.0,
          credit: 70.0,
          amount: 230.0,
        },
        {
          label:
            'Label F2  lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          debit: 280.0,
          credit: 130.0,
          amount: 410.0,
        },
      ],
      documents: [
        {
          date: '2024-07-20',
          user: 'Frank Harris',
          label: 'Document I',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-30',
          dateTo: '2024-08-05',
          repeat: 6,
        },
        {
          dateFrom: '2024-08-05',
          dateTo: '2024-08-10',
          repeat: 5,
        },
      ],
    },
    {
      date: '07.07.2024',
      sealNumber: 1007,
      docs: [
        {
          label: 'Label G1',
          debit: 140.0,
          credit: 60.0,
          amount: 200.0,
        },
      ],
      documents: [
        {
          date: '2024-07-22',
          user: 'Grace Lee',
          label: 'Document J',
        },
        {
          date: '2024-07-25',
          user: 'Henry Clark',
          label: 'Document K',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-08-01',
          dateTo: '2024-08-07',
          repeat: 6,
        },
        {
          dateFrom: '2024-08-15',
          dateTo: '2024-08-20',
          repeat: 5,
        },
      ],
    },
    {
      date: '08.07.2024',
      sealNumber: 1008,
      docs: [
        {
          label: 'Label H1',
          debit: 200.0,
          credit: 100.0,
          amount: 300.0,
        },
        {
          label: 'Label H2',
          debit: 320.0,
          credit: 150.0,
          amount: 470.0,
        },
      ],
      documents: [
        {
          date: '2024-07-28',
          user: 'Ivy Baker',
          label: 'Document L',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-08-05',
          dateTo: '2024-08-10',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-25',
          dateTo: '2024-08-30',
          repeat: 5,
        },
      ],
    },
    {
      date: '01.07.2024',
      sealNumber: 1001,
      docs: [
        {
          label: 'Label A1',
          debit: 100.0,
          credit: 50.0,
          amount: 150.0,
        },
      ],
      documents: [
        {
          date: '2024-07-01',
          user: 'John Doe',
          label: 'Document A',
        },
        {
          date: '2024-07-02',
          user: 'Jane Smith',
          label: 'Document B',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-01',
          dateTo: '2024-07-07',
          repeat: 7,
        },
        {
          dateFrom: '2024-08-01',
          dateTo: '2024-08-31',
          repeat: 30,
        },
      ],
    },
    {
      date: '02.07.2024',
      sealNumber: 1002,
      docs: [
        {
          label: 'Label B1',
          debit: 150.0,
          credit: 100.0,
          amount: 250.0,
        },
        {
          label: 'Label B2',
          debit: 300.0,
          credit: 150.0,
          amount: 450.0,
        },
      ],
      documents: [
        {
          date: '2024-07-03',
          user: 'Alice Johnson',
          label: 'Document C',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-10',
          dateTo: '2024-07-15',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-15',
          dateTo: '2024-08-20',
          repeat: 5,
        },
      ],
    },
    {
      date: '03.07.2024',
      sealNumber: 1003,
      docs: [
        {
          label: 'Label C1',
          debit: 200.0,
          credit: 80.0,
          amount: 280.0,
        },
      ],
      documents: [
        {
          date: '2024-07-05',
          user: 'Bob Brown',
          label: 'Document D',
        },
        {
          date: '2024-07-07',
          user: 'Emily Green',
          label: 'Document E',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-20',
          dateTo: '2024-07-25',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-25',
          dateTo: '2024-08-30',
          repeat: 5,
        },
      ],
    },
    {
      date: '04.07.2024',
      sealNumber: 1004,
      docs: [
        {
          label: 'Label D1',
          debit: 120.0,
          credit: 60.0,
          amount: 180.0,
        },
        {
          label: 'Label D2',
          debit: 250.0,
          credit: 120.0,
          amount: 370.0,
        },
      ],
      documents: [
        {
          date: '2024-07-10',
          user: 'Charlie Davis',
          label: 'Document F',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-15',
          dateTo: '2024-07-20',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-10',
          dateTo: '2024-08-15',
          repeat: 5,
        },
      ],
    },
    {
      date: '05.07.2024',
      sealNumber: 1005,
      docs: [
        {
          label: 'Label E1',
          debit: 180.0,
          credit: 90.0,
          amount: 270.0,
        },
      ],
      documents: [
        {
          date: '2024-07-12',
          user: 'David Wilson',
          label: 'Document G',
        },
        {
          date: '2024-07-15',
          user: 'Eva Martinez',
          label: 'Document H',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-25',
          dateTo: '2024-07-30',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-20',
          dateTo: '2024-08-25',
          repeat: 5,
        },
      ],
    },
    {
      date: '06.07.2024',
      sealNumber: 1006,
      docs: [
        {
          label: 'Label F1',
          debit: 160.0,
          credit: 70.0,
          amount: 230.0,
        },
        {
          label: 'Label F2',
          debit: 280.0,
          credit: 130.0,
          amount: 410.0,
        },
      ],
      documents: [
        {
          date: '2024-07-20',
          user: 'Frank Harris',
          label: 'Document I',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-30',
          dateTo: '2024-08-05',
          repeat: 6,
        },
        {
          dateFrom: '2024-08-05',
          dateTo: '2024-08-10',
          repeat: 5,
        },
      ],
    },
    {
      date: '07.07.2024',
      sealNumber: 1007,
      docs: [
        {
          label: 'Label G1',
          debit: 140.0,
          credit: 60.0,
          amount: 200.0,
        },
      ],
      documents: [
        {
          date: '2024-07-22',
          user: 'Grace Lee',
          label: 'Document J',
        },
        {
          date: '2024-07-25',
          user: 'Henry Clark',
          label: 'Document K',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-08-01',
          dateTo: '2024-08-07',
          repeat: 6,
        },
        {
          dateFrom: '2024-08-15',
          dateTo: '2024-08-20',
          repeat: 5,
        },
      ],
    },
    {
      date: '08.07.2024',
      sealNumber: 1008,
      docs: [
        {
          label: 'Label H1',
          debit: 200.0,
          credit: 100.0,
          amount: 300.0,
        },
        {
          label: 'Label H2',
          debit: 320.0,
          credit: 150.0,
          amount: 470.0,
        },
      ],
      documents: [
        {
          date: '2024-07-28',
          user: 'Ivy Baker',
          label: 'Document L',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-08-05',
          dateTo: '2024-08-10',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-25',
          dateTo: '2024-08-30',
          repeat: 5,
        },
      ],
    },
    {
      date: '01.07.2024',
      sealNumber: 1001,
      docs: [
        {
          label: 'Label A1',
          debit: 100.0,
          credit: 50.0,
          amount: 150.0,
        },
      ],
      documents: [
        {
          date: '2024-07-01',
          user: 'John Doe',
          label: 'Document A',
        },
        {
          date: '2024-07-02',
          user: 'Jane Smith',
          label: 'Document B',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-01',
          dateTo: '2024-07-07',
          repeat: 7,
        },
        {
          dateFrom: '2024-08-01',
          dateTo: '2024-08-31',
          repeat: 30,
        },
      ],
    },
    {
      date: '02.07.2024',
      sealNumber: 1002,
      docs: [
        {
          label: 'Label B1',
          debit: 150.0,
          credit: 100.0,
          amount: 250.0,
        },
        {
          label: 'Label B2',
          debit: 300.0,
          credit: 150.0,
          amount: 450.0,
        },
      ],
      documents: [
        {
          date: '2024-07-03',
          user: 'Alice Johnson',
          label: 'Document C',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-10',
          dateTo: '2024-07-15',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-15',
          dateTo: '2024-08-20',
          repeat: 5,
        },
      ],
    },
    {
      date: '03.07.2024',
      sealNumber: 1003,
      docs: [
        {
          label: 'Label C1',
          debit: 200.0,
          credit: 80.0,
          amount: 280.0,
        },
      ],
      documents: [
        {
          date: '2024-07-05',
          user: 'Bob Brown',
          label: 'Document D',
        },
        {
          date: '2024-07-07',
          user: 'Emily Green',
          label: 'Document E',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-20',
          dateTo: '2024-07-25',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-25',
          dateTo: '2024-08-30',
          repeat: 5,
        },
      ],
    },
    {
      date: '04.07.2024',
      sealNumber: 1004,
      docs: [
        {
          label: 'Label D1',
          debit: 120.0,
          credit: 60.0,
          amount: 180.0,
        },
        {
          label: 'Label D2',
          debit: 250.0,
          credit: 120.0,
          amount: 370.0,
        },
      ],
      documents: [
        {
          date: '2024-07-10',
          user: 'Charlie Davis',
          label: 'Document F',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-15',
          dateTo: '2024-07-20',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-10',
          dateTo: '2024-08-15',
          repeat: 5,
        },
      ],
    },
    {
      date: '05.07.2024',
      sealNumber: 1005,
      docs: [
        {
          label: 'Label E1',
          debit: 180.0,
          credit: 90.0,
          amount: 270.0,
        },
      ],
      documents: [
        {
          date: '2024-07-12',
          user: 'David Wilson',
          label: 'Document G',
        },
        {
          date: '2024-07-15',
          user: 'Eva Martinez',
          label: 'Document H',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-25',
          dateTo: '2024-07-30',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-20',
          dateTo: '2024-08-25',
          repeat: 5,
        },
      ],
    },
    {
      date: '06.07.2024',
      sealNumber: 1006,
      docs: [
        {
          label: 'Label F1',
          debit: 160.0,
          credit: 70.0,
          amount: 230.0,
        },
        {
          label: 'Label F2',
          debit: 280.0,
          credit: 130.0,
          amount: 410.0,
        },
      ],
      documents: [
        {
          date: '2024-07-20',
          user: 'Frank Harris',
          label: 'Document I',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-30',
          dateTo: '2024-08-05',
          repeat: 6,
        },
        {
          dateFrom: '2024-08-05',
          dateTo: '2024-08-10',
          repeat: 5,
        },
      ],
    },
    {
      date: '07.07.2024',
      sealNumber: 1007,
      docs: [
        {
          label: 'Label G1',
          debit: 140.0,
          credit: 60.0,
          amount: 200.0,
        },
      ],
      documents: [
        {
          date: '2024-07-22',
          user: 'Grace Lee',
          label: 'Document J',
        },
        {
          date: '2024-07-25',
          user: 'Henry Clark',
          label: 'Document K',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-08-01',
          dateTo: '2024-08-07',
          repeat: 6,
        },
        {
          dateFrom: '2024-08-15',
          dateTo: '2024-08-20',
          repeat: 5,
        },
      ],
    },
    {
      date: '08.07.2024',
      sealNumber: 1008,
      docs: [
        {
          label: 'Label H1',
          debit: 200.0,
          credit: 100.0,
          amount: 300.0,
        },
        {
          label: 'Label H2',
          debit: 320.0,
          credit: 150.0,
          amount: 470.0,
        },
      ],
      documents: [
        {
          date: '2024-07-28',
          user: 'Ivy Baker',
          label: 'Document L',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-08-05',
          dateTo: '2024-08-10',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-25',
          dateTo: '2024-08-30',
          repeat: 5,
        },
      ],
    },
    {
      date: '01.07.2024',
      sealNumber: 1001,
      docs: [
        {
          label: 'Label A1',
          debit: 100.0,
          credit: 50.0,
          amount: 150.0,
        },
      ],
      documents: [
        {
          date: '2024-07-01',
          user: 'John Doe',
          label: 'Document A',
        },
        {
          date: '2024-07-02',
          user: 'Jane Smith',
          label: 'Document B',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-01',
          dateTo: '2024-07-07',
          repeat: 7,
        },
        {
          dateFrom: '2024-08-01',
          dateTo: '2024-08-31',
          repeat: 30,
        },
      ],
    },
    {
      date: '02.07.2024',
      sealNumber: 1002,
      docs: [
        {
          label: 'Label B1',
          debit: 150.0,
          credit: 100.0,
          amount: 250.0,
        },
        {
          label: 'Label B2',
          debit: 300.0,
          credit: 150.0,
          amount: 450.0,
        },
      ],
      documents: [
        {
          date: '2024-07-03',
          user: 'Alice Johnson',
          label: 'Document C',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-10',
          dateTo: '2024-07-15',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-15',
          dateTo: '2024-08-20',
          repeat: 5,
        },
      ],
    },
    {
      date: '03.07.2024',
      sealNumber: 1003,
      docs: [
        {
          label: 'Label C1',
          debit: 200.0,
          credit: 80.0,
          amount: 280.0,
        },
      ],
      documents: [
        {
          date: '2024-07-05',
          user: 'Bob Brown',
          label: 'Document D',
        },
        {
          date: '2024-07-07',
          user: 'Emily Green',
          label: 'Document E',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-20',
          dateTo: '2024-07-25',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-25',
          dateTo: '2024-08-30',
          repeat: 5,
        },
      ],
    },
    {
      date: '04.07.2024',
      sealNumber: 1004,
      docs: [
        {
          label: 'Label D1',
          debit: 120.0,
          credit: 60.0,
          amount: 180.0,
        },
        {
          label: 'Label D2',
          debit: 250.0,
          credit: 120.0,
          amount: 370.0,
        },
      ],
      documents: [
        {
          date: '2024-07-10',
          user: 'Charlie Davis',
          label: 'Document F',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-15',
          dateTo: '2024-07-20',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-10',
          dateTo: '2024-08-15',
          repeat: 5,
        },
      ],
    },
    {
      date: '05.07.2024',
      sealNumber: 1005,
      docs: [
        {
          label: 'Label E1',
          debit: 180.0,
          credit: 90.0,
          amount: 270.0,
        },
      ],
      documents: [
        {
          date: '2024-07-12',
          user: 'David Wilson',
          label: 'Document G',
        },
        {
          date: '2024-07-15',
          user: 'Eva Martinez',
          label: 'Document H',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-25',
          dateTo: '2024-07-30',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-20',
          dateTo: '2024-08-25',
          repeat: 5,
        },
      ],
    },
    {
      date: '06.07.2024',
      sealNumber: 1006,
      docs: [
        {
          label: 'Label F1',
          debit: 160.0,
          credit: 70.0,
          amount: 230.0,
        },
        {
          label: 'Label F2',
          debit: 280.0,
          credit: 130.0,
          amount: 410.0,
        },
      ],
      documents: [
        {
          date: '2024-07-20',
          user: 'Frank Harris',
          label: 'Document I',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-30',
          dateTo: '2024-08-05',
          repeat: 6,
        },
        {
          dateFrom: '2024-08-05',
          dateTo: '2024-08-10',
          repeat: 5,
        },
      ],
    },
    {
      date: '07.07.2024',
      sealNumber: 1007,
      docs: [
        {
          label: 'Label G1',
          debit: 140.0,
          credit: 60.0,
          amount: 200.0,
        },
      ],
      documents: [
        {
          date: '2024-07-22',
          user: 'Grace Lee',
          label: 'Document J',
        },
        {
          date: '2024-07-25',
          user: 'Henry Clark',
          label: 'Document K',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-08-01',
          dateTo: '2024-08-07',
          repeat: 6,
        },
        {
          dateFrom: '2024-08-15',
          dateTo: '2024-08-20',
          repeat: 5,
        },
      ],
    },
    {
      date: '08.07.2024',
      sealNumber: 1008,
      docs: [
        {
          label: 'Label H1',
          debit: 200.0,
          credit: 100.0,
          amount: 300.0,
        },
        {
          label: 'Label H2',
          debit: 320.0,
          credit: 150.0,
          amount: 470.0,
        },
      ],
      documents: [
        {
          date: '2024-07-28',
          user: 'Ivy Baker',
          label: 'Document L',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-08-05',
          dateTo: '2024-08-10',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-25',
          dateTo: '2024-08-30',
          repeat: 5,
        },
      ],
    },
    {
      date: '01.07.2024',
      sealNumber: 1001,
      docs: [
        {
          label: 'Label A1',
          debit: 100.0,
          credit: 50.0,
          amount: 150.0,
        },
      ],
      documents: [
        {
          date: '2024-07-01',
          user: 'John Doe',
          label: 'Document A',
        },
        {
          date: '2024-07-02',
          user: 'Jane Smith',
          label: 'Document B',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-01',
          dateTo: '2024-07-07',
          repeat: 7,
        },
        {
          dateFrom: '2024-08-01',
          dateTo: '2024-08-31',
          repeat: 30,
        },
      ],
    },
    {
      date: '02.07.2024',
      sealNumber: 1002,
      docs: [
        {
          label: 'Label B1',
          debit: 150.0,
          credit: 100.0,
          amount: 250.0,
        },
        {
          label: 'Label B2',
          debit: 300.0,
          credit: 150.0,
          amount: 450.0,
        },
      ],
      documents: [
        {
          date: '2024-07-03',
          user: 'Alice Johnson',
          label: 'Document C',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-10',
          dateTo: '2024-07-15',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-15',
          dateTo: '2024-08-20',
          repeat: 5,
        },
      ],
    },
    {
      date: '03.07.2024',
      sealNumber: 1003,
      docs: [
        {
          label: 'Label C1',
          debit: 200.0,
          credit: 80.0,
          amount: 280.0,
        },
      ],
      documents: [
        {
          date: '2024-07-05',
          user: 'Bob Brown',
          label: 'Document D',
        },
        {
          date: '2024-07-07',
          user: 'Emily Green',
          label: 'Document E',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-20',
          dateTo: '2024-07-25',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-25',
          dateTo: '2024-08-30',
          repeat: 5,
        },
      ],
    },
    {
      date: '04.07.2024',
      sealNumber: 1004,
      docs: [
        {
          label: 'Label D1',
          debit: 120.0,
          credit: 60.0,
          amount: 180.0,
        },
        {
          label: 'Label D2',
          debit: 250.0,
          credit: 120.0,
          amount: 370.0,
        },
      ],
      documents: [
        {
          date: '2024-07-10',
          user: 'Charlie Davis',
          label: 'Document F',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-15',
          dateTo: '2024-07-20',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-10',
          dateTo: '2024-08-15',
          repeat: 5,
        },
      ],
    },
    {
      date: '05.07.2024',
      sealNumber: 1005,
      docs: [
        {
          label: 'Label E1',
          debit: 180.0,
          credit: 90.0,
          amount: 270.0,
        },
      ],
      documents: [
        {
          date: '2024-07-12',
          user: 'David Wilson',
          label: 'Document G',
        },
        {
          date: '2024-07-15',
          user: 'Eva Martinez',
          label: 'Document H',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-25',
          dateTo: '2024-07-30',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-20',
          dateTo: '2024-08-25',
          repeat: 5,
        },
      ],
    },
    {
      date: '06.07.2024',
      sealNumber: 1006,
      docs: [
        {
          label: 'Label F1',
          debit: 160.0,
          credit: 70.0,
          amount: 230.0,
        },
        {
          label: 'Label F2',
          debit: 280.0,
          credit: 130.0,
          amount: 410.0,
        },
      ],
      documents: [
        {
          date: '2024-07-20',
          user: 'Frank Harris',
          label: 'Document I',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-30',
          dateTo: '2024-08-05',
          repeat: 6,
        },
        {
          dateFrom: '2024-08-05',
          dateTo: '2024-08-10',
          repeat: 5,
        },
      ],
    },
    {
      date: '07.07.2024',
      sealNumber: 1007,
      docs: [
        {
          label: 'Label G1',
          debit: 140.0,
          credit: 60.0,
          amount: 200.0,
        },
      ],
      documents: [
        {
          date: '2024-07-22',
          user: 'Grace Lee',
          label: 'Document J',
        },
        {
          date: '2024-07-25',
          user: 'Henry Clark',
          label: 'Document K',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-08-01',
          dateTo: '2024-08-07',
          repeat: 6,
        },
        {
          dateFrom: '2024-08-15',
          dateTo: '2024-08-20',
          repeat: 5,
        },
      ],
    },
    {
      date: '08.07.2024',
      sealNumber: 1008,
      docs: [
        {
          label: 'Label H1',
          debit: 200.0,
          credit: 100.0,
          amount: 300.0,
        },
        {
          label: 'Label H2',
          debit: 320.0,
          credit: 150.0,
          amount: 470.0,
        },
      ],
      documents: [
        {
          date: '2024-07-28',
          user: 'Ivy Baker',
          label: 'Document L',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-08-05',
          dateTo: '2024-08-10',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-25',
          dateTo: '2024-08-30',
          repeat: 5,
        },
      ],
    },
    {
      date: '01.07.2024',
      sealNumber: 1001,
      docs: [
        {
          label: 'Label A1',
          debit: 100.0,
          credit: 50.0,
          amount: 150.0,
        },
      ],
      documents: [
        {
          date: '2024-07-01',
          user: 'John Doe',
          label: 'Document A',
        },
        {
          date: '2024-07-02',
          user: 'Jane Smith',
          label: 'Document B',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-01',
          dateTo: '2024-07-07',
          repeat: 7,
        },
        {
          dateFrom: '2024-08-01',
          dateTo: '2024-08-31',
          repeat: 30,
        },
      ],
    },
    {
      date: '02.07.2024',
      sealNumber: 1002,
      docs: [
        {
          label: 'Label B1',
          debit: 150.0,
          credit: 100.0,
          amount: 250.0,
        },
        {
          label: 'Label B2',
          debit: 300.0,
          credit: 150.0,
          amount: 450.0,
        },
      ],
      documents: [
        {
          date: '2024-07-03',
          user: 'Alice Johnson',
          label: 'Document C',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-10',
          dateTo: '2024-07-15',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-15',
          dateTo: '2024-08-20',
          repeat: 5,
        },
      ],
    },
    {
      date: '03.07.2024',
      sealNumber: 1003,
      docs: [
        {
          label: 'Label C1',
          debit: 200.0,
          credit: 80.0,
          amount: 280.0,
        },
      ],
      documents: [
        {
          date: '2024-07-05',
          user: 'Bob Brown',
          label: 'Document D',
        },
        {
          date: '2024-07-07',
          user: 'Emily Green',
          label: 'Document E',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-20',
          dateTo: '2024-07-25',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-25',
          dateTo: '2024-08-30',
          repeat: 5,
        },
      ],
    },
    {
      date: '04.07.2024',
      sealNumber: 1004,
      docs: [
        {
          label: 'Label D1',
          debit: 120.0,
          credit: 60.0,
          amount: 180.0,
        },
        {
          label: 'Label D2',
          debit: 250.0,
          credit: 120.0,
          amount: 370.0,
        },
      ],
      documents: [
        {
          date: '2024-07-10',
          user: 'Charlie Davis',
          label: 'Document F',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-15',
          dateTo: '2024-07-20',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-10',
          dateTo: '2024-08-15',
          repeat: 5,
        },
      ],
    },
    {
      date: '05.07.2024',
      sealNumber: 1005,
      docs: [
        {
          label: 'Label E1',
          debit: 180.0,
          credit: 90.0,
          amount: 270.0,
        },
      ],
      documents: [
        {
          date: '2024-07-12',
          user: 'David Wilson',
          label: 'Document G',
        },
        {
          date: '2024-07-15',
          user: 'Eva Martinez',
          label: 'Document H',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-25',
          dateTo: '2024-07-30',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-20',
          dateTo: '2024-08-25',
          repeat: 5,
        },
      ],
    },
    {
      date: '06.07.2024',
      sealNumber: 1006,
      docs: [
        {
          label: 'Label F1',
          debit: 160.0,
          credit: 70.0,
          amount: 230.0,
        },
        {
          label: 'Label F2',
          debit: 280.0,
          credit: 130.0,
          amount: 410.0,
        },
      ],
      documents: [
        {
          date: '2024-07-20',
          user: 'Frank Harris',
          label: 'Document I',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-30',
          dateTo: '2024-08-05',
          repeat: 6,
        },
        {
          dateFrom: '2024-08-05',
          dateTo: '2024-08-10',
          repeat: 5,
        },
      ],
    },
    {
      date: '07.07.2024',
      sealNumber: 1007,
      docs: [
        {
          label: 'Label G1',
          debit: 140.0,
          credit: 60.0,
          amount: 200.0,
        },
      ],
      documents: [
        {
          date: '2024-07-22',
          user: 'Grace Lee',
          label: 'Document J',
        },
        {
          date: '2024-07-25',
          user: 'Henry Clark',
          label: 'Document K',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-08-01',
          dateTo: '2024-08-07',
          repeat: 6,
        },
        {
          dateFrom: '2024-08-15',
          dateTo: '2024-08-20',
          repeat: 5,
        },
      ],
    },
    {
      date: '08.07.2024',
      sealNumber: 1008,
      docs: [
        {
          label: 'Label H1',
          debit: 200.0,
          credit: 100.0,
          amount: 300.0,
        },
        {
          label: 'Label H2',
          debit: 320.0,
          credit: 150.0,
          amount: 470.0,
        },
      ],
      documents: [
        {
          date: '2024-07-28',
          user: 'Ivy Baker',
          label: 'Document L',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-08-05',
          dateTo: '2024-08-10',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-25',
          dateTo: '2024-08-30',
          repeat: 5,
        },
      ],
    },
    {
      date: '01.07.2024',
      sealNumber: 1001,
      docs: [
        {
          label: 'Label A1',
          debit: 100.0,
          credit: 50.0,
          amount: 150.0,
        },
      ],
      documents: [
        {
          date: '2024-07-01',
          user: 'John Doe',
          label: 'Document A',
        },
        {
          date: '2024-07-02',
          user: 'Jane Smith',
          label: 'Document B',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-01',
          dateTo: '2024-07-07',
          repeat: 7,
        },
        {
          dateFrom: '2024-08-01',
          dateTo: '2024-08-31',
          repeat: 30,
        },
      ],
    },
    {
      date: '02.07.2024',
      sealNumber: 1002,
      docs: [
        {
          label: 'Label B1',
          debit: 150.0,
          credit: 100.0,
          amount: 250.0,
        },
        {
          label: 'Label B2',
          debit: 300.0,
          credit: 150.0,
          amount: 450.0,
        },
      ],
      documents: [
        {
          date: '2024-07-03',
          user: 'Alice Johnson',
          label: 'Document C',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-10',
          dateTo: '2024-07-15',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-15',
          dateTo: '2024-08-20',
          repeat: 5,
        },
      ],
    },
    {
      date: '03.07.2024',
      sealNumber: 1003,
      docs: [
        {
          label: 'Label C1',
          debit: 200.0,
          credit: 80.0,
          amount: 280.0,
        },
      ],
      documents: [
        {
          date: '2024-07-05',
          user: 'Bob Brown',
          label: 'Document D',
        },
        {
          date: '2024-07-07',
          user: 'Emily Green',
          label: 'Document E',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-20',
          dateTo: '2024-07-25',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-25',
          dateTo: '2024-08-30',
          repeat: 5,
        },
      ],
    },
    {
      date: '04.07.2024',
      sealNumber: 1004,
      docs: [
        {
          label: 'Label D1',
          debit: 120.0,
          credit: 60.0,
          amount: 180.0,
        },
        {
          label: 'Label D2',
          debit: 250.0,
          credit: 120.0,
          amount: 370.0,
        },
      ],
      documents: [
        {
          date: '2024-07-10',
          user: 'Charlie Davis',
          label: 'Document F',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-15',
          dateTo: '2024-07-20',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-10',
          dateTo: '2024-08-15',
          repeat: 5,
        },
      ],
    },
    {
      date: '05.07.2024',
      sealNumber: 1005,
      docs: [
        {
          label: 'Label E1',
          debit: 180.0,
          credit: 90.0,
          amount: 270.0,
        },
      ],
      documents: [
        {
          date: '2024-07-12',
          user: 'David Wilson',
          label: 'Document G',
        },
        {
          date: '2024-07-15',
          user: 'Eva Martinez',
          label: 'Document H',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-25',
          dateTo: '2024-07-30',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-20',
          dateTo: '2024-08-25',
          repeat: 5,
        },
      ],
    },
    {
      date: '06.07.2024',
      sealNumber: 1006,
      docs: [
        {
          label: 'Label F1',
          debit: 160.0,
          credit: 70.0,
          amount: 230.0,
        },
        {
          label: 'Label F2',
          debit: 280.0,
          credit: 130.0,
          amount: 410.0,
        },
      ],
      documents: [
        {
          date: '2024-07-20',
          user: 'Frank Harris',
          label: 'Document I',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-30',
          dateTo: '2024-08-05',
          repeat: 6,
        },
        {
          dateFrom: '2024-08-05',
          dateTo: '2024-08-10',
          repeat: 5,
        },
      ],
    },
    {
      date: '07.07.2024',
      sealNumber: 1007,
      docs: [
        {
          label: 'Label G1',
          debit: 140.0,
          credit: 60.0,
          amount: 200.0,
        },
      ],
      documents: [
        {
          date: '2024-07-22',
          user: 'Grace Lee',
          label: 'Document J',
        },
        {
          date: '2024-07-25',
          user: 'Henry Clark',
          label: 'Document K',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-08-01',
          dateTo: '2024-08-07',
          repeat: 6,
        },
        {
          dateFrom: '2024-08-15',
          dateTo: '2024-08-20',
          repeat: 5,
        },
      ],
    },
    {
      date: '08.07.2024',
      sealNumber: 1008,
      docs: [
        {
          label: 'Label H1',
          debit: 200.0,
          credit: 100.0,
          amount: 300.0,
        },
        {
          label: 'Label H2',
          debit: 320.0,
          credit: 150.0,
          amount: 470.0,
        },
      ],
      documents: [
        {
          date: '2024-07-28',
          user: 'Ivy Baker',
          label: 'Document L',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-08-05',
          dateTo: '2024-08-10',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-25',
          dateTo: '2024-08-30',
          repeat: 5,
        },
      ],
    },
    {
      date: '01.07.2024',
      sealNumber: 1001,
      docs: [
        {
          label: 'Label A1',
          debit: 100.0,
          credit: 50.0,
          amount: 150.0,
        },
      ],
      documents: [
        {
          date: '2024-07-01',
          user: 'John Doe',
          label: 'Document A',
        },
        {
          date: '2024-07-02',
          user: 'Jane Smith',
          label: 'Document B',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-01',
          dateTo: '2024-07-07',
          repeat: 7,
        },
        {
          dateFrom: '2024-08-01',
          dateTo: '2024-08-31',
          repeat: 30,
        },
      ],
    },
    {
      date: '02.07.2024',
      sealNumber: 1002,
      docs: [
        {
          label: 'Label B1',
          debit: 150.0,
          credit: 100.0,
          amount: 250.0,
        },
        {
          label: 'Label B2',
          debit: 300.0,
          credit: 150.0,
          amount: 450.0,
        },
      ],
      documents: [
        {
          date: '2024-07-03',
          user: 'Alice Johnson',
          label: 'Document C',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-10',
          dateTo: '2024-07-15',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-15',
          dateTo: '2024-08-20',
          repeat: 5,
        },
      ],
    },
    {
      date: '03.07.2024',
      sealNumber: 1003,
      docs: [
        {
          label: 'Label C1',
          debit: 200.0,
          credit: 80.0,
          amount: 280.0,
        },
      ],
      documents: [
        {
          date: '2024-07-05',
          user: 'Bob Brown',
          label: 'Document D',
        },
        {
          date: '2024-07-07',
          user: 'Emily Green',
          label: 'Document E',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-20',
          dateTo: '2024-07-25',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-25',
          dateTo: '2024-08-30',
          repeat: 5,
        },
      ],
    },
    {
      date: '04.07.2024',
      sealNumber: 1004,
      docs: [
        {
          label: 'Label D1',
          debit: 120.0,
          credit: 60.0,
          amount: 180.0,
        },
        {
          label: 'Label D2',
          debit: 250.0,
          credit: 120.0,
          amount: 370.0,
        },
      ],
      documents: [
        {
          date: '2024-07-10',
          user: 'Charlie Davis',
          label: 'Document F',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-15',
          dateTo: '2024-07-20',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-10',
          dateTo: '2024-08-15',
          repeat: 5,
        },
      ],
    },
    {
      date: '05.07.2024',
      sealNumber: 1005,
      docs: [
        {
          label: 'Label E1',
          debit: 180.0,
          credit: 90.0,
          amount: 270.0,
        },
      ],
      documents: [
        {
          date: '2024-07-12',
          user: 'David Wilson',
          label: 'Document G',
        },
        {
          date: '2024-07-15',
          user: 'Eva Martinez',
          label: 'Document H',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-25',
          dateTo: '2024-07-30',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-20',
          dateTo: '2024-08-25',
          repeat: 5,
        },
      ],
    },
    {
      date: '06.07.2024',
      sealNumber: 1006,
      docs: [
        {
          label: 'Label F1',
          debit: 160.0,
          credit: 70.0,
          amount: 230.0,
        },
        {
          label: 'Label F2',
          debit: 280.0,
          credit: 130.0,
          amount: 410.0,
        },
      ],
      documents: [
        {
          date: '2024-07-20',
          user: 'Frank Harris',
          label: 'Document I',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-07-30',
          dateTo: '2024-08-05',
          repeat: 6,
        },
        {
          dateFrom: '2024-08-05',
          dateTo: '2024-08-10',
          repeat: 5,
        },
      ],
    },
    {
      date: '07.07.2024',
      sealNumber: 1007,
      docs: [
        {
          label: 'Label G1',
          debit: 140.0,
          credit: 60.0,
          amount: 200.0,
        },
      ],
      documents: [
        {
          date: '2024-07-22',
          user: 'Grace Lee',
          label: 'Document J',
        },
        {
          date: '2024-07-25',
          user: 'Henry Clark',
          label: 'Document K',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-08-01',
          dateTo: '2024-08-07',
          repeat: 6,
        },
        {
          dateFrom: '2024-08-15',
          dateTo: '2024-08-20',
          repeat: 5,
        },
      ],
    },
    {
      date: '08.07.2024',
      sealNumber: 1008,
      docs: [
        {
          label: 'Label H1',
          debit: 200.0,
          credit: 100.0,
          amount: 300.0,
        },
        {
          label: 'Label H2',
          debit: 320.0,
          credit: 150.0,
          amount: 470.0,
        },
      ],
      documents: [
        {
          date: '2024-07-28',
          user: 'Ivy Baker',
          label: 'Document L',
        },
      ],
      ventilation: [
        {
          dateFrom: '2024-08-05',
          dateTo: '2024-08-10',
          repeat: 5,
        },
        {
          dateFrom: '2024-08-25',
          dateTo: '2024-08-30',
          repeat: 5,
        },
      ],
    },
  ];
}
