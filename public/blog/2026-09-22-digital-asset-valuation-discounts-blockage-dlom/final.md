---
title: "Valuation Discounts for Digital Assets: Blockage, the Discount for Lack of Marketability, and Restricted Token Positions Under USPAP and the Treasury Regulations"
date: "2026-09-22"
description: "A practitioner-level analysis of the two deductions that reduce an otherwise supportable digital asset value — the blockage discount and the discount for lack of marketability — the authorities that permit or prohibit each, the models used to quantify them for locked, vesting, and concentrated positions, and the documentation that makes the conclusion survive examination."
category: "QDAV"
author: "QDAV"
---
# Valuation Discounts for Digital Assets: Blockage, the Discount for Lack of Marketability, and Restricted Token Positions Under USPAP and the Treasury Regulations

*Published: September 22, 2026 | By Qualified Digital Asset Valuations (QDAV)*

---

## Introduction: The Price Is Observable. The Property Interest Is Not.

A digital asset price is rarely the point of disagreement. Prices are published continuously, aggregated across venues, and reproducible to the second. When a return is examined, the dispute is almost never whether a token traded at a particular number. The dispute is whether that number describes the property interest that actually changed hands.

Those are different questions, and the distance between them is where valuation discounts live. A position representing a material share of a token's tradable supply cannot be liquidated at the quoted price without moving that price. A position subject to a vesting schedule, a protocol lockup, or a contractual transfer restriction cannot be converted to cash on the valuation date at all. A digital asset held through an LLC or a family partnership is not the token — it is an entity interest with its own rights, restrictions, and market. In each case a willing buyer, knowing what the seller knows, would pay less than the exchange quotation multiplied by the quantity held.

Two distinct doctrines account for that difference. The **blockage discount** responds to the size of a holding relative to the market's capacity to absorb it. The **discount for lack of marketability** responds to restrictions on transferability. They are frequently treated as synonyms and they are not the same analysis, they do not share the same evidentiary base, and they are not automatically available.

There is a further complication specific to this asset class. The Treasury Regulations expressly authorize a blockage deduction — but the text is written for **stocks and bonds**. No digital-asset-specific rule has been issued, so the express provision functions as analogy rather than authority. Under ASC 820 the analysis runs the other way: blockage factors and position-size discounts are prohibited outright in financial reporting.

## Key Takeaways

- **Blockage and lack of marketability are separate doctrines.** Blockage responds to position size relative to tradable supply; the marketability discount responds to restrictions on transferability. Both reduce a market-derived value, and both are measured against the willing-buyer/willing-seller standard.
- **The express blockage rule covers stocks and bonds, not digital assets.** Treas. Reg. §20.2031-2(e) and §25.2512-2(e) authorize the deduction where a block cannot be liquidated in a reasonable time without depressing the market. With no digital-asset analogue, the conclusion is fact-specific and evidence-dependent.
- **Transfer-tax Fair Market Value and ASC 820 fair value are different standards.** ASC 820-10-35-36B prohibits blockage factors and other discounts reflecting holder size; a transfer-tax analysis may consider them where a hypothetical buyer would price them.
- **Asset-characteristic restrictions differ from holder-characteristic constraints.** A protocol lockup or transfer restriction that travels with the token is a fact about the asset. Position size and the holder's own selling constraints are facts about the holder.
- **There is no IRS-approved model for quantifying a digital asset discount.** The four principal option-pricing models — Chaffe, Longstaff, Finnerty, and Ghaidarov — differ in structure and direction of bias, and the volatility input usually determines the answer.
- **Claimed discounts are a disclosure obligation.** Under Treas. Reg. §301.6501(c)-1(f)(2)(iv), adequate disclosure of a gift requires a description of the valuation method and disclosure of any blockage, minority-interest, or lack-of-marketability discounts claimed. Without it, the limitations period does not begin to run.

## Part One: Two Doctrines and One Standard of Value

The American Society of Appraisers' Business Valuation Standards Glossary defines a **blockage discount** as "an amount or percentage deducted from the current market price of a publicly traded stock to reflect the decrease in the per share value of a block of stock that is of a size that could not be sold in a reasonable period of time given normal trading volume."

