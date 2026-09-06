"use client";

import { CheckCircle2, CloudUpload, Plus, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import type React from "react";
import { useId, useRef, useState } from "react";
import { CategoryMultiSelect } from "@/components/contact/CategoryMultiSelect";
import { Button } from "@/components/ui/button";
import { PRODUCT_CATEGORIES } from "@/lib/product-catalogue";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ACCEPTED_FILES = ".pdf,.jpg,.jpeg,.png,.dwg,.dxf,.step,.stp,.igs,.iges";

type FieldName =
  | "fullName"
  | "company"
  | "email"
  | "phone"
  | "country"
  | "product"
  | "material"
  | "quantity"
  | "message";

const EMPTY_FORM: Record<FieldName, string> = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  material: "",
  quantity: "",
  message: "",
};

const REQUIRED_FIELDS: { name: FieldName; label: string }[] = [
  { name: "fullName", label: "Full Name" },
  { name: "company", label: "Company Name" },
  { name: "email", label: "Business Email" },
  { name: "country", label: "Country" },
  { name: "product", label: "Product / Requirement" },
];

const fieldClasses =
  "h-11 w-full border border-brand-line bg-white px-4 text-brand-dark text-sm placeholder:text-[#9ca3af] placeholder:opacity-100 placeholder:font-normal focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red";

const selectChevron =
  "appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%228%22%20fill%3D%22none%22%20stroke%3D%22%232d2d2d%22%20stroke-width%3D%221.6%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22/%3E%3C/svg%3E')] bg-[length:12px_8px] bg-[right_1rem_center] bg-no-repeat pr-10";

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

const Field: React.FC<FieldProps> = ({ id, label, required, error, children }) => (
  <div>
    <label className="block text-brand-dark text-sm" htmlFor={id}>
      {label}
      {required && <span className="ml-1 text-brand-red">*</span>}
    </label>
    <div className="mt-2">{children}</div>
    {error && <p className="mt-1.5 text-brand-red text-xs">{error}</p>}
  </div>
);

interface RfqFormProps {
  countries: string[];
}

