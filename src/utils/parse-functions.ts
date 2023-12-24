export function toCamelCase(str: string): string {
  return str.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase().replace(/[-_]/g, '');
  });
}
