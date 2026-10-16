---
title: "Airdrops, Staking Rewards, Hard Forks, and Mining Income: How the IRS Values Digital Assets You Never Bought"
date: "2026-10-16"
description: "A practitioner's analysis of the digital asset receipt event: how IRC section 61 and the dominion-and-control test fix the date and the dollar amount, what Notice 2014-21, Rev. Rul. 2019-24, and Rev. Rul. 2023-14 require of cost basis, how four Chief Counsel memoranda resolve the hard cases, and when a USPAP-compliant appraisal becomes the only defensible record of fair market value."
category: "QDAV"
author: "QDAV"
---
# Airdrops, Staking Rewards, Hard Forks, and Mining Income: How the IRS Values Digital Assets You Never Bought
*Published: October 16, 2026 | By QDAV*
---

## The Question That Arrives Long After the Token Has

A digital asset that a client buys produces a paper trail: an exchange confirmation, a trade timestamp, a fee, a cost. A digital asset that a client *receives* produces almost nothing. The token appears in a wallet or on a platform, no Form 1099-DA reports it, and yet the Code taxes the receipt at a value measured in U.S. dollars on a date and at a time that must be identified precisely. That number does three jobs at once: it is ordinary income in the year of receipt, it is the cost basis for every later disposition, and it is the figure an examiner will test years afterwards.

The rules are knowable, and this post sets them out. What a return cannot supply is the number — unless someone determined it contemporaneously, from a stated market, by a stated method, and preserved the data behind it. The ordinary case is the opposite: the receipt is reconstructed from a block explorer, priced by guess, and signed by a preparer.

## Four Ways a Digital Asset Arrives Without a Purchase

| Receipt type | How it arrives | What the taxpayer must fix | Where files most often fail |
|---|---|---|---|
| Airdrop | Distribution of new tokens to addresses recorded on a ledger, by push or by claim; often following a hard fork or a campaign | The date and time dominion and control was obtained; the unit count; the market, if any, at that timestamp | The receipt date is taken to be the announcement or snapshot date rather than the date the tokens became transferable |
| Staking / validation rewards | Additional units of the native token credited for validating or delegating stake | The credit date and time and the end of any lockup; per-receipt pricing or a documented aggregation method | Rewards credited across thousands of small events are valued at a single year-end price |
| Hard-fork distribution | A protocol change creates a new asset that is distributed to holders of the legacy asset | Whether the taxpayer received anything at all; if so, when the ability to dispose arose | The fork date is used when the exchange-support date is the receipt date |
| Mining / block rewards | Newly issued units, plus transaction fees, paid for proof-of-work or proof-of-space validation | Fair market value at the date of receipt; whether the activity is a trade or business; whether the coin is inventory | Pool coin is valued on the wrong event; the business-versus-hobby line is never analysed |

The four families of receipt raise different timing and evidence questions, and the ordinary file gets both wrong the same way: by treating the event that announced the asset as the event that delivered it.

## The Statutory Engine: Section 61, Section 451, and the Basis Rule

Section 61(a) defines gross income as all income from whatever source derived, and section 61(a)(3) includes gains from dealings in property. *Commissioner v. Glenshaw Glass Co.*, 348 U.S. 426, 431 (1955), supplies the test: "instances of undeniable accessions to wealth, clearly realized, and over which the taxpayers have complete dominion" are included in gross income. Treasury Regulation section 1.61-1(a) adds that income may be realized in any form, "whether in money, property, or services."

The measuring rule is equally settled: Rev. Rul. 2023-14 collects the authorities for the proposition that any receipt of property constitutes gross income in the amount of its fair market value at the date and time at which it is reduced to undisputed possession — section 61(a); *Koons v. United States*, 315 F.2d 542 (9th Cir. 1963); *Rooney v. Commissioner*, 88 T.C. 523, 526–527 (1987); and Treasury Regulation section 1.61-2(d)(1), which requires the fair market value of property taken in payment for services to be included in income.

Two provisions complete the frame. Section 451(a) requires inclusion in the year received, and Treasury Regulation section 1.451-1(a) places a cash-method taxpayer — which individual filers overwhelmingly are — on actual or constructive receipt. Constructive receipt under Treasury Regulation section 1.451-2(a) arises when income is credited to the taxpayer's account, set apart, or otherwise made available so that it may be drawn upon at any time. Sections 1011 and 1012 then fix the basis of property that was not purchased by reference to the amount included in gross income — the fair market value when received — as Treasury Regulation section 1.61-2(d)(2)(i) and Rev. Rul. 2019-24 state for digital assets.

