export interface User {
  uuid: string;
  email: string;
  username: string;
}

export class UserDto implements User {
constructor (
      readonly uuid: string,
      readonly email: string,
      readonly username: string,
) {}

public static fromJson (data: User): UserDto {
  return new UserDto(
    data.uuid,
    data.email,
    data.username,
  )
}
}
