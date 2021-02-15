export type PathParameterType = string | number | boolean;

export interface PathParameter<T extends PathParameterType> {
    readonly name: string;
    readonly value: T | null;
}

class BasePathParameter<T extends PathParameterType> implements PathParameter<T> {
    private readonly _name: string;
    private readonly _value: T | null;

    constructor(name: string, value?: T | null) {
        this._name = name;
        this._value = value ?? null;
    }

    public get name() {
        return this._name;
    }

    public get value() {
        return this._value;
    }

    public hasValue(): boolean {
        return this.value != null;
    }
}

export class StringPathParameter extends BasePathParameter<string> {
    constructor(name: string, value?: string | null) {
        super(name, value);
    }
}

export class NumberPathParameter extends BasePathParameter<number> {
    constructor(name: string, value?: number | null) {
        super(name, value);
    }
}

export class BooleanPathParameter extends BasePathParameter<boolean> {
    constructor(name: string, value?: boolean | null) {
        super(name, value);
    }
}
