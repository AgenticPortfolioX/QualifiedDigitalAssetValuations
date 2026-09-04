---
title: "The SDIRA Digital Asset Value Attestation: Annual Custodian Requirements, IRS Compliance Expectations, and When a Qualified Appraisal Is the Defensible Standard"
date: "2026-09-04"
description: "Every self-directed IRA holding digital assets must report a fair market value each year. This practitioner-level guide explains the Form 5498 attestation cycle, who is legally permitted to value IRA digital assets, the prohibited-transaction traps, and when a USPAP-compliant qualified appraisal is the only defensible standard."
category: "QDAV"
author: "QDAV"
---
# The SDIRA Digital Asset Value Attestation: Annual Custodian Requirements, IRS Compliance Expectations, and When a Qualified Appraisal Is the Defensible Standard

*Published: September 4, 2026 | By Qualified Digital Asset Valuations (QDAV)*

---

## Introduction: The Email Every SDIRA Holder Dreads

It arrives every year, usually between October and December. Your self-directed IRA custodian sends a notice that the account holds assets without a published market price, and the custodian needs a **fair market value** as of December 31 to file **Form 5498** with the IRS. The message includes a one-page attestation form, a signature block, and a deadline measured in weeks.

For the holder whose account contains Bitcoin or Ethereum, responding is usually straightforward: pull the exchange price at year-end, attach a statement, sign, and file. But for the growing number of holders whose retirement accounts contain NFTs, DeFi positions, staked tokens, private-sale allocations, or thinly traded digital assets, that form is the beginning of a harder question: *What is this actually worth — and who is legally allowed to answer?*

This guide is written for SDIRA holders, the CPAs who serve them, and the attorneys who counsel them. It explains the mechanics of the annual value attestation, the regulatory framework around it, the difference between a reasonable estimate and a **qualified appraisal**, and when a USPAP-compliant appraisal is the only defensible answer.

---

## Section 1: What the Annual Value Attestation Actually Is

### The Form 5498 obligation

A self-directed IRA is an ordinary IRA with an unusual investment menu: instead of mutual funds and listed securities with continuously published prices, it may hold real estate, promissory notes, private placements, precious metals — and, increasingly, digital assets.

That difference creates a reporting problem. For publicly traded securities, the custodian computes account value mechanically from closing prices on December 31 and reports it to the IRS on **Form 5498**; the account owner does nothing. For alternative assets there is no closing ticker, and the custodian does not — and by design cannot — determine value itself. The owner must obtain and submit a defensible valuation so the custodian can file an accurate return.

This is the **annual value attestation**: the account owner's declaration, made each year, of the fair market value of the account's alternative assets as of the December 31 valuation date. It is required whether or not the value changed, whether or not the owner transacted, and whether or not the custodian reminded the owner — although most custodians do remind, with increasing insistence as the year ends.

### What the IRS actually says — and does not say

The definition of fair market value in this context is settled. The federal standard, adopted repeatedly by courts, comes from *United States v. Cartwright*, 411 U.S. 546 (1973): fair market value is

> "the price at which property would change hands between a hypothetical willing buyer and a hypothetical willing seller, neither being under any compulsion to buy or to sell, and both having reasonable knowledge of relevant facts."

What is absent is guidance on applying that standard to unconventional retirement assets. The Government Accountability Office documented the gap in **GAO-17-02** (December 2016), finding that current IRS guidance contains **no** instruction to custodians or IRA owners on how to determine fair market value for such assets — and no asset-specific rule for digital assets held in IRAs has filled the vacuum since.

None of this relieves the obligation. The annual report is still required, and the general framework — the Cartwright definition, the requirement that valuations be reasonable and supportable, and the prohibited-transaction regime of Internal Revenue Code Section 4975 — applies in full force. The industry has converged on a layered approach: custodians accept a documented, good-faith valuation for routine annual reporting, and they require more rigorous support — often a formal appraisal by a qualified, independent appraiser — when value drives a taxable event, the asset is illiquid, or custodian policy demands it.

### Why the number matters

The December 31 value is not a bookkeeping formality. It feeds directly into IRS-sensitive calculations:

