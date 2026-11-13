---
title: "Digital Assets Across the Border: FinCEN Notice 2020-2, the FBAR Peak-Value Rule, Form 8938's Threshold Ladder, and the Valuation Evidence Both Regimes Demand"
date: "2026-11-13"
description: "Two reporting regimes reach the same offshore digital asset position and disagree about almost everything: threshold, valuation date, penalty architecture, and whether cryptocurrency counts at all. This analysis works through FinCEN Notice 2020-2, the FBAR maximum-value rule, Form 8938's four threshold tiers, the penalty stack under 31 U.S.C. Section 5321(a)(5) and IRC Sections 6038D and 6662(j), the Form 3520 gift and trust perimeter, and the evidence file a peak value requires."
category: "QDAV"
author: "QDAV"
---
# Digital Assets Across the Border: FinCEN Notice 2020-2, the FBAR Peak-Value Rule, Form 8938's Threshold Ladder, and the Valuation Evidence Both Regimes Demand

## Two regimes, one position, no shared answer

A single digital asset balance can sit in the crosshairs of three separate reporting regimes at once, and none of them uses the same test. The FBAR asks whether a foreign account exceeded $10,000 at any moment during the calendar year. Form 8938 asks whether specified foreign financial assets exceeded a filing-status-dependent figure on the last day of the tax year or at any point during it. Form 3520 asks whether a gift or a foreign trust crossed a wholly different line and started a monthly penalty clock.

The divergence that matters most is not the thresholds. It is that the FBAR has a published answer about cryptocurrency and Form 8938 has none. FinCEN addressed virtual currency directly in a one-page notice on December 31, 2020. The Internal Revenue Service has never said whether a foreign exchange balance of bitcoin is a specified foreign financial asset, and the form, its instructions, and the regulations under IRC Section 6038D do not use the words.

For the attorney or CPA holding the file, that asymmetry produces a specific and unglamorous obligation: decide which forms apply, then prove a value at a date the client did not choose and cannot now revisit. That second obligation is an appraisal problem wearing a compliance costume.

## Title 31 is not Title 26

The FBAR is a Bank Secrecy Act instrument. It is authorized by 31 U.S.C. Section 5314 and implemented at 31 C.F.R. Section 1010.350, and enforcement is delegated to the IRS under 31 C.F.R. Section 1010.810(g). Because the penalty is assessed under Title 31, the Internal Revenue Code generally does not govern it: no deficiency procedures, no Tax Court petition, no collection due process in the ordinary sense. The Internal Revenue Manual acknowledges this directly at IRM 4.26.16.5.1.

Form 8938 lives in the opposite world. It is an information return under IRC Section 6038D, attached to the income tax return, administered with the return, and enforced with Title 26 penalties. The two forms also differ on the most basic mechanical point: the FBAR is a calendar-year filing due April 15 with an automatic extension to October 15 and no request required, filed electronically through the BSA E-Filing System. Form 8938 rides the return and its extensions.

Practitioners who treat the pair as interchangeable produce two predictable errors. They apply Title 26 reasonable-cause reasoning to a Title 31 penalty, where the doctrine operates differently. Or they assume a clean Form 8938 eliminates FBAR exposure. It does not. Each filing is satisfied or violated on its own terms.

## What Notice 2020-2 actually says

FinCEN's notice is short and unusually direct. It states that the FBAR regulations do not define a foreign account holding virtual currency as a type of reportable account under 31 C.F.R. Section 1010.350(c). Therefore, "at this time, a foreign account holding virtual currency is not reportable on the FBAR" — unless the account is reportable for another reason, namely that it holds reportable assets besides virtual currency.

Two sentences carry all the weight.

The first is the carve-out. A non-U.S. venue account that holds a euro or dollar balance alongside tokens is a foreign financial account holding currency at a foreign financial institution. That account is inside Section 1010.350 today, with no reliance on pending rulemaking. Modern exchange accounts routinely hold both, because a trading account needs a settlement leg. The fiat balance is what converts a nominally crypto-only position into a reportable account, and the token balance is then part of the account's maximum value.

