---
title: "The One Valuation Date Nobody Gets to Elect: How a Self-Directed IRA's December 31 Account Balance Sets the Required Minimum Distribution, Why an In-Kind Distribution of Digital Assets Is Taxed at the Value of the Day It Leaves, and the Section 4974 Shortfall Tax That Punishes a Stale Price"
date: "2026-11-24"
description: "A self-directed IRA holding digital assets produces two numbers every year and taxes both of them. This analysis fixes the December 31 account balance under Treas. Reg. Section 1.401(a)(9)-5, works the Uniform Lifetime Table, follows an in-kind token distribution through Form 1099-R code K, and computes the Section 4974 excise tax that a stale quote creates."
category: "QDAV"
author: "QDAV"
---
# The One Valuation Date Nobody Gets to Elect

Every other valuation date in the Internal Revenue Code is a decision. The estate planner chooses between the date of death and the alternate valuation date. The donor chooses the day the gift leaves the account. The charitably inclined holder chooses the contribution date, subject only to the constraint that property must be valued when it is given. Even the appraiser's choice of valuation date is a choice made by someone, at some point, for a reason that can be documented.

The required minimum distribution has no such decision in it. The account balance that sets the distribution for a calendar year is the balance as of the last valuation date of the preceding calendar year, adjusted by the regulation and not by the taxpayer. For a self-directed IRA holding bitcoin, an ERC-20 position, and a locked allocation of a token that does not list until next spring, that means a price observation taken on December 31 — a date nobody selected for tax reasons, in a market that never closes, at an hour the regulation does not name.

As of this writing, thirty-seven days separate a self-directed IRA holder from the observation that will fix the distribution required for 2027. What follows is an account of what that observation must contain, what the divisor does with it, what happens when the distribution is satisfied with property instead of cash, and what the excise tax under IRC Section 4974 does to anyone whose number was wrong in either direction.

## Key Takeaways

- The required minimum distribution is the prior-year-end account balance divided by a distribution period; the balance date is fixed by Treas. Reg. Section 1.401(a)(9)-5 and is not elective.
- A digital asset balance includes assets the owner never bought: staking rewards, forked coins, and unsolicited airdrops all sit in the account on December 31 and all count.
- The applicable age is 73 for individuals born from 1951 through 1959 and 75 for those born in 1960 or later; the divisor comes from the Uniform Lifetime Table unless the sole beneficiary is a spouse more than ten years younger.
- Notice 2014-21 requires a method that is "reasonable" and "consistently applied," which makes year-over-year venue switching a documentation defect even when each individual price is defensible.
- An in-kind distribution is taxed at fair market value on the date the property leaves the account, reported on Form 1099-R with code K; an overshoot in one year never reduces a later year's requirement.
- A shortfall carries a 25 percent excise tax, reduced to 10 percent only if corrected inside the statutory window, and reported on Form 5329, Part IX.
- An annual IRA valuation is not an IRS Section 170 qualified appraisal; where the number becomes taxable income, appraisal-grade support is nonetheless the only defensible position.

## Part One: The Date That Is Not a Choice

Treas. Reg. Section 1.401(a)(9)-5(a)(1) states the mechanic in a sentence: the minimum amount required to be distributed for a distribution calendar year is the account divided by the applicable distribution period. Paragraph (b) then defines the account as the balance as of the last valuation date in the calendar year preceding that distribution calendar year, adjusted for contributions and distributions occurring after that date.

Publication 590-B translates the adjustment into practice. Contributions made after December 31 are disregarded in computing the following year's distribution. A distribution taken for the prior year but paid after December 31 reduces this year's balance but not last year's. The regulation is doing something subtle there: it is preventing a taxpayer from shrinking a base after the fact by paying last year's obligation late. The 2026 distribution for a holder who has not yet reached the required beginning date will be computed from a number that was fixed before the holder knew the divisor, and no subsequent market move alters it. A collapse in February lowers 2027's requirement. It does nothing to 2026's.

| Regime | Valuation date | Who selects it |
|---|---|---|
| Estate tax, IRC Section 2031 | Date of death | Fixed by statute |
| Estate tax, IRC Section 2032 | Six months after death | Executor elects |
| Gift tax, IRC Section 2512 | Date of transfer | Donor determines by acting |
| Charitable deduction, IRC Section 170 | Date of contribution | Donor determines by acting |
| Required minimum distribution | Last valuation date of the prior calendar year | No one |

