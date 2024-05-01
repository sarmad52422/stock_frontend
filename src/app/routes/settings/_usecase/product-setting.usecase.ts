import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { SettingPayload } from '../_data/setting.payload';

@Injectable({ providedIn: 'root' })
export class ProductSettingUsecase {
    private url = environment.api.baseUrl + '/setting-product';

    constructor(private http: HttpClient) {}

    public getSettings() {
        return this.http.get<SettingPayload[]>(`${this.url}/all`);
    }
}
