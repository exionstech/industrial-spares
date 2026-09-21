import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

/*
 * RFQ drawings/specs. "blob" is used because CAD formats (dwg, dxf, step, igs)
 * are not covered by the pdf/image presets; the extension allow-list is
 * enforced in RfqForm before the upload starts.
 */
export const uploadRouter = {
  rfqAttachment: f({
    blob: { maxFileCount: 5, maxFileSize: "16MB" },
  }).onUploadComplete(({ file }) => ({ name: file.name, url: file.ufsUrl })),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;
