export interface User {
  id: number;
  name: string;
}

export function displayUser(user: User): string {
  return `${user.name} (${user.id})`
}

export function userIncludes(user: User, lowerCaseSearch: string): boolean {
  return user.name.toLowerCase().includes(lowerCaseSearch);
}

export function compareUsers(u1: User, u2: User): boolean {
  if (u1 == null || u2 == null) {
    return false;
  }
  return (u1 === u2) || (u1.id === u2.id);
}
