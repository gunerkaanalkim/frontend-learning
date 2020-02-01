import LinkedList from "../LinkedList";

describe('LinkedList', () => {
    it("Add new node to linkedlist", () => {
        let myList = new LinkedList<number>();
        myList.add(1);
        myList.add(2);
        myList.add(3);

        expect(myList.head.value).toBe(1);
        expect(myList.tail.value).toBe(3);
    });

    it("find item with primitive type in linkedlist", () => {
        let myList = new LinkedList<number>();
        myList.add(1);
        myList.add(2);
        myList.add(3);

        expect(myList.find({value: 2})).toStrictEqual({value: 2});
    });

    it("find item with object type in linkedlist", () => {
        interface CountrySetting {
            name: string;
            key?: string;
        }

        let myList = new LinkedList<CountrySetting>();
        myList.add({key: "TR", name: "TURKEY"});
        myList.add({key: "UK", name: "U. KINGDOM"});
        myList.add({key: "USA", name: "UNITED STATED"});
        myList.add({key: "RU", name: "RUSSIA"});

        expect(myList.find({callback: value => value.name === 'TURKEY'}))
            .toStrictEqual({
                value: {
                    key: "TR",
                    name: "TURKEY"
                }
            });
    });

    it("linkedlist is empty", () => {
        let myList = new LinkedList<number>();

        expect(myList.isEmpty()).toBe(true);

        myList.add(1);

        expect(myList.isEmpty()).toBe(false);
    });

    it("remove item with primitive type from linkedlist", () => {
        let myList = new LinkedList<number>();
        myList.add(1);
        myList.add(2);
        myList.add(3);

        let removedItem = myList.remove({value: 2});

        expect(removedItem).toStrictEqual({value: 2});
    });

    it("remove item with object type from linkedlist", () => {
        interface CountrySetting {
            name: string;
            key?: string;
        }

        let myList = new LinkedList<CountrySetting>();
        myList.add({key: "TR", name: "TURKEY"});
        myList.add({key: "UK", name: "U. KINGDOM"});
        myList.add({key: "USA", name: "UNITED STATED"});
        myList.add({key: "RU", name: "RUSSIA"});

        let removedItem = myList.remove({
            value: {
                name: "TURKEY"
            },
            callback: value => value.name === 'TURKEY'
        });

        expect(removedItem)
            .toStrictEqual({
                value: {
                    key: "TR",
                    name: "TURKEY"
                }
            });
    });

    it("linkedlist size", () => {
        let myList = new LinkedList<number>();
        myList.add(1);
        myList.add(2);
        myList.add(3);
        myList.add(4);

        expect(myList.size()).toBe(4);
    });
});
