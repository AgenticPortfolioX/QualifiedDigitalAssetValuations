---
title: "Prohibited Transactions in a Digital Asset Self-Directed IRA: IRC Section 4975 Disqualified Persons and Excise Taxes, the Section 408(e)(2) Disqualification Trap, Unrelated Business Taxable Income from Staking and Lending, and the Fair Market Value Evidence That Protects the Account"
date: "2026-10-09"
description: "A compliance analysis of the two regimes that most often catch a digital asset self-directed IRA: the prohibited transaction rules of IRC section 4975, with their 15 percent and 100 percent excise taxes, and the section 408(e)(2) rule that can disqualify the entire account, plus the unrelated business taxable income rules that reach staking and lending. It explains disqualified persons, the crypto-specific traps, Form 5498 fair market value reporting, Form 990-T, RMD calculation, and where a USPAP-compliant qualified appraisal becomes the defensible value."
category: "QDAV"
author: "QDAV"
---

# Prohibited Transactions in a Digital Asset Self-Directed IRA: IRC Section 4975 Disqualified Persons and Excise Taxes, the Section 408(e)(2) Disqualification Trap, Unrelated Business Taxable Income from Staking and Lending, and the Fair Market Value Evidence That Protects the Account

*Published: October 9, 2026 | By QDAV*

---

A self-directed IRA that holds digital assets is exposed to two tax regimes that most account owners never see coming. The first is the prohibited transaction regime of Internal Revenue Code section 4975, which imposes an excise tax on certain dealings between the account and the people closest to it — and which, under section 408(e)(2), can cause the account to **cease to be an IRA altogether**. The second is the unrelated business taxable income regime of sections 511 through 514, which can make a tax-deferred retirement account owe tax on the business income its assets generate. The first is triggered by a transaction. The second is triggered by an activity. Both are valued by the same measure: **fair market value**.

This analysis is written for the self-directed IRA holders, estate attorneys, CPAs, and custodians who move bitcoin, ether, stablecoins, and DeFi positions inside a retirement account. QDAV's primary service population is exactly this group — holders who must furnish an annual value attestation and who bear the harshest consequence in the tax code for a single misstep. The purpose here is to set out what a prohibited transaction is, who the disqualified persons are, which crypto activities invite the excise tax and which invite outright disqualification, when UBTI reaches a retirement account, and why the valuation that sits underneath each of those questions has to be defensible rather than merely current.

## The Statute That Governs the Account: Section 4975 and Its Two Taxes

Section 4975 is the engine of the prohibited-transaction regime for individual retirement accounts. It imposes a two-tier excise tax on any **disqualified person** who participates in a prohibited transaction.

The first tier is the initial tax under section 4975(a): **15 percent of the "amount involved"** with respect to the transaction, imposed for **each year (or part of a year)** in the taxable period. This is not a one-time charge. It runs annually until the transaction is corrected, which means a transaction left in place for two years and three months carries the 15 percent for three taxable periods. The second tier is the additional tax under section 4975(b): **100 percent of the amount involved** if the transaction is **not corrected** within the taxable period. The taxable period runs from the date the transaction occurs until the earlier of the date a notice of deficiency is mailed or the date the correction is completed.

The tax is paid by the disqualified person who participated in the transaction — not, in the ordinary IRA case, by the account. For a self-directed IRA, the disqualified person is frequently the owner. That is the structural point: the person who directed the transaction is the person the statute reaches.

The mechanism for reporting and paying the tax is **Form 5330, Return of Excise Taxes Related to Employee Benefit Plans**, generally filed by the last day of the seventh month after the end of the taxable year. The presence of a filing obligation is itself a warning sign: an owner who uncovers a prohibited transaction in the account is expected to compute the amount involved, determine the taxable period, and report the excise tax — which requires a number for the assets involved.

## Who Is a Disqualified Person

Section 4975(e)(2) defines a disqualified person in categories that sweep in the account holder's inner circle:

