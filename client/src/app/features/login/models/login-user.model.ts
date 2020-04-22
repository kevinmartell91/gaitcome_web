import { Deserializable } from '../../../shared/models/deserializable.model';

export class LoginUser implements Deserializable{
  usernmane: string;
  password: string;
  login_type: string;

  deserialize(input: any) {
  	Object.assign(this, input);
  	return this;
  }

  // deserialize(input: any): User {
  // 	But there's still one minor issue here: the car member won't be an instance of Car but still be an Object. We need to tell our deserialize method this manually:
  //   Object.assign(this, input);
  //   this.car = new Car().deserialize(input.car);
  //   return this;
  // }

}