---
title: "The Alternate Valuation Date for Digital Assets: IRC Section 2032, Dual-Date Appraisal Requirements, and Why Crypto Volatility Changes the Estate Tax Analysis"
date: "2026-09-15"
description: "The Section 2032 alternate valuation date election is the only federal lever an executor has when a digital asset portfolio falls after death. This practitioner-level analysis covers the statute, the included-versus-excluded property distinction for staking rewards and airdrops, the marital and charitable deduction adjustment that quietly erodes the benefit, dual-date appraisal scope, and the procedural deadlines that govern a missed election."
category: "QDAV"
author: "QDAV"
---
# The Alternate Valuation Date for Digital Assets: IRC Section 2032, Dual-Date Appraisal Requirements, and Why Crypto Volatility Changes the Estate Tax Analysis
*Published: September 15, 2026 | By QDAV*

---

When a decedent's estate holds a concentrated digital asset position, the six months following death are not an administrative waiting period. They are the only window in the federal estate tax system in which a falling market can reduce the tax.

Internal Revenue Code Section 2032 permits the executor to value the entire gross estate as of the date six months after death rather than the date of death. For a portfolio of Treasury notes or a diversified equity account, the election moves the number modestly. For a portfolio concentrated in bitcoin, ether, and a thin-market NFT collection, the same six months can move the number by thirty or forty percent — and the swing runs in both directions, on the appraisal page and on the beneficiaries' future basis.

This analysis is written for the estate attorneys, CPAs, and personal representatives who must make the call and document it: the statutory architecture, the two provisions practitioners most often misread, the appraisal scope the election requires, and the deadlines that determine whether a missed election can still be fixed.

## The statutory architecture: three dates, one election, no partial application

Section 2032(a) sets out three valuation rules that operate together:

| Rule | Property affected | Valuation date |
|---|---|---|
| §2032(a)(1) | Property distributed, sold, exchanged, or otherwise disposed of within six months of death | The date of that distribution, sale, exchange, or disposition |
| §2032(a)(2) | Property not disposed of within the six-month window | The date six months after death |
| §2032(a)(3) | Interests or estates affected by mere lapse of time | Date-of-death value, adjusted for differences at the later date not attributable to lapse of time |

Two structural features matter more than any individual rule.

**The election is all-or-nothing.** Treasury Regulation §20.2032-1(b)(1) is explicit: if the election is made, the alternate valuation method "applies to all property included in the gross estate and cannot be applied to only a portion of the property." An estate cannot value a declining crypto position at the alternate date and an appreciating commercial building at the date of death. The executor must model the entire gross estate. In a hyper-concentrated digital asset estate this is usually favorable, because the volatile asset dominates the total. In a mixed estate — a $6 million digital position inside a $40 million estate that also holds appreciating real estate and a closely held operating business — the election can easily be net-negative, because gains on everything else are swept into the alternate date along with the crypto losses.

**The election is conditional, not elective in the ordinary sense.** Section 2032(c) provides that no election may be made unless it will decrease *both* (1) the value of the gross estate and (2) the sum of the chapter 11 estate tax and the chapter 13 generation-skipping transfer tax with respect to property includible in the gross estate, reduced by allowable credits. Both prongs must be satisfied. It is not enough that the portfolio lost value.

The mechanics follow. The election is made on Form 706, Part III, line 1. If elected, Part II, line 1 takes the amount from the "Alternate value" column of Part V, item 13 rather than the "Value at date of death" column. Every Form 706 schedule carries both columns, and the instructions direct that the alternate columns not be completed unless the election was made on Part III, line 1. Digital assets are reported on Schedule F (Form 706), "Other Miscellaneous Property Not Reportable Under Any Other Schedule" — the 2025 instructions list digital assets in the gross estate enumeration pointing to that schedule, which must be attached even where the entry is zero.

One date computation surfaces in every engagement. The window is measured in months, not days. Under Rev. Rul. 74-260, 1974-1 C.B. 275, where there is no numerically corresponding date six months after death, the alternate valuation date is the last day of the sixth month. A decedent who dies on August 31 has an alternate valuation date of February 28 — or February 29 in a leap year. That date is the appraiser's effective date of value, and it belongs in the engagement letter before any data is pulled.