The second is the notice's closing paragraph, in which FinCEN announced its intention to propose amendments to Section 1010.350 that would add virtual currency as a reportable account type. As of this writing no final rule has been published, and the operative guidance for the 2026 filing season remains the 2020 notice. That creates a classification risk rather than an exemption. A client who does not file today on the strength of a notice, and whose accounts are later reached by a final rule with retroactive reach, has a documented reason for the earlier position and an argument under reasonable cause. A client who does not file because nobody asked the question has nothing.

Self-custody is outside the perimeter, and the reasoning is structural rather than concessional. An account is reportable because it is maintained by a financial institution located outside the United States. A hardware wallet on a desk has no institution. Neither does a browser-extension wallet whose keys the holder controls. That distinction does not survive a custodian relationship: a hosted wallet, a staking-as-a-service arrangement, or a lending platform that holds customer assets presents an institution with control, and control is what the regulation asks about.

## Where the account actually sits

The threshold question for both the FBAR and Form 8938 is custodial and geographic, not asset-specific. Four fact patterns cover most clients.

A U.S.-domiciled venue is outside the FBAR entirely and outside Form 8938's financial-account prong, because neither the account nor the institution is foreign. A non-U.S. venue is a foreign account for FBAR purposes where the institution is foreign, subject to the Notice 2020-2 analysis above on whether the account holds anything besides virtual currency. A self-custodied wallet is outside both. A token issued by a foreign entity but held on a U.S. venue is a different animal: the asset may be a specified foreign financial asset for Form 8938 purposes even though the account is domestic, because Section 6038D reaches certain foreign non-account assets held for investment.

The fourth pattern is where files fail. An exchange group operating several legal entities can place a client in one jurisdiction for onboarding, another for custody, and a third for derivatives. Reading the venue's marketing page is not diligence. The account agreement, the entity named on the statement, and the regulator listed in the disclosures are. Where the entity is genuinely ambiguous, the file should record the ambiguity and the reasoning — contemporaneously, not after an examiner asks.

## Form 8938 and the missing paragraph

Section 6038D requires a specified person holding specified foreign financial assets above an applicable threshold to report them with the annual return. The regulation defines specified foreign financial assets to include financial accounts maintained by a foreign financial institution, and certain foreign non-account assets held for investment. Section 1.6038D-2 sets the thresholds. Every tier is an "exceeds" test, measured on the last day of the tax year or at any time during it.

| Filer | More than, last day of tax year | More than, at any time during year |
|---|---|---|
| Unmarried or married filing separately, living in the U.S. | $50,000 | $75,000 |
| Married filing jointly, living in the U.S. | $100,000 | $150,000 |
| Unmarried or married filing separately, living abroad | $200,000 | $300,000 |
| Married filing jointly, living abroad | $400,000 | $600,000 |
| Specified domestic entity | $50,000 | $75,000 |

The reporting basis is the maximum value of each asset during the tax year, at fair market value. The instructions state plainly that a third-party appraisal is not necessary to estimate maximum fair market value. They also permit reliance on periodic account statements unless the filer knows or has reason to know, based on readily accessible information, that the statements do not reflect a reasonable estimate of the maximum value during the year. Foreign-currency values are determined in the foreign currency first, then converted at the last-day-of-tax-year rate — a rate that applies even to an asset sold in March.

What the instructions do not contain is any reference to digital assets. Neither does the statute, the regulations, or the IRS comparison chart that sets Form 8938 beside the FBAR. Three readings are defensible in the current absence of authority.

The first treats a foreign exchange account holding digital assets as a foreign financial account, full stop, on the theory that a custodial venue is a financial institution and the tokens are assets in the account. This is the conservative reading and the one most often recommended to clients with material balances. The second treats digital assets as outside the account definition by analogy to Notice 2020-2, on the theory that the FBAR and FATCA definitions were drafted in parallel and FinCEN's notice reflects a shared understanding. The third limits reporting to the extent a fiat balance or a securities position is present in the same account.

The practical resolution is not to pick a theory in the abstract. It is to make the election explicit and documented, and to recognize that the penalty exposure is asymmetric. Under Section 1.6038D-8(d), a filer who cannot demonstrate aggregate value to the Commissioner is presumed to have exceeded the threshold. Non-disclosure is therefore not the low-risk default it appears to be.

