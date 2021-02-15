import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NAVIGATION_CONFIG, NAVIGATION_CONFIG_VALUE } from './config/navigation.config';
import { SOCIAL_MEDIA_CONFIG, SOCIAL_MEDIA_VALUE } from './config/social-media.config';
import { metaReducers, reducers } from './reducers';
import { MaterialModule } from './shared/modules/material/material.module';

@NgModule({
    declarations: [
        AppComponent,
        LogoComponent,
        HeaderComponent,
        FooterComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,

        MaterialModule,

        // App Modules
        AppRoutingModule, // Must be placed after App Modules

        // NgRx
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([AppEffects]),
    ],
    providers: [
        { provide: NAVIGATION_CONFIG, useValue: NAVIGATION_CONFIG_VALUE },
        { provide: SOCIAL_MEDIA_CONFIG, useValue: SOCIAL_MEDIA_VALUE },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
