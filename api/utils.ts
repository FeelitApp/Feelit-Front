import { FetchError } from 'ofetch'

export type JsonObject = {[key: string]: any}
export type JsonArray<T = any> = T[]
export type Instanciable<T, Args extends any[] = any> = new (...args: Args) => T

export function isBadRequest (e: any): e is FetchError {
  return e instanceof FetchError && e.statusCode === 400
}

export function proxifyEndpointInput<Input, InputType extends Instanciable<Input>, OutputType> (endpoint: (input: Input) => OutputType, InputBuilder: InputType): (...args: ConstructorParameters<InputType>) => OutputType {
  return (...args: ConstructorParameters<InputType>) => {
    const input = new InputBuilder(...args as any)
    return endpoint(input)
  }
}