## Why digital assets are the hardest application of a simple rule

Section 2032 was drafted with assets that have a closing price. Regulated markets close, publish an official print, and treat the absence of a trade on a given date as a defined condition. Regulation §20.2031-8(b), for example, resolves the valuation of an open-end investment company share where the valuation date falls on a Saturday, Sunday, or holiday by using the last public redemption price quoted for the first preceding day with a quotation.

Digital assets invert that problem. Bitcoin and ether trade continuously across hundreds of venues, in hundreds of pairs, with no official close, no consolidated tape, and no regulator publishing a settlement price. Venue-level prices diverge intraday, and the divergence widens precisely when volatility is highest — which is precisely when the appraisal date matters most.

The appraisal consequence is that fair market value on a stated date is not a lookup. It is a conclusion requiring the appraiser to select and defend a pricing convention: which venues, which pairs, what time of day, and how to reconcile a portfolio held across four exchanges. Under Uniform Standards of Professional Appraisal Practice Standards 7 and 9, that convention is an assignment condition disclosed in the report, not an internal working assumption. A price observed at 09:30 Eastern and one observed at 23:59 UTC on the same date are both "the price that day," and they may differ by several percent. Defensible Data means the convention is stated, sourced, and reproducible.

## Included property and excluded property: the distinction most estates get wrong

The most consequential provision in the regulation for a digital asset estate is paragraph (d), and it is not about price at all.

Reg. §20.2032-1(d) divides the estate into "included property" and "excluded property." Included property is the property interests existing at the date of death that formed part of the gross estate under §§2033 through 2044. Those interests remain included property for alternate valuation purposes **even though they change in form** during the alternate valuation period. Excluded property is property *earned or accrued after death* during that period which does not itself represent included property or the receipt of included property. The regulation illustrates the principle with accrued interest, accrued rent, post-death dividends, and post-death amortized discount on a discounted obligation — each excluded.

Applied to a digital asset estate, the distinction produces four categories that must be separated on the valuation date.

**Included property.** The units held at the moment of death, valued at the alternate date even if the executor moves them between wallets, bridges them to another network, wraps them, or deposits them into a different custodial arrangement. A change in form is not a change in status.

**Post-death income — excluded property.** Staking rewards, validator rewards, DeFi lending interest, liquidity provision fees, and similar accruals generated by the included property after death are excluded property. They are not added to the gross estate at the alternate date. They are income to the estate or the beneficiaries when received, generally at Fair Market Value on the receipt date under the principles of Rev. Rul. 2023-14 and Notice 2014-21, with that value becoming basis.

**Hard fork and airdrop proceeds — excluded property.** Where a hard fork or airdrop delivers new units after death, those units did not exist as property interests of the decedent at the date of death. Under the analysis in Rev. Rul. 2019-24, the new asset is gross income when the recipient has dominion and control. For an estate that event occurs after death, which places the new coins in the excluded category. They do not raise the alternate-date gross estate.

**Reinvested or compounded positions.** Where post-death rewards are automatically restaked or compounded into the staking position, the estate must be able to show which units are included property and which units arrived after death. This is the most common documentation failure in digital asset estate work, and it cannot be reconstructed from a custodian statement alone. It requires an on-chain snapshot at two dates plus a documented chain-of-custody narrative.

The instruction to the appraiser and the accountant follows directly: the engagement must establish holdings at the date of death and holdings at the alternate valuation date, and reconcile the difference to income events rather than to valuation movement. Without that reconciliation, either the gross estate is overstated — producing estate tax on post-death income — or the income is omitted, creating a separate exposure on the estate's or beneficiaries' income tax returns.

## Dispositions inside the six-month window

Section 2032(a)(1) fixes the valuation of property that leaves the estate inside the window at the date of disposition. Reg. §20.2032-1(c)(1) makes the phrase comprehensive: "distributed, sold, exchanged, or otherwise disposed of" comprehends all possible ways property ceases to form part of the gross estate. Under §20.2032-1(c)(3), the disposition may be made by the executor, a trustee or donee, an heir or devisee to whom title passes directly under local law, a surviving joint tenant, or any other person. Where a binding contract for sale is entered into, the property is treated as disposed of on the contract's effective date — normally the date it was entered into, not the closing date — unless the contract specifies otherwise.

