import { type Sensation } from './sensation_dto';
import { type Feeling } from './feeling_dto';
import { type Emotion } from './emotion_dto';
import { type Need } from './need_dto';

export interface Entries {
    id: number;
    content: string;
    sensation: Sensation;
    feeling: Feeling;
    emotion: Emotion;
    need: Need;
    

}

export class EntriesDto implements Entries {
    constructor (
        readonly id: number,
        readonly content: string,
        readonly feeling: Feeling,
    ) {}

    public static fromJson (data: Entries): EntriesDto {
        return new EntriesDto(
            data.id,
            data.content,
            data.feeling,
        )
    }

    public static fromJsonArray (data: Entries[]): EntriesDto[] {
        return data.map(EntriesDto.fromJson)
    }
}