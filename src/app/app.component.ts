import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <div>
      <h1>{{ pageHeader }}</h1>
    </div>
  `
})
export class AppComponent {
  pageHeader: string = "Employee Details";
}
