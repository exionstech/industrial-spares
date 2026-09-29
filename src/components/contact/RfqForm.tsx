"use client";

import { useForm } from "@formspree/react";
import { CheckCircle2, X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type React from "react";
import { useEffect, useId, useState } from "react";
import { CategoryMultiSelect } from "@/components/contact/CategoryMultiSelect";
import { CountrySelect } from "@/components/contact/CountrySelect";
import { Button } from "@/components/ui/button";
import { PRODUCT_CATEGORIES } from "@/lib/product-catalogue";
import "@uploadthing/react/styles.css";
import { UploadDropzone } from "@/lib/uploadthing";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ACCEPTED_EXTENSIONS = [
  "pdf",
  "jpg",
  "jpeg",
  "png",
  "dwg",
  "dxf",
  "step",
  "stp",
  "igs",
  "iges",
];

interface UploadedFile {
  name: string;
  url: string;
}

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
  const [formspreeState, formspreeHandleSubmit] = useForm("mqpaqewp");
  const searchParams = useSearchParams();
  const fieldId = useId();

  const [values, setValues] = useState({
    ...EMPTY_FORM,
    /* A product CTA elsewhere on the site can prefill the requirement. */
    product: searchParams.get("product") ?? "",
  });
  const [categories, setCategories] = useState<string[]>([]);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [uploadError, setUploadError] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState("");

  useEffect(() => {
    if (formspreeState.succeeded) {
      setIsSent(true);
    }
  }, [formspreeState.succeeded]);

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
    if (!consent) {
      setConsentError("Please confirm you have read and accept the Privacy Policy.");
    }
    if (Object.keys(found).length > 0 || !consent) {
      return;
    }

    /* Files are already on UploadThing; the email carries their links. */
    const payload = new FormData(event.currentTarget);
    payload.set("attachments", files.map((item) => `${item.name}: ${item.url}`).join("\n"));

    void formspreeHandleSubmit(payload);
  };

  const resetForm = () => {
    setValues(EMPTY_FORM);
    setCategories([]);
    setErrors({});
    setFiles([]);
    setIsSent(false);
    setConsent(false);
    setConsentError("");
  };

  const removeFile = (target: UploadedFile) => {
    setFiles((current) => current.filter((candidate) => candidate.url !== target.url));
  };

  /* Only the drawing/document formats we accept; UploadThing's "blob" allows anything. */
  const filterAllowed = (picked: File[]) => {
    const allowed = picked.filter((candidate) =>
      ACCEPTED_EXTENSIONS.includes(candidate.name.split(".").pop()?.toLowerCase() ?? ""),
    );
    if (allowed.length < picked.length) {
      setUploadError(`Unsupported file skipped. Accepted: ${ACCEPTED_EXTENSIONS.join(", ")}.`);
    }
    return allowed;
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
            name="fullName"
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
            name="company"
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
            name="email"
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
            name="phone"
            onChange={(e) => setValue("phone", e.target.value)}
            placeholder="e.g. +91 98300 XXXXX"
            type="tel"
            value={values.phone}
          />
        </Field>

        <Field error={errors.country} id={idFor("country")} label="Country" required>
          <CountrySelect
            id={idFor("country")}
            onChange={(country) => setValue("country", country)}
            options={countries}
            value={values.country}
          />
          <input name="country" type="hidden" value={values.country} />
        </Field>

        <Field error={errors.product} id={idFor("product")} label="Product / Requirement" required>
          <input
            className={fieldClasses}
            id={idFor("product")}
            name="product"
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
            <input name="categories" type="hidden" value={categories.join(", ")} />
          </div>
        </div>

        <Field id={idFor("material")} label="Material / Specification">
          <input
            className={fieldClasses}
            id={idFor("material")}
            name="material"
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
              name="quantity"
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
              name="message"
              onChange={(e) => setValue("message", e.target.value)}
              placeholder="Specify key dimensional parameters, tolerances, keyways, plating requirements, etc."
              rows={4}
              value={values.message}
            />
          </Field>
        </div>
      </div>

      {/* Drawing upload - files go straight to UploadThing; only their URLs are submitted */}
      <div className="mt-9">
        {files.length > 0 && (
          <ul className="mb-3 space-y-2">
            {files.map((item) => (
              <li
                className="flex items-center justify-between gap-4 border border-brand-line bg-white px-4 py-3"
                key={item.url}
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

        <UploadDropzone
          appearance={{
            container: "rounded-none border border-dashed border-[#9ca3af] bg-transparent py-6",
            label: "text-brand-dark text-sm uppercase tracking-[0.08em]",
            allowedContent: "text-[#4a4a4a] text-sm",
            button: "rounded-none bg-brand-red text-sm",
          }}
          content={{
            label: "Upload Drawing / Document",
            allowedContent: "PDF / JPG / PNG / CAD - up to 5 files, 16MB each",
          }}
          config={{ mode: "auto" }}
          endpoint="rfqAttachment"
          onBeforeUploadBegin={(picked) => {
            setUploadError("");
            return filterAllowed(picked);
          }}
          onClientUploadComplete={(uploaded) => {
            setFiles((current) => {
              const seen = new Set(current.map((item) => item.url));
              const added = uploaded
                .filter((item) => !seen.has(item.ufsUrl))
                .map((item) => ({ name: item.name, url: item.ufsUrl }));
              return [...current, ...added];
            });
          }}
          onUploadError={(error) => setUploadError(`Upload failed: ${error.message}`)}
        />
        {uploadError && (
          <p className="mt-2 text-brand-red text-xs" role="alert">
            {uploadError}
          </p>
        )}
      </div>

      <div className="mt-9">
        <label className="flex items-start gap-3 text-[#4a4a4a] text-sm" htmlFor={idFor("consent")}>
          <input
            checked={consent}
            className="mt-0.5 h-4 w-4 flex-shrink-0 accent-brand-red"
            id={idFor("consent")}
            name="consent"
            onChange={(e) => {
              setConsent(e.target.checked);
              if (e.target.checked) {
                setConsentError("");
              }
            }}
            type="checkbox"
          />
          <span>
            I have read and accept the{" "}
            <Link
              className="text-brand-red underline-offset-4 hover:underline"
              href="/privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </Link>
            , and I consent to Industrial Spares Manufacturing Company collecting and processing the
            information and files submitted above, including sharing them with our form-processing
            and file-storage providers, to respond to this enquiry.
          </span>
        </label>
        {consentError && (
          <p className="mt-1.5 text-brand-red text-xs" role="alert">
            {consentError}
          </p>
        )}
      </div>

      {formspreeState.errors && (
        <p className="mt-5 text-brand-red text-sm" role="alert">
          We could not send your enquiry. Please check the form and try again.
        </p>
      )}

      <Button
        className="mt-9"
        disabled={formspreeState.submitting}
        size="cta"
        type="submit"
        variant="primary"
      >
        {formspreeState.submitting ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
};
