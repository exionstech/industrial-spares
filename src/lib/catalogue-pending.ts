/*
 * Table shapes for variants whose catalogue the client has not supplied yet.
 * Each one reuses the columns its filled sibling uses, so a pending page shows
 * the real shape of its table with the rows left blank. These headers are
 * inferred from the siblings - they are not client data, unlike catalogue-tables.
 */

const PENDING_COLUMNS: Record<string, readonly string[]> = {};

export const pendingColumnsFor = (
  familyId: string,
  typeId: string,
  variantId: string,
): readonly string[] | undefined => PENDING_COLUMNS[`${familyId}/${typeId}/${variantId}`];