The **discount for lack of marketability** is defined in the IRS's own *Discount for Lack of Marketability: Job Aid for IRS Valuation Professionals* (September 25, 2009) as "an amount or percentage deducted from the value of an ownership interest to reflect the relative absence of marketability." The Job Aid states on every page that it is not an official IRS position and "may not be used or cited as authority for setting any legal position." It is a reviewer's guide, correctly used only as a catalogue of approaches and their weaknesses.

Both deductions operate on one standard. Fair Market Value is the price at which property would change hands between a willing buyer and a willing seller, neither under any compulsion to buy or sell and both having reasonable knowledge of the relevant facts — the formulation in Revenue Ruling 59-60 and in the estate and gift regulations, and the standard under which a digital asset discount must be justified where no express rule applies.

| Dimension | Blockage Discount | Discount for Lack of Marketability |
|---|---|---|
| What it measures | The price concession required to absorb a position of a given size | The value effect of restrictions on transferability |
| Triggering fact | Position size relative to average daily volume and market depth | A lockup, vesting schedule, transfer restriction, or absence of a market |
| Evidence base | Trading volume, order-book depth, spread, participation rate, comparable block trades | The restriction instrument, restriction period, expected time to liquidity, volatility |
| Typical setting | Concentrated position in a widely traded asset | Restricted, vesting, pre-launch, or entity-held position |
| Express authority | Treas. Reg. §20.2031-2(e) and §25.2512-2(e) — stocks and bonds | No express rule; measured under the general Fair Market Value standard |
| Framework interaction | Not prohibited in the tax framework | ASC 820 permits only asset-characteristic adjustments |

A report prepared under USPAP states the standard of value applied and the definition relied upon, and discloses the difference where the assignment calls for IRS Fair Market Value rather than the market value definition in the appraisal standards. Fair Market Value is the phrase that matters on the return, and it is also the phrase that governs the discount analysis.

## Part Two: What the Authorities Actually Say

Four bodies of authority govern this question, and they do not point in the same direction on all points.

| Authority | What it provides | What it does not provide |
|---|---|---|
| Treas. Reg. §20.2031-2(e) (estate) | Where the executor can show the block of stock is so large relative to actual sales that it could not be liquidated in a reasonable time without depressing the market, the price at which the block could be sold outside the usual market — as through an underwriter — may be a more accurate indication of value than market quotations | No application to assets that are not stock or bonds; no prescribed quantification method |
| Treas. Reg. §25.2512-2(e) (gift) | Parallel blockage provision; courts require a showing that the block, **with reference to each separate gift**, is large enough that liquidation would depress the market price | No per-taxpayer aggregation; each transfer is measured separately |
| IRC §2031, §2512; Rev. Rul. 59-60 | The Fair Market Value definition: willing buyer, willing seller, no compulsion, reasonable knowledge of relevant facts | No discount mechanics |
| Rev. Rul. 77-287 | Valuation guidance for restricted securities that cannot be immediately resold under federal securities law | Written for restricted securities, not protocol-level lockups |
| Treas. Reg. §1.170A-1(c)(1); IRC §170(f)(11)(C); Reg. §1.170A-17 | Charitable deduction measured by Fair Market Value at the contribution date; a Qualified Appraisal required above $5,000 for property that is not a publicly traded security; the appraisal must state the approach and method | No authority addressing whether a blockage deduction is available for donated digital assets; the question is open |
| CCA 202302012 | Cryptocurrency is not a publicly traded security for §170(f)(11)(C) purposes, and exchange-reported values do not substitute for a Qualified Appraisal | Under IRC §6110(k)(3) it may not be used or cited as precedent |
| Treas. Reg. §301.6501(c)-1(f)(2)(iv) | Adequate disclosure of a gift requires a detailed description of the method used to determine Fair Market Value, including any blockage, minority-interest, or lack-of-marketability discounts claimed | Nothing — this provision is mandatory in effect |
| ASC 820-10-35-36B; 820-10-35-44 | For financial reporting: blockage factors and other discounts reflecting the size of the reporting entity's holding are prohibited; Level 1 measurement is quoted price multiplied by quantity | Does not govern tax Fair Market Value, and must not be imported into it |

