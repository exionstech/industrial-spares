# Catalogue source PDFs

The client's dimension sheets, exactly as supplied. `src/lib/catalogue-tables.ts` is a
verbatim transcription of these files - every part number, size and material note in the
site comes from here, so a table can always be checked against its source.

The `source` field on each table in `catalogue-tables.ts` names the file it came from.

## Which file feeds which page

Pages are `family/type/variant` under `/products`.

**CATALOGUE.DOUBLE SPLIT COLLAR. Aluminium.pdf**  
- `shaft-collars/double-split/aluminium` - 18 sizes

**CATALOGUE.DOUBLE SPLIT COLLAR.BO.pdf**  
- `shaft-collars/double-split/black-oxide-imperial` - 63 sizes

**CATALOGUE.DOUBLE SPLIT COLLAR.METRIC.BO.pdf**  
- `shaft-collars/double-split/black-oxide-metric` - 40 sizes

**CATALOGUE.DOUBLE SPLIT COLLAR.Stainless steel.pdf**  
- `shaft-collars/double-split/stainless-steel-304-imperial` - 63 sizes
- `shaft-collars/double-split/stainless-steel-316-imperial` - 63 sizes (see 316 below)

**CATALOGUE.SHAFT COLLAR-ALUMINIUM.pdf**  
- `shaft-collars/solid/aluminium` - 19 sizes

**CATALOGUE.SHAFT COLLAR-STAINLESS STEEL.pdf**  
- `shaft-collars/solid/stainless-steel-304-imperial` - 57 sizes
- `shaft-collars/solid/stainless-steel-316-imperial` - 57 sizes (see 316 below)

**CATALOGUE.SHAFT COLLAR-ZINC PLATED.pdf**  
- `shaft-collars/solid/zinc-imperial` - 57 sizes

**CATALOGUE.SHAFT COLLAR.METRIC.BO.pdf**  
- `shaft-collars/solid/black-oxide-metric` - 24 sizes

**CATALOGUE.SINGLE SPLIT COLLAR.ALUMINIUM.pdf**  
- `shaft-collars/single-split/aluminium` - 63 sizes

**CATALOGUE.SINGLE SPLIT COLLAR.METRIC.BO.pdf**  
- `shaft-collars/single-split/black-oxide-metric` - 40 sizes

**CATALOGUE.SINGLE SPLIT COLLAR.METRIC.STAINLESS.pdf**  
- `shaft-collars/single-split/stainless-steel-metric` - 40 sizes

**CATALOGUE.SINGLE SPLIT COLLAR.Stainless steel.pdf**  
- `shaft-collars/single-split/stainless-steel-304-imperial` - 63 sizes
- `shaft-collars/single-split/stainless-steel-316-imperial` - 63 sizes (see 316 below)

**CATALOGUE.SINGLE SPLIT COLLAR.THREADED.BO.pdf**  
- `shaft-collars/threaded-bore/black-oxide-imperial` - 23 sizes

**CATALOGUE.SINGLE SPLIT COLLAR.THREADED.STAINLESS.pdf**  
- `shaft-collars/threaded-bore/stainless-steel-304-imperial` - 23 sizes

**Double Split Coupling STAINLESS STEEL HEAVY.pdf**  
- `couplings/double-split-heavy/stainless-steel-without-keyways` - 13 sizes
- `couplings/double-split-heavy/stainless-steel-with-keyways` - 11 sizes

**Double Split Coupling dimensions HEAVY.pdf**  
- `couplings/double-split-heavy/black-oxide-without-keyways` - 13 sizes
- `couplings/double-split-heavy/black-oxide-with-keyways` - 11 sizes

**RIGID COUPLING Stainless steel.pdf**  
- `couplings/rigid/stainless-steel-without-keyways` - 11 sizes
- `couplings/rigid/stainless-steel-with-keyways` - 16 sizes

**RIGID COUPLING.pdf**  
- `couplings/rigid/black-oxide-without-keyways` - 11 sizes
- `couplings/rigid/black-oxide-with-keyways` - 16 sizes

**Single Split Coupling dimensions HEAVY.pdf**  
- `couplings/single-split-heavy/black-oxide-without-keyways` - 13 sizes
- `couplings/single-split-heavy/black-oxide-with-keyways` - 11 sizes

**Single Split Stainless Coupling dimensions Heavy.pdf**  
- `couplings/single-split-heavy/stainless-steel-without-keyways` - 13 sizes
- `couplings/single-split-heavy/stainless-steel-with-keyways` - 11 sizes

## Duplicates

Three pairs hold identical tables and differ only in filename (the files are not
byte-identical - each embeds its own spreadsheet name). The client sent the solid collar
sheets twice, on 24 Aug under the "SET SCREW TYPE" names and on 26 Aug under the names
above. Only one of each pair is referenced above:

- `CATALOGUE.SHAFT COLLAR-ZINC PLATED.pdf` = `CATALOGUE.SHAFT COLLAR-SET SCREW TYPE.pdf`
- `CATALOGUE.SHAFT COLLAR-STAINLESS STEEL.pdf` = `CATALOGUE.STAINLESS SHAFT COLLAR-SET SCREW TYPE.pdf`
- `CATALOGUE.SHAFT COLLAR.METRIC.BO.pdf` = `CATALOGUE.METRIC SHAFT COLLAR.BO.pdf`

So 23 files hold 20 unique tables. The six coupling files each carry two tables - one
plain and one with keyways - which is how 20 files fill 26 variant pages, plus the three
316 pages that reuse a 304 sheet.

## 316 stainless

No 316 sheet was supplied - every stainless file above is AISI-304 (or 303/304). On
13 Sep 2026 the client confirmed that 316 imperial collars are the same as 304 imperial,
so the Solid, Single Split and Double Split 316 pages reuse their 304 sheet's sizes and
part numbers, with only the material grade in the notes changed to AISI-316.

Threaded Bore 316 is deliberately left pending, even though a Threaded Bore 304 sheet has
since arrived.

## Still awaiting data

Four variant pages have no source sheet and show the awaiting-data notice. Their expected
column shapes live in `src/lib/catalogue-pending.ts`.

- Solid Collars: Black Oxide Imperial, Stainless Steel Metric
- Threaded Bore: Stainless Steel 316 Imperial, Aluminium Imperial

## Unconfirmed typos in the source

Transcribed as delivered rather than silently corrected, still to be confirmed with the client:

- Solid collars, largest four sizes: screw size reads `UNC 5/18-11` (5/18 is not a thread size; likely 5/8-11)
- Threaded bore `1TSC-037-16` and `1TSSC-037-16`: thread reads `3/18-16` (likely 3/8-16)
- Threaded bore `1TSC-031-18` and `1TSSC-031-18`: width reads `5/16:` (likely 5/16")
- Threaded bore `-125-07` and `-125-12`, both finishes: O.D. reads `2-1/6"` (likely 2-1/16")
- Threaded bore stainless notes: grade reads `AIAI304` (likely AISI-304)
- Single split metric stainless: the screw column is headed "Alloy Steel Cap screw", but the
  notes give the cap screw material as Stainless Steel AISI-304 (the heading was likely
  carried over from the black oxide metric sheet, where it is correct)