- a **fiduciary** with respect to the plan;
- a person **providing services** to the plan;
- the **IRA owner** and the owner's **beneficiary**;
- a member of the **family** of any of those persons — meaning the spouse, an ancestor, a lineal descendant, and any spouse of a lineal descendant;
- a **corporation, partnership, trust, or estate** in which a disqualified person holds a substantial interest; and
- an officer, director, or highly compensated employee of such an entity.

Two features of that definition matter to a digital-asset holder. First, **the owner is a disqualified person in her own right** — so the ordinary instinct to treat the account as an extension of personal holdings is exactly the instinct the statute penalizes. Second, the family definition is **narrower than intuition**: a sibling, for example, is not within the statutory sphere (though a spouse, parent, child, and a child's spouse are). An owner who uses the IRA's assets to benefit a disqualified family member — paying that child's expenses, letting that child use an IRA-held asset, or directing the account's gains to that child — has used plan assets for the benefit of a disqualified person, which is a prohibited transaction in its own right.

## The Catalogue of Prohibited Transactions

Section 4975(c)(1) defines a direct prohibited transaction as any:

1. **sale, exchange, or leasing** of property between a plan and a disqualified person;
2. **lending of money or extension of credit** between a plan and a disqualified person;
3. **furnishing of goods, services, or facilities** between a plan and a disqualified person;
4. **transfer to, or use by or for the benefit of, a disqualified person** of any income or assets of the plan;
5. act by a **fiduciary** who deals with the income or assets of the plan **in his own interest or for his own account**; or
6. **receipt of consideration** by a fiduciary from any party dealing with the plan in connection with a transaction involving plan assets.

Two design features make this catalogue dangerous for a digital-asset account. The first is that it is a **list of shapes, not a list of harms**. A transaction does not become permissible because it was fair, inadvertent, or profitable for the account; the statute is concerned with the identity of the counterparty and with the direction the benefit flowed. The second is that the most frequently litigated — and most frequently overlooked — category is number four, the **use of plan assets for the benefit of a disqualified person**. That category is broad enough to catch conduct that never looks like a trade.

## The Crypto-Specific Traps

Digital assets bring the catalogue to life in ways that a portfolio of mutual funds never does, because the holder of a crypto account is used to controlling the assets directly. Five traps recur.

**1. Holding the private keys personally.** Inside a retirement account, custody is the boundary. The crypto owned by an IRA must be held by a **qualified custodian**; the owner may not personally hold the private keys to IRA-owned digital assets. Direct key control is widely treated as **use of plan assets by or for the benefit of a disqualified person** under section 4975(c)(1)(D). Practitioners treat it as the single most consequential crypto-specific misstep, because it places the owner on both sides of the account.

**2. Buying from or selling to yourself.** A sale or exchange of property between a plan and a disqualified person is prohibited. An owner who thinks of the account as a second wallet and moves a token between the IRA and a personal address — even at a defensible price — has executed a sale or exchange between the account and a disqualified person. That the price was fair does not cure the transaction.

**3. Pledging IRA assets for a personal loan.** Lending money or extending credit between the account and a disqualified person is prohibited, and the mirrors of that prohibition are equally fatal. Using IRA-held crypto as collateral for a personal borrowing, or lending to the owner against the account's assets, is a prohibited transaction.

**4. Paying personal expenses out of the account.** A disqualified person may not furnish goods, services, or facilities to the plan, and the account's assets may not benefit a disqualified person. Where the owner pays personal hardware purchases, personal network fees, or personal wallet costs with funds that belong to the account, the benefit runs the wrong way. A closely related error is the **checkbook IRA** — a structure in which the IRA owns a single-member LLC that holds the crypto. The structure is not unlawful in itself, but it concentrates the risk: every payment written from the LLC's funds, and every asset the LLC holds for a disqualified person's use, is tested against section 4975. The checkbook does not create a prohibition; it removes the custodian's friction that would otherwise have prevented one.

**5. Redirecting the account's own rewards.** Where staking or lending rewards are earned by IRA-owned assets, they belong to the account. Directing them, or the rights to them, to a disqualified person is a transfer of plan income to a disqualified person.

## The Trap Behind the Tax: Section 408(e)(2) Disqualification

Owners who learn about section 4975 usually assume the worst case is the excise tax. For an IRA, it is not. Section 408(e)(2) provides that if the account owner or beneficiary **engages in a prohibited transaction**, the account **ceases to be an individual retirement account** as of the **first day of the taxable year** in which the transaction occurred — and the entire account is **deemed distributed** and included in gross income. The tax on a deemed distribution of a $500,000 account, at ordinary rates, dwarfed by the loss of decades of tax deferral, is a materially worse outcome than a 15 percent excise tax.

An illustration makes the shape concrete. Assume an owner holds a $600,000 self-directed IRA consisting largely of bitcoin and a DeFi lending position, and in March of a year moves the IRA-owned bitcoin to a personal hardware wallet to "keep it safe," holding the seed phrase himself. The conduct is a use of plan assets for the benefit of a disqualified person. Under section 408(e)(2), the account ceases to be an IRA on **January 1 of that year**, and the full $600,000 is treated as distributed on that date — taxable income in the year, subject to ordinary rates, with a 10 percent early-distribution penalty if the owner is under 59½ unless an exception applies. The 15 percent excise tax under section 4975 may also apply. This is the reason the SDIRA compliance conversation for digital assets begins with **custody**, before it reaches taxes.

There is an accuracy point worth stating plainly, because it is the subject of frequent confusion. **Correcting** a prohibited transaction under section 4975(f)(5) — undoing it and placing the plan in no worse a position than it would have occupied under the highest fiduciary standards — can eliminate the additional 100 percent tax. For an IRA, however, correction does **not** generally reverse the section 408(e)(2) disqualification, because that provision is triggered by the owner's **engaging in** the prohibited transaction, not by the transaction's persistence. The disqualification is the point of no return; the correction is a mitigation of the excise-tax layer, not a cure of the account.

## The Measure That Sets the Tax: The "Amount Involved"

Every dollar figure in the prohibited-transaction analysis runs through one defined term. The "**amount involved**" under section 4975(f)(4) is generally **the greater of the amount of money and the fair market value of the other property given or received** in the transaction. If an IRA sells a token to a disqualified person, the amount involved is the greater of the cash paid and the fair market value of the token. If an IRA-owned asset is used to benefit a disqualified person, the amount involved is generally the fair market value of the use.

The consequence is direct: **the excise tax is only as accurate as the valuation beneath it**. A 15 percent tax computed on an overstated value overpays; a tax computed on an understated value invites an adjustment, and with it the running 15 percent and the potential 100 percent. On a $400,000 token position, the difference between a defensible fair market value and a thumbnail estimate is measured in tens of thousands of dollars of excise tax — before any penalty.

## Unrelated Business Taxable Income: When a Tax-Deferred Account Owes Tax

The second regime has nothing to do with who the counterparty is. It is about **what the account does**. An IRA is exempt from income tax under section 408(e)(1), which means it is a tax-exempt organization for purposes of the unrelated business income rules of sections 511 through 514. If the account's assets generate income from a **trade or business regularly carried on** and unrelated to the account's exempt purpose of investing for retirement, that income is **unrelated business taxable income (UBTI)** — and the account owes tax on it.

The framework has four moving parts that a digital-asset holder must understand.

**The filing threshold.** An exempt organization with **$1,000 or more of gross income** from an unrelated business must file **Form 990-T, Exempt Organization Business Income Tax Return**. The IRA itself — through its trustee or custodian — is the filer. A crypto account can cross that threshold without the owner realizing the account has a filing obligation at all.

**The rate.** For tax years beginning after December 31, 2017, UBTI is taxed at the **21 percent** corporate rate.

**The silo rule.** Section 512(a)(6) requires that each separate unrelated trade or business be computed **separately**, so that a loss in one activity cannot offset the income of another. For an account that both stakes and lends, that rule can eliminate the offset an owner would otherwise expect.

**Debt-financed income.** Section 514 brings **unrelated debt-financed income (UDFI)** within UBTI. Where a retirement account earns income on property acquired or carried with borrowed funds — think margin trading on an exchange account, or a leveraged position — the proportionate share of the income is UBTI. The leverage converts what the owner thought was passive gain into a taxable event inside a tax-deferred wrapper.

The two crypto activities most likely to raise the question are **staking** and **lending**.

**Staking.** When an account stakes digital assets and receives rewards, the question is whether the validation activity rises to a trade or business regularly carried on by the account. Professional opinion is **not settled**. One view treats staking as the active conduct of a business — the account is performing, or directing, validation services for compensation — which would make the rewards UBTI above the threshold. The competing view treats delegated staking as passive investment activity analogous to earning interest. Because the Service has not issued definitive guidance resolving the question for IRAs, the correct posture is to **analyze it factually**, document the characterization, and file Form 990-T where the position requires it. An owner who stakes at scale inside an IRA and assumes the income is automatically tax-deferred may be accumulating an unfiled return rather than a tax-free one.

**Lending.** Crypto lending — through a platform, a DeFi protocol, or with borrowed funds — is closer to the heart of the UBTI inquiry, and where it involves leverage it implicates UDFI directly. Interest and rewards earned on lent or debt-financed positions should be tested against sections 511 through 514, with the silo rule applied if more than one activity is present.

UBTI does not disqualify the account. It is a tax on the account's income, reported on Form 990-T, computed on a value. The valuation discipline that governs the rest of the account applies here too: the income figure that flows into the return is only as good as the numbers the account uses.

## The Six Points Where Fair Market Value Is Load-Bearing

Across the SDIRA lifecycle, the value of the digital assets is not a formality. It is the quantity on which the tax, the distribution, and the compliance record turn. There are six points at which it decides an outcome.

1. **Annual Form 5498 reporting.** The custodian must report the account's **fair market value as of December 31** on Form 5498, **Box 5**, and, for specified alternative assets, the itemized value on **Boxes 15a and 15b** with a type code.
2. **The "amount involved"** in a prohibited transaction under section 4975(f)(4) — the base for the 15 percent and 100 percent excise taxes.
3. **The deemed distribution** on a section 408(e)(2) disqualification — the entire account valued as of January 1 of the year of the transaction.
4. **Required minimum distributions.** The RMD is computed from the **prior year-end account fair market value**. An understated December 31 value distorts every future RMD.
5. **Roth conversions and in-kind distributions.** The taxable amount equals the fair market value of the digital assets at the time of the conversion or distribution. It is standard practice to treat a valuation older than about **90 days** as stale for these events.
6. **Documentation of arm's-length value.** Where an owner asserts that a transaction was conducted at fair market value, or relies on a distributable event, the supporting valuation is the evidence.

The common thread is that a single number — the defensible fair market value of the account's digital assets — is reused across the custodian's annual report, the excise-tax computation, the RMD, and any distribution. Where that number is a price screen rather than a **qualified appraisal**, every one of those uses inherits the weakness.

## Form 5498: How the Account Reports Its Own Value

Form 5498 is the annual statement the IRA trustee or issuer files to report contributions, rollovers, required minimum distributions, and the account's value. Two parts matter to a digital-asset holder.

**Box 5** is the **fair market value of all investments in the account at year end**. It is the headline number, and it feeds the RMD computation for the following year.

**Boxes 15a and 15b** report the itemized fair market value of **specified alternative assets** and the **type code** that identifies each. The codes run from A (closely held stock) to G (**other asset that does not have a readily available fair market value**), with H for accounts holding more than two types. Digital assets that a custodian reports as non-marketable in the formal sense are commonly captured under **code G**, paired with the value in 15a.

The division of labor is important, and it recurs in every custodian's guidance. The **custodian files** the form and is legally responsible for its accuracy, but the custodian does not appraise the assets. The **owner supplies the number**. The custodian's internal deadline typically falls in January, ahead of its own filing — some custodians report the prior known value if no current valuation is submitted, which perpetuates a stale figure and distorts the RMD. Because the value affects the owner's own tax outcomes, custodians and professional guidance generally hold that the owner **may not simply assign a value** to a hard-to-value asset; a neutral, independent valuation is expected, and where the asset is complex, a **qualified appraisal** is the work product that satisfies the expectation. The cost of the valuation is an expense of the account, paid with account funds — not personal funds, which would itself be a use of personal assets to benefit the account's compliance and could muddy the custody analysis.

## Correcting a Prohibited Transaction

When a prohibited transaction is identified, the objective is **correction** — undoing the transaction to the extent possible and placing the plan in a financial position no worse than it would have occupied had the disqualified person acted under the **highest fiduciary standards**, as section 4975(f)(5) requires. Correction stops the clock on the 100 percent additional tax and limits the running 15 percent.

For retirement plans, the **Employee Plans Compliance Resolution System (EPCRS)** provides a framework for correcting plan errors, and **Revenue Procedure 2002-32** created a self-correction path for certain IRA defects. It is important to be precise about scope: the voluntary correction program is aimed principally at qualified plans, and for an IRA the central question is the **section 4975 excise tax** and the **section 408(e)(2)** consequence. As noted above, correction generally mitigates the excise tax but does not unwind the disqualification triggered by the owner's own participation.

Three practical steps make correction defensible. First, **document the transaction** — what was transferred, to whom, when, and at what value. Second, **obtain a fair market value for the assets involved**, both at the date of the transaction and at the date of correction, because both the amount involved and the repositioning of the plan's assets depend on it. Third, **report the excise tax on Form 5330** for the applicable taxable periods, and file the Form 990-T if UBTI is also in play. A correction without a valuation is an assertion; a correction with a defensible valuation is a record.

## The Professional Practice Chain: Custodian, CPA, Appraiser

No single professional owns the SDIRA compliance question, and that is precisely why digital-asset accounts go wrong. The chain runs through three roles.

The **custodian** holds the assets, files Form 5498, and enforces the custody boundary that keeps the owner away from the private keys. The **CPA** works the tax consequences — the Form 5330 excise tax, the Form 990-T, the RMD, the conversion or distribution. The **appraiser** supplies the fair market value on which all of them depend. Where the appraisal is a price screen rather than a **USPAP-compliant** report, the CPA is left to defend a number with no methodology behind it, and the custodian has reported a value no independent party stands behind.

For the appraiser, the SDIRA engagement has a specific shape. The report must fix value as of a defined date — **December 31** for the annual attestation, the event date for a conversion or distribution, the transaction date for the amount involved in a prohibited transaction. It must document the **defensible data** the value rests on: reconciled holdings across wallets and venues, market evidence at the measurement date, and a methodology applied under professional standards. And it must be produced by an appraiser **independent of the owner** — because an owner-signed value in a self-directed account is exactly the conflict the independence rule exists to prevent. The same professional discipline that supports a **qualified appraisal** where the IRS requires one — for a charitable deduction under **IRS Section 170** or an estate-tax filing — is the discipline that supports an SDIRA value where no form explicitly demands it but every downstream use assumes it.

## Metro Detroit and Michigan: The Home-Account Standard

Michigan does not soften any of this. There is no state estate tax to alter the calculus, and the federal regimes of sections 4975, 408(e)(2), and 511 through 514 apply to a Metro Detroit account exactly as they apply anywhere else. What the local market adds is concentration: Oakland, Wayne, and Genesee Counties hold a meaningful population of high-net-worth holders who moved into digital assets early and funded retirement accounts to match, served by estate attorneys and CPAs who are expert in tax and new to crypto custody. The same professional community that coordinates a Form 706 filing or a probate inventory in a Metro Detroit estate is the community that must now coordinate an SDIRA value attestation, a prohibited-transaction analysis, and a UBTI filing. The durable practice is to build the compliance chain before the audit letter arrives: fix custody with a qualified custodian, engage an independent valuation at each measurement date, and retain one defensible number that the custodian, the CPA, and the file all share.

## Frequently Asked Questions

### What is a prohibited transaction in a self-directed IRA?

A prohibited transaction is any of the dealings between a retirement account and a **disqualified person** that section 4975(c)(1) forbids — a sale, exchange, or lease of property; a loan or extension of credit; the furnishing of goods, services, or facilities; a transfer to or use for the benefit of a disqualified person of the account's income or assets; a fiduciary's dealing with plan assets in his own interest; or a fiduciary's receipt of consideration from a party dealing with the account.

### Can my self-directed IRA hold cryptocurrency?

Yes. A self-directed IRA may hold cryptocurrency, NFTs, and other digital assets, provided the custody and transaction rules are respected. The assets must be held by a **qualified custodian**, the owner must not personally hold the private keys, and the account must not deal with disqualified persons. Cryptocurrency held in a retirement account is treated as an investment, not as a currency.

### Can I hold the private keys to crypto owned by my IRA?

No. Personal possession of the private keys to IRA-owned digital assets is widely treated as a use of plan assets by or for the benefit of a disqualified person under section 4975(c)(1)(D). Custody must sit with a qualified custodian. Direct key control crosses the line that distinguishes a compliant self-directed account from a disqualified one.

### What is the penalty for a prohibited transaction in an IRA?

A disqualified person pays an initial excise tax of **15 percent of the amount involved** for each year (or part of a year) in the taxable period, and an additional tax of **100 percent of the amount involved** if the transaction is not corrected within that period. The tax is reported on Form 5330. For an IRA, the excise tax is often the smaller consequence.

### Does a prohibited transaction disqualify my whole IRA?

It can. Under section 408(e)(2), if the owner or beneficiary engages in a prohibited transaction, the account **ceases to be an IRA** as of the first day of the taxable year in which the transaction occurred, and the entire account is **deemed distributed** and included in income at ordinary rates. Correcting the transaction can eliminate the additional excise tax, but it generally does not reverse the disqualification for an IRA.

### Is staking income in an IRA subject to UBTI?

It depends, and the question is unsettled. If staking is characterized as a **trade or business regularly carried on** by the account, the rewards can be unrelated business taxable income, and the account may have to file **Form 990-T** once gross income from the activity reaches **$1,000**. Some practitioners argue delegated staking is passive investment income instead. Because guidance is not definitive, the correct approach is to analyze the facts, document the characterization, and file where the position requires it.

### What value must I report to my SDIRA custodian each year?

The **fair market value of the account's assets as of December 31**. The custodian reports the account value on Form 5498, Box 5, and itemizes specified alternative assets on Boxes 15a and 15b with a type code. The custodian files the form but relies on the owner to supply the number, and the value feeds the required minimum distribution for the following year, so an inaccurate figure carries forward.

### Do I need a qualified appraisal for a self-directed IRA?

For complex or non-marketable digital assets, yes — a neutral, independent valuation is expected, and a **USPAP-compliant qualified appraisal** is the work product that satisfies it. The owner generally may not simply assign a value to an asset the value of which affects the owner's own tax outcome, and the custodian has no independent way to price it. A defensible appraisal is also the evidence that supports the amount involved in any prohibited-transaction analysis, the deemed-distribution value on disqualification, and the value used for a Roth conversion or in-kind distribution.

## Conclusion

A digital-asset self-directed IRA is a tax-favored account wrapped around assets that invite direct control, and the two do not coexist without discipline. Section 4975 taxes the dealings between the account and the people around it; section 408(e)(2) can end the account outright; sections 511 through 514 tax the business income the account's assets generate. Each regime is triggered by a different act — a transaction, a custody decision, an activity — and each resolves to the same quantity: the **fair market value** of the digital assets involved.

For the holder, the disciplined path is short. Keep custody with a qualified custodian and stay away from the private keys. Treat the account as a separate person in every dealing, and never let its assets benefit the owner or a disqualified family member. Watch staking and lending for UBTI, and file Form 990-T where the facts require it. Report a current, defensible value to the custodian each December 31, and obtain an independent valuation at each event that fixes a tax consequence. Do that, and the account stays what the statute permits it to be — a retirement vehicle — rather than becoming the transaction that ends it. The premise that governs a **qualified appraisal** in every other QDAV engagement is the same premise that governs the retirement account: the value must be supportable, and **defensible data** is how that support is built.