The asymmetry is the analytical hinge of the subject: a discount may be available for tax purposes if the facts support it, while the same adjustment is prohibited in financial reporting when it reflects holder-level facts. An appraisal that cites ASC 820 to justify a transfer-tax discount, or tax authority to justify a financial reporting adjustment, has crossed a line that examiners and auditors both look for.

## Part Three: The Blockage Analysis for a Concentrated Digital Asset Position

A blockage analysis begins with two measurements that have nothing to do with the holder's opinion: the size of the position, and the market's demonstrated capacity to absorb it.

**Step one — measure the position.** The measure that matters is the position as a percentage of the token's freely tradable supply. Reported circulating supply and free float are not the same figure, and the difference matters when a large share of supply sits in treasury, foundation, or insider allocations unavailable to the market. A quoted price is a statement about the marginal trade; a position representing a meaningful fraction of float is not a marginal trade.

**Step two — measure the market.** Average daily volume in units, average daily traded value in dollars, order-book depth at and around the prevailing price, bid-ask spread, and the concentration of volume across venues. A token whose headline volume is concentrated in incentive-driven activity has a market thinner in economic substance than its statistics suggest.

**Step three — select a participation rate.** No professional assumes a position can be liquidated at one hundred percent of daily volume without consequence. A defensible analysis states the assumed participation rate — the share of average daily traded value the seller could represent without materially moving price — and defends it from the token's own market data.

**Step four — compute the liquidation horizon.** Position size divided by permitted daily participation yields the trading days required to exit. That horizon links the two doctrines: it becomes the holding period in the marketability analysis and the discounting period in the blockage computation.

**Step five — value the adjusted proceeds.** The approach sustained in *Estate of Gimbel v. Commissioner* values a large block by the present value of expected sale proceeds over the disposal period, reflecting real absorption capacity rather than an instantaneous quote. For a digital asset that means modeling the exit across the derived horizon and discounting to the valuation date. Where the block cannot be absorbed in an orderly program, the regulation's alternative applies: a negotiated sale outside the usual market, at a discount to the quoted price that the buyer demands as compensation for size, illiquidity, and placement risk. That alternative is the most direct evidence of what a willing buyer would actually pay, and it belongs in the report.

Courts have recognized blockage in appropriate circumstances, and the case law is more instructive on evidentiary quality than on doctrine.

| Authority | Contribution |
|---|---|
| *Safe Deposit & Trust Co. v. Commissioner*, 35 B.T.A. 259 (1937) | The burden is on the taxpayer to demonstrate the existence **and the amount** of the likely concession |
| *Montclair Trust Co. v. Zink*, 57 A.2d 372 (N.J. 1948) | The investor-concession rationale: a block cannot be absorbed without a price concession |
| *Estate of Gimbel v. Commissioner* (1996) | The disposal-period method — present value of expected sale proceeds and dividends over the period required to liquidate |
| *Estate of Friedberg*; *Estate of Davis*; *Estate of Foote* | Recognition of blockage discounts in appropriate circumstances |
| *Rushton v. Commissioner* | Blockage denied where the supporting opinion was inaccurate and hastily developed — a failure of evidence, not of doctrine |
| *In re FTX Trading Ltd.* (Bankr. D. Del. 2024; D. Del. No. 1:24-cv-00804) | The court adopted a Blockage Method to estimate token claims under 11 U.S.C. §502(c), applying discounts of 100% (MAPS), 99.9% (OXY), and 18.6% (SRM) where lockups and concentrated holdings distorted the observable market price |

The FTX decision is a bankruptcy claim estimation, not a tax valuation, and it establishes no transfer-tax principle. Its evidentiary value is that where tradable float does not support a quoted price, a tribunal will look past the quotation — and the adjustment can be very large when the price itself is an artifact of concentrated holdings. Any conclusion that starts from a venue price for a materially concentrated position should begin with the same free-float question.

## Part Four: The Discount for Lack of Marketability on Restricted, Locked, and Vesting Positions

