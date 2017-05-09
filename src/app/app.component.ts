import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(
    private _iconRegistry: MdIconRegistry,
    private _domSanitizer: DomSanitizer)
  {
    _iconRegistry.addSvgIcon("tlogo", _domSanitizer.bypassSecurityTrustResourceUrl("assets/t.svg"));
  }
}
