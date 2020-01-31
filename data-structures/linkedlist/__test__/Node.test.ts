import Node from "../Node";

describe('LinkedList > Node', () => {
    it('node with integer value', () => {
        const integerNode = new Node<number>();
        integerNode.value = 1;

        expect(integerNode.value).toBe(1);
        expect(integerNode.next).toBeUndefined();
    });

    it('node with string value', () => {
        const stringNode = new Node<string>();
        stringNode.value = 'sample string';

        expect(stringNode.value).toBe('sample string');
        expect(stringNode.next).toBeUndefined();
    });

    it('node with custom type value', () => {
        interface CustomType {
            name: string;
            message: string;
        }

        const objectNode = new Node<CustomType>();
        objectNode.value = {name: 'Patrick Swayze', message: 'RIP'};

        expect(objectNode).toBeInstanceOf(Object);
        expect(objectNode.value.name).toBe('Patrick Swayze');
        expect(objectNode.value.message).toBe('RIP');
        expect(objectNode.next).toBeUndefined();
    });

    it('linked nodes', () => {
        const secondNode = new Node<string>();
        secondNode.value = "The Godfather";

        const firstNode = new Node<string>();
        firstNode.value = "The Shawshank Redemption";
        firstNode.next = secondNode;

        expect(firstNode.next).toBeDefined();
        expect(secondNode.next).toBeUndefined();
        expect(firstNode.value).toBe("The Shawshank Redemption");
        expect(firstNode.next.value).toBe("The Godfather");
    });
});