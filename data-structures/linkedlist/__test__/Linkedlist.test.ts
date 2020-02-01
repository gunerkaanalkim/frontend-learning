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

        let foundItem = myList.find({callback: value => value.name === 'TURKEY'});

        expect(foundItem)
            .toStrictEqual({
                value: {
                    key: "TR",
                    name: "TURKEY"
                }
            });
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
});