export const RfqForm: React.FC<RfqFormProps> = ({ countries }) => {
  const searchParams = useSearchParams();
  const fieldId = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [values, setValues] = useState({
    ...EMPTY_FORM,
    /* A product CTA elsewhere on the site can prefill the requirement. */
    product: searchParams.get("product") ?? "",
  });
  const [categories, setCategories] = useState<string[]>([]);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const idFor = (name: string) => `${fieldId}-${name}`;

  const setValue = (name: FieldName, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) {
        return current;
      }
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const validate = () => {
    const found: Partial<Record<FieldName, string>> = {};
    for (const { name, label } of REQUIRED_FIELDS) {
      if (!values[name].trim()) {
        found[name] = `${label} is required.`;
      }
    }
    if (values.email.trim() && !EMAIL_PATTERN.test(values.email.trim())) {
      found.email = "Enter a valid email address.";
    }
    return found;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      return;
    }

    /* No backend yet - this is where the enquiry would be posted. */
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 600);
  };

  const resetForm = () => {
    setValues(EMPTY_FORM);
    setCategories([]);
    setErrors({});
    setFiles([]);
    setIsSent(false);
  };

  const keyFor = (candidate: File) =>
    `${candidate.name}-${candidate.size}-${candidate.lastModified}`;

  /* Appends rather than replaces, skipping files already on the list. */
  const addFiles = (incoming: FileList | null) => {
    if (!incoming?.length) {
      return;
    }
    /*
     * Copy out before touching the input: a FileList is live, so clearing the
     * input's value would empty it before the state updater reads it.
     */
    const picked = Array.from(incoming);

    /* Clearing lets the same file be re-picked after removal. */
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    setFiles((current) => {
      const seen = new Set(current.map(keyFor));
      return [...current, ...picked.filter((candidate) => !seen.has(keyFor(candidate)))];
    });
  };

  const removeFile = (target: File) => {
    setFiles((current) => current.filter((candidate) => keyFor(candidate) !== keyFor(target)));
  };

  const handleDrop = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    setIsDragging(false);
    addFiles(event.dataTransfer.files);
  };

  if (isSent) {
    return (
      <div className="border border-brand-line bg-[#f8f9fa] p-8 sm:p-12 lg:p-[50px]">
        <CheckCircle2 className="h-10 w-10 text-brand-red" />
        <h2 className="mt-6 font-medium text-2xl text-brand-dark">Enquiry has been sent.</h2>
        <p className="mt-3 max-w-[520px] text-[#4a4a4a] text-sm leading-[1.7]">
          Thanks, {values.fullName.trim() || "there"}. Your requirement has been captured. Our team
          replies to enquiries with pricing or technical guidance, usually within one working day.
        </p>
        <Button className="mt-8" onClick={resetForm} size="cta" type="button" variant="primary">
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      className="border border-brand-line bg-[#f8f9fa] p-8 sm:p-12 lg:p-[50px]"
      noValidate
      onSubmit={handleSubmit}
    >
      <h2 className="font-medium text-2xl text-brand-dark">Technical Procurement Sheet</h2>
      <p className="mt-2.5 text-[#4a4a4a] text-sm">
        Please fill in your specifications below. Fields marked with (*) are mandatory.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2">
        <Field error={errors.fullName} id={idFor("fullName")} label="Full Name" required>
          <input
            autoComplete="name"
            className={fieldClasses}
            id={idFor("fullName")}
            onChange={(e) => setValue("fullName", e.target.value)}
            placeholder="e.g. Rajesh Kumar"
            type="text"
            value={values.fullName}
          />
        </Field>

        <Field error={errors.company} id={idFor("company")} label="Company Name" required>
          <input
            autoComplete="organization"
            className={fieldClasses}
            id={idFor("company")}
            onChange={(e) => setValue("company", e.target.value)}
            placeholder="e.g. Apex Engineering Ltd"
            type="text"
            value={values.company}
          />
        </Field>

        <Field error={errors.email} id={idFor("email")} label="Business Email" required>
          <input
            autoComplete="email"
            className={fieldClasses}
            id={idFor("email")}
            onChange={(e) => setValue("email", e.target.value)}
            placeholder="e.g. procurement@apex.com"
            type="email"
            value={values.email}
          />
        </Field>

        <Field id={idFor("phone")} label="Phone / WhatsApp">
          <input
            autoComplete="tel"
            className={fieldClasses}
            id={idFor("phone")}
            onChange={(e) => setValue("phone", e.target.value)}
            placeholder="e.g. +91 98300 XXXXX"
            type="tel"
            value={values.phone}
          />
        </Field>

        <Field error={errors.country} id={idFor("country")} label="Country" required>
          <select
            autoComplete="country-name"
            className={`${fieldClasses} ${selectChevron} ${
              values.country ? "text-brand-dark" : "text-[#9ca3af]"
            }`}
            id={idFor("country")}
            onChange={(e) => setValue("country", e.target.value)}
            value={values.country}
          >
            <option value="">Select country...</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </Field>

        <Field error={errors.product} id={idFor("product")} label="Product / Requirement" required>
          <input
            className={fieldClasses}
            id={idFor("product")}
            onChange={(e) => setValue("product", e.target.value)}
            placeholder="e.g. 25mm Shaft Collar"
            type="text"
            value={values.product}
          />
        </Field>

        <div>
          <span className="block text-brand-dark text-sm" id={idFor("category-label")}>
            Product Category
          </span>
          <div className="mt-2">
            <CategoryMultiSelect
              labelledBy={idFor("category-label")}
              onChange={setCategories}
              options={PRODUCT_CATEGORIES}
              placeholder="Select categories..."
              selected={categories}
            />
          </div>
        </div>

        <Field id={idFor("material")} label="Material / Specification">
          <input
            className={fieldClasses}
            id={idFor("material")}
            onChange={(e) => setValue("material", e.target.value)}
            placeholder="e.g. Stainless Steel 304, Carbon Steel"
            type="text"
            value={values.material}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field id={idFor("quantity")} label="Quantity / Order Volume">
            <input
              className={fieldClasses}
              id={idFor("quantity")}
              onChange={(e) => setValue("quantity", e.target.value)}
              placeholder="e.g. 5,000 units / Monthly repeat"
              type="text"
              value={values.quantity}
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field id={idFor("message")} label="Message / Detailed Requirements">
            <textarea
              className={`${fieldClasses} h-auto min-h-[120px] resize-y py-3`}
              id={idFor("message")}
              onChange={(e) => setValue("message", e.target.value)}
              placeholder="Specify key dimensional parameters, tolerances, keyways, plating requirements, etc."
              rows={4}
              value={values.message}
            />
          </Field>
        </div>
      </div>

      {/* Drawing upload - any number of files */}
      <div className="mt-9">
        {files.length > 0 && (
          <ul className="mb-3 space-y-2">
            {files.map((item) => (
              <li
                className="flex items-center justify-between gap-4 border border-brand-line bg-white px-4 py-3"
                key={keyFor(item)}
              >
                <span className="truncate text-brand-dark text-sm">{item.name}</span>
                <button
                  aria-label={`Remove ${item.name}`}
                  className="flex-shrink-0 text-[#9ca3af] transition-colors hover:text-brand-red"
                  onClick={() => removeFile(item)}
                  type="button"
                >
                  <X className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        )}

        <label
          className={`flex cursor-pointer flex-col items-center border border-dashed text-center transition-colors ${
            files.length > 0 ? "px-6 py-5" : "px-6 py-9"
          } ${isDragging ? "border-brand-red bg-white" : "border-[#9ca3af]"}`}
          htmlFor={idFor("file")}
          onDragLeave={() => setIsDragging(false)}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDrop={handleDrop}
        >
          {files.length > 0 ? (
            <span className="flex items-center gap-2 text-brand-dark text-sm">
              <Plus className="h-4 w-4 text-brand-red" />
              Add another file
            </span>
          ) : (
            <>
              <CloudUpload className="h-6 w-6 text-brand-red" />
              <span className="mt-3 text-brand-dark text-sm uppercase tracking-[0.08em]">
                Upload Drawing / Document
              </span>
              <span className="mt-2 text-[#4a4a4a] text-sm">
                Upload a technical drawing, blueprint or specification if available. PDF / JPG / PNG
                / CAD
              </span>
            </>
          )}
          <input
            accept={ACCEPTED_FILES}
            className="sr-only"
            id={idFor("file")}
            multiple
            onChange={(e) => addFiles(e.target.files)}
            ref={fileInputRef}
            type="file"
          />
        </label>
      </div>

      <Button className="mt-9" disabled={isSubmitting} size="cta" type="submit" variant="primary">
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
};