In one sentence: a digital asset receipt is taxed at fair market value on the date and time the recipient obtained dominion and control, and that same value becomes basis. Nothing turns on whether the taxpayer wanted the asset, understood it, or knew it had arrived.

## Dominion and Control Is a Timing Rule With Teeth

Rev. Rul. 2023-14, 2023-33 I.R.B. 484, governs validation rewards, and its facts are deliberately precise. A cash-method taxpayer holds 300 units of a proof-of-stake cryptocurrency, stakes 200, validates a block, and receives 2 units. For a brief period ending on Date 2, the taxpayer cannot sell, exchange, or otherwise dispose of the 2 units; on Date 3, the taxpayer can. The Service held that the fair market value of the rewards is included in gross income in the year the taxpayer gains dominion and control, measured as of that *date and time* — the year containing Date 3, not Date 1. The same result follows for rewards received through an exchange. A footnote states that the ruling does not address section 83.

Rev. Rul. 2019-24, 2019-44 I.R.B. 1004, supplies the parallel rule for hard forks and airdrops. A taxpayer has no gross income from a hard fork if no units of the new asset are received, and has ordinary income from an airdrop following a hard fork when units are received. In the ruling's second situation, 25 units of Crypto S are airdropped to a holder of Crypto R who can dispose of them immediately; the amount included in income is $50, the fair market value when the airdrop is recorded on the ledger, and the taxpayer's basis is $50 — the income recognized.

The Service's virtual currency FAQs add that an on-chain receipt occurs on the date and time the transaction is recorded on the ledger, although those FAQs now state that they generally apply only to transactions completed before January 1, 2025.

Dominion and control is therefore twofold: a *year* rule, which determines the return, the estimated-tax consequences, and the assessment exposure; and a *value* rule, because the moment it identifies is when fair market value must be measured.

## Hard Forks: The Receipt Date Is Frequently Not the Fork Date

Chief Counsel Advice 202114020 addresses the Bitcoin Cash fork of August 1, 2017, and its two situations are the two outcomes every fork file presents. Like all Chief Counsel Advice, it may not be used or cited as precedent, as the memorandum itself states.

In the first, the taxpayer held the private key to an address holding one Bitcoin at the moment of the fork, could dispose of the resulting Bitcoin Cash immediately, and had ordinary income in 2017 equal to its fair market value as of August 1, 2017, at 9:16 a.m. EDT. The Service added that the taxpayer "can determine the Bitcoin Cash's fair market value using any reasonable method, such as adopting the publicly published price value at a cryptocurrency exchange or cryptocurrency data aggregator."

In the second, the taxpayer's Bitcoin sat in a hosted wallet at an exchange that did not support Bitcoin Cash, did not record it on its internal ledger, and left the customer unable to buy, sell, send, receive, transfer, or exchange it. The exchange began supporting the asset on January 1, 2018, at 1:00 p.m. EDT. That later moment — not the fork date — was when dominion and control arose, so 2018 was the income year.

Two consequences follow. A taxpayer who discovers a fork distribution years later may have income in a recent, still-open year rather than the year of the fork. And the valuation date travels with the receipt date, so a file that prices the asset at the fork date will fix both an income amount and a basis that do not match the year reported.

## Airdrops: Snapshot, Claim, and Transferability

Rev. Rul. 2019-24 sets the baseline: a received airdrop is ordinary income at fair market value when received, and receipt is the moment the taxpayer can dispose of it. Three patterns sit outside the ruling's example.

*Controlled address with a transfer restriction.* Where tokens land in an address the taxpayer controls but cannot be moved until a lockup expires, Rev. Rul. 2019-24 and the Date 2 to Date 3 sequence of Rev. Rul. 2023-14 both point to the end of the restriction as the receipt event. The value at that later timestamp typically differs from the value on the distribution date, sometimes greatly.

*Claim-based airdrops.* Where eligibility is announced and the taxpayer must connect a wallet and execute a transaction, the analysis turns on when the ability to dispose arose. Tokens that are claimable but unclaimed are the closest case in the guidance, and the position should be supported by the claim interface's terms, the claim transaction, and the gas paid. The announcement date is not the receipt date.

