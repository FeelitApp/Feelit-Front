import { type Sensation } from './sensation_dto';
import { type Feeling } from './feeling_dto';
import { type Emotion } from './emotion_dto';
import { type Need } from './need_dto';

export interface Entry {
    id: number;
    sensation: Sensation;
    feeling: Feeling;
    emotion: Emotion;
    need: Need;
    created_at: string;
    comment: string;
}

export class EntryDto implements Entry {
    constructor (
        readonly id: number,
        readonly sensation: Sensation,
        readonly feeling: Feeling,
        readonly emotion: Emotion,
        readonly need: Need,
        readonly created_at: Date,
        readonly comment: string,
    ) {}

    public static fromJson (data: Entry): EntryDto {
        return new EntryDto(
            data.id,
            data.sensation,
            data.feeling,
            data.emotion,
            data.need,
            new Date(data.created_at),
            data.comment,
        )
    }

    public static fromJsonArray (data: Entry[]): EntryDto[] {
        return data.map(EntryDto.fromJson)
    }
}