- **Form 5498 reporting.** The custodian reports the account's fair market value annually using asset-type codes; incomplete or missing valuations are among the most common Form 5498 reporting errors.
- **Required minimum distributions (RMDs).** For owners at the applicable age — 73 for most current holders, 75 for individuals born in 1960 or later under the SECURE 2.0 Act — the RMD equals the prior year-end balance divided by a life-expectancy factor from the IRS Uniform Lifetime Table. An understated value produces an understated RMD, which produces penalty exposure.
- **Roth conversions.** Converting a traditional IRA to a Roth triggers current taxation on the value converted. When the converted asset is illiquid, the number the IRS sees is supported only by the owner's documentation — and the tax bill is computed from that number.
- **Distributions and account closures.** If an asset is written off or an account is closed, the custodian's reporting follows the last documented fair market value; an undocumented zero can produce a surprise Form 1099-R.

---

## Section 2: Why Digital Assets Break the "Reasonable Estimate" Mold

Custodian blogs often reassure SDIRA owners that the IRS "expects a reasonable and consistent approach to fair market value, not a formal appraisal every single year." Accurate as a general matter — but dangerously incomplete for digital assets, which span an enormous range of valuation difficulty.

### The valuation spectrum

Think of digital assets on a spectrum of evidence quality, loosely analogous to the fair value hierarchy used in financial reporting:

| Tier | Examples | Year-end evidence that may be sufficient | Year-end evidence that is NOT sufficient |
|---|---|---|---|
| Tier 1 — Deeply liquid | Bitcoin, Ethereum, major stablecoins on widely followed venues | Verifiable price data from a reputable exchange or index provider at the valuation date, documented and retained | None needed; price is public |
| Tier 2 — Liquid but thinner | Mid-cap tokens, assets trading primarily on unregulated venues | Documented price plus volume context, multiple venue checks, date-stamped screenshots from named sources | A single unverifiable screenshot; a price from a venue with no volume or known wash-trading patterns |
| Tier 3 — Illiquid / complex | NFTs, DeFi positions, LP tokens, staked assets with lockups, private-sale tokens | Professional valuation report applying an appropriate methodology with verified transaction data | "Floor price" screenshots, rarity-rank scorecards, portfolio dashboards, sponsor statements from interested parties |

The critical error — the one this post exists to prevent — is treating every digital asset as if it belonged in Tier 1. Bitcoin is not an NFT; a Bored Ape is not a stablecoin; a staked position with a twelve-month lockup is not a liquid token. Each demands a different level of valuation rigor.

### The screenshot problem

The exchange screenshot is the most common — and most inadequate — valuation artifact in digital assets. For a Tier 1 asset, a date-stamped price record from a reputable venue is genuinely reasonable support. For everything else, the screenshot suffers from structural defects:

- **It is self-selected.** The owner chooses the moment, the venue, and the price display. There is no methodology, no verification, and no accountability.
- **It is not a market.** A quoted price is not evidence that property would "change hands between a hypothetical willing buyer and a hypothetical willing seller" at that price. On thin markets the bid-ask spread can be enormous, and the last trade may be days or weeks old.
- **It can be manipulated.** Wash trading — trading an asset with oneself to create the appearance of volume — is a documented problem in parts of the NFT and token markets. A price printed by a venue with fabricated volume is not a market price.
- **It has no appraiser behind it.** No one has analyzed the asset, verified the transaction data, or accepted professional responsibility for the conclusion.

### The floor price fallacy

For NFTs, the most seductive shortcut is the collection "floor price" — the lowest-priced listing at a given moment — presented as if it were the fair market value of a specific token. It is not, for reasons that follow from the Cartwright definition. A listing is an asking price, not a transaction: the fair market value test assumes a buyer exists at that price, and a floor listing that sits untouched for months is owner aspiration, not market clearing. Individual NFTs within a collection are not interchangeable — two tokens can differ materially in traits and provenance — so the correct comparison is what informed buyers and sellers have paid for comparable tokens, adjusted for differences: precisely the market-approach analysis a professional appraiser performs. And even the best NFT transaction data is shallow; a professional appraisal must filter wash trades and account for sales frequency and holding periods so that a recorded price reflects an arm's-length exchange.

---

## Section 3: Who Is Legally Allowed to Value the Account?

### Custodians do not value

A common misunderstanding is that the custodian — the institution holding the account, processing contributions, and filing Form 5498 — will "handle" the valuation. It will not, and it cannot. Custodians are administrators, not appraisers: determining the fair market value of alternative assets is outside their role, expertise, and, for most, their contractual obligations. Their job is to *receive* the owner's valuation, review it for facial reasonableness, and report it. This is structural, not a service gap: in a genuinely self-directed IRA, the owner selects the investment and bears the responsibility for substantiating its value.