That last row is the point of this analysis. Digital asset holders have spent a decade learning that valuation is a matter of method, venue, and timestamp. The retirement account removes the third variable and fixes the second by implication. What remains is method — and method, applied to a fixed date, is either documented or it is not.

The regulation's phrase is the last valuation date, not December 31, and for most accounts the two coincide only because the custodian says so. An account statement issued as of the last business day of December carries a valuation date that is not the thirty-first. A custodian that values positions quarterly carries a date in September. Neither choice is wrong, and neither is invisible: the regulation asks for the last valuation date, and the holder's file should identify which date the custodian used, because a balance struck on December 29 and adjusted for nothing is a different number from a balance struck on the thirty-first, and the difference is not the holder's to discover in April.

## Part Two: What Actually Belongs in the Balance

Notice 2014-21 treats convertible virtual currency as property and requires conversion into dollars at an exchange rate determined "in a reasonable manner that is consistently applied." It supplies no venue, no timestamp, and no method. The regulation supplies the date. The gap between them is where an account balance becomes an opinion.

The composition question comes first, and it is not intuitive. A self-directed IRA that held one position at the start of the year may hold five by December 31 without a single purchase.

Staking rewards are income to the account when the holder gains dominion and control, under Rev. Rul. 2023-14. They are not a paper accrual; once credited, the tokens are account property, and they are part of the December 31 balance. Rewards earned in December and claimed in January present a timing question that must be documented rather than assumed. Hard-fork distributions follow Rev. Rul. 2019-24: income on dominion and control, which for most holders means the moment the forked asset becomes transferable in a wallet the account controls. Unsolicited airdrops are the same analysis with worse optics — a token the account never asked for still has a fair market value, and if that value is genuinely nil at receipt and nil at year-end, the file should say so with evidence rather than silence.

Locked and vesting allocations are the hardest case and the most common in 2026. A token subject to a twelve-month cliff is account property on December 31 even though it cannot be sold that day. It belongs in the balance. Whether it belongs at the fully diluted market price or at a documented discount for the restriction is a valuation question, and the answer must be the same answer next year.

| Position type | In the December 31 balance? | Evidence the file must hold |
|---|---|---|
| Spot bitcoin or ETH in a custodied wallet | Yes | Unit reconciliation plus price observation |
| Staking rewards received in-year | Yes | Reward statements, control evidence, receipt dates |
| Forked coins under dominion and control | Yes | Fork date, claim transaction, valuation at receipt |
| Locked or vesting allocation | Yes, with restriction analysis | Grant documents, cliff dates, discount support |
| Unsolicited airdrop with no market | Yes, at supportable value | Screened value evidence or a documented nil |
| NFT held directly | Yes | Trait-level comparables or documented illiquidity |
| Asset on a chain the custodian cannot service | Yes, plus an operational finding | Control attestation, custody arrangement |

Custodians report the aggregate on Form 5498, box 15a, with a code in box 15b identifying assets without readily available values. That reporting is a summary of a file, not a substitute for it. The custodian is transmitting the holder's number; the holder is the one exposed.

## Part Three: The Divisor, and the April Trap

The applicable age is 73 for anyone born from 1951 through 1959 and 75 for anyone born in 1960 or later, under IRC Section 401(a)(9)(C)(v) as amended by the SECURE 2.0 Act. The divisor comes from the Uniform Lifetime Table at Treas. Reg. Section 1.401(a)(9)-9, reproduced as Table III in Publication 590-B. The Joint and Last Survivor Table applies only where the spouse is the sole beneficiary and is more than ten years younger.

| Age in the distribution year | Uniform Lifetime divisor | Distribution on a $1,000,000 balance |
|---|---|---|
| 73 | 26.5 | $37,735.85 |
| 75 | 24.6 | $40,650.41 |
| 80 | 20.2 | $49,504.95 |
| 85 | 16.0 | $62,500.00 |
| 90 | 12.2 | $81,967.21 |