Blockage addresses how much of a position the market can absorb. The marketability discount addresses whether the holder can sell at all. For digital assets, the restrictions that produce it are contractual and technical as much as regulatory.

| Restriction type | Nature | Where the analysis lands |
|---|---|---|
| Protocol or smart-contract lockup | Restriction embedded in the asset's transfer mechanics | Asset characteristic; may affect value in both frameworks |
| Vesting under a grant agreement | Tokens subject to a substantial risk of forfeiture under IRC §83 | Asset-level restriction until vested; valuation date is the recognition event |
| Contractual restriction surviving death | The restriction binds the estate or successor | Asset characteristic of the transferred property |
| Pre-token-generation-event or SAFT position | No live market; contractual right with discount and cap provisions | Level 3-type analysis; income or scenario approach with a marketability adjustment |
| Entity-held interest (LLC, family partnership, trust) | The transferred interest is an entity interest, not the token | Entity-level analysis first, then any discount attributable to that interest |
| Exchange withdrawal limits, custodian constraints, multisig or governance approvals | Restriction imposed by the venue, custodian, or protocol governance rather than the asset's terms | Usually a holder-level constraint; fact-specific where the requirement travels with the asset |

The decisive question in every row is the same: does the restriction attach to the asset, or does it describe the current holder? A token that cannot be transferred because of its own terms is different from a token the holder has chosen not to sell, or cannot sell in size without moving the market. Transfer-tax Fair Market Value can consider both where a hypothetical buyer would price them; ASC 820 permits only the first. Blending the frameworks is one of the most common errors in the current literature on token valuation.

**Quantifying the adjustment.** Two families of method exist. Benchmark studies — restricted stock studies and pre-IPO transaction analyses — derive a discount from observed price differentials for comparable restrictions, and the datasets are substantial: the Stout Restricted Stock Study is updated quarterly, the Pluris DLOM Database is the largest restricted stock collection in the market, and the Valuation Advisors Lack of Marketability Discount Study includes more than 18,800 pre-IPO transactions across 45 countries. Their direct transfer to digital assets is nonetheless limited, because restricted stock studies measure the differential between restricted and freely traded shares of the same private issuer under SEC Rule 144, while tokens trade continuously on public venues. Benchmark studies support a reasonableness range; they do not conclude a digital asset discount alone.

Option pricing models attack the problem directly by pricing the cost of the protection a holder lacks — the ability to sell on the valuation date.

| Model | Structure | Known direction of bias |
|---|---|---|
| Chaffe (1993) | European Black-Scholes-Merton put; strike set at the marketable value | Downward-biased because of European exercise; treat as a lower bound |
| Longstaff (1995) | Lookback put whose payoff depends on the optimal price over the option life | Upper bound; assumes perfect market timing, and there is disagreement whether it concludes a discount or a liquidity premium |
| Finnerty (2012) | Average-strike put option, closed-form approximation | Widely used; understates the discount above roughly 125% volatility and longer holding periods |
| Ghaidarov (2009) | Average-strike protective put; developed as a criticism of Finnerty | Tracks modified Finnerty at a six-month horizon and volatility up to 125%; can produce materially higher discounts beyond that — the relevant range for many digital assets |

Ghaidarov most often fits a digital asset engagement, and the reason is arithmetic rather than preference: digital asset volatility frequently sits far above the ranges in which traditional models were calibrated. A published illustration makes the magnitude concrete. At a volatility of 140% and an average time to maturity of 0.5 years, a representative vesting schedule produces a discount of approximately **23.4%** over the token's market price at the valuation date. The inputs must come from the subject asset and be documented as of the valuation date: volatility from the token's own realized price history over a lookback matched to the restriction horizon; time to liquidity from the restriction instrument; the restriction period itself; whether any economic benefit is available during it; and an explicit test that the base method has not already captured the same illiquidity.

