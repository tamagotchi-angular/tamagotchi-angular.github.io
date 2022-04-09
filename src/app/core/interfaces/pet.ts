import { IBase } from "./base";
import { IUser } from "./user";

export interface IPost extends IBase {
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
}