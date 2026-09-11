---
title: "Digital Asset Types and Their Tax Treatment: How Bitcoin, Stablecoins, NFTs, and DeFi Tokens Differ in Valuation, Cost Basis, and IRS Reporting"
date: "2026-09-11"
description: "Digital assets are property, but a Bitcoin, a stablecoin, an NFT, and a locked DeFi governance token are four different appraisal problems. This practitioner-level guide explains how asset type governs character, valuation method, cost basis, discount support, and documentation standards under Notice 2014-21, Rev. Rul. 2023-14, Notice 2023-27, Rev. Proc. 2024-28, and the 2026 Form 1099-DA regime — and when an exchange price screen stops being defensible data."
category: "QDAV"
author: "QDAV"
---
# Digital Asset Types and Their Tax Treatment: How Bitcoin, Stablecoins, NFTs, and DeFi Tokens Differ in Valuation, Cost Basis, and IRS Reporting
*Published: September 11, 2026 | By QDAV*

---

## The Question Behind Every Digital Asset Valuation: What Is This Asset?

Ask most taxpayers whether they owe tax on a digital asset and you will get an answer about price. Ask a practitioner and the first question is different: *what kind of asset is this, and how did it arrive?*

That question determines almost everything that follows — whether the receipt is ordinary income or a capital event, which of the three appraisal approaches (market, income, or cost) can be supported with evidence, whether a discount for illiquidity is available, and whether the correct documentation is a transaction export or a USPAP Compliant Qualified Appraisal.

In Notice 2014-21, the Service announced that convertible virtual currency is treated as **property** for federal income tax purposes, not as currency, and every later development — the hard fork ruling, the staking ruling, the NFT collectible notice, the per-wallet basis procedure, and the current Form 1099-DA regime — applies ordinary property principles to a new class of asset. The novelty is not in the tax theory; it is in the *evidence*. A taxpayer can look up a Bitcoin price, but no screen produces the Fair Market Value of a governance token that unlocked two weeks ago, trades on one thin venue, and carries a twelve-month vesting schedule, and no screen resolves whether an NFT's associated right is a collectible.

This guide works through the asset classes one by one, explains the character and method consequences of each, and identifies the point at which asset type converts an ordinary reporting question into a qualified appraisal engagement.

---

## Digital Assets Are Property — and Property Rules Turn on Character

Four asset classes dominate the practical landscape:

- **Convertible virtual currencies** — Bitcoin and Ether being the largest and most liquid
- **Stablecoins** — digital assets designed to maintain a stable value relative to a reference currency, most commonly the U.S. dollar
- **Non-fungible tokens (NFTs)** — unique digital tokens whose value derives from an associated right or asset
- **DeFi and governance tokens** — tokens issued by decentralized protocols, frequently subject to lockups, vesting, or thin secondary markets

The Service names the first three explicitly and treats decentralized finance tokens under the same property framework. Nothing in the Code creates a separate asset class for blockchain assets; instead it applies rules written for property generally — rules intensely sensitive to what the property *is* and how the taxpayer *acquired* it.

Three statutory touchstones govern the analysis:

1. **Character of the receipt.** Section 61 captures digital assets received as payment, rewards, or awards. Whether the receipt is ordinary income or a return of capital depends on what the taxpayer did to earn it.
2. **Basis.** Section 1012 sets basis at cost; Section 1015 carries over the donor's basis for gifted property, subject to the dual-basis rule for loss property; Section 1014 resets basis to Fair Market Value at the date of death.
3. **Rate of tax on disposition.** Section 1001 governs recognition on sale or exchange, and Section 1(h) sets the maximum rate on net long-term capital gain — with a distinct maximum of **28 percent** for collectibles.

For an appraiser, this is the map. For a taxpayer, it is the exposure. The same dollar of blockchain value can be taxed at ordinary rates, at preferential long-term capital rates, or at the 28 percent collectibles maximum depending on what the asset is and how long it was held — and the determination requires evidence that a price feed does not produce.

