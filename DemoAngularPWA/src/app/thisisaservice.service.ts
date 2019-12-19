import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ThisisaserviceService {

  private arr: any;
  constructor(
    private httpClient: HttpClient
  ) {
    this.arr = [];
   }

  public getData(): any {
    this.httpClient.get('https://hephcondorcet2019api.azurewebsites.net/api/strings').subscribe(
      result => {
        this.arr = result;
      }
    );
    return this.arr;
  }
  public addData(data: string): boolean {
    if (data.length > 0) {
      this.httpClient.post('https://hephcondorcet2019api.azurewebsites.net/api/strings', data).subscribe(
        result => {
          this.getData();
          return result;
        }
      )
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
