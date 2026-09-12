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

**CATALOGUE.SHAFT COLLAR-ALUMINIUM.pdf**  
- `shaft-collars/solid/aluminium` - 19 sizes

**CATALOGUE.SHAFT COLLAR-STAINLESS STEEL.pdf**  
- `shaft-collars/solid/stainless-steel-304-imperial` - 57 sizes

**CATALOGUE.SHAFT COLLAR-ZINC PLATED.pdf**  
- `shaft-collars/solid/zinc-imperial` - 57 sizes

**CATALOGUE.SHAFT COLLAR.METRIC.BO.pdf**  
- `shaft-collars/solid/black-oxide-metric` - 24 sizes

**CATALOGUE.SINGLE SPLIT COLLAR.ALUMINIUM.pdf**  
- `shaft-collars/single-split/aluminium` - 63 sizes

**CATALOGUE.SINGLE SPLIT COLLAR.Stainless steel.pdf**  
- `shaft-collars/single-split/stainless-steel-304-imperial` - 63 sizes

**CATALOGUE.SINGLE SPLIT COLLAR.THREADED.BO.pdf**  
- `shaft-collars/threaded-bore/black-oxide-imperial` - 23 sizes

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

Three pairs are byte-identical, differing only in filename. Only one of each pair is
referenced above:

- `CATALOGUE.SHAFT COLLAR-ZINC PLATED.pdf` = `CATALOGUE.SHAFT COLLAR-SET SCREW TYPE.pdf`
- `CATALOGUE.SHAFT COLLAR-STAINLESS STEEL.pdf` = `CATALOGUE.STAINLESS SHAFT COLLAR-SET SCREW TYPE.pdf`
- `CATALOGUE.SHAFT COLLAR.METRIC.BO.pdf` = `CATALOGUE.METRIC SHAFT COLLAR.BO.pdf`

So 20 files hold 17 unique tables. The six coupling files each carry two tables - one
plain and one with keyways - which is how 17 files fill 23 variant pages.

## Still awaiting data

Ten variant pages have no source sheet and show the awaiting-data notice. Their expected
column shapes live in `src/lib/catalogue-pending.ts`.

- Solid Collars: Stainless Steel 316 Imperial, Black Oxide Imperial, Stainless Steel Metric
- Single Split: Stainless Steel 316 Imperial, Black Oxide Metric, Stainless Steel Metric
- Double Split: Stainless Steel 316 Imperial
- Threaded Bore: Stainless Steel 304 Imperial, Stainless Steel 316 Imperial, Aluminium Imperial

No 316 sheet was supplied at all - every stainless file above is AISI-304 (or 303/304).

## Unconfirmed typos in the source

Transcribed as delivered rather than silently corrected, still to be confirmed with the client:

- Solid collars, largest four sizes: screw size reads `UNC 5/18-11` (5/18 is not a thread size; likely 5/8-11)
- Threaded bore `1TSC-037-16`: thread reads `3/18-16` (likely 3/8-16)