There is also a genuine valuation asymmetry between the two forms that tends to go unnoticed. The FBAR aggregates the maximum values of separate accounts and applies a single year-end exchange rate to each account's peak. Form 8938 aggregates the maximum values of assets and tests the total against a two-part threshold. The same position can clear the FBAR's $10,000 line in April and never approach Form 8938's $50,000 year-end figure, or clear both, or clear Form 8938's any-time figure while the FBAR test is satisfied by a different account. Working the two forms as one exercise produces the answer; working them sequentially produces two different answers and one of them is wrong.

## The peak-value rule and the twelve-month problem

Both regimes require a number that is not the year-end balance, and this is where the appraisal question enters the file in earnest.

The FBAR's item 15 reports the maximum value of each account: a reasonable approximation of the greatest value of currency and non-monetary assets in the account during the calendar year. Periodic account statements may be relied on if they fairly reflect the maximum value during the year. The Internal Revenue Manual describes the same standard and refers to statements issued at least quarterly, adding that where no periodic statements are issued, the maximum value is the largest amount of currency and non-monetary assets in the account at any time during the year.

Three mechanical rules follow. Each account is valued separately, never in the aggregate. Amounts are rounded up to the next whole dollar, so $15,265.25 is reported as $15,266. And each account's peak is converted to dollars at the Treasury Reporting Rates of Exchange for December 31 of the reported year — one rate, applied to every account, regardless of the date the peak occurred. Where the aggregate of those peaks exceeds $10,000 at any time, every account is reported, including accounts that individually never exceeded the threshold. Money moved between foreign accounts is counted once; IRM 4.26.16.2.6 requires transfers among the accounts to be netted so the same funds are not counted twice.

That netting rule is not administrative tidiness. It is the difference between a defensible aggregate and an inflated one. A client who sweeps the same $400,000 between three foreign venues over a year has one $400,000 position, not three.

Form 8938's equivalent requirement is expressed as the maximum value during the tax year, with statement reliance subject to the reason-to-know qualification. The two regimes differ on conversion dates — calendar-year end for the FBAR, tax-year end for Form 8938 — which matters for a fiscal-year entity and not at all for an individual.

The structural problem is that all of this presupposes a statement. A bank issues a monthly statement because it is a bank. A custodial exchange issues a monthly statement because it is regulated to. A self-custodied position issues nothing, and a position held at a venue that later restricted access or collapsed may issue a statement the client can no longer retrieve. The maximum-value rule does not relax because the evidence is inconvenient; it converts an evidence problem into a reported number that the client signs under penalties of perjury.

## Why volatile, illiquid, and programmatic assets break the convention

Four characteristics of digital assets defeat the periodic-statement assumption that the FBAR and Form 8938 rules were drafted around.

Concentration of the peak. A portfolio whose peak occurred on a single trading day in a thin market is not documented by a monthly statement at all. The statement captures month-end, and month-end is not the maximum. Where the peak is the number that determines both the filing obligation and the reported value, reconstructing that date is the work.

Internal movement. Transfers between a client's own accounts, between custodial and self-custodied addresses, and between venues under common control create apparent peaks that are not economic events. Because the FBAR values accounts separately and then nets only transfers among the foreign accounts, a transfer into a domestic account or into self-custody leaves an unexplained peak on the foreign side.

Programmatic accruals. Staking rewards, lending interest, and rebasing tokens change the quantity held without a purchase. A maximum-value calculation built on a unit price series and a quantity that the client believes was constant will miss. Hard forks and airdrops do the same thing discontinuously, and an airdrop of a token with no established market on the receipt date has no defensible price at all until one exists.

Illiquidity and price-source disagreement. A locked position, a vesting allocation, or a token trading on two venues at prices that differ by forty percent does not have a single observable fair market value. The maximum-value rule still demands a reasonable approximation of the greatest value. A reasonable approximation of an unreasonable market requires a stated methodology: source hierarchy, selection rule between venues, treatment of lock-up and marketability constraints, and the basis for preferring one data series over another.

