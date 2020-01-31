export default class Node<T> {
    private _value: T;
    private _next?: Node<T> = undefined;

    get value(): T {
        return this._value;
    }

    set value(value: T) {
        this._value = value;
    }

    get next(): Node<any> {
        return this._next;
    }

    set next(value: Node<any>) {
        this._next = value;
    }
}