---

## Character First: Ordinary Income Events Versus Capital Events

The single most common practitioner error in digital asset tax work is collapsing every blockchain transaction into "capital gains." Many are not capital events at all. They are ordinary income events that create basis, followed later by a separate capital event on disposition.

The Service has classified these events by asset type and activity:

| Income event | Authority | Treatment |
|---|---|---|
| Mining, staking, and similar validation activity | Notice 2014-21; **Rev. Rul. 2023-14** | Gross income at Fair Market Value on the date of receipt |
| Airdrop received in connection with a hard fork | **Rev. Rul. 2019-24** | Gross income when the taxpayer gains dominion and control |
| Payment for goods or services | Notice 2014-21 | Ordinary income at Fair Market Value on receipt |
| DeFi lending, liquidity provision, and yield | Notice 2014-21 principles; Rev. Rul. 2023-14 by analogy | Ordinary income at receipt, subject to the specific arrangement |
| Conversion of staking rewards into retirement-account assets | Notice 2023-27 (NFT collectibles under section 408(m)) | Prohibited transaction analysis applies |

**Revenue Ruling 2023-14** controls staking. It addressed a cash-method taxpayer who staked tokens and validated transactions on a proof-of-stake network, receiving additional units as rewards, and held that the rewards are gross income in the year the taxpayer gains dominion and control, measured at Fair Market Value on the date of receipt. The ruling expressly did not address the character of later gain or loss on sale, nor whether a validator's expenses are deductible.

The taxpayer-favorable litigation surrounding staking did not displace the ruling. In the *Jarrett* refund litigation, the government returned the tax at issue and the case was dismissed as moot, without the Service publishing a change in position. Practitioners should treat **Rev. Rul. 2023-14 as the operative guidance** and should not assume the receipt-date theory has been abandoned.

**Revenue Ruling 2019-24** governs forks. Where a hard fork occurs and the taxpayer receives no new units, there is no income — nothing was received. Where the fork is accompanied by an airdrop and the taxpayer gains dominion and control over the new units, the airdrop is gross income at Fair Market Value. The practical consequence is a valuation problem taxpayers often do not anticipate: a token received before it lists anywhere has no observable market, yet Fair Market Value must still be determined on the date of dominion and control.

This is where the character question becomes an evidence question. Staking rewards are typically received in an asset with an observable market — the measurement is mechanical, even if the record-keeping is not. Airdrops of pre-listing tokens are the opposite: the measurement requires a documented valuation conclusion, and the resulting number becomes the taxpayer's basis for every future disposal. Get it wrong in either direction and the error compounds across every subsequent sale.

---

## Asset Class by Asset Class: Where the Appraisal Problem Actually Lives

The three appraisal approaches recognized in professional practice — market, income, and cost — are all legitimate. The question is which can be *supported* for a given asset. Asset class determines the answer.

### Bitcoin and Ether: Deep, Observable, Liquid Markets

Bitcoin and Ether present the most tractable valuation problem in the asset class. Both trade continuously across numerous venues with meaningful depth, and both have published price indices aggregating venue data. The market approach is straightforward and rarely controversial: Fair Market Value on a given date derives from observed transactions in an active market, adjusted where necessary for unit count and time of day.

Two refinements matter. First, **the correct date and time** drive the measurement — the moment of receipt for an income event, or the date of death for an estate, with the alternate valuation date election available under Section 2032. A daily closing price for an event that occurred midday is demonstrably imprecise. Second, **blockage** can matter for very large positions, though it is far harder to support for a continuously traded asset with deep liquidity than for a thinly traded token. Blockage is a valuation conclusion and must be documented, not assumed.

### Stablecoins: A Designed Peg Is Not a Valuation

