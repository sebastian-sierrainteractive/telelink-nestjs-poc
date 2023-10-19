declare const _tag: unique symbol;

/**
 * Provides a way to create nominal types. Also known as "Branded Types".
 * @example
 * type UserId = Tagged<'UserId', string>
 */
export type Tagged<T, A> = A & { readonly [_tag]: T };
export type TaggedValue<A> = A extends Tagged<TagOf<A>, infer R> ? R : never;
export type TagOf<A> = A extends Tagged<infer R, unknown> ? R : never;

export const tagged = <T extends Tagged<unknown, unknown>>(
  value: TaggedValue<T>,
): T => {
  return value as T;
};

export interface UseCase<T, R> {
  execute(input: T): Promise<R>;
}