Three consequences follow.

**Executor trading sets the valuation date.** If the personal representative converts ether to a stablecoin in month two to fund administration expenses or reduce volatility, that conversion is a disposition of the ether, which is then valued at the conversion date rather than the six-month date. An executor who sells near a market low has locked in a low alternate value while simultaneously realizing a post-death capital event with its own income tax consequences. The trading decision and the valuation decision are the same decision, and they should not be made independently of the appraiser and tax counsel.

**Token migrations, rebrands, and chain swaps require judgment.** Where a project migrates a token to a new contract, converts one asset into a claim on another, or executes an exchange in a treasury operation, the question is whether the estate's interest changed in form — which preserves included property status — or was disposed of, which fixes value at that date. Where the position's economic identity is preserved, the change-in-form analysis of §20.2032-1(d) generally controls; where the estate exchanged one asset for a genuinely different asset, the answer may be otherwise. The determination is documented, not assumed, and the documentation has to precede the return.

**Distributions to beneficiaries close the window for that asset.** Where an in-kind distribution of digital assets is made inside the six months, the asset is valued at the distribution date. Reg. §20.2032-1(c)(2) treats property as distributed on the earliest of a final order or decree of distribution, the segregation or separation of the property from the estate so that it becomes unqualifiedly subject to the distributee's demand, or actual delivery. Sending units to a beneficiary's own wallet is actual delivery. That date is the valuation date for those units, which means the estate's alternate-date appraisal must cover multiple effective dates, not one.

## The double-decrease test, and the two deductions that erode the benefit

Section 2032(c) requires that the election decrease both the gross estate and the combined estate and GST tax. That second prong is where the analysis usually fails, and the reason is Reg. §20.2032-1(g).

The regulation provides that where alternate valuation is elected, the **marital deduction under §2056 and the charitable deduction under §2055 are determined by the value of the property at the date of death, adjusted for any difference in its value as of the alternate valuation date** (or the date of distribution, sale, exchange, or other disposition, whichever occurs first). Differences attributable to lapse of time or to the occurrence or nonoccurrence of a contingency are disregarded.

In plain terms: if the digital assets are declining and part of the estate passes to a surviving spouse in a form that qualifies for the marital deduction, **the marital deduction shrinks along with the assets.** The gross estate falls, but the deduction sheltering the transfer falls by the same amount, so the taxable estate falls by less than the appraiser's number suggests. The same adjustment applies to a charitable bequest: where a will leaves digital assets to a qualified charity, the §2055 deduction is reduced to the alternate-date value. An estate that elects §2032 to cut its tax on the residue has simultaneously cut its own charitable deduction.

Four failure modes are worth stating explicitly.

**The estate owes no tax at the date of death.** If the gross estate after deductions is below the $15,000,000 basic exclusion amount for 2026 under Rev. Proc. 2025-32, or if the unlimited marital deduction eliminates the taxable estate entirely, there is no tax to decrease and the election is unavailable under §2032(c). It is also undesirable: a lower basis with no tax savings.

**A marital formula absorbs the decline.** Where the entire residuary estate passes to a surviving spouse, a decline produces an equivalent reduction in the marital deduction, the taxable estate stays at zero, and the election fails the second prong.

**GST tax moves the wrong way.** Because §2032(c)(2) measures the sum of chapter 11 and chapter 13 tax, an estate with a generation-skipping transfer that increases at the alternate date can fail the test even where the estate tax alone decreases.

**Post-examination adjustments flip the answer.** In C.C.A. 201926013 (May 30, 2019), IRS Chief Counsel addressed an estate that had elected alternate valuation and was then adjusted on examination. Counsel concluded that §2032(c) controls: alternate values may be used only where they produce both a lower gross estate and lower combined estate and GST tax, and where examination adjustments make date-of-death values produce the lower combined tax, **the date-of-death values must be used even though the §2032 election itself remains valid.** The election does not lock in the alternate values; it conditions them on an outcome. That is one reason to preserve a complete date-of-death valuation file in every alternate-valuation engagement, not merely the alternate-date work.

## Two illustrations: when the election works, and when the arithmetic turns

The following are hypothetical illustrations of the arithmetic an executor and tax counsel must model. They are not tax advice and do not reflect any client engagement.

