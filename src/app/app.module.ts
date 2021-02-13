import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppEffects } from './app.effects';
import { reducers, metaReducers } from './reducers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/modules/material/material.module';

import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { environment } from '../environments/environment';

import { NAVIGATION_CONFIG, NAVIGATION_CONFIG_VALUE } from './config/navigation.config';
import { SOCIAL_MEDIA_CONFIG, SOCIAL_MEDIA_VALUE } from './config/social-media.config';

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
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ],
    providers: [
        { provide: NAVIGATION_CONFIG, useValue: NAVIGATION_CONFIG_VALUE },
        { provide: SOCIAL_MEDIA_CONFIG, useValue: SOCIAL_MEDIA_VALUE },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
