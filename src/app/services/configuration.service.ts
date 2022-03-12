import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private readonly BASE_URL: string = "BASE_URL";
  private readonly ACCES_KEY: string = "ACCES_KEY";

  constructor() { }

  getBaseUrl() : string {
    return localStorage.getItem(this.BASE_URL) || "";
  }

  getAccessKey() : string {
    return localStorage.getItem(this.ACCES_KEY) || "";
  }

  saveBaseUrl(value: string) {
    localStorage.setItem(this.BASE_URL, value);
  }

  saveAccessKey(value: string) {
    localStorage.setItem(this.ACCES_KEY, value);
  }
}