### Disqualified persons cannot value

Here the law draws a bright line many SDIRA holders discover only after a problem arises. The valuation cannot be performed by a **disqualified person** with respect to the IRA. Under Internal Revenue Code Section 4975(e)(2), disqualified persons include the IRA owner; the owner's spouse, ancestors, lineal descendants, and their spouses; entities in which the owner or other disqualified persons hold a 50 percent or greater interest; and certain fiduciaries, service providers, and their family members.

The owner therefore cannot simply declare a value and sign an attestation as the *valuation authority* — even though custodians require the owner to attest to the value submitted. The distinction matters: the owner supplies information and attests to its accuracy, but the *valuation itself* — the professional determination of fair market value — must come from a competent, independent third party. That is why custodian valuation policies consistently reject statements from managers, sponsors, or family members and require independent documentation.

For digital assets, independence has teeth. A DeFi protocol's dashboard, a collection creator's marketing materials, or a friend who "knows the space" are not independent third parties. The appraisal must come from someone with no financial interest in the conclusion — exactly the independence standard USPAP (the Uniform Standards of Professional Appraisal Practice) imposes on appraisers.

### The qualified appraiser benchmark

Although the IRA code contains no statutory definition of "qualified appraiser," the tax law's most developed qualified-appraisal framework — the one Congress built for charitable contributions in **IRS Section 170(f)(11)** and Treasury Regulation Section 1.170A-13(c) — has become the professional benchmark for appraisal work across tax contexts, including retirement account attestations. Under that framework, a qualified appraiser:

- Has earned an appraisal designation from a recognized professional organization, or has otherwise met specified education and experience requirements;
- Regularly performs appraisals for compensation;
- Demonstrates verifiable education and experience in valuing the type of property at issue; and
- Is not a party to the transaction or in a relationship that would cause compensation to be based on the appraised value.

A digital asset appraiser who meets this profile — credentials, verifiable digital asset experience, USPAP compliance, and independence — is the professional whose work product can actually defend the year-end value if the IRS comes looking.

---

## Section 4: Prohibited Transactions and the Private Key Question

### Section 4975 and the cost of self-dealing

The prohibited-transaction rules of **IRC Section 4975** exist to prevent the IRA owner from using the retirement account for personal benefit. The owner may not sell, exchange, or lease property between the IRA and a disqualified person; lend money or extend credit; furnish goods or services; transfer IRA income or assets for personal benefit; or self-deal as a fiduciary.

The consequence is severe. If an IRA owner engages in a prohibited transaction, the account **ceases to be an IRA as of the first day of that taxable year** and the entire balance is treated as distributed to the owner — fully taxable as ordinary income, plus the 10 percent early-distribution penalty if the owner is under age 59½. Section 4975 also imposes an excise tax on the disqualified person: 15 percent of the amount involved, rising to 100 percent if the transaction is not corrected within the taxable period.

Digital assets have no prohibited-transaction rule of their own; IRS Notice 2014-21, which treats virtual currency as **property** for federal tax purposes, applies to retirement accounts as it does everywhere else. The traps arise from applying the general Section 4975 framework to a new asset class:

- **Personal use of IRA-held crypto.** Paying for goods or services directly with cryptocurrency held inside the IRA — even briefly — is a textbook prohibited transaction.
- **Self-dealing transfers.** Moving an NFT or token between the owner's personal wallet and the IRA, or having the IRA sell an asset to the owner or a family member, is a transfer between the plan and a disqualified person.
- **Checkbook-control structures.** In an IRA-LLC structure, the owner typically manages the LLC. The line between acting for the LLC (permissible) and acting for personal benefit (prohibited) is the most common source of SDIRA digital asset problems.
- **Personal receipt of rewards.** Where staking, lending, or yield activities generate rewards, rewards flowing to the owner personally — or to a wallet the owner controls outside the plan — convert plan income into personal income and can taint the arrangement.

### Private keys: custody is a compliance question

One of the most consequential issues in SDIRA digital asset custody is the location of the **private keys**. In an ordinary taxable account, the owner holding the keys is the whole point. In a self-directed IRA, the owner's personal control of the keys creates serious risk under two theories.

First, the **deemed distribution** theory: if the IRA owner can move the assets at will, without custodian involvement or plan-level controls, the arrangement can be viewed as a distribution, because availability of assets is the test of a constructive distribution.

Second, the **prohibited transaction** theory: an owner who uses IRA-held crypto directly — controlling the keys and transacting for personal purposes — has used plan assets for personal benefit under Section 4975.

This is why legitimate SDIRA digital asset custody takes one of two forms: the **custodian-controlled wallet**, in which the custodian or its approved sub-custodian holds the keys and executes transactions only on documented instructions, or the **IRA-LLC structure**, in which the LLC — not the individual — is the plan's investment vehicle and the keys are an LLC asset managed under plan rules. If a platform handed you the keys and called the account "self-directed," obtain immediate professional review: the structure may be a taxable account in disguise.

---

## Section 5: When a Reasonable Estimate Is Enough — and When It Is Not

The honest answer, which a trustworthy appraiser must give, is that not every SDIRA digital asset position needs a formal appraisal every year. A traditional IRA holding $400,000 of Bitcoin at a regulated custodian does not; a documented, date-stamped price record is reasonable support. What the IRS and the custodians require is a **reasonable, supportable valuation method** appropriate to the asset — not maximum rigor in every case. The calculus changes in identifiable circumstances:

### 1. Illiquid or complex assets

When the account holds NFTs, DeFi positions, LP tokens, staked assets with lockups, private-sale tokens, or any digital asset without deep, verifiable, arm's-length trading, a "reasonable estimate" has no evidentiary anchor. The owner's estimate is exactly the kind of self-interested, undocumented number the fair market value standard was designed to exclude. For these assets, the appraisal is the valuation method, not an add-on to it.

### 2. Taxable events

Roth conversions and in-kind distributions convert the year-end number into an immediate tax liability. The IRS scrutinizes valuation-dependent tax events more closely than routine annual reporting, and the taxpayer bears the burden of proof. Converting an illiquid token position or distributing an NFT in kind without an independent appraisal is audit exposure dressed as convenience.

### 3. Custodian policy

Some custodians now require independent professional valuations for NFT, DeFi, and other illiquid positions as a condition of continued custody — or refuse self-attested values above certain thresholds. When in doubt, ask the custodian in writing what documentation its compliance team will accept.

### 4. The position is material to the owner's net worth

Where the digital asset position is material, the cost of an incorrect value — in taxes, penalties, and professional fees to unwind a problem — dwarfs the cost of the appraisal that prevents it. High-net-worth holders, and the CPAs and estate attorneys who serve them, should treat the annual attestation of a material illiquid position as a professional obligation, not a paperwork exercise.

### 5. Write-offs and worthless assets

When a digital asset has collapsed, the temptation is to tell the custodian to "mark it to zero." Custodians generally will not do that on the owner's say-so: removing or zeroing a failed asset requires written documentation from a competent third party demonstrating that the asset has no remaining value. If the account is closed without that documentation, the custodian must issue **Form 1099-R** reporting a distribution at the **last known fair market value** — a number that may be far above the asset's current worth, producing ordinary income and, for owners under 59½, a 10 percent early-distribution penalty on value the owner never received. An appraisal documenting the decline prevents this outcome.

---

## Section 6: What a USPAP-Compliant Qualified Appraisal Delivers

When the circumstances call for more than an estimate, the owner needs a **qualified appraisal** — a formal written report prepared by an independent, credentialed appraiser in compliance with USPAP. For digital assets, the applicable standards depend on the asset's nature: USPAP's personal property standards govern most NFTs and collectible-type digital assets, while business or intangible asset standards may apply to tokens with enterprise value, and real property standards to tokenized real estate. The appraiser's first obligation is to identify the correct standard and the correct **approaches to value**.

A professional digital asset appraisal for SDIRA attestation purposes typically includes:

- **Asset identification.** Precise identification of the asset or portfolio — contract addresses, token IDs, wallets, chain, and any lockup or vesting terms affecting value.
- **Scope of work and valuation date.** A clear statement of the December 31 (or other relevant) valuation date and the scope of investigation.
- **Approach selection.** The market approach (verified comparable sales, adjusted for characteristics), the income approach (yield-bearing or revenue-linked assets), or the cost approach (where reproduction or replacement cost is meaningful), applied according to the asset's nature.
- **Transaction verification.** Filtering of wash trades and non-arm's-length sales; analysis of volume, frequency, and venue quality.
- **Trait and comparability analysis.** For NFTs, identification of the traits that distinguish the subject token from others in the collection, with adjustments grounded in market evidence.
- **A concluded value and a defensible narrative.** A single, clearly stated fair market value conclusion (or range where appropriate), supported by the evidence and reasoning.
- **Appraiser credentials and signature.** The report is signed by a qualified appraiser with verifiable digital asset experience — the professional accountability no dashboard, screenshot, or portfolio app can provide.

The output is **defensible data**: documentation that can be produced to a custodian's compliance team, to a CPA preparing a return, to an auditor, or to the IRS itself, and that will survive scrutiny because it was built to professional standards rather than assembled after the fact.

---

## Section 7: The Annual Cycle — A Practical Checklist for Holders and Advisors

The attestation is annual, which means it is predictable. Treating it as a calendar event rather than a crisis eliminates most of the risk:

### Q3 (July–September)
- **Inventory the account.** List every digital asset holding, its wallet or custody location, and its lockup/vesting status. If you cannot produce this list from memory, that is the first problem to fix.
- **Identify Tier.** Classify each asset on the evidence spectrum in Section 2 and flag every Tier 3 asset for professional review.
- **Check custodian policy.** Request, in writing, the custodian's current valuation and documentation requirements for digital assets.

### Q4 (October–November)
- **Commission appraisals early.** For Tier 3 assets and any anticipated taxable event, engage the qualified appraiser in October or November — not December 26. Year-end capacity is finite, and rushed appraisals are more expensive and less thorough.
- **Assemble records.** Wallet addresses, purchase records, transaction history, staking or lending agreements, and any prior appraisals.
- **Confirm who pays.** Valuation fees should generally be paid **from the IRA**, not from personal funds; paying plan expenses personally can be treated as an impermissible contribution. Confirm the payment route with the custodian before engaging the appraiser.

### December
- **Lock the valuation date.** All values are as of December 31, and the appraiser's scope of work should state the date explicitly.
- **Capture liquid-asset evidence.** For Tier 1 and Tier 2 positions, obtain date-stamped price documentation from reputable, named sources at or near year-end. Screenshots you can produce in January are worth ten you cannot find in April.

### January–February
- **Submit the attestation.** Complete the custodian's valuation form and submit supporting documentation promptly. Custodians file Form 5498 in the spring, but internal deadlines arrive earlier — missing them can trigger accelerated deadlines or, in some cases, forced liquidation provisions in the account agreement.
- **Retain everything.** Keep the attestation, supporting documentation, and any appraisal report with the permanent account file. The IRS can examine a year's valuation long after the custodian's portal has purged the records.

### For CPAs and attorneys
- Build the attestation into the annual tax calendar for every client with an SDIRA.
- Review the custodian's Form 5498 against the client's attestation for consistency.
- For clients approaching RMD age with illiquid digital assets, plan the appraisal and the RMD liquidity strategy together — most crypto IRA arrangements satisfy RMDs by liquidating assets to USD, a process that depends on a valuation the custodian will accept.

---

## Section 8: The Cost of Getting It Wrong

The failure modes of the annual attestation are not hypothetical:

- **An inaccurate Form 5498.** The custodian reports what the owner supplied. If the value is wrong, the return is wrong — and the owner, not the custodian, owns the explanation.
- **RMD penalties.** Under SECURE 2.0, the excise tax for failing to take a full required minimum distribution is **25 percent of the amount not withdrawn**, reduced to **10 percent** if corrected timely. An understated year-end value mechanically produces an understated RMD.
- **A surprise Form 1099-R.** Closing an account or writing off an asset without third-party documentation can trigger a distribution report at the last known fair market value — with ordinary income tax and a possible 10 percent early-distribution penalty on value never received.
- **Prohibited-transaction disqualification.** A Section 4975 violation ends the IRA as of the first day of the year: the full balance becomes a taxable deemed distribution, and the 15 percent (potentially 100 percent) excise tax follows.
- **Audit exposure on taxable events.** A Roth conversion or in-kind distribution supported only by an owner-generated estimate invites examination, and the taxpayer bears the burden of proving value.
- **The cost of the fix.** Every outcome above costs more — in taxes, penalties, professional fees, and time — than the appraisal that would have prevented it. Defensibility is an order of magnitude cheaper than its absence.

---

## Conclusion: The Attestation Is a Compliance Event, Not a Formality

The self-directed IRA is one of the few structures that allows a retirement account to hold digital assets with full tax advantage. That privilege carries a condition: the account must report a fair market value each year, and the value must be supportable. For liquid assets, support means disciplined documentation. For everything else — the NFTs, the DeFi positions, the locked tokens, the positions that constitute real wealth without a real market — support means a **qualified appraisal** from an independent, USPAP Compliant appraiser with verifiable digital asset experience.

QDAV (Qualified Digital Asset Valuations) provides USPAP Compliant, IRS-qualified appraisals for cryptocurrencies, NFTs, and complex digital assets held in self-directed IRAs, estates, trusts, and charitable giving — built on qualified-appraiser credentials and fair market value determination that survives IRS scrutiny. The annual attestation does not have to be the most stressful email of your year; it can be the most routine one, if the value behind it rests on defensible data.

**Contact QDAV at (248) 955-1491 or appraisal@qdav.mba to schedule a USPAP Compliant qualified appraisal for your SDIRA's digital asset holdings.**

---

## Frequently Asked Questions

### 1. Do I need a qualified appraisal every year for crypto in my SDIRA?

Not necessarily. For deeply liquid assets such as Bitcoin and Ethereum, custodians and the IRS generally accept a documented, reasonable valuation — a date-stamped price record from a reputable source as of the December 31 valuation date. A qualified appraisal becomes the standard when the account holds illiquid or complex digital assets (NFTs, DeFi positions, locked or thinly traded tokens), when a taxable event like a Roth conversion or in-kind distribution is involved, when custodian policy requires it, or when the position is material to your financial picture.

### 2. Can I use an exchange screenshot for the year-end value of my SDIRA crypto?

For Tier 1 assets, a date-stamped price record from a reputable, named venue is reasonable support. For NFTs, DeFi positions, and other illiquid assets, a screenshot is not a defensible valuation: it is self-selected, unverified, potentially wash-trade-inflated, and carries no professional accountability. An NFT's floor price, in particular, is not its fair market value under the standard adopted in United States v. Cartwright.

### 3. Who is allowed to perform the annual valuation of SDIRA digital assets?

The valuation must come from a competent, independent third party. The IRA owner, the owner's family, entities the owner controls, and other disqualified persons under IRC Section 4975 cannot perform the valuation. Custodians do not value alternative assets — they report the documentation the owner supplies. A USPAP-compliant qualified appraiser with verifiable digital asset experience satisfies the independence and competence requirements.

### 4. What happens if my SDIRA custodian does not receive a year-end value?

The custodian must still file Form 5498, and it cannot report a value it does not have. Consequences vary by custodian and account agreement but commonly include compliance holds, accelerated deadlines, and in some cases forced liquidation provisions. Inaccurate or missing valuations are among the most commonly cited Form 5498 errors — and the exposure belongs to the account owner.

### 5. Can an IRA owner hold the private keys to crypto inside a self-directed IRA?

Generally, no — not without serious risk. Personal control of the keys can support a deemed-distribution theory (the assets were available to the owner) and a prohibited-transaction theory (use of plan assets for personal benefit) under Section 4975. Legitimate arrangements hold keys in a custodian-controlled wallet or as an asset of an IRA-LLC managed under plan rules. If a platform gave you the keys and called the account self-directed, obtain immediate professional review.

### 6. What value does the IRS use to calculate RMDs from a crypto IRA?

RMDs are calculated using the prior year-end (December 31) fair market value of the account divided by the life-expectancy factor from the IRS Uniform Lifetime Table — the same value reported on Form 5498. An understated year-end attestation therefore mechanically produces an understated RMD and, under SECURE 2.0, exposure to the 25 percent excise tax (reduced to 10 percent if corrected timely).

### 7. Is staking or lending digital assets inside my SDIRA a prohibited transaction?

There is no prohibited-transaction rule unique to digital assets, and staking or lending is not prohibited in itself. The analysis turns on who controls the asset and who receives the rewards. Rewards that accrue to the account are plan income; rewards that flow to the owner personally, or to a wallet the owner controls outside the plan, can constitute use of plan assets for personal benefit under Section 4975.

### 8. What documentation should I keep for my SDIRA's digital asset valuation?

Maintain the account inventory, wallet and contract addresses, purchase and transfer records, staking or lending agreements, the custodian's valuation form and documentation policy, date-stamped price evidence for liquid positions, and the full appraisal report for any professionally valued position. Retain the complete file permanently — the IRS can examine a valuation years after the custodian's portal purges the data.

---

*This article is provided for informational purposes and does not constitute legal, tax, or accounting advice. Valuation requirements vary by custodian and by individual circumstance. Consult your tax or legal advisor regarding your specific situation.*
