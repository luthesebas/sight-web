import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

import { NavigationConfig } from 'src/app/config/navigation.config';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    private _showMainNavigation: boolean = true;
    private _showSideNavigation: boolean = false;

    @Input()
    navigationConfig!: NavigationConfig;

    @Output()
    sideNavigationToggled = new EventEmitter();

    // ------------------------------------------------------------------------
    // Getters and Setters
    // ------------------------------------------------------------------------

    @Input()
    set showMainNavigation(value: any) {
        this._showMainNavigation = coerceBooleanProperty(value);
    }
    get showMainNavigation() {
        return this._showMainNavigation;
    }

    @Input()
    set showSideNavigation(value: any) {
        this._showSideNavigation = coerceBooleanProperty(value);
    }
    get showSideNavigation() {
        return this._showSideNavigation;
    }
}
