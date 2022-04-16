import { IBase } from "./base";
import { IUser } from "./user";

export interface IPet extends IBase {
    petName: string;
    owner: IUser['_id'];
    likes: string[];
    friends: string[];
    trainMeter : number,
    sleepMeter : number,
    bathMeter : number,
    eatMeter : number,
    level: string,
    created_at: string;
    updatedAt: string;
    type: string
    //petPicture: File
}