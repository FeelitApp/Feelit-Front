import { type Feeling } from './feeling_dto';

export interface Sensation {
  id: number;
  content: string;
  feeling: Feeling;
}

export class SensationDto implements Sensation {
  constructor (
    readonly id: number,
    readonly content: string,
    readonly feeling: Feeling,
  ) {}

  public static fromJson (data: Sensation): SensationDto {
    return new SensationDto(
      data.id,
      data.content,
      data.feeling,
    )
  }

  public static fromJsonArray (data: Sensation[]): SensationDto[] {
    return data.map(SensationDto.fromJson)
  }
}