Stablecoins are the most misunderstood asset class in tax and estate work. Because they are designed to trade at one dollar, practitioners often treat them as cash and assume no valuation question exists. That assumption is defensible most of the time and wrong at precisely the moments when the number matters most.

Three facts drive the analysis:

**First, stablecoins are digital assets, not currency.** The Service names stablecoins explicitly among digital assets and applies Notice 2014-21: they are property. A disposition of a stablecoin is, in principle, a Section 1001 event, even when the economic gain is zero.

**Second, the peg is a design objective, not a legal guarantee.** Depeg events — in which a stablecoin trades materially below or above its stated reference value — have occurred, and they are exactly the periods during which an executor, a donor, or a taxpayer needs a documented value. A stablecoin inventoried at book par on a date when the market cleared at a discount is an appraisal problem, not a rounding difference.

**Third, the law on stablecoin treatment is actively in motion.** Draft federal legislation — commonly referenced as the PARITY Act — has proposed a de minimis exemption for small stablecoin transactions. The December 2025 draft contemplated a **$200 per-transaction threshold**; the revised March 26, 2026 draft replaced that approach with a **basis-based rule** under which no gain or loss would be recognized on the sale of a regulated payment stablecoin unless the taxpayer's basis is less than **99 percent of the stablecoin's redemption value**. These are **proposals, not effective law**, cited here to signal policy direction — advisors should not build a reporting position on an unenacted bill.

The appraisal implication is direct: for stablecoins, the defensible measurement is the redemption value or the observed market value on the relevant date, whichever is supported by evidence — plus documentation of the reference currency, the issuing arrangement, and any deviation from par.

### Non-Fungible Tokens: Non-Fungible, Often Thin, Sometimes Collectible

NFTs break the market approach in a way that fungible tokens do not. Two units of Ether are interchangeable; two NFTs are not. Comparability must therefore be established, not assumed, and the comparables are frequently thin.

**Classification comes first.** In **Notice 2023-27**, the Treasury Department and the IRS announced that they intend to determine whether an NFT constitutes a collectible under section 408(m) by analyzing the *associated right or asset* — the **look-through analysis**. An NFT whose associated asset is itself a collectible is treated as a collectible. Because the capital-gain collectibles definition in section 1(h)(5) incorporates the section 408(m)(2) list, the look-through frame is the starting point for asking whether a long-term NFT gain is subject to the **28 percent maximum rate**. Practitioners should be precise: the 28 percent figure is a maximum on net long-term collectibles gain under section 1(h), not a blanket rate on all NFTs.

**Then method.** For an NFT that is genuinely comparable to others in an established collection, the market approach can be supported using observed sales of comparable items, adjusted for trait rarity, provenance, and timing. For a genuinely unique piece with no comparable market, the income approach may be the only defensible method, and a cost approach may serve as a reasonableness check. The point at which the analysis becomes qualitative rather than mechanical is the point at which a Qualified Appraisal earns its keep.

### DeFi and Governance Tokens: Locked, Vested, and Thin

Decentralized finance and protocol governance tokens are the hardest appraisal problem in the asset class, and the one most often mishandled. They frequently exhibit one or more of the following:

- **Thin secondary markets** — limited venues, low volume, wide spreads
- **Lockups and vesting schedules** — the holder cannot freely transfer the position
- **Restricted or non-transferable states** — some tokens are non-transferable by design
- **Peg or mechanism dependence** — value derived from a protocol's internal economics rather than an external market

For these assets, a quoted price is a starting point at best and misleading at worst. A price observed on a thin venue may not represent an orderly transaction, and a vesting schedule means the holder's economic position is not equivalent to a freely traded unit. Both facts support a **discount for lack of marketability (DLOM)** — but the discount must be *earned through appraisal analysis*, not asserted as a rule of thumb.

The Service's established DLOM guidance is instructive: a discount for lack of marketability is applied as part of the valuation process to estimate Fair Market Value, and its support must come from analysis appropriate to the asset. A DLOM applied because "crypto is illiquid" is not Defensible Data; a DLOM applied after analyzing comparable restricted-asset studies, specific lockup terms, venue depth, and time required to liquidate is a professional conclusion.

