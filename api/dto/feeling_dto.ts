export interface Feeling {
  id: number;
  category: string;
  emoji: string;
}

export class FeelingDto implements Feeling {
  constructor (
    readonly id: number,
    readonly category: string,
    readonly emoji: string,
  ) {}

  public static fromJson (data: Feeling): FeelingDto {
    return new FeelingDto(
      data.id,
      data.category,
      data.emoji,
    )
  }

  public static fromJsonArray (data: Feeling[]): FeelingDto[] {
    return data.map(FeelingDto.fromJson)
  }
}