**Illustration 1 — a concentrated digital estate with no marital deduction.** The decedent dies in 2026 with a gross estate of $20,000,000: $9,000,000 of bitcoin, $4,000,000 of ether, $1,000,000 of NFTs, and $6,000,000 in other assets. Six months later bitcoin is down 40 percent to $5,400,000, ether down 25 percent to $3,000,000, the NFT collection down 40 percent to $600,000, and the other assets up 5 percent to $6,300,000. The alternate-date gross estate is $15,300,000.

Applying the unified rate schedule with the 2026 basic exclusion amount of $15,000,000, the estate tax at the date of death is $2,000,000. At the alternate valuation date it is $120,000. Both prongs of §2032(c) are satisfied, and the election saves $1,880,000.

The trade is the basis. Under §1014(a), basis is the fair market value at the date of death or, where §2032 is elected, the applicable valuation date prescribed by that section. Here the heirs' aggregate basis falls from $20,000,000 to $15,300,000. If the market recovers fully and the assets are sold at $20,000,000, the additional taxable gain is $4,700,000, which at a 23.8 percent federal long-term rate (20 percent plus the 3.8 percent net investment income tax) is approximately $1,118,600. The net federal benefit is roughly $761,400 before state taxes — and is eliminated entirely if the heirs hold until their own deaths, when basis resets again.

**Illustration 2 — the same decline inside a marital-deduction estate.** The decedent dies with a gross estate of $40,000,000. Of that, $15,000,000 passes to the surviving spouse in a qualifying form and $25,000,000 passes to a family trust. The digital holdings total $20,000,000: $10,000,000 allocated to the spouse's share and $10,000,000 to the trust. Non-digital assets are $20,000,000, split $5,000,000 and $15,000,000. At the date of death the marital deduction is $15,000,000, the taxable estate is $25,000,000, and the estate tax is $4,000,000.

Six months later the digital assets are down 40 percent — an $8,000,000 decline — and everything else is unchanged. The gross estate falls to $32,000,000. But the marital deduction is adjusted under Reg. §20.2032-1(g) to the alternate-date value of the property passing to the spouse: $15,000,000 becomes $11,000,000. The taxable estate falls only to $21,000,000 and the estate tax to $2,400,000. Both prongs are satisfied, and the election saves $1,600,000 — not the $3,200,000 that a 40 percent rate applied to an $8,000,000 decline would suggest. The savings equal 40 percent of the *net* taxable estate decline of $4,000,000: the $8,000,000 decline less the $4,000,000 of lost marital deduction.

Meanwhile the basis reduction applies to all $12,000,000 of alternate-date digital assets. If the market recovers and the assets are sold at $20,000,000, the additional federal capital gains tax is approximately $1,904,000 — more than the $1,600,000 of estate tax saved. On these facts the election destroys value before any state tax is considered.

That asymmetry — the deduction adjustment applies to the declining assets, while the basis cost applies to all of them — is why a §2032 analysis cannot be run from the crypto sleeve alone. It has to be run on the whole estate, with the marital and charitable allocations mapped.

## What a dual-date digital asset appraisal must actually produce

The appraisal scope follows from the statute. A single date-of-death opinion is insufficient to support or reject the election, and it cannot support the return if the election is made. A USPAP Compliant engagement in this context produces two values with two effective dates, each with its own data cut-off.

**At the date of death.** Fair Market Value for each asset or asset class as of the disclosed date-and-time convention. This valuation does three things: it establishes the reported values if the election fails or is not made, it supplies the comparison that determines whether §2032(c) is satisfied, and it preserves the fallback position C.C.A. 201926013 makes necessary.

**At the alternate valuation date, or the date of disposition.** Fair Market Value at the six-month date for property still held, and at the disposition date for property distributed, sold, exchanged, or otherwise disposed of inside the window. Where the estate disposed of assets on several dates, the report covers each date. Where post-death income events occurred, the holdings reconciliation must be presented so that the gross estate values exclude excluded property.

Both valuations rest on the same foundation: dated account and wallet statements at each effective date; on-chain snapshots evidenced by address, block height, and timestamp; the pricing convention with named venues and pairs; volume and liquidity data at the alternate date, which is often materially different from the date of death; comparables for non-fungible positions including trait-level and floor analysis; and support for any discount for lack of marketability on locked, vested, or thin-market positions.