Two operational rules sit on top of the arithmetic. First, an owner computes the requirement separately for each IRA but may take the total from any one or more of them; employer plans cannot be aggregated with IRAs. Second, the first distribution may be deferred to April 1 of the following year, which means two distributions land in the same tax year. For a holder with a concentrated, volatile position, that deferral is a planning decision with a valuation consequence: it doubles the taxable amount in a single year and forces two liquidations inside twelve months, at whatever price the market offers in the second year.

The age cohorts deserve a note because they are about to change the population of holders. Anyone born in 1960 reaches 75 in 2035, which means the 2026 distribution year is still populated almost entirely by the 73 cohort and by holders who deferred under earlier law. The still-working exception that permits a plan participant to delay distributions while employed does not reach IRA owners at all; an IRA owner who continues to work begins distributions on the same schedule as one who retired at sixty. For a concentrated digital asset position held by a working professional, that is the most expensive misunderstanding in the area, and it is not a matter of interpretation.

## Part Four: The Price, on a Date With No Close

A traditional equity portfolio has a closing price on December 31. A digital asset portfolio has a price at every second, from dozens of venues, none of which is an auction and none of which is authoritative. December 31, 2026 falls on a Thursday, which changes nothing: the market does not close for the holiday, does not settle, and does not produce an official print.

Three conventions therefore have to be written down before the observation is taken: the venue selection rule, the timestamp, and the aggregation rule when more than one source is used. A defensible file names all three and applies the same three in the following year. Notice 2014-21's "consistently applied" language is doing real work here. A holder who used one venue in 2025 and a different venue in 2026 has not committed a valuation error, but has created a variance between two years that has to be explained — and the explanation has to be better than a preference.

Aggregation is the second convention. Where a holder prices the same asset on two venues and averages the results, the average must be specified in advance, weighted by something defensible, and applied in later years; an average computed after seeing which result the holder prefers is not a method. A quote denominated in a stablecoin introduces a third conversion the file must show, because the balance the regulation asks for is in dollars, and a stablecoin that traded at ninety-seven cents on December 31 has already embedded a valuation judgment inside the price. Both issues are trivial to document in advance and difficult to explain afterward.

The arithmetic of the timestamp is not trivial. A four percent intraday move on a one-million-dollar balance is forty thousand dollars of base; divided by 26.5, it is roughly fifteen hundred dollars of distribution. The sign of the error runs both ways, and only one of them is penalized.

A second discipline matters more for this asset class than any other: the observation must be captured on the day, with the source, the minute, and the time zone recorded, and the capture preserved in a form that can be reproduced. Reconstructing a December 31 price in March from a chart is possible and weaker. The price-evidence hierarchy that governs estate and charitable valuations applies with equal force here, and the file that survives an examination is the one assembled in real time.

## Part Five: Distributing the Asset Instead of the Cash

An in-kind distribution is taxed the same way a cash distribution is taxed: the amount includible is the fair market value of the property on the date it leaves the account. The custodian reports it on Form 1099-R, using code K where the asset has no readily available fair market value. That reporting code is a signal to the recipient and to the Service that the number on the form was supplied rather than observed — which is precisely why the supporting valuation matters more for a property distribution than for a wire.

Divisibility decides whether the distribution can be exact. Bitcoin divides to eight decimal places and most ERC-20 tokens to eighteen, so a holder can satisfy a requirement to the dollar and leave the remainder invested. An NFT cannot be divided. A holder who owes $37,735.85 and distributes a piece that appraises at $120,000 has taken $82,264 of excess distribution — taxable income in the year of distribution that cannot be applied against a later year's requirement. Publication 590-B is explicit that an excess in one year does not reduce the following year's minimum.

| Distribution form | Precision | Tax consequence |
|---|---|---|
| Cash from a sale inside the account | Exact | Recognizes gain or loss inside the IRA; distribution taxed at the withdrawn amount |
| Fractional bitcoin or fungible token | Exact to eight or eighteen decimals | Property distribution taxed at value on the transfer date |
| Whole NFT or other indivisible asset | All or nothing | Overshoot is taxable, does not carry forward |
| Partial interest in an illiquid position | Negotiable | Requires a valuation of the interest, not the whole |

Two practical constraints sit outside the tax analysis. Custodians apply their own year-end cutoffs, often mid-December, and most require a cash distribution or a completed liquidation before the last business day, because withholding and information reporting on property are operationally awkward. A holder planning an in-kind distribution should confirm the custodian's deadline and transfer mechanics before December, not during it.

