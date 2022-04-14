import { IBase } from "./base";
import { IUser } from "./user";

export interface IPet extends IBase {
    petName: string;
    owner: IUser;
    likes: string[];
    friends: string[];
    trainMeter : number,
    sleepMeter : number,
    bathMeter : number,
    eatMeter : number,
    status: string,
    created_at: string;
    updatedAt: string;
    petPicture: File
}