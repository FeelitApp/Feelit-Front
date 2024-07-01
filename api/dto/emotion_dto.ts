import { type Feeling } from './feeling_dto';

export interface Emotion {
  id: number;
  content: string;
  feeling: Feeling;
}

export class EmotionDto implements Emotion {
  constructor (
    readonly id: number,
    readonly content: string,
    readonly feeling: Feeling,
  ) {}

  public static fromJson (data: Emotion): EmotionDto {
    return new EmotionDto(
      data.id,
      data.content,
      data.feeling,
    )
  }

  public static fromJsonArray (data: Emotion[]): EmotionDto[] {
    return data.map(EmotionDto.fromJson)
  }
}