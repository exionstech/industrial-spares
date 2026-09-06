import { countries } from "countries-list";

/*
 * Country names for the RFQ form, resolved on the server so only the finished
 * list of strings reaches the browser rather than the whole dataset.
 */
export const COUNTRY_NAMES: string[] = Object.values(countries)
  .map((country) => country.name)
  .sort((a, b) => a.localeCompare(b));
