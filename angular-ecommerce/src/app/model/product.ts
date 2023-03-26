export class Product {

    // no need to add properties separately & assingn in constructor, it will do atomagically
    //This is to reduce the boilerplate code
    constructor(public sku: string,
        public name: string,
        public description: string,
        public unitPrice: number,
        public imageUrl: string,
        public active: boolean,
        public unitsInStock: number,
        public dateCreated: Date,
        public lastUpdated: Date) { 
        }
}