The same arithmetic governs a Roth conversion, which is the other transaction in which an IRA's holdings acquire a taxable number. A conversion is reported differently than a distribution — the custodian uses the conversion code rather than code K — but the valuation question is identical, and the converted amount becomes basis in the Roth account for every subsequent distribution. An understated conversion value is not a small error; it is a permanent one, because the difference between the value used and the value actually converted is taxed again on the way out.

## Part Six: Illiquidity Is Not an Extension

There is no provision in the Code that extends a required beginning date because the account holds something that cannot be sold. Section 401(a)(9) does not contain an illiquidity exception, and the regulations do not manufacture one. The waiver in Section 4974(d) is available where the failure was due to reasonable error and reasonable steps are being taken to remedy it — a standard that describes a custodian's processing failure, not a token's lock-up schedule.

The remedies are therefore planning remedies, and they are few. A holder can distribute the illiquid position in kind, if it can leave at all. A holder can pre-position liquidity a year ahead by selling a portion of the liquid sleeve during the year in which the base is being set, which has the side effect of reducing the following year's balance. A holder with several IRAs can satisfy the aggregate requirement from whichever account holds cash, since the requirement is computed per account but may be paid from any of them. And a holder approaching the required beginning date can use the April 1 deferral deliberately rather than accidentally.

The opposite error deserves equal attention. Discounting a locked position reduces the base and therefore reduces the distribution, which is attractive until it is examined. A discount is defensible when the restriction is documented, the discount rate is supported, and the treatment is consistent across years. A discount applied in one year and abandoned in the next is not a valuation method; it is an adjustment to a tax result, and it reads that way in a workfile.

An IRA-owned LLC adds a layer rather than removing one. Where the account holds an interest in a company that holds the tokens, the balance to be divided is the value of the interest, not the sum of the tokens, and the requirement is satisfied by distributing cash from the entity or an interest in it. That structure is popular precisely because it centralizes control; it is also the structure in which the December 31 number is most often a manager's estimate rather than an observation, and an estimate that cannot be tied to a valuation of the underlying assets is the weakest link in an otherwise orderly file.

## Part Seven: The Section 4974 Arithmetic

If the amount distributed in a calendar year falls short of the requirement, IRC Section 4974(a) imposes an excise tax equal to 25 percent of the shortfall. Section 4974(e), added by Section 302(b) of the SECURE 2.0 Act, reduces that to 10 percent where the taxpayer receives a corrective distribution and files a return reflecting the tax by the last day of the correction window. The window closes on the earliest of three events: the mailing of a notice of deficiency, the assessment of the tax, or the last day of the second taxable year beginning after the year in which the tax is imposed. The tax is reported on Form 5329, Part IX. The current regulations under Section 54.4974-1 were finalized in T.D. 10001 and apply to taxable years beginning on or after January 1, 2025.

The numbers are small enough to mislead. A valuation error of $150,000 on a one-million-dollar base, divided by 26.5, moves the requirement by $5,660. Understated base, 25 percent of the shortfall, is $1,415 — ten percent if corrected in time. Overstated base produces no excise tax at all: it produces $5,660 of unnecessary taxable income, an overpaid income tax on that amount, and no credit in any future year.

| Error direction | Effect on the requirement | Tax consequence | Recoverable? |
|---|---|---|---|
| Balance overstated by $150,000 | Requirement too high by $5,660 | Excess distribution taxed as income | No carryforward |
| Balance understated by $150,000 | Requirement too low by $5,660 | 25% excise on shortfall, 10% if corrected | Only through the correction window |
| Balance unverifiable | Requirement unknowable | Exposure on both sides | No |

The asymmetry explains why the file matters more than the number. An appraiser who overstates a balance costs the client tax. An appraiser who understates one creates an excise tax exposure and, worse, an unverifiable position if the workpaper cannot be reproduced.

## Part Eight: Inherited Accounts and the Ten-Year Clock