*Addresses the taxpayer does not control.* A ledger entry is not by itself an accession to wealth. A wallet whose keys were lost, an address swept by a third party, or an address the taxpayer never learned of does not produce income at the distribution date; it produces questions that must be answered in writing before a return is filed, on the dominion-and-control test the ruling states expressly.

## Staking: Credit Dates, Lockups, and the Aggregation Problem

Rev. Rul. 2023-14 gives the rule and the measuring moment for self-staking and exchange staking alike. Three issues remain for the practitioner, each as much valuation as timing.

*Credit and lockup.* Where rewards are credited subject to a waiting period, the ruling's structure indicates inclusion when the inability to dispose ends. The platform's user agreement typically fixes when a reward is credited and when it becomes transferable; that agreement is the primary evidence of the receipt date and belongs in the workfile.

*Compounding and restaking.* Where rewards are automatically restaked and never become separately transferable, the analysis must focus on the first date on which the taxpayer could dispose of any portion of the resulting position. The authority does not squarely resolve automatic compounding, which is why the position should be documented, applied consistently, and disclosed where amounts are material rather than assumed.

*Thousands of micro-receipts.* Notice 2014-21, Q&A 5, tolerates this: transactions must be reported in U.S. dollars, and where an asset is listed on an exchange with an exchange rate established by market supply and demand, fair market value is determined by converting at that rate "in a reasonable manner that is consistently applied." A defensible file states the method — transaction-level spot, a defined time-weighted average, or a daily rate applied to each day's receipts — proves the inputs, and applies it in every period. Valuing a year of rewards at a single December 31 price is not fair market value.

## Mining: The Receipt Rule and the Business Line

Notice 2014-21, Q&A 8, states that a taxpayer who successfully mines virtual currency includes its fair market value as of the date of receipt in gross income. Q&A 9 adds that where mining constitutes a trade or business not undertaken as an employee, the net earnings from self-employment are subject to self-employment tax.

Three refinements matter. For a cash-method miner participating in a pool, the receipt event is the pool payout credited under the pool's terms, not the block subsidy paid to the pool. The cost side is not optional: a mining business may recover equipment under section 168 and deduct ordinary and necessary expenses under section 162. And the section 183 hobby boundary must be tested honestly, because a business miner's coin may be inventory rather than a capital asset — which changes the character of the eventual disposition from capital to ordinary, a question answered when the coin is received.

## Not Every Protocol Event Is a Receipt

Chief Counsel Advice 202316008 addresses a blockchain whose consensus mechanism changed from proof-of-work to proof-of-stake. The taxpayer's existing units were unchanged, past transactions and previously validated blocks were untouched, and no cash, services, or additional property was received. Applying *Cottage Savings Assn. v. Commissioner*, 499 U.S. 554, 564–565 (1991), the Service found no exchange of property differing materially in kind or in extent and therefore no section 1001 realization event; and because no separable economic benefit was derived, no accession to wealth under section 61 either.

The line is clean, and clients assume the opposite in both directions: income reported where none exists, or a receipt the ledger will show and the return will not.

## Liquid Staking, Restaking, and the Derivative Problem

A holder who deposits native coin into a liquid staking protocol in exchange for a receipt token has generally surrendered one bundle of entitlements for another: withdrawal-queue mechanics, slashing exposure, smart-contract risk, and a secondary-market spread. Under the analysis of CCA 202316008 — whether the exchanged interests embody legally distinct entitlements — the deposit is a candidate section 1001 realization event, and section 1031, which since 2017 reaches only real property, is unavailable in any event. No ruling resolves the question, and two valuation consequences follow.

If the deposit is an exchange, the amount realized and the new basis are both measured by the receipt token's fair market value at deposit — not the underlying coin's price. Receipt tokens have traded at observable discounts to their underlying during stress, the market's own valuation of the withdrawal queue; pricing them at the underlying's spot overstates both gain and basis. Restaking rewards, in turn, are additional units received for validation activity, governed by Rev. Rul. 2023-14 for inclusion and, frequently, unsupported by market data at the receipt timestamp.

## The Receipt That Later Evaporated

