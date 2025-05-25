export function insertRow(row: Record<string, any>): number {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId: number): void {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId: number, row: Record<string, any>): number {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}
