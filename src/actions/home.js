export const LOG_TEST = 'LOG_TEST'

export function test(text){
  return {
    type: LOG_TEST,
    text
  };
}