Two standards questions recur. First, whether a qualified appraisal is required for estate tax purposes. Strictly, the requirement of IRS Section 170(f)(11) governs substantiation of charitable contributions and does not map one-for-one onto Form 706 — but an estate claiming a charitable deduction for donated digital assets needs the §170 work product, and an estate reporting a concentrated digital position needs something functionally equivalent for a different reason: penalty exposure. Section 6662 imposes a 20 percent penalty on a substantial or gross valuation understatement (65 percent or less, and 40 percent or less, of actual value, with a floor where the underpayment does not exceed $5,000), and §6695A penalizes the **appraiser** where an appraisal results in such a misstatement, absent a showing that the value was more likely than not the proper value.

Second, whether the same appraiser may produce both dates. Yes — and it is preferable, because one professional reaches both conclusions on one methodology, one data convention, and one record. Open the engagement early: the date-of-death valuation can be developed while holdings and price data are fresh, and the alternate-date valuation completed after the six-month date so the executor has the comparison well before filing.

## Procedural playbook: deadlines, protective elections, and relief

The timing architecture is what makes the election operationally manageable, because the alternate valuation date arrives three months *before* the return is due.

| Event | Timing |
|---|---|
| Alternate valuation date | 6 months after death (last day of the sixth month where no corresponding date exists) |
| Form 706 due | 9 months after death |
| Extended due date | 15 months after death with a Form 4768 automatic extension |
| Outer limit for making the election | No election if the return is filed more than 1 year after the due date, including extensions (§2032(d)(2)) |
| §301.9100 relief limitation | Not granted unless the return is filed no later than 1 year after the due date, including extensions (Reg. §20.2032-1(b)(3)) |

Two points follow. The executor can compute both columns of the return before filing, because the alternate date has passed by the time the return is signed; there is no reason to guess. And the election may be revoked on a subsequent return filed on or before the due date, including extensions, under Reg. §20.2032-1(b)(1) — which means a return filed early in the window has not yet foreclosed the decision.

Where the arithmetic is close, or where a value is still in dispute, Reg. §20.2032-1(b)(2) provides for a **protective election**: an election made on the return that becomes effective only if it is later determined that the alternate method would decrease both the gross estate and the combined estate and GST tax. The protective election is itself irrevocable as of the due date, including extensions. For an estate with an unresolved valuation question on a concentrated digital position, it is the low-cost hedge.

Where the election was missed entirely, Reg. §20.2032-1(b)(3) and §§301.9100-1 and 301.9100-3 provide the path, and the Service has granted it repeatedly on facts that will look familiar to any firm with a busy estate practice:

- In **PLR 202513003**, an estate timely filed Form 706 without the election or a protective election because appraisals had not yet been received, then filed a supplemental return making the election. Relief was granted.
- In **PLR 202410006**, the executor's attorney and accountant failed to advise the election. Relief was granted under the reliance standard of §301.9100-3(b)(1)(v), which treats a taxpayer as having acted reasonably and in good faith where the taxpayer reasonably relied on a qualified tax professional who failed to make, or advise the taxpayer to make, the election.
- In **PLR 202425012**, the return was filed without the election based on inaccurate value information supplied to the accounting firm by a corporate officer; relief was granted with a 120-day window to file the amended return.
- In the earlier **PLR-108574-11**, the same pattern produced the same result.

Two caveats belong alongside those rulings. Private letter rulings may not be cited as precedent under §6110(k)(3), so they evidence the availability of relief rather than establish an entitlement. And Reg. §20.2032-1(b)(3) closes the door unless the return is filed within one year of the due date, extensions included — which puts the practical outer limit for correcting a missed election at roughly twenty-seven months after death.

## Fiduciary duty and the decision memo

The valuation-date decision belongs to the executor, and it carries fiduciary consequences. In Re Lohm Estate, 269 A.2d 451 (Pa. 1970), a Pennsylvania court addressed an executor's failure to make the election — cited in practitioner literature for the proposition that an executor may be held personally accountable where alternate valuation could have reduced the tax and was not elected. The modern analogue is an accounting to the beneficiaries: the executor will be asked why the estate paid $2,000,000 when it could have paid $120,000.

