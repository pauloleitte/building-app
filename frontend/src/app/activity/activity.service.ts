import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Activity } from "./models/Activity";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ActivityService {
  constructor(private http: HttpClient) {}

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${environment.urlApi}/activity`);
  }

  getActivity(id: string): Observable<Activity> {
    return this.http.get<Activity>(`${environment.urlApi}/activity/${id}`);
  }

  postActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(`${environment.urlApi}/activity`, activity);
  }

  putActivity(activity: Activity): Observable<Activity> {
    return this.http.put<Activity>(
      `${environment.urlApi}/activity/${activity.id}`,
      activity
    );
  }

  deleteActivity(id: string): Observable<Activity> {
    return this.http.delete<Activity>(`${environment.urlApi}/activity/${id}`);
  }
}