A beneficiary's position is governed by a different set of rules, and the interaction with a volatile balance is sharper. Under IRC Section 401(a)(9)(H), most non-spouse beneficiaries must empty an inherited account by December 31 of the year containing the tenth anniversary of the owner's death. The 2024 final regulations preserved a second layer that many summaries lost: where the owner died on or after the required beginning date, the beneficiary must also take annual distributions in years one through nine. The preamble to T.D. 10001 states directly that the regulations do not eliminate the requirement for continued annual distributions. Transition relief covered 2021 through 2024 under a series of notices, the last of which was Notice 2024-35; from 2025 the annual requirement is enforced.

| Owner died | Beneficiary | Annual distribution years 1–9 | Final deadline |
|---|---|---|---|
| Before required beginning date | Non-spouse individual | No | Tenth anniversary year-end |
| On or after required beginning date | Non-spouse individual | Yes, using the beneficiary's life expectancy | Tenth anniversary year-end |
| Any date | Surviving spouse treating as own | Owner rules apply | Owner rules apply |
| Any date | Inherited Roth, non-spouse | No | Tenth anniversary year-end |

Two mechanics recur in beneficiary files. The owner's own distribution for the year of death must still be taken if the owner had not taken it, and it is computed as the owner would have computed it; a beneficiary who begins with the following year's requirement has skipped one. A surviving spouse who treats the account as her own steps back into the owner's rules entirely, including the applicable age and the Uniform Lifetime Table, which usually lowers the annual amount and restores the account to a lifetime horizon. Both decisions are irrevocable in practice, and both depend on a valuation the beneficiary may not have commissioned.

For a digital asset account, the ten-year clock creates a valuation decision every year rather than a single one at the end. Each year's annual distribution, where it applies, is computed from that year's prior-year-end balance. A beneficiary who inherits a concentrated position in a rising market must distribute against a rising base; one who inherits in a falling market distributes against a falling base and then faces the tenth-year deadline on whatever remains. Neither beneficiary chooses the sequence. Both are required to document the number they used.

## Part Nine: Where a Qualified Appraisal Fits

An annual IRA valuation is not an IRS Section 170 qualified appraisal, and no statute requires one for the value reported on Form 5498. That distinction should be stated plainly, because much of the available marketing content blurs it. The charitable regime requires a qualified appraisal in defined circumstances, with defined content, from a qualified appraiser, at Treas. Reg. Section 1.170A-17. The retirement regime requires a reasonable fair market value, consistently determined, reported by a custodian who disclaims responsibility for it.

Where the annual determination ends and an appraisal engagement begins is a question of consequence, not of form. Three situations justify appraisal-grade support. The first is a taxable event: an in-kind distribution or a Roth conversion has a number that becomes income, and that number deserves the same treatment as a charitable deduction. The second is an illiquid or restricted position, where the difference between a quoted price and an actual fair market value is the entire question. The third is an account that will be examined, where the file has to demonstrate method, not just a source.

A USPAP Compliant engagement, conducted under Standards 9 and 10, produces something a spreadsheet does not: a stated standard of value, a defined subject property, a described valuation date and time, an identified primary approach with supporting data, and a signed opinion that can be defended by the person who formed it. Defensible Data in this context means the ability to reproduce any number in the report from the underlying observation, which is the same test an examiner applies.

An engagement for this work should fix four things before any data is requested: the standard of value, the valuation date and the observation convention attached to it, the subject property including custody and control, and the report format with its signature. Fixing them in advance is what makes the engagement independent. An appraiser who learns the divisor before choosing the method, or who is told what the number needs to be for the distribution to work, is no longer performing an appraisal, and the file will show it.

## Part Ten: The Year-End File

The work is seasonal, and the calendar is fixed. The following sequence reflects the order in which the artifacts become available, rather than the order in which they are usually discussed.

| Date | Action | Artifact produced |
|---|---|---|
| Early December | Reconcile units across all wallets, custodial accounts, and reward ledgers | Unit reconciliation schedule |
| Mid-December | Confirm custodian distribution cutoffs and in-kind mechanics | Custodian instruction record |
| December 31 | Capture the price observation, with source, minute, and time zone | Timestamped price evidence |
| January 31 | Receive Forms 1099-R for any in-year distributions | Distribution records with code K where applicable |
| February–March | Compute the requirement and verify it against the divisor | Distribution worksheet |
| March–April | Complete the fair market value schedule for the custodian | Annual valuation support |
| End of May | Verify Form 5498 box 15a and the box 15b code | Custodial reporting confirmation |