That last point is where a valuation prepared to appraisal standards diverges from a spreadsheet export. A spreadsheet asserts a number. A valuation attestation or appraisal states the definition of value applied, the date, the property interests appraised, the data relied on, the reasoning connecting data to conclusion, and the assumptions and limiting conditions. Under USPAP — the Uniform Standards of Professional Appraisal Practice — Standards 7 and 9 govern the development of a business or intangible asset appraisal and Standard 10 governs its reporting. Digital assets are intangible property, and the reporting discipline applies whether or not a taxing statute compels the document. A conclusion that is USPAP compliant is auditable in a way that an export is not: every figure traces to a source, and every judgment is stated rather than implied.

## What the file has to contain

A peak value asserted on a return and defended eighteen months later needs six things. None of them is exotic; all of them are routinely absent.

A dated holdings reconstruction. Every position at every relevant date, reconciled to on-chain or venue records, with acquisitions, disposals, transfers, and programmatic accruals shown as separate lines rather than a net change. Where a venue's records are unavailable, the reconstruction should say so and state the substitute evidence.

A price-source hierarchy. Named sources in priority order, the rule for choosing among them when they disagree, and the treatment of a date on which no source published. For a token with a single thin venue, the hierarchy is an argument, and the argument belongs in the file.

A time-zone and cutoff convention, applied consistently. A peak that occurred at 23:40 UTC on a date that is the following day in the venue's local books is a real reconciliation item, and unexplained one-day discrepancies are the kind of detail an examiner uses to test whether the rest of the schedule was built or estimated.

A transfer-netting schedule. The list of movements among the reported accounts, the date and value of each, and the arithmetic showing that no funds were counted twice. This is the schedule that converts a gross aggregate into a defensible one.

A methodology memorandum for any position without a continuous observable price. Locked tokens, pre-listing allocations, tokens in a market with a demonstrable wash-trading problem, and positions subject to contractual transfer restrictions all require the reasoning to be written down before the conclusion is needed.

A signature and a date. The document should identify who prepared it, what standards were applied, and the date of the value conclusion, and it should distinguish the reporting-purpose attestation from an appraisal prepared for a different purpose. Defensible data means data that another appraiser could obtain and reach the same conclusion from, which is why the source hierarchy and the netting arithmetic have to be in the file rather than in the preparer's memory. A valuation prepared for an FBAR line is not a qualified appraisal under IRC Section 170, and a qualified appraisal prepared for a charitable contribution does not automatically serve the reporting purpose. Where both obligations exist for the same client — a donor contributing foreign-custodied tokens, for instance — one engagement can support both conclusions, but only if the file is built for both.

## The penalty architecture, side by side

The consequences differ so sharply between the two forms that treating them as a single compliance chore is a mistake in itself.

| Item | FBAR (Title 31) | Form 8938 (Title 26) |
|---|---|---|
| Base authority | 31 U.S.C. Section 5314; 31 C.F.R. Section 1010.350 | IRC Section 6038D; 26 C.F.R. Sections 1.6038D-1 to -8 |
| Non-willful penalty | Up to $16,536 per violation as adjusted (31 C.F.R. Section 1010.821; statutory $10,000) | $10,000 per year for a failure to file a complete and correct form |
| Continuation | None | $10,000 per 30-day period after 90 days from notice, capped at $50,000 — $60,000 ceiling per year |
| Willful or aggravated | Greater of $165,353 or 50 percent of the account balance at the time of the violation, per account | 40 percent accuracy-related penalty under Section 6662(j) on the underpayment portion, where an underpayment exists |
| Per-account or per-report | Per report after *Bittner v. United States*, 598 U.S. 85 (2023); willful remains per account | Per return, per year |
| Reasonable cause | Statutory, but only where the account was also properly reported | Section 6038D(g); affirmative showing required |
| Statute of limitations | Six years from the FBAR due date | Open until three years after the information is furnished, Section 6501(c)(8); six years where more than $5,000 of income is omitted, Section 6501(e) |

Two features of that table deserve emphasis because they are routinely misread.

