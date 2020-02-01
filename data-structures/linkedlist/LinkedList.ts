import Node from "./Node";

interface SearchPattern<T> {
    value?: T;
    callback?: Function;
}

export default class LinkedList<T> {
    private _head: Node<T> = undefined;
    private _tail: Node<T> = undefined;

    add(value: T): LinkedList<T> {
        const newNode = new Node<T>();
        newNode.value = value;

        if (this.isFirstNode()) {
            this.addFirstNode(newNode);

            return this;
        }

        this._tail.next = newNode;
        this._tail = newNode;

        return this;
    }

    find(setting: SearchPattern<T>): { value: T } {
        if (this.isFirstNode()) {
            return {value: undefined};
        }

        let currentNode = this._head;

        while (currentNode) {
            if (setting.callback && setting.callback(currentNode.value)) {
                return {value: currentNode.value};
            }

            if (setting.value !== undefined && currentNode.value === setting.value) {
                return {value: currentNode.value};
            }

            currentNode = currentNode.next;
        }

        return {value: undefined}
    }

    remove(setting: SearchPattern<T>): { value: T } {
        if (this.isFirstNode()) {
            return {value: undefined}
        }

        let deletedNode: Node<T> = null;

        while (this._head && this._head.value === setting.value) {
            deletedNode = this._head;
            this._head = this._head.next;
        }

        let currentNode = this.getCurrentNode(setting);

        deletedNode = currentNode;
        currentNode = currentNode.next;

        if (this._tail.value === setting.value) {
            this._tail = currentNode;
        }

        return {value: deletedNode.value};
    }

    isEmpty(): boolean {
        return this.isFirstNode();
    }

    size() {

    }

    private addFirstNode(newNode) {
        this._head = newNode;
        this._tail = newNode;
    }

    private isFirstNode(): boolean {
        return !this._head;
    }

    private getCurrentNode(setting): Node<T> {
        let currentNode = this._head;

        while (currentNode) {
            if (setting.callback && setting.callback(currentNode.value)) {
                return currentNode;
            }

            if (setting.value !== undefined && currentNode.value === setting.value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }
    }

    get head(): Node<T> {
        return this._head;
    }

    get tail(): Node<T> {
        return this._tail;
    }
}