A related category warrants caution: wrapped tokens, bridged representations, and tokenized real-world assets each present a claim on an underlying asset rather than the asset itself. The tax question there is not "what is the token's price?" but **what does the holder actually own?** Where a structure introduces an intermediary claim, the appraisal must describe the structure and value the interest the taxpayer actually holds — not the headline asset's price.

---

## The Cross-Asset Comparison Table

| Dimension | Bitcoin / Ether | Stablecoins | NFTs | DeFi / governance tokens |
|---|---|---|---|---|
| Tax classification | Property (Notice 2014-21) | Property (Notice 2014-21) | Property; collectible if look-through applies (Notice 2023-27) | Property (Notice 2014-21) |
| Primary appraisal approach | Market | Market / redemption value | Market with comparables; income for unique pieces | Market with heavy adjustment; income where no market exists |
| Depth of market data | Deep, continuous | Deep, but peg-dependent | Thin, comparability-dependent | Often thin or restricted |
| Discount potential | Blockage only, rare | Minimal absent depeg | Rarity and provenance adjustments | DLOM and blockage, frequently supportable |
| Maximum capital gain rate | Standard long-term rates | Standard long-term rates | 28 percent maximum if a collectible (§ 1(h)) | Standard long-term rates |
| Income-event exposure | Mining, staking (Rev. Rul. 2023-14) | Interest-like yield arrangements | Creator royalties; primary sales | Staking, farming, protocol rewards |
| Basis methodology | Per wallet (Rev. Proc. 2024-28) | Per wallet or account | Per unit, item-specific | Per wallet; vesting can complicate holding period |
| Documentation standard | Exchange records plus appraisal where required | Records plus peg-deviation evidence | Comparable sales analysis; appraisal for non-fungible positions | Lockup terms, venue analysis, appraisal for discounts |
| Primary exposure | Record accuracy and date precision | Par assumption across depeg dates | Misclassifying a collectible; unsupported rarity claims | Asserted discounts without appraisal support |

---

## Cost Basis by Asset Class After Revenue Procedure 2024-28

Asset type also changes how basis is carried, and the rules changed materially for taxable years beginning after December 31, 2024.

**Revenue Procedure 2024-28** ended the universal-wallet approach to digital asset basis. Taxpayers may no longer pool basis across all holdings and allocate it freely. Basis must be allocated to the digital assets held within each **wallet or account**, and the permitted cost-flow methods — first-in first-out, specific identification, highest-in first-out, weighted average cost, and last-in first-out — apply on a per-wallet or per-account basis.

The procedural consequences are significant for every asset class:

- A taxpayer holding Bitcoin across multiple wallets and exchanges since an early acquisition can no longer compute gain using a single blended basis figure.
- Specific identification requires contemporaneous records sufficient to substantiate which units were disposed of; where records are incomplete, the method reverts to a default that is frequently adverse.
- The one-time allocation of unused basis across wallets and accounts was required as of January 1, 2025. Taxpayers who missed it face reconstructive work.

For an appraiser, the per-wallet rule creates a distinct engagement type: **basis reconstruction**. Where acquisition records are incomplete, a valuation professional can reconstruct the basis of the units disposed of using documented market data for the relevant acquisition dates — but only where wallet-level disposal records exist. Where they do not, no amount of market data substitutes for missing transaction history, and that limitation should be stated plainly rather than worked around.

---

## Form 1099-DA and the Documented-Value Gap in 2026

The reporting environment changed again for 2026, and the change is structural.

Form 1099-DA — *Digital Asset Proceeds From Broker Transactions* — now sits at the center of digital asset information reporting. Under the current instructions:

