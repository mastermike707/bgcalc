/* eslint-disable @typescript-eslint/no-explicit-any */
 export default function addWithNoDuplicates(existingValues : any[], newValues: any[]) {
    const result = new Set(existingValues);
    newValues.forEach(item => result.add(item))
    return Array.from(result);
 }