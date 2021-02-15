export type PathParameterType = string | number | boolean;

export interface PathParameter<T extends PathParameterType> {
    readonly name: string;
    value?: T;
}

class BasePathParameter<T extends PathParameterType> implements PathParameter<T> {
    private readonly _name: string;
    private _value?: T;

    constructor(name: string, value?: T) {
        this._name = name;
        this.value = value;
    }

    public get name() {
        return this._name;
    }

    public set value(value: T) {
        this._value = value;
    }

    public get value() {
        return this._value;
    }

    public hasValue(): boolean {
        return this.value != null;
    }
}

export class StringPathParameter extends BasePathParameter<string> {
    constructor(name: string, value?: string) {
        super(name, value);
    }
}

export class NumberPathParameter extends BasePathParameter<number> {
    constructor(name: string, value?: number) {
        super(name, value);
    }
}

export class BooleanPathParameter extends BasePathParameter<boolean> {
    constructor(name: string, value?: boolean) {
        super(name, value);
    }
}
