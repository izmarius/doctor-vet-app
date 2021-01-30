export function convertSnapshots<T>(snaps): any {
  return snaps.map(snap => {
    return {
      id: snap.payload.doc.id,
      ...snap.payload.doc.data()
    } as T;
  });
}
