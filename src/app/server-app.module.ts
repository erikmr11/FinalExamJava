import { ServerModule } from '@angular/platform-server';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    ServerModule,
    HttpClientModule
  ]
})
export class ServerAppModule {}
