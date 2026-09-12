/*
 * Table shapes for variants whose catalogue the client has not supplied yet.
 * Each one reuses the columns its filled sibling uses, so a pending page shows
 * the real shape of its table with the rows left blank. These headers are
 * inferred from the siblings - they are not client data, unlike catalogue-tables.
 */

/* Imperial collars - solid and split alike. */
const COLLAR_IMPERIAL = [
  "ISP Part No",
  "Bore Size (in)",
  "I.D. (in)",
  "O.D. (in)",
  "Width (in)",
  "Screw Size",
  "Screw Length",
] as const;

/* Metric solid collars: set screws, and no screw length in the client's sheets. */
const COLLAR_METRIC_SOLID = [
  "ISP Part No",
  "I.D. (mm)",
  "O.D. (mm)",
  "Width (mm)",
  "Set Screw Size",
] as const;

/* Metric split collars: cap screws, with a length column. */
const COLLAR_METRIC_SPLIT = [
  "ISP Part No",
  "I.D. (mm)",
  "O.D. (mm)",
  "Width (mm)",
  "Cap Screw Size",
  "Screw Length",
] as const;

/* Threaded bores are specified by thread, so no bore diameter column. */
const COLLAR_THREADED = [
  "ISP Part No",
  "Thread Size",
  "I.D. Thread",
  "O.D. (in)",
  "Width (in)",
  "Cap Screw Size",
  "Screw Length",
] as const;

const PENDING_COLUMNS: Record<string, readonly string[]> = {
  "shaft-collars/solid/stainless-steel-316-imperial": COLLAR_IMPERIAL,
  "shaft-collars/solid/black-oxide-imperial": COLLAR_IMPERIAL,
  "shaft-collars/solid/stainless-steel-metric": COLLAR_METRIC_SOLID,
  "shaft-collars/single-split/stainless-steel-316-imperial": COLLAR_IMPERIAL,
  "shaft-collars/single-split/black-oxide-metric": COLLAR_METRIC_SPLIT,
  "shaft-collars/single-split/stainless-steel-metric": COLLAR_METRIC_SPLIT,
  "shaft-collars/double-split/stainless-steel-316-imperial": COLLAR_IMPERIAL,
  "shaft-collars/threaded-bore/stainless-steel-304-imperial": COLLAR_THREADED,
  "shaft-collars/threaded-bore/stainless-steel-316-imperial": COLLAR_THREADED,
  "shaft-collars/threaded-bore/aluminium-imperial": COLLAR_THREADED,
};

export const pendingColumnsFor = (
  familyId: string,
  typeId: string,
  variantId: string,
): readonly string[] | undefined => PENDING_COLUMNS[`${familyId}/${typeId}/${variantId}`];