There is no IRS-approved discount model for digital assets, and the absence is not an invitation to choose a convenient one. The correct practice is to select the model that fits the asset's volatility and restriction profile, document why it was selected over the alternatives, and record the sensitivity of the conclusion to the two inputs that move it most. The IRS Job Aid makes the same point from the examiner's chair: it instructs the analyst to get behind the data rather than accept summary statistics developed by someone else, and identifies required holding periods and volatility as factors the empirical studies frequently fail to consider. Those are the two variables that define a digital asset discount.

## Part Five: Sequencing, and the Rule Against Double-Counting

Discounts are applied in sequence, and each step must be justified on facts the prior step did not already capture.

| Step | Adjustment | Test that must be satisfied |
|---|---|---|
| 1 | Base value: pricing source and quantity, with the convention stated and the principal market justified | Does the observable price correspond to the property interest actually held? |
| 2 | Blockage deduction for position size relative to tradable supply | Would a hypothetical buyer demand a concession because the block cannot be absorbed at the quoted price? |
| 3 | Marketability deduction for restriction on transferability | Does a restriction prevent or delay conversion to cash beyond the horizon already modeled in step 2? |
| 4 | Entity-level discount where the transferred interest is an entity interest | Does the estate or gift actually transfer an entity interest, with its own rights and restrictions? |
| 5 | Reconciliation | Has any single economic disadvantage been counted twice? |

An illustration makes the arithmetic visible. Assume a hypothetical position with a market-derived base value of $10,000,000; a participation-rate analysis establishing a blockage deduction of 12%; and a restriction analysis, supported by an average-strike put model at the token's own realized volatility, establishing a marketability discount of 18% after testing for overlap with the liquidity assumption already used in the blockage step. Every figure below is a conclusion requiring separate support; the example describes no actual engagement.

| Line | Amount |
|---|---|
| Base value (principal market price × quantity) | $10,000,000 |
| Less blockage deduction (12%) | ($1,200,000) |
| Value after blockage | $8,800,000 |
| Less marketability deduction (18%) | ($1,584,000) |
| **Concluded Fair Market Value** | **$7,216,000** |

Every input in that table is a conclusion that must be separately supported. The example describes no actual engagement; the point is that the sequence is multiplicative, and an unsupported percentage at any step changes the answer by six figures on a position of this size. In entity structures, tiered discounts are supportable where each tier is independently evidenced — *Nelson v. Commissioner* and *Warne v. Commissioner* sustained tiered and majority-interest discounts on properly supported facts — but those decisions offer no protection to a report that stacks discounts without an overlap analysis.

The anti-double-counting rule is stated plainly in current practice guidance: a separate marketability discount is appropriate only to the extent the base valuation method has not already captured the economic effect of illiquidity or transfer restrictions. Where comparables or financing terms already embed a liquidity concession, applying a further discount counts the same disadvantage twice. On examination, that is the defect that most often converts a defensible conclusion into an overstated one.

## Part Six: Where the Analysis Is Tested

The forum determines the authority, the documentation standard, and the consequence of getting it wrong.

| Context | Authority | Discount treatment | Documentation standard |
|---|---|---|---|
| Estate tax return, Form 706 | IRC §2031; Treas. Reg. §20.2031-2(e) | Blockage expressly recognized for stocks and bonds; digital assets analyzed under the general Fair Market Value standard | Valuation reported in the gross estate; supporting analysis retained and produced on examination |
| Gift tax return, Form 709 | IRC §2512; Treas. Reg. §25.2512-2(e); Treas. Reg. §301.6501(c)-1(f)(2)(iv) | Per-gift blockage showing; claimed discounts must be disclosed for adequate disclosure to be effective | Detailed description of the method, and disclosure of any blockage, minority-interest, or lack-of-marketability discount claimed |
| Charitable contribution, Form 8283 Section B | IRC §170(f)(11)(C); Reg. §1.170A-17; CCA 202302012 | Qualified Appraisal required above $5,000; whether a blockage deduction is available for donated digital assets is unresolved and must be presented as such | Appraisal must state the effective date, the value, the approach and method, and the specific basis for the conclusion |
| Self-directed IRA annual attestation; vesting token grant under §83(a) (with §83(b) election) | Custodian requirements and plan compliance standards; IRC §83(a); Reg. §1.61-2(d) | Fair Market Value of the account's assets or of the token at the transfer or vesting date; a discount is supportable only where the observable price does not describe the interest held | Annual report supporting the account value; valuation supporting the value used, prepared contemporaneously with the 30-day election window |
| Examination | IRC §6662; §6664 | The IRS rarely disputes that a discount applies; challenges focus on the size of the discount and the adequacy of the methodology | The file, produced on request, is the defense |