- **For 2025 and later:** brokers report **gross proceeds** for sales of digital assets.
- **For 2026 and beyond:** brokers must report gross proceeds for **all** digital assets, and must report **basis information for covered securities** — generally digital assets acquired on or after January 1, 2026 in a customer's account with a broker providing custodial services, in exchange for cash, stored-value cards, other digital assets, or property or services, and held in that account. Basis reporting for **noncovered** securities is voluntary.
- The Service issued corrections to the 2025 Form 1099-DA instructions on January 7, 2026 addressing de minimis reporting for certain sales and optional reporting methods, and excluded the form from the Combined Federal/State Filing Program for tax year 2025.

The consequence is a **documented-value gap** the Service can now see without asking. Where a broker reports proceeds at a documented figure and the taxpayer reports a basis the broker did not certify, the difference is visible on the face of the return. For assets outside the broker system — self-custodied units, non-custodial NFT sales, DeFi positions, and airdropped tokens — there is no broker report at all, and the taxpayer's records are the entire evidentiary file.

Asset type converges with reporting risk here: the classes most likely to fall outside broker reporting are also those with the thinnest observable markets and the highest valuation uncertainty:

| Asset class | Broker reporting likelihood | Evidence burden on taxpayer |
|---|---|---|
| Custodial Bitcoin / Ether | High (covered securities from 2026) | Low — broker-certified basis |
| Self-custodied fungible tokens | None | High — wallet-level reconstruction |
| Stablecoins | Variable | Moderate — peg and redemption documentation |
| NFTs | Low (non-custodial marketplaces) | High — item-level comparables and appraisal |
| DeFi / governance tokens | Very low | Highest — lockup, venue, and discount analysis |

The practical conclusion is uncomfortable but clear. The assets that receive the least third-party reporting are the assets that most require a professional valuation file. A screen price does not create that file.

---

## When Asset Type Requires a Qualified Appraisal

Not every digital asset position requires a Qualified Appraisal. Advisors who commission appraisals reflexively waste client money; advisors who never commission them accept avoidable risk. The trigger is a function of the transaction and the asset class.

A qualified appraisal is generally required or strongly indicated when:

1. **A charitable contribution of digital assets is claimed at a value exceeding the applicable threshold.** A qualified appraisal is required for contributions of property other than publicly traded securities where the claimed deduction exceeds $5,000, and the Service has confirmed that cryptocurrency contributions require a qualified appraisal under IRS Section 170 — a transaction report or exchange valuation is not a qualified appraisal.
2. **An estate or gift return reports a digital asset position.** Form 706 and Form 709 both carry the digital assets question, and both require a defensible Fair Market Value. Where the position is not a fungible asset with a deep market, the value must be developed, not looked up.
3. **A non-fungible or thin-market position is being valued.** Where comparability must be established for an NFT, or where a DLOM is claimed for a locked or vested token, the discount and the base value both require appraisal support.
4. **A prior-year position is being reconstructed.** Basis reconstruction for pre-2025 holdings under the per-wallet regime frequently requires documented market analysis.
5. **A valuation is likely to be examined.** Under Section 6662, a substantial valuation misstatement — a claimed value of 150 percent or more of the correct value — carries a 20 percent accuracy-related penalty, rising to 40 percent for a gross misstatement at 200 percent. Reasonable cause under Section 6664 is a defense, and contemporaneous reliance on a qualified appraiser is among the strongest forms of it. The penalty is arithmetic, not intent-driven: the thresholds are crossed by percentages, not by motive.

The asset-type dimension is decisive in every one of these triggers. A custodial Bitcoin balance with broker-certified basis rarely needs more than accurate records. A vesting governance token position in an estate inventory almost always does.

---

## Discounts Must Be Earned: DLOM and Blockage in Digital Asset Appraisals

Discounts are where unsupported digital asset valuations fail most visibly.

Three adjustments appear in practice:

**Discount for lack of marketability (DLOM).** Applied where the holder cannot readily convert the position to cash. Relevant factors include lockup and vesting terms, the depth and number of available venues, the size of the position relative to available liquidity, and the time required for an orderly disposition.