A file assembled in this order survives scrutiny because each artifact exists before the question is asked. A file assembled in April from memory, screenshots taken in September, and a chart pulled from an exchange after the fact does not fail because any single number is wrong. It fails because the sequence cannot be reconstructed, and reconstruction is the only thing that turns a price into an opinion with a signature on it.

Retention deserves a sentence. The workfile supporting a December 31 balance should be kept at least as long as the return that reported the resulting distribution can be examined — three years as a general matter, six where a substantial understatement is asserted, and longer where the account is part of an estate or trust administration that has its own clock. Storage is cheap. A reconstructed price is not.

## Frequently Asked Questions

### How is a required minimum distribution calculated for a self-directed IRA holding cryptocurrency?

The distribution equals the account balance on the last valuation date of the preceding calendar year, adjusted for later contributions and distributions, divided by the distribution period for the owner's age from the Uniform Lifetime Table. For a holder turning 73, the divisor is 26.5; a one-million-dollar balance produces a requirement of $37,735.85.

### Which price should be used for the December 31 value of a digital asset?

The price must come from a venue where the asset is actually traded, at a stated minute and time zone, on a method applied consistently from year to year. Notice 2014-21 requires a reasonable manner consistently applied and names no venue; the defensible approach documents the selection rule before the observation is taken.

### Can the distribution be satisfied by transferring crypto out of the account instead of selling it?

Yes. An in-kind distribution is taxed at fair market value on the date the property leaves the account and is reported on Form 1099-R with code K where no readily available value exists. Fungible assets can be distributed to the dollar; an indivisible asset cannot, and any overshoot is taxable income that does not reduce a later year's requirement.

### What happens if the December 31 value was wrong?

If the balance was understated, the requirement was too low, and the shortfall carries a 25 percent excise tax, reduced to 10 percent if a corrective distribution is taken and a return filed within the correction window. If the balance was overstated, the holder took more than required, paid income tax on the excess, and receives no credit in any future year.

### Is a qualified appraisal required for an IRA's annual valuation?

No statute requires an IRS Section 170 qualified appraisal for the value reported on Form 5498. Where the number becomes taxable income — an in-kind distribution or a Roth conversion — or where the position is restricted, illiquid, or likely to be examined, appraisal-grade support is the defensible position.

### Does a Roth IRA holding crypto have required minimum distributions?

A Roth IRA owner has no lifetime distribution requirement under IRC Section 408A(c)(5). An inherited Roth is treated as though the owner died before the required beginning date, so a non-spouse beneficiary generally takes no annual distribution but must empty the account within ten years.

### How does the ten-year rule work for an inherited IRA holding digital assets?

The account must be emptied by December 31 of the year containing the tenth anniversary of the owner's death. If the owner died on or after the required beginning date, annual distributions are also required in years one through nine, each computed from that year's prior-year-end balance.

## Conclusion: A Balance Is an Opinion With a Date Attached

The retirement account imposes a discipline that the rest of the tax code leaves optional. It fixes the date, removes the election, and then taxes the resulting number twice — once as a distribution and once, if the number was too low, as an excise tax on the shortfall. Nothing about that structure is unfair. It is simply unforgiving of a balance that cannot be explained.

For a self-directed IRA holding digital assets, the work therefore reduces to three questions asked in a fixed order. What did the account own on December 31, and can the units be proven? What was each position worth at the stated minute, and can the price be reproduced? And was the resulting number applied to the correct divisor, in the correct year, with the correct treatment of anything that left the account in kind? A holder who can answer all three has a defensible position. A holder who can answer two has a file that will be reconstructed by someone else, on a schedule not of their choosing.

Thirty-seven days remain before the observation that fixes 2027. The date will not move, and it will not be extended for a token that has not listed, a custodian that cannot transfer, or a market that has moved since. It is the one valuation date in the Code that nobody gets to elect — which is precisely why it deserves an appraisal discipline rather than a screenshot.

*This analysis is educational and does not constitute tax or legal advice. QDAV provides USPAP-compliant appraisals and does not provide tax return preparation. Consult your CPA or tax counsel regarding your specific distribution obligations.*