*Bittner* held that the non-willful FBAR penalty accrues per report, not per account: five late reports are five violations whatever the account count. The willful penalty did not travel with it. Under 31 U.S.C. Section 5321(a)(5)(C) and (D), a willful violation is measured account by account, at the greater of the adjusted fixed amount or half the balance, and IRM 4.26.16.1.7 states the distinction directly. The character of the violation therefore determines whether the account count multiplies the exposure or is irrelevant to it, which means the willfulness analysis is where these cases are actually won and lost.

The second is that the Form 8938 penalty does not require any tax to be due. Section 6038D is an information provision and the $10,000 attaches to the filing failure itself. Section 6662(j) is the provision that requires an underpayment, and it doubles the ordinary accuracy-related rate from 20 to 40 percent on the portion of an underpayment attributable to an undisclosed foreign financial asset, as that term is defined by reference to information required under Sections 6038, 6038B, 6038D, 6046A, or 6048. A client who filed everything correctly except the form owes $10,000. A client who also omitted the gain owes the $10,000 and forty percent of the tax on the omission.

## The gift and trust perimeter

Two more forms sit at the edge of the same fact pattern and are almost never in the client's mind.

IRC Section 6039F requires a U.S. person who receives a large gift or bequest from a foreign person to report it on Form 3520, Part IV. The threshold is $100,000 for gifts and bequests from foreign individuals and foreign estates, with a lower inflation-adjusted threshold for gifts from foreign corporations and partnerships. Related-party gifts aggregate. The penalty for failure to report is five percent of the gift per month, up to 25 percent, subject to reasonable cause. A six-figure transfer of tokens from a relative abroad, or an inheritance from a foreign estate settled in digital assets, is squarely within it.

IRC Section 6048 reaches foreign trusts. A foreign trust with a U.S. owner must file Form 3520-A by the fifteenth day of the third month after its year end, and the owner is responsible for ensuring it does; a Form 7004 under the trust's own employer identification number is required for an extension, because an extension of the owner's return does not extend the trust's return. Where the trust does not file, the owner attaches a substitute Form 3520-A to a timely Form 3520. The Section 6677 penalty is the greater of $10,000 or five percent of the gross value of the portion of trust assets treated as owned by the U.S. person, with additional amounts where noncompliance continues past ninety days, capped at the gross value of the assets.

That cap is calculated on the gross value of the trust's assets. A foreign trust holding a concentrated digital asset position has a gross value that moves, and the penalty computation inherits the movement. Valuation is not a collateral question in these files; it is the denominator.

## A sequencing protocol for the file

The order of operations determines whether the analysis holds together. Worked in this sequence, each step narrows the next.

| Step | Question | Output |
|---|---|---|
| 1 | Who is the filer, and for which years? | Filer classification: U.S. person, specified individual, specified domestic entity, trust, estate |
| 2 | Where is each account maintained, by which legal entity? | Custody and geography map, entity named on the statement, ambiguity logged |
| 3 | What does each account hold? | Asset inventory separated into fiat, securities, and virtual currency |
| 4 | Does the FBAR apply? | Notice 2020-2 analysis, fiat-balance test, protective-filing decision recorded |
| 5 | Does Form 8938 apply? | Threshold tier, position on the crypto question, documentation of the position |
| 6 | Is a gift or trust regime in play? | Section 6039F and Section 6048 analysis, Form 3520 and 3520-A calendar |
| 7 | What is the maximum value of each account and asset? | Dated reconstruction, price hierarchy, netting schedule, methodology memorandum |
| 8 | Was any prior year missed? | Delinquent submission analysis, reasonable cause record, statute exposure by year |

Step seven cannot be delegated to the return preparer, and it cannot be performed retrospectively with the same quality as it can be performed contemporaneously. Every month that passes between the peak and the reconstruction degrades the evidence: venue records are archived, APIs change, and the client's recollection of a transfer's purpose fades into a guess.

## Closing

The cross-border digital asset file is not a filing problem. It is an evidentiary one, and the filing is the part that becomes visible. A client who reports a maximum value the record supports has a compliance position. A client who reports a maximum value that was estimated in April for a peak that occurred in November has a number, and a number is not a position.