**Blockage discount.** Applied where the size of a position exceeds what the market can absorb at the quoted price without moving it. Blockage is well established for large blocks of publicly traded securities and applies by analogy to large digital asset positions — but it is much harder to support for a deep, continuously traded asset than for a thin one.

**Rarity and provenance adjustments.** Applied in NFT appraisals to align comparables with the subject item's traits, collection, and history.

None of these adjustments can be assumed. The Service treats a DLOM as part of the valuation process used to estimate Fair Market Value, and the appraisal literature frames it as something a professional substantiates rather than imposes. Where an executor applies a blanket 30 percent discount because "crypto is volatile," the Service has no reason to accept it. Where the discount is tied to contractual lockup terms, documented venue depth, and comparable restricted-asset data, the conclusion is defensible. The distinction matters most for locked or vested DeFi positions and restricted token allocations — the positions where the gap between headline price and the taxpayer's actual economic position is largest, and therefore where an undocumented discount invites the largest adjustment.

---

## Documentation Standards by Asset Class

The final consequence of asset type is the documentation standard. A file that fully supports one asset class may be materially deficient for another.

| Asset class | Minimum documentation | When a Qualified Appraisal is added |
|---|---|---|
| Custodial Bitcoin / Ether | Exchange statements, transaction history, broker 1099-DA | Large positions, estate or gift reporting with non-standard holdings |
| Self-custodied fungible tokens | Wallet addresses, on-chain transaction records, acquisition documentation | Basis reconstruction, estate inventory, charitable contribution |
| Stablecoins | Redemption records, issuing arrangement, peg-deviation data on relevant dates | Dispositions during depeg periods, estate valuation at a depeg date |
| NFTs | On-chain provenance, marketplace sales records, comparable collection data | Charitable donation, estate or gift reporting, collectible classification |
| DeFi / governance tokens | Lockup and vesting terms, venue data, protocol documentation | Estate and gift reporting, DLOM support, audit defense |

Two documentation failures recur: **date imprecision** — using a daily price for an event that occurred at a specific time — and **unestablished comparability**, treating a collection floor price as the value of a specific item without adjusting for traits. Both are visible to an examiner and both are avoidable with a documented valuation file.

---

## What This Means for Attorneys, CPAs, and Fiduciaries

For the professionals who carry the reporting obligation, asset type is a triage variable.

**Estate attorneys** should treat any non-fungible, locked, or thin-market position in an inventory as an appraisal trigger: the date-of-death value drives the estate tax base, and a misclassified collectible changes the rate applied to later gain in the beneficiaries' hands.

**CPAs** should separate income events from capital events at intake. Staking, airdrops, and protocol rewards create ordinary income and basis simultaneously, and that basis figure flows into every subsequent Schedule D computation — reconciled wallet-level under Rev. Proc. 2024-28, not in aggregate.

**Fiduciaries** — executors, trustees, and IRA custodians — should treat the documentation standard as an element of duty. A valuation that cannot be defended is not a neutral gap; it is an exposure the fiduciary may ultimately answer for.

**Advisors to Self-Directed IRA holders** should note the collectible overlay: under Notice 2023-27, the look-through analysis determines whether an NFT is a section 408(m) collectible, and collectibles held in an IRA raise prohibited-transaction and plan-qualification issues distinct from ordinary valuation questions.

---

## Frequently Asked Questions

**Are staking rewards taxed when received or when sold?**
Staking rewards are taxed when received. Under Rev. Rul. 2023-14, they are gross income in the year the taxpayer gains dominion and control, at Fair Market Value on the receipt date. That value becomes the taxpayer's basis, and a separate capital gain or loss arises on later sale.

