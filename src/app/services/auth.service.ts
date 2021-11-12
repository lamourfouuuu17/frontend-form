import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  technology(){
    return [
      {
        id: 'angular',
        name: "Angular"
      },
      {
        id: 'react',
        name: "React"
      },
      {
        id: 'vue',
        name: "Vue"
      }
    ]
  }

  version(){
    return [
      {
        id: 'angular',
        name: "1.1.1"
      },
      {
        id: 'angular',
        name: "1.2.1"
      },
      {
        id: 'angular',
        name: "1.3.3"
      },
      {
        id: 'react',
        name: "2.1.2"
      },
      {
        id: 'react',
        name: "3.2.4"
      },
      {
        id: 'react',
        name: "4.3.1"
      },
      {
        id: 'vue',
        name: "3.3.1"
      },
      {
        id: 'vue',
        name: "5.2.1"
      },
      {
        id: 'vue',
        name: "5.3.1"
      }
    ]
  }
}