The defense is contemporaneous documentation: a written decision memo, prepared with tax counsel and supported by appraisals at both dates, setting out the two computations, the §2032(c) test applied to each, the marital and charitable deduction adjustments, the basis consequence for each class of beneficiary, and the reason for the conclusion. Where the conclusion is to elect, the memo supports the return; where it is not, the memo answers the beneficiary who asks.

## Frequently Asked Questions

**What is the alternate valuation date for digital assets?**
It is the date six months after death — or the date an asset was distributed, sold, exchanged, or otherwise disposed of if that occurred earlier — and under IRC §2032 it applies to the entire gross estate, not to digital assets alone. Where no corresponding date exists in the sixth month, the last day of that month governs under Rev. Rul. 74-260.

**Does electing the alternate valuation date reduce the heirs' step-up in basis?**
Yes. Under §1014(a), elective alternate valuation makes the applicable valuation date the beneficiary's basis, so a lower alternate value produces a lower step-up and a larger gain on a later sale. Where the estate tax savings are modest relative to the basis reduction, the election can be net-negative.

**How are staking rewards and airdrops received during the six-month window treated?**
As excluded property under Reg. §20.2032-1(d). They are earned or accrued after death, so they are not added to the alternate-date gross estate. They are income when received, generally at fair market value on the receipt date under the principles of Rev. Rul. 2023-14 and Rev. Rul. 2019-24, and that value becomes basis.

**What happens if the executor sells crypto within six months of death?**
The disposed-of asset is valued as of the disposition date under §2032(a)(1), not the six-month date. A conversion, a distribution to a beneficiary, or a sale to fund administration expenses therefore fixes the valuation date for that asset and can lock in a low value.

**Do you need two appraisals to support a Form 706 alternate valuation election?**
You need valuation conclusions at both dates. That means date-of-death fair market value for every asset — required in any event to test §2032(c) and preserve the fallback position described in C.C.A. 201926013 — plus alternate-date value, or value at the disposition date, for the assets actually reported at the alternate date. A single dual-date engagement is the efficient way to produce both.

**Can the alternate valuation election be made after Form 706 has been filed?**
The election must be made by the executor on the return, but §2032(d)(2) permits it on a return filed up to one year after the due date including extensions, and the Service has granted §301.9100 relief where the return was filed without the election and an amended or supplemental return followed within that period. Reg. §20.2032-1(b)(3) forecloses relief beyond that limit.

**Who decides whether to make the election — the executor or the IRS?**
The executor decides, on the return. The IRS determines on examination whether the statutory conditions were in fact met, and under C.C.A. 201926013 the date-of-death values must be used if adjustments show the election did not decrease both the gross estate and the combined estate and GST tax.

**Is a qualified appraisal required for estate tax purposes?**
The qualified appraisal requirement of IRS Section 170(f)(11) governs charitable contribution substantiation rather than Form 706 as such. Estate valuation is nonetheless tested against §6662 valuation misstatement thresholds, and appraisers face separate exposure under §6695A, so a USPAP Compliant appraisal supported by Defensible Data is the professional standard for any concentrated digital position — and is mandatory in substance where the estate also claims a charitable deduction for digital assets.

## The bottom line

Section 2032 gives an executor one lever for a portfolio that falls after death, and that lever has a counterweight. The election is all-or-nothing, conditioned on reducing both the gross estate and the combined estate and GST tax, adjusted downward by the marital and charitable deduction rules, and paid for with the beneficiaries' basis. Where the digital position is large relative to the estate, the arithmetic can be decisive; where the estate is marital-deduction heavy, it can run the other way.

Both answers require the same thing: two dates, one methodology, and a documented record of what was held when and what it was worth.

If you are advising an executor on a digital asset estate, or administering one, contact QDAV at (248) 955-1491 or visit [qdav.mba](https://qdav.mba) to discuss a dual-date appraisal engagement. Engagements can be opened on the date of death and held open through the alternate valuation date so the executor has both columns of the return with time to spare.

---

*This article provides general information about professional appraisal practice and federal tax provisions as of September 15, 2026. It is not tax advice, legal advice, or an appraisal, and the illustrative calculations are hypothetical. Estate tax elections should be made in consultation with qualified tax counsel.*