Where the exposure is material, the discipline that produces a defensible number is the same discipline that produces a qualified appraisal: a defined standard of value, a fixed date, identified property interests, documented data, and reasoning that a third party can follow and test. QDAV develops those conclusions for digital asset positions held across custodial, self-custodied, and foreign arrangements, in a form built to answer the question the filing asks rather than the question the client assumed.

## Frequently Asked Questions

### Do I need to file an FBAR for cryptocurrency held on a foreign exchange?

Only if the account is reportable for a reason other than the virtual currency. Under FinCEN Notice 2020-2, a foreign account holding only virtual currency is not reportable on the FBAR, and no final rule amending that position has been published. An account that also holds fiat currency, securities, or another reportable asset is a foreign financial account under 31 C.F.R. Section 1010.350 today, and the whole account is reportable once the $10,000 aggregate threshold is met.

### Is cryptocurrency reportable on Form 8938?

No authority resolves the question. IRC Section 6038D, the regulations, Form 8938, and its instructions never mention digital assets, and the IRS has published no guidance on whether a foreign exchange balance is a specified foreign financial asset. The conservative reading treats a custodial foreign venue as a foreign financial institution and the balance as reportable once the applicable threshold is exceeded. What is not defensible is an undocumented assumption in either direction, particularly given the Section 1.6038D-8(d) presumption that applies where aggregate value cannot be demonstrated.

### How is the maximum account value calculated on the FBAR?

Report a reasonable approximation of the greatest value the account held at any time during the calendar year, valued in the account's own currency, then converted at the Treasury Reporting Rates of Exchange for December 31 of that year. Round up to the next whole dollar. Value each account separately; do not report an aggregate. Where periodic statements are issued at least quarterly and fairly reflect the maximum, they may be relied on, but month-end balances are not the maximum by definition and a peak that occurred mid-month must be captured by other evidence.

### What is the penalty for not filing Form 8938?

$10,000 for each year the required form is not filed complete and correct. If the failure continues more than 90 days after the IRS mails notice, an additional $10,000 accrues for each 30-day period or fraction, capped at $50,000, producing a $60,000 ceiling per year. Separately, IRC Section 6662(j) imposes a 40 percent accuracy-related penalty on the portion of any underpayment attributable to an undisclosed foreign financial asset. The figures are statutory and are not adjusted for inflation.

### Does a self-custody wallet trigger the FBAR or Form 8938?

Generally no for the FBAR, because a wallet whose keys the holder controls is not an account maintained by a foreign financial institution. The same reasoning usually keeps it outside Form 8938's financial-account prong. That conclusion depends on control, not on labeling: a hosted wallet, an arrangement where a third party holds keys, or a lending or staking platform holding customer assets presents an institution, and the analysis changes.

### What is the Form 3520 threshold for a foreign gift of digital assets?

$100,000 for gifts and bequests received from a foreign individual or a foreign estate, aggregated across related parties, reported in Part IV of Form 3520. Gifts from foreign corporations and partnerships use a lower inflation-adjusted threshold. The penalty for failure to report is five percent of the gift per month, up to 25 percent, subject to reasonable cause.

### Can an appraisal establish an FBAR maximum value?

Yes, and for a volatile or illiquid position it is often the only defensible route. The rule requires a reasonable approximation of the greatest value during the year, and a valuation prepared to appraisal standards supplies exactly what a spreadsheet cannot: a stated definition of value, a fixed date, identified property interests, a documented data hierarchy, and reasoning that a third party can test. A reporting-purpose attestation is not a qualified appraisal under IRS Section 170, and a qualified appraisal prepared for a charitable contribution does not automatically serve the reporting purpose.

### What records must be kept for a foreign crypto account?

For the FBAR, 31 C.F.R. Section 1010.420 requires five years of records showing the account holder's name, the account number, the institution's name and address, the type of account, and the maximum value during the year. The regulation does not prescribe a document type, which means the obligation falls on the file: dated holdings reconstructions, price-source records, transfer schedules, and the methodology memorandum supporting any position without a continuous observable price.
