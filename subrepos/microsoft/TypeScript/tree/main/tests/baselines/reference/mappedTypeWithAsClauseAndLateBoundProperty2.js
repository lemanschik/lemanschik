//// [tests/cases/compiler/mappedTypeWithAsClauseAndLateBoundProperty2.ts] ////

//// [mappedTypeWithAsClauseAndLateBoundProperty2.ts]
export const thing = (null as any as { [K in keyof number[] as Exclude<K, "length">]: (number[])[K] });


//// [mappedTypeWithAsClauseAndLateBoundProperty2.js]
export const thing = null;


//// [mappedTypeWithAsClauseAndLateBoundProperty2.d.ts]
export declare const thing: {
    [x: number]: number;
    toString: () => string;
    toLocaleString: () => string;
    pop: () => number;
    push: (...items: number[]) => number;
    concat: {
        (...items: ConcatArray<number>[]): number[];
        (...items: (number | ConcatArray<number>)[]): number[];
    };
    join: (separator?: string) => string;
    reverse: () => number[];
    shift: () => number;
    slice: (start?: number, end?: number) => number[];
    sort: (compareFn?: (a: number, b: number) => number) => number[];
    splice: {
        (start: number, deleteCount?: number): number[];
        (start: number, deleteCount: number, ...items: number[]): number[];
    };
    unshift: (...items: number[]) => number;
    indexOf: (searchElement: number, fromIndex?: number) => number;
    lastIndexOf: (searchElement: number, fromIndex?: number) => number;
    every: {
        <S extends number>(predicate: (value: number, index: number, array: number[]) => value is S, thisArg?: any): this is S[];
        (predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): boolean;
    };
    some: (predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any) => boolean;
    forEach: (callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any) => void;
    map: <U>(callbackfn: (value: number, index: number, array: number[]) => U, thisArg?: any) => U[];
    filter: {
        <S_1 extends number>(predicate: (value: number, index: number, array: number[]) => value is S_1, thisArg?: any): S_1[];
        (predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): number[];
    };
    reduce: {
        (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number;
        (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number;
        <U_1>(callbackfn: (previousValue: U_1, currentValue: number, currentIndex: number, array: number[]) => U_1, initialValue: U_1): U_1;
    };
    reduceRight: {
        (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number;
        (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number;
        <U_2>(callbackfn: (previousValue: U_2, currentValue: number, currentIndex: number, array: number[]) => U_2, initialValue: U_2): U_2;
    };
    find: {
        <S_2 extends number>(predicate: (value: number, index: number, obj: number[]) => value is S_2, thisArg?: any): S_2;
        (predicate: (value: number, index: number, obj: number[]) => unknown, thisArg?: any): number;
    };
    findIndex: (predicate: (value: number, index: number, obj: number[]) => unknown, thisArg?: any) => number;
    fill: (value: number, start?: number, end?: number) => number[];
    copyWithin: (target: number, start?: number, end?: number) => number[];
    entries: () => IterableIterator<[number, number]>;
    keys: () => IterableIterator<number>;
    values: () => IterableIterator<number>;
    includes: (searchElement: number, fromIndex?: number) => boolean;
    flatMap: <U_3, This = undefined>(callback: (this: This, value: number, index: number, array: number[]) => U_3 | readonly U_3[], thisArg?: This) => U_3[];
    flat: <A, D extends number = 1>(this: A, depth?: D) => FlatArray<A, D>[];
    [Symbol.iterator]: () => IterableIterator<number>;
    readonly [Symbol.unscopables]: {
        [x: number]: boolean;
        length?: boolean;
        toString?: boolean;
        toLocaleString?: boolean;
        pop?: boolean;
        push?: boolean;
        concat?: boolean;
        join?: boolean;
        reverse?: boolean;
        shift?: boolean;
        slice?: boolean;
        sort?: boolean;
        splice?: boolean;
        unshift?: boolean;
        indexOf?: boolean;
        lastIndexOf?: boolean;
        every?: boolean;
        some?: boolean;
        forEach?: boolean;
        map?: boolean;
        filter?: boolean;
        reduce?: boolean;
        reduceRight?: boolean;
        find?: boolean;
        findIndex?: boolean;
        fill?: boolean;
        copyWithin?: boolean;
        entries?: boolean;
        keys?: boolean;
        values?: boolean;
        includes?: boolean;
        flatMap?: boolean;
        flat?: boolean;
        [Symbol.iterator]?: boolean;
        readonly [Symbol.unscopables]?: boolean;
    };
};


//// [DtsFileErrors]


mappedTypeWithAsClauseAndLateBoundProperty2.d.ts(24,118): error TS2526: A 'this' type is available only in a non-static member of a class or interface.


==== mappedTypeWithAsClauseAndLateBoundProperty2.d.ts (1 errors) ====
    export declare const thing: {
        [x: number]: number;
        toString: () => string;
        toLocaleString: () => string;
        pop: () => number;
        push: (...items: number[]) => number;
        concat: {
            (...items: ConcatArray<number>[]): number[];
            (...items: (number | ConcatArray<number>)[]): number[];
        };
        join: (separator?: string) => string;
        reverse: () => number[];
        shift: () => number;
        slice: (start?: number, end?: number) => number[];
        sort: (compareFn?: (a: number, b: number) => number) => number[];
        splice: {
            (start: number, deleteCount?: number): number[];
            (start: number, deleteCount: number, ...items: number[]): number[];
        };
        unshift: (...items: number[]) => number;
        indexOf: (searchElement: number, fromIndex?: number) => number;
        lastIndexOf: (searchElement: number, fromIndex?: number) => number;
        every: {
            <S extends number>(predicate: (value: number, index: number, array: number[]) => value is S, thisArg?: any): this is S[];
                                                                                                                         ~~~~
!!! error TS2526: A 'this' type is available only in a non-static member of a class or interface.
            (predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): boolean;
        };
        some: (predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any) => boolean;
        forEach: (callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any) => void;
        map: <U>(callbackfn: (value: number, index: number, array: number[]) => U, thisArg?: any) => U[];
        filter: {
            <S_1 extends number>(predicate: (value: number, index: number, array: number[]) => value is S_1, thisArg?: any): S_1[];
            (predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): number[];
        };
        reduce: {
            (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number;
            (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number;
            <U_1>(callbackfn: (previousValue: U_1, currentValue: number, currentIndex: number, array: number[]) => U_1, initialValue: U_1): U_1;
        };
        reduceRight: {
            (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number;
            (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number;
            <U_2>(callbackfn: (previousValue: U_2, currentValue: number, currentIndex: number, array: number[]) => U_2, initialValue: U_2): U_2;
        };
        find: {
            <S_2 extends number>(predicate: (value: number, index: number, obj: number[]) => value is S_2, thisArg?: any): S_2;
            (predicate: (value: number, index: number, obj: number[]) => unknown, thisArg?: any): number;
        };
        findIndex: (predicate: (value: number, index: number, obj: number[]) => unknown, thisArg?: any) => number;
        fill: (value: number, start?: number, end?: number) => number[];
        copyWithin: (target: number, start?: number, end?: number) => number[];
        entries: () => IterableIterator<[number, number]>;
        keys: () => IterableIterator<number>;
        values: () => IterableIterator<number>;
        includes: (searchElement: number, fromIndex?: number) => boolean;
        flatMap: <U_3, This = undefined>(callback: (this: This, value: number, index: number, array: number[]) => U_3 | readonly U_3[], thisArg?: This) => U_3[];
        flat: <A, D extends number = 1>(this: A, depth?: D) => FlatArray<A, D>[];
        [Symbol.iterator]: () => IterableIterator<number>;
        readonly [Symbol.unscopables]: {
            [x: number]: boolean;
            length?: boolean;
            toString?: boolean;
            toLocaleString?: boolean;
            pop?: boolean;
            push?: boolean;
            concat?: boolean;
            join?: boolean;
            reverse?: boolean;
            shift?: boolean;
            slice?: boolean;
            sort?: boolean;
            splice?: boolean;
            unshift?: boolean;
            indexOf?: boolean;
            lastIndexOf?: boolean;
            every?: boolean;
            some?: boolean;
            forEach?: boolean;
            map?: boolean;
            filter?: boolean;
            reduce?: boolean;
            reduceRight?: boolean;
            find?: boolean;
            findIndex?: boolean;
            fill?: boolean;
            copyWithin?: boolean;
            entries?: boolean;
            keys?: boolean;
            values?: boolean;
            includes?: boolean;
            flatMap?: boolean;
            flat?: boolean;
            [Symbol.iterator]?: boolean;
            readonly [Symbol.unscopables]?: boolean;
        };
    };
    