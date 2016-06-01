module IonicGreen.Factory {
    export class BaseObject {

        private data;

        constructor() {

        }

        public setData(object): void {
            this.data = !!object ? object : {};
        }

        public getData(): any {
            return this.data;
        }

        public getId(): void {
            return this.get('id');
        }

        public setId(id: any): void {
            this.set('id', id);
        }

        public set(key: any, value: any): void {
            this.data[key] = value;
        }

        public get(key: any): any {
            if (!!this.data[key]) {
                return this.data[key];
            } else if (this.data[key] === false) {
                return false;
            } else {
                return null
            }
        }

        public validate(validation): void {

        }
    }
}