**What is the cost basis of a crypto airdrop?**
Under Rev. Rul. 2019-24, an airdrop received with a hard fork is gross income at Fair Market Value when the taxpayer gains dominion and control. That same value becomes the cost basis in the airdropped units, so the amount reported as income is the amount used to compute later gain.

**Are NFTs taxed at 28 percent?**
Not automatically. Under Notice 2023-27, the IRS applies a look-through analysis based on the NFT's associated right or asset. Where the NFT is a collectible, net long-term capital gain on its sale is subject to a maximum 28 percent rate under section 1(h).

**Is a stablecoin treated as cash or as property for tax purposes?**
Stablecoins are digital assets treated as property under Notice 2014-21, not as currency. Because regulated stablecoins are designed to trade at par, many dispositions produce little or no gain — but the classification matters where value deviated from par or the arrangement is not a straightforward redemption. Draft proposals such as the PARITY Act would change parts of this treatment; they are proposals, not law.

**Do I need a qualified appraisal for my crypto tax return?**
Not for every position. A qualified appraisal is generally required for charitable contributions of digital assets claimed above the applicable threshold — cryptocurrency is not a publicly traded security, so IRS Section 170 appraisal requirements apply — and is strongly indicated for estate and gift reporting, non-fungible or thin-market positions, claimed discounts, and reconstructed basis. A custodial position with broker-certified basis usually does not require one.

**How do you value a digital asset that does not trade on an exchange?**
Where no orderly market exists, the valuation must be developed rather than looked up. Practice applies the market approach with adjusted comparables where any exist, the income approach where the asset generates identifiable cash flows or protocol economics, and the cost approach as a reasonableness check. For locked or vested positions, a supported discount for lack of marketability is applied to the freely traded equivalent value. This is a Qualified Appraisal engagement, not a price lookup.

**Does an exchange price screenshot satisfy the IRS documentation standard?**
Generally no, where documentation is tested. An exchange screenshot records a price at a moment in time; it does not establish the appraisal date, the unit count, market comparability, per-wallet basis, or a professional valuation conclusion. For charitable contributions, estate and gift reporting, and audit defense, the standard is a qualified appraisal supported by Defensible Data.

**What changed for digital asset cost basis in 2026?**
Two changes matter. Revenue Procedure 2024-28 eliminated universal-wallet basis pooling for taxable years beginning after December 31, 2024, requiring basis to be allocated and cost-flow methods applied per wallet or account. Separately, under the current Form 1099-DA regime, brokers must report gross proceeds for all digital assets from 2026 and basis for covered securities — generally assets acquired on or after January 1, 2026 through a custodial broker account — with basis reporting for noncovered securities voluntary. Undocumented basis positions are now more visible to the Service.

---

## The Takeaway

The digital asset tax regime is not one set of rules applied to one kind of asset. It is a property framework applied to at least four distinct asset classes, each with its own character questions, its own evidentiary requirements, and its own failure modes.

Bitcoin and Ether reward accurate records and precise dates. Stablecoins reward honesty about the peg. NFTs reward a disciplined look-through analysis and genuine comparability work. Locked and vested DeFi positions require an appraisal-supported discount. The constant is that the exchange price answers a narrower question than the tax law asks.

For attorneys, CPAs, fiduciaries, and holders of significant positions, the practical step is the same: identify the asset class before the reporting deadline, determine what evidence it requires, and obtain the valuation conclusion while there is still time to document it properly.

**Qualified Digital Asset Valuations** provides USPAP Compliant digital asset appraisals for tax, estate, gift, charitable contribution, and audit-defense purposes — including asset-class-specific engagements for stablecoins, NFTs, and locked or vested tokens requiring discount support. Serving Metro Detroit and clients nationally.

**Schedule a qualified appraisal engagement:** (248) 955-1491 | appraisal@udav.mba | qdav.mba

*This article is provided for educational purposes and does not constitute tax, legal, or accounting advice. Valuation conclusions depend on the specific facts and circumstances of each engagement. Consult a qualified professional regarding your situation.*
