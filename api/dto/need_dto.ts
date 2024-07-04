import { type Feeling } from './feeling_dto';

export interface Need {
  id: number;
  content: string;
  picture: string;
  feeling?: Feeling;
}

export class NeedDto implements Need {
  constructor (
    readonly id: number,
    readonly content: string,
    readonly picture: string,
    readonly feeling?: Feeling,
  ) {}

  public static fromJson (data: Need): NeedDto {
    return new NeedDto(
      data.id,
      data.content,
      data.picture,
      data?.feeling,
    )
  }

  public static fromJsonArray (data: Need[]): NeedDto[] {
    return data.map(NeedDto.fromJson)
  }
}