The §6662 exposure deserves a direct statement: over-discounting is a valuation misstatement risk, and the reasonable-cause framework that accompanies it is not a substitute for support. A discount conclusion that cannot be tied to market evidence at the valuation date does not become defensible because a professional prepared it; it becomes an overstated deduction with a methodology attached. For fiduciaries in Metro Detroit and across Oakland, Wayne, and Genesee Counties, the same point is procedural: an executor or trustee who accepts a screen-price valuation of a concentrated or restricted position accepts an overstatement of the estate or of the distributable interest.

## Part Seven: What a Defensible Discount File Contains

A discount conclusion is only as strong as the file behind it. The following components are what an examiner, an auditor, or opposing counsel should expect to find.

1. **Position inventory** — wallet addresses, custodial identifiers, token contract addresses, and quantities held as of the valuation date.
2. **The valuation date and time, with the time zone stated** — for a market that never closes, the instant matters.
3. **Pricing source, named, with the rationale for its selection** — and a statement of why it is the principal market for that asset.
4. **Contemporaneous market data** — timestamped volume, depth, spread, and order-book captures as of the valuation date, not reconstructed later.
5. **Free-float analysis** — circulating supply, locked and treasury allocations, and the position as a percentage of tradable float.
6. **Participation rate and liquidation horizon** — stated, derived from the token's own data, and defended.
7. **Copies of every restriction instrument** — vesting agreement, lockup schedule, transfer covenant, side letter, or governance mechanism relied upon.
8. **Volatility computation** — the price series used, the lookback applied, and the result.
9. **Model selection memorandum** — why the selected model fits the asset's volatility and restriction profile.
10. **The overlap test** — written demonstration that the base method, the blockage deduction, and the marketability deduction do not each charge for the same illiquidity.
11. **The conclusion, with a range and a stated basis for the point selected** — not a percentage without provenance.
12. **Appraiser identification, signature, and date** — the accountability chain that makes the report an appraisal rather than an opinion.

Two items separate a professional engagement from a spreadsheet. The overlap test is what protects the conclusion from the most common challenge. Contemporaneous market data is what makes the analysis testable: a liquidity measurement reconstructed months later, after a return has been questioned, has no better evidentiary standing than the estimate it was built to defend.

## Frequently Asked Questions

### Can you claim a blockage discount for cryptocurrency or tokens?

Not under an express rule. Treas. Reg. §20.2031-2(e) and §25.2512-2(e) authorize a blockage discount for stocks and bonds, and no digital-asset-specific provision exists. A token position can still support a size-related adjustment under the general Fair Market Value standard, but the taxpayer bears the burden of proving both the existence and the amount of the concession, and the conclusion must be built from the token's own market depth.

### What is the difference between a blockage discount and a discount for lack of marketability?

A blockage discount measures the price concession required because a position is too large for the market to absorb at the quoted price. A discount for lack of marketability measures the value effect of a restriction that prevents or delays sale. They arise from different facts, use different evidence, and require an overlap test before both are applied to the same position.

### Can you discount a large crypto position for estate or gift tax purposes?

Possibly, if the facts support it. The analysis begins with the position as a percentage of freely tradable supply, the asset's average daily traded value and order-book depth, the participation rate a seller could represent without moving price, and the resulting liquidation horizon. Where a hypothetical buyer would demand a concession for size, it belongs in the valuation — but it must be demonstrated, and for a gift it must be measured with reference to each separate gift rather than in the aggregate.

### How is a discount for lack of marketability quantified for locked or vesting tokens?

