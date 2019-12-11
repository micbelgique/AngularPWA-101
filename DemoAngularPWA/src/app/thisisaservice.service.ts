import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThisisaserviceService {

  private arr: string[];
  constructor() { }

  public getData(): any {
    return this.arr;
  }
  public addData(data: string): boolean {
    if (data.length > 0) {
      this.arr.push(data);
      return true;
    } else {
      return false;
    }
  }
  public deleteData(data: string): boolean {
    this.arr.forEach(
      item => {
        if (item === data) {
          const index = this.arr.indexOf(item, 0);
          this.arr.splice(index, 1);
          return true;
        }
      }
    );
    return false;
  }
}
