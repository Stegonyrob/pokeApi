
export default class Pokemon {

   constructor(name, image, type) {
       this.name = name
       this.image = image
       this.type = type
   }

   getName() {
       return this.name
   }

   getImage() {
       return this.image
   }

   getType() {
       return this.type
   }

}