Chief Counsel Advice 202444009 addresses rewards credited to a customer's account at a platform that then froze accounts and filed for bankruptcy before year end. The Service held that the taxpayer includes the rewards' fair market value, at the date and time of receipt, in gross income in the receipt year even though the account remained frozen on December 31 — because the user agreement allowed the taxpayer to sell, exchange, or transfer the rewards when credited, establishing dominion and control. A footnote draws the other half of the line: rewards that accrued but were not credited before the freeze, for example during a lockup, were not actually or constructively received and are not included.

The asymmetry is worth stating plainly. Income is fixed at credit, at the value that then existed, while the offsetting loss is governed by stricter rules: section 165(a) allows a deduction only for losses evidenced by closed and completed transactions and fixed by identifiable events. A mere decline in value is not a loss. In Chief Counsel Advice 202302011, a cryptocurrency trading below one cent while the taxpayer could still dispose of it produced no section 165 loss on worthlessness or abandonment grounds. Section 165(g)'s worthless-security rule does not fill the gap either; cryptocurrency is not a security within section 165(g)(2), as CCA 202302012 also concludes.

The receipt-date valuation therefore does double duty: it fixes the income owed in a year when value existed, and it fixes the basis that measures the eventual loss.

## The 2026 Reporting Architecture and the Information Asymmetry

The Service directs income from forks, staking, and mining to Schedule 1 (Form 1040), Additional Income and Adjustments to Income. As a matter of form mechanics, an individual taxpayer reporting non-business reward income uses Part I, line 8z, "Other income," listing the type and amount. Where the activity is a trade or business — a validator operation or a mining enterprise — the income belongs on Schedule C, with the self-employment and expense consequences that follow.

| Event | Reporting | Third-party information return |
|---|---|---|
| Airdrop received (individual, not a business) | Schedule 1, Part I, line 8z, with description | None |
| Staking or validation rewards (individual, not a business) | Schedule 1, Part I, line 8z, with description | Generally none; a platform may issue a Form 1099-MISC for certain reward or earn programs, but Form 1099-DA does not report reward receipts |
| Hard-fork distribution received | Schedule 1, Part I, line 8z, with description | None |
| Mining or validator income as a trade or business | Schedule C (and self-employment tax) | None as a rule |
| Digital assets received as payment for services | Schedule C (independent contractor) or wages reporting (employee) | Form 1099-MISC or Form W-2 from the payer, where applicable |
| Later sale or exchange of the received asset | Form 8949, summarized on Schedule D | Form 1099-DA from a custodial broker that effected the sale |

The asymmetry in that table is the most important compliance fact about receipt events. Section 6045, as amended by the Infrastructure Investment and Jobs Act, and Treasury Regulation section 1.6045-1 require brokers to report the sales and exchanges they effect. The Service's own broker-reporting FAQs confirm the limit: a business providing custodial services that does not effect sales for its customers has no reporting obligation under those regulations. Nothing in the regime creates a comparable return for a reward, an airdrop, or a fork distribution.

The government therefore holds a third-party trail for the disposal and none for the receipt. The taxpayer's contemporaneous record is the only evidence of the receipt-date fair market value, and the digital asset question — which asks whether the taxpayer received digital assets "as a reward, award or payment for property or services" — creates the exam-selection hook even where no information return exists. Where the burden of proof is allocated under section 7491, the shift depends on the taxpayer having substantiated the item and maintained the required records; a reconstructed price is exactly the evidence that does not earn it. Our examination analysis treats that allocation in full.

## Self-Employment, the NIIT, and the Limits of Rev. Rul. 2023-14

Commentary frequently states that staking rewards are subject to self-employment tax. That overstates the authority, and the distinction drives a Schedule C filing, a Schedule SE computation, and a different set of deductions.

Rev. Rul. 2023-14 holds that validation rewards are included in gross income when the cash-method taxpayer gains dominion and control, and that fair market value is measured then. It does not hold that a passive holder's rewards are net earnings from self-employment. That framework comes from elsewhere: Notice 2014-21, Q&A 9, applies it to mining, providing that if mining is a trade or business not undertaken as an employee, the net earnings from self-employment are subject to the tax. Whether a given staking arrangement is a trade or business is a facts-and-circumstances inquiry under section 162 and the section 1.183-2 factors — regularity, continuity, invested time and capital, and profit motive.

The line is usually visible in the infrastructure. A taxpayer operating validator nodes, or arranging a third-party validator on their own behalf, is engaged in a business rather than holding an investment; a taxpayer who holds coins on a platform and elects to earn rewards is closer to an investor. On the investor side, sections 1401 and 1402 generally do not apply; on the business side, the rewards are self-employment income and the associated expenses are deductible. Because the position is an analysis rather than a holding, it should be documented contemporaneously.

## Valuing the Receipt: What Fair Market Value Requires at a Timestamp

The authority for the *method* is brief. Notice 2014-21, Q&A 5, requires transactions to be reported in U.S. dollars and directs that where an asset is listed on an exchange with an exchange rate established by market supply and demand, fair market value is determined by converting at that rate, "in a reasonable manner that is consistently applied." CCA 202114020 adds that a taxpayer "can determine the Bitcoin Cash's fair market value using any reasonable method, such as adopting the publicly published price value at a cryptocurrency exchange or cryptocurrency data aggregator."

Together with the dominion-and-control rule, that requires six things: the exact date and time of the event; the market that establishes value at that timestamp; a stated method applied to a stated unit count; inputs from sources that can be retrieved later; a written record of the method; and the same method for the same class of event in every period. A determination that cannot state those six things is an estimate, not a valuation, and its file will not survive contact with an examiner.

Three patterns make this hard, and the aggregation problem discussed under staking is the fourth: the absent market, the illiquid window, and the restricted position.

*No listed market.* A token distributed before any listing has no exchange rate, and a single decentralized pool's mid-price is not a market in the sense Notice 2014-21 contemplates — especially where the pool is thin and a material sell would move the price. The cost approach is generally unavailable for a receipt with no cost to the holder, and the income approach requires a claim on identifiable cash flows. Where no approach yields a supportable number, the workfile must say so and quantify the range: better to establish that a $40,000 figure could reasonably be $31,000 or $48,000 on the available evidence than to assert a single unsupported number.

*An illiquid window.* The first hours of trading often produce prints no market participant could have obtained in size, on venues a U.S. holder could not access. A determination in such a window should test a defined measure — the first day's volume-weighted average, a closing price on a major venue, or a transaction-level print — and state why it represents an arm's-length price.

*Restricted positions.* Reward tokens subject to vesting or lockup are worth less than freely tradable units; the discount is the market's valuation of forced holding, price risk, and reduced liquidity. Applied at receipt with support, it reduces both the income recognized and the basis established; applied without support, it creates understatement exposure. The analogue in a tax appraisal is a supported discount for lack of marketability derived from a stated method, not a figure carried over from another file.

| Receipt pattern | Primary appraisal approach | Evidence the workfile has to hold |
|---|---|---|
| Liquid token with multiple venues | Market approach, using comparable sales in the same asset under the same market conditions | Timestamped prints or a defined-window average from at least two independent sources, with venue, volume, and retrieval date |
| DEX-only or newly distributed token | Market approach treated as a transaction analysis, corroborated where possible by cost or income evidence | Pool composition, trade-level data, the depth available at the timestamp, and an explicit statement of the limits of the data |
| Restricted, locked, or vested reward tokens | Market approach to the freely tradable unit value, then a supported discount for lack of marketability | The vesting or lockup terms and the method used to derive the discount |
| Validator or protocol-revenue-bearing position | Income approach, where the position carries a claim on identifiable cash flows | Yield data, fee or revenue mechanics, and the capitalization or discounting inputs |
| Mining output with identifiable production cost | Cost evidence as corroboration of market value, or as primary evidence where no market exists | Equipment, power, and pool-fee records supporting cost per unit |

QDAV develops these determinations under the Uniform Standards of Professional Appraisal Practice, specifically Standards 9 and 10, which govern the development and reporting of business and intangible asset appraisals — described in our analysis of USPAP Standards 9 and 10 for digital assets. The machinery for restricted and illiquid positions is developed in our treatment of blockage and the discount for lack of marketability.

## Basis: The Number That Travels

The receipt-date value becomes basis: Rev. Rul. 2019-24 states that the taxpayer's basis in airdropped cryptocurrency is the amount of income recognized, and Treasury Regulation section 1.61-2(d)(2)(i) states the general rule for property received as compensation. Three consequences follow.

*Holding period.* The holding period begins the day after receipt, and gain is long-term where the asset is held for more than one year. For a reward token, the receipt date therefore fixes character on a later sale, so an uncertain receipt date produces an uncertain character — often a more expensive dispute than the value question that caused it.

*Wallet-level allocation.* Revenue Procedure 2024-28 requires basis to be allocated to specific wallets or accounts as of January 1, 2025, and units tracked at that level thereafter. Reward tokens are the assets most likely to need per-receipt records under that regime, because they accumulate in the wallet or account where the earning activity occurs and are frequently commingled with purchased units of the same token. A receipt that was never valued cannot be allocated.

*The charitable-contribution trap.* Section 170(e)(1)(A) reduces a charitable deduction by the amount of gain that would not have been long-term capital gain had the property been sold at fair market value on the contribution date. A token received as ordinary income and contributed within one year of receipt would produce short-term gain on a sale, so the reduction takes the entire appreciation — limiting the deduction to basis, meaning the amount already recognized as income. Hold the same token for more than a year and the full fair market value is deductible, subject to substantiation. And because cryptocurrency is not a "publicly traded security" for this purpose — section 165(g)(2) does not reach it, as CCA 202302012 holds — a contribution with a claimed deduction over $5,000 requires a qualified appraisal under IRS Section 170(f)(11)(C), resting on defensible data rather than an exchange price. *Pankratz v. Commissioner*, T.C. Memo. 2021-26, refused to excuse an unsupported deduction on reliance grounds, noting that the repeated references to appraisals on Form 8283 should have put the taxpayer on notice.

The deduction mechanics are developed in our analysis of donor-advised funds and charitable remainder trusts, and the appraisal timing rules in our treatment of retaining an appraiser.

## Appraisal Scope and Terminology: Two Different Documents

The word "qualified" does specific work in the Code, and conflating two products is a common, avoidable error.

A **statutory Qualified Appraisal** is a term of art under section 170(f)(11)(E) and Treasury Regulation section 1.170A-17. It substantiates a charitable contribution: required above defined thresholds, prepared by a qualified appraiser as the regulation defines that term, containing specified elements and certifications, and falling within a timeliness window tied to the contribution and the return. Its purpose is to make a deduction allowable.

A **receipt-date fair market value determination** serves a different purpose. It establishes the income recognized on a receipt, the basis of an asset received, or a value required by an estate, gift, or fiduciary filing. It is developed and reported under USPAP Standards 9 and 10, directed to a value at an identified date and time, supported by the market evidence that existed then, and tested by whether a reviewer can retrace the analysis rather than by a checklist of §170 elements.

Both may be required in one file, and neither substitutes for the other: a taxpayer who received a large airdrop one year and donated part of it the next needs a receipt-date determination for income and basis, and a contribution-date qualified appraisal for the deduction. QDAV is a fee-for-service appraisal firm, not a portfolio tracker or a price feed; the deliverable is a signed report with a methodology, an identified value, and the data behind it.

## The Documentation Package: What to Assemble at the Time of Receipt

The difference between a defensible receipt and an indefensible one is almost entirely a question of what was preserved in the weeks after the event — a package that takes hours to assemble while the event is current, and often cannot be assembled at all two years later, when third-party data sources have been retired and a pool has gone dark.

| Item | Why it matters | Where it comes from |
|---|---|---|
| Transaction hash, block timestamp in UTC, and the credited address | Establishes the date and time of the receipt, which fixes both the income year and the valuation moment | The block explorer for the relevant chain |
| Platform credit record and the applicable user agreement | For platform-held assets, the terms are the evidence of when dominion and control arose | The platform's statements and terms of service in effect at the time |
| Distribution, claim, or reward terms, including any snapshot or eligibility announcement | Establishes whether anything was received, and under what conditions | Project documentation, governance posts, claim interfaces |
| Market data at the timestamp from two independent sources, with retrieval dates | Supports the number that becomes income and basis | Exchange data, aggregators, on-chain trade data |
| Vesting, lockup, or transfer-restriction documentation | Supports any discount applied and identifies the transferability date | Contract or protocol documentation |
| Unit-count reconciliation to the ledger | Reconciles the reward or distribution to the amount reported | Wallet history and platform statements |
| Written valuation method memorandum | Satisfies the consistency requirement of Notice 2014-21, Q&A 5 and prevents method drift between years | The file, prepared by the adviser or appraiser |
| Appraisal report, where the market is absent, thin, or the amount is material | Converts an estimate into evidence | The appraiser |
| Basis ledger allocated by wallet | Satisfies Revenue Procedure 2024-28 and supports later gain, loss, and deduction computations | The file, maintained continuously |

A taxpayer who received nothing reportable should still document the analysis. The most expensive version of a receipt file is the one in which a taxpayer learns during an examination that a distribution they never reported was received, transferable, and unvalued three years earlier.

## Frequently Asked Questions

**Do I owe tax on an airdrop I never claimed?**
It depends on whether you obtained dominion and control — whether you could sell, exchange, or otherwise dispose of the tokens. Under Rev. Rul. 2019-24, an airdrop that could be disposed of immediately is ordinary income at fair market value when received. Where an eligible claim was never exercised, the analysis turns on what you could actually do and when, and it should be documented before the return is filed rather than argued afterwards.

**What date do I use for staking rewards?**
The date and time you gained dominion and control, not the date the reward was earned or the block validated. Rev. Rul. 2023-14 measures fair market value as of that moment. Where rewards are credited subject to a lockup, the receipt date is the date the restriction ends.

**Is my staking income subject to self-employment tax?**
Only if the staking activity is a trade or business carried on by you other than as an employee. Rev. Rul. 2023-14 does not decide that question. Notice 2014-21, Q&A 9, supplies the framework for mining, and section 162 and the section 1.183-2 factors supply it for staking.

**The token crashed after I received it. Can I reduce the income I reported?**
No. Fair market value is measured at the receipt date and time and does not follow later declines. The loss is a separate question governed by section 165, which requires an identifiable event; in CCA 202302011, a cryptocurrency trading below one cent while the taxpayer could still dispose of it produced no deductible loss.

**I received a hard-fork coin years ago and my exchange only supported it later. What is my income year?**
The year in which you could first dispose of it. In CCA 202114020, a taxpayer whose exchange did not support Bitcoin Cash until January 1, 2018 had 2018 income, not 2017 income, measured by the price at the moment support began.

**My exchange froze my account and filed for bankruptcy after crediting staking rewards. Do I still have income?**
If the rewards were credited and transferable before the freeze, yes — the income belongs to the year of credit at the value then, per CCA 202444009. Rewards that had accrued but were never credited were not received and are not included in that year.

**Is a price screenshot from my exchange enough to support my numbers?**
It depends on the purpose. For an income or basis determination, a contemporaneous, sourced, and consistently applied market measure is required, and a screenshot is usually too thin a record. For a charitable contribution over $5,000, CCA 202302012 holds that cryptocurrency is not a publicly traded security and that an exchange price does not substitute for a qualified appraisal or excuse its absence.

**Can an appraisal lower my income from a receipt?**
An appraisal does not change the law, and it cannot make property worth less than it was. It establishes the value the law already requires you to determine. Where there is no listed market, where the market at the timestamp was thin, or where the position received was restricted, an appraisal is not a way to reduce the number — it is the only way to support one.

## The Takeaway

The tax cost of a digital asset is set on the day it is received and almost never documented on that day. The rules are specific and knowable: section 61 and the accession-to-wealth standard, sections 451, 1011, and 1012 for timing and basis, Notice 2014-21 for the method of determining fair market value and the treatment of mining, Rev. Rul. 2019-24 for hard forks and airdrops, Rev. Rul. 2023-14 for validation rewards, and a body of Chief Counsel Advice that answers the questions the rulings leave open — exchange-support dates, protocol upgrades, frozen platforms, and assets that lost their value. What the return cannot supply is the number that all of it depends on.

For attorneys and CPAs, the sequence is short. Identify the receipt event, establish the date and time at which the client obtained dominion and control, assemble the market evidence at that timestamp, and put the determination in writing. Where a market exists and the record is complete, that file is defensible. Where the asset had no market, where the market was thin, where the position was restricted, or where the amount is material, the determination belongs in a signed appraisal developed and reported under USPAP Standards 9 and 10 — with a methodology the client's own advisers can read and a reviewer can retrace.

Qualified Digital Asset Valuations develops USPAP-compliant appraisals for receipt events, holdings, and filings, and accepts engagements from attorneys, CPAs, and fiduciaries in Metro Detroit and nationally. Reach the appraisal desk at (248) 955-1491 or appraisal@qdav.mba, or visit qdav.mba.