Two families of method are used. Benchmark studies, including restricted stock and pre-IPO transaction analyses, provide a reasonableness range but transfer imperfectly to tokens that trade continuously on public venues. Option pricing models price the protection the holder lacks: Chaffe (a lower bound), Longstaff (an upper bound), Finnerty (average-strike put), and Ghaidarov (average-strike protective put, which behaves better at the high volatility typical of digital assets). Inputs must come from the token's own realized volatility and restriction terms.

### Is a discount for lack of marketability allowed under ASC 820 for digital assets?

Only when it reflects a characteristic of the asset. ASC 820-10-35-36B prohibits blockage factors and other discounts that reflect the size of the reporting entity's holding rather than a characteristic of the asset or liability, and Level 1 measurement uses quoted price multiplied by quantity. A lockup on the token itself can affect Level 2 or Level 3 inputs; position size and the holder's own selling constraints cannot.

### Do claimed valuation discounts have to be disclosed on a gift tax return?

Yes, if adequate disclosure is to be effective. Treas. Reg. §301.6501(c)-1(f)(2)(iv) requires a detailed description of the method used to determine Fair Market Value, including the financial data used, the restrictions considered, and any blockage, minority-interest, or lack-of-marketability discounts claimed. Without adequate disclosure the limitations period does not begin to run, and the reported value remains open to challenge after it would otherwise have closed.

### What documentation supports a digital asset valuation discount?

Contemporaneous, date-stamped market data; the position measured against freely tradable supply; a stated participation rate and liquidation horizon; copies of every restriction instrument relied upon; the volatility computation; the model selection rationale; the overlap test proving no economic disadvantage was counted twice; and an appraiser's signature and date.

### What happens if the IRS disallows a valuation discount on digital assets?

The adjustment increases the reported value, which raises the tax due and can trigger accuracy-related penalties under IRC §6662 where the misstatement reaches the substantial or gross thresholds. The defense is not the size of the discount but the file behind it: a conclusion derived from valuation-date market evidence and documented contemporaneously is a defensible position. A percentage selected by convention is not.

## Conclusion: A Discount Is a Conclusion, Not a Convention

The observable price of a digital asset is a statement about the marginal trade. It is not a statement about what a willing buyer would pay for a position representing a meaningful share of tradable supply, for tokens subject to a lockup that survives the holder, or for an entity interest that happens to hold digital assets on its balance sheet. Closing that distance is legitimate professional work performed under USPAP, measured against the Fair Market Value standard, and reported in a form a filing requires. What it is not is automatic: the express blockage authority covers stocks and bonds, there is no IRS-approved discount model, the two doctrines are separate, and the sequencing is multiplicative.

Read the whole subject as a single proposition: a discount is a conclusion about what a willing buyer would pay for the interest actually transferred, supported by data captured at the valuation date, and reported by an appraiser willing to sign it. A number reached any other way is not a discount; it is an assumption with a percentage sign attached. That distinction is the difference between a valuation and an appraisal, and it is the difference a discount analysis has to survive on examination.

That is the standard QDAV applies to every engagement involving a concentrated, restricted, or entity-held digital asset position: USPAP Compliant methodology, Fair Market Value determined under IRS Section 170-aligned definitions where a contribution is at issue, a Qualified Appraisal where the threshold requires one, and Defensible Data supporting the discount conclusion rather than industry convention.

---

**QDAV — Qualified Digital Asset Valuations** provides USPAP-compliant qualified appraisals for cryptocurrency, NFT, and complex digital asset holdings for tax, estate, and charitable contribution purposes. Serving high-net-worth individuals, estate attorneys, CPAs, trustees, and donors across Metro Detroit, Wayne, Oakland, and Genesee Counties.

Contact: appraisal@qdav.mba | (248) 955-1491 | 2711 Williamsburg Cir., Auburn Hills, MI 48326 | https://qdav.mba

*This article is provided for educational purposes and does not constitute tax, legal, or accounting advice. Valuation discounts for digital assets are fact-specific and should be determined with the taxpayer's attorney and CPA. Statutory thresholds, regulatory text, and case authority should be confirmed against the Internal Revenue Code, the Treasury Regulations, and current guidance for the year of the transaction. The FTX decision discussed above arose in a bankruptcy claim estimation and is cited for its evidentiary reasoning, not as tax authority.*
