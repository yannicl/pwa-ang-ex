import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from 'src/app/services/configuration.service'

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private config: ConfigurationService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.config.saveBaseUrl(params['baseUrl']);
      this.config.saveBaseUrl(params['accessKey']);
    }); 
  }

}
