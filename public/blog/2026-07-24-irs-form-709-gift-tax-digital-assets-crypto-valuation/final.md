---
title: "IRS Form 709 and Digital Asset Gift Tax Valuation: How to Report Cryptocurrency Transfers, Annual Exclusion Gifts, and Fair Market Value Determination Under IRC Chapter 12"
date: "2026-07-24"
description: "A comprehensive guide for estate attorneys, CPAs, and high-net-worth individuals on IRS Form 709 gift tax reporting for cryptocurrency and NFT transfers — covering fair market value determination, annual exclusion limits, qualified appraisal requirements, and audit defense strategies for digital asset gifts."
category: "QDAV"
author: "QDAV"
---
# IRS Form 709 and Digital Asset Gift Tax Valuation: How to Report Cryptocurrency Transfers, Annual Exclusion Gifts, and Fair Market Value Determination Under IRC Chapter 12

*Published: July 24, 2026 | By QDAV*

---

When a high-net-worth client transfers 50 Bitcoin to a family trust, gifts a Bored Ape Yacht Club NFT to their adult child, or moves USDC into a custodial account for a minor — the question that lands on the estate attorney's or CPA's desk is deceptively simple: *Is this a gift, and do we need to file Form 709?*

The answer, under IRC Chapter 12, is rarely simple. Digital assets present unique valuation challenges that conventional property — cash, securities, real estate — does not. The IRS has made clear that the gift tax applies to transfers of digital assets, and Form 709 now includes a specific digital asset question on Line 21. Yet most guidance available to practitioners addresses either gift tax in the abstract or crypto taxation on Form 8949 — leaving a critical gap when it comes to **Form 709 compliance for cryptocurrency and NFT transfers**.

This guide closes that gap. Written for estate planning attorneys, CPAs, trust officers, and high-net-worth individuals who hold significant digital assets, it provides the definitive framework for reporting digital asset gifts on Form 709 — including fair market value determination, annual exclusion mechanics, qualified appraisal considerations, and audit defense strategies grounded in USPAP methodology.

---

## Section 1: When a Digital Asset Transfer Constitutes a Gift — IRC Chapter 12 Fundamentals

### 1.1 The Statutory Framework

Under IRC §2501, a gift tax is imposed on the transfer of property by gift. IRC §2511(a) extends this tax to "any property, real or personal, tangible or intangible," regardless of where the property is situated. The IRS has explicitly confirmed that digital assets fall within this definition.

The 2025 Instructions for Form 709 state:

> *"The gift tax applies to transfers of digital assets. Digital assets are any digital representations of value that are recorded on a cryptographically secured distributed ledger or any similar technology. For example, digital assets include non-fungible tokens (NFTs) and virtual currencies, such as cryptocurrencies and stablecoins."*

This language, appearing in the "Transfers Subject to the Gift Tax" section of the official instructions, leaves no ambiguity: every transfer of a digital asset — whether cryptocurrency, NFT, stablecoin, or any other token recorded on a distributed ledger — is potentially subject to gift tax rules.

### 1.2 The Legal Standard for a Gift

A gift occurs under IRC §2511 when property is transferred for less than adequate and full consideration in money or money's worth. In the digital asset context, this means:

- **Outright transfers without consideration:** Sending cryptocurrency from your wallet to another person's wallet with no payment received is a gift of the full Fair Market Value (FMV).
- **Below-market sales:** Selling cryptocurrency to a family member below FMV is a gift of the difference between FMV and the amount received. For example, if you sell 1 BTC worth $65,000 to your child for $50,000, you have made a $15,000 gift.
- **Transfers to trusts:** Funding a trust with digital assets is a gift of the present value of the beneficiary's interest, subject to complex valuation rules under IRC §2702 for grantor retained annuity trusts (GRATs) and qualified personal residence trusts (QPRTs).
- **Relinquishment of power or control:** Giving someone else the private keys to a wallet, creating a joint account with rights of survivorship, or assigning beneficial interests in a digital asset holding company may constitute a completed gift even without a blockchain transfer.

### 1.3 What Is NOT a Gift

Not every digital asset movement is a taxable gift. The following transfers are excluded:

- **Transfers between wallets you own:** Moving cryptocurrency from one wallet to another wallet that you own or control is not a gift — it is a change of custody. The Form 709 instructions confirm this, stating that such transfers do not require reporting unless you paid a transaction fee with digital assets (which would be a disposition).
- **Qualified disclaimers:** If you disclaim an inheritance of digital assets within nine months under IRG §2518, the property passes as though you predeceased the decedent — no gift occurs.
- **Transfers to a spouse who is a U.S. citizen:** The unlimited marital deduction under IRC §2523 means gifts to a U.S. citizen spouse are not taxable. However, gifts to a non-citizen spouse are limited to a $190,000 annual exclusion (2025/2026).
- **Educational or medical payments:** Direct payments for tuition or medical expenses made on someone else's behalf are not gifts, regardless of amount (IRC §2503(e)). If you pay a university directly for your grandchild's tuition using cryptocurrency, the payment qualifies for this exclusion.
- **Ordinary business transactions:** Sales or exchanges made in the ordinary course of business are not gifts, provided they are bona fide, at arm's length, and free from donative intent.

---

## Section 2: The Annual Exclusion — How It Applies to Digital Asset Gifts

### 2.1 Current Limits

For 2025 and 2026, the annual gift tax exclusion is **$19,000 per donee per year** (per IRS guidance and the "What's New" section of the Form 709 instructions). Married couples can elect gift splitting under IRC §2513, effectively allowing them to give **$38,000 per donee per year** — $19,000 from each spouse — without filing a return.

| Year | Annual Exclusion (Single) | Annual Exclusion (Married, Split) | Annual Exclusion (Non-Citizen Spouse) |
|------|--------------------------|-----------------------------------|---------------------------------------|
| 2025 | $19,000 | $38,000 | $190,000 |
| 2026 | $19,000 | $38,000 | $190,000 |

*Source: IRS Form 709 Instructions (2025); IRS "What's New — Estate and Gift Tax" (2026)*

### 2.2 Present Interest Requirement

The annual exclusion applies only to **gifts of present interests** — the donee must have the immediate right to use, possess, or enjoy the property (IRC §2503(b)). This distinction is critical for digital asset gifts:

- **Direct wallet-to-wallet transfers:** A present interest. The donee has immediate access to the cryptocurrency.
- **Transfers to trusts:** Often future interests, unless the trust instrument grants the beneficiary an immediate right to withdraw (Crummey powers). A trust holding crypto that the beneficiary cannot access until age 30 is a future interest — Form 709 must be filed even if the amount is under $19,000.
- **Custodial transfers under UGMA/UTMA:** Present interests — the minor can access funds through a guardian, and the assets revert to the minor at the age of majority.
- **NFT transfers with smart contract restrictions:** If the NFT has vesting schedules, lock-up periods, or time-gated transfer restrictions, it may be a future interest.

### 2.3 Practical Application

Consider three scenarios:

**Scenario A:** A donor gives $10,000 in Ethereum to each of their three adult children. Each gift is under $19,000, each is a present interest. No Form 709 required.

**Scenario B:** A donor gives $25,000 in Bitcoin to one child. The gift exceeds $19,000. Form 709 must be filed reporting $6,000 in taxable gifts ($25,000 — $19,000 annual exclusion). However, no gift tax is due if the donor has remaining lifetime exemption.

**Scenario C:** A donor funds an irrevocable trust with $15,000 in Solana, naming their child as beneficiary with no right to withdraw until age 35. The $15,000 is a future interest — it does not qualify for the annual exclusion. Form 709 must be filed even though the amount is under $19,000.

---

## Section 3: Fair Market Value Determination for Digital Asset Gifts

### 3.1 The Statutory Standard

The gift tax is computed on the value of the property at the date of the gift (IRC §2512(a)). For digital assets, "value" means Fair Market Value — "the price at which the property would change hands between a willing buyer and a willing seller, neither being under any compulsion to buy or to sell and both having reasonable knowledge of relevant facts" (Treas. Reg. §25.2512-1).

For liquid, actively traded digital assets — major cryptocurrencies like Bitcoin and Ethereum traded on centralized exchanges — the IRS FAQ on virtual currency transactions provides that FMV may be determined using "a cryptocurrency or blockchain explorer that analyzes worldwide indices of a cryptocurrency at the date and time the transaction is recorded on the distributed ledger" or "any other reasonable means."

For illiquid digital assets — NFTs with unique traits, thinly traded altcoins, tokenized real estate, or assets subject to lock-up periods — determining FMV requires professional valuation methodology. This is where the tax practitioner's standard tools fall short and where a **Qualified Appraisal** under USPAP standards becomes essential.

### 3.2 Valuation Methods for Digital Assets

USPAP Standards 7 and 9 establish three approaches to value that apply to digital asset gift valuation:

**Market Approach (most common for liquid assets):**
The Market Approach determines FMV by analyzing comparable arm's-length transactions. For centralized exchange-traded cryptocurrencies, this means analyzing the weighted-average price or volume-weighted average price (VWAP) at the specific date and time of gift. For NFTs, it requires identifying and adjusting for comparable sales — accounting for trait rarity, collection performance, and market conditions at the exact date and time of the gift.

**Income Approach (applicable to yield-generating assets):**
For digital assets that generate income — staked ETH, DeFi liquidity pool tokens, or revenue-generating NFTs — the Income Approach discounts projected future cash flows to present value. This requires documentation of:
- Historical yield rates and protocol fees
- Validator performance data for staked assets
- Market-derived discount rates
- Lock-up or withdrawal restriction periods

**Cost Approach (limited applicability):**
The Cost Approach, which values an asset by what it would cost to recreate or replace it, has limited utility for most digital assets. It may apply to tokenized real-world assets (RWAs) or digital assets with verifiable creation costs.

### 3.3 The Date-and-Time Problem

Digital asset valuation differs fundamentally from securities valuation because cryptocurrency prices fluctuate by the minute, sometimes by the second. The IRS FAQ on virtual currency transactions (FAQ Q12) specifies that for on-chain transactions, the FMV is determined "at the date and time the transaction is recorded on the distributed ledger."

This creates a practical challenge: if a donor initiates a transfer at 10:00 AM but the transaction is not confirmed on the blockchain until 10:37 AM — and the price drops 3% in that interval — which timestamp controls?

The conservative approach is to use the blockchain confirmation timestamp, consistent with FAQ Q12. However, practitioners should document both the initiation time and the confirmation time in the gift documentation, with a reasoned justification for whichever timestamp is selected.

### 3.4 When a Qualified Appraisal Is Recommended for Gift Tax Purposes

Unlike charitable contributions of digital assets over $5,000 (which explicitly require a Qualified Appraisal under IRS Section 170(f)(11) and CCA 202302012), Form 709 does not require a formal appraisal to be attached. This is a common misconception.

**However, the absence of a filing requirement does not mean the absence of audit risk.** The IRS may challenge the reported value of any digital asset gift, and:

1. **Accuracy-related penalty (IRC §6662):** A 20% penalty applies to any portion of an underpayment attributable to a substantial valuation misstatement. For gift tax purposes, a "substantial valuation misstatement" exists when the reported value is 150% or less of the correct value (for charitable contributions, the threshold is 200%). A "gross valuation misstatement" — 40% penalty — applies when the reported value is 40% or less of the correct value.

2. **Burden of proof:** Unlike income tax audits, where the IRS generally bears the burden of proof for penalties, the donor bears the burden of establishing the reported value on a gift tax return.

3. **Statute of limitations:** Adequate disclosure on Form 709 (attaching a detailed appraisal) starts the three-year statute of limitations. Inadequate disclosure keeps the statute open indefinitely — meaning the IRS can challenge a 2026 gift valuation in 2036 or later.

For these reasons, QDAV recommends a **defensible valuation** — whether or not it rises to the level of a formal Qualified Appraisal — for any digital asset gift exceeding $19,000 (the annual exclusion threshold). For gifts of illiquid assets (NFTs, thinly traded tokens), a USPAP-compliant Qualified Appraisal is strongly recommended regardless of amount.

---

## Section 4: Completing Form 709 for Digital Asset Gifts

### 4.1 Line 21 — The Digital Asset Question

Form 709 now includes a digital asset question on Line 21, identical in substance to the Form 1040 digital asset question:

> *"At any time during the tax year, did you: (a) receive (as a reward, award or payment for property or services); or (b) sell, exchange, or otherwise dispose of a digital asset (or a financial interest in a digital asset)?"*

Donors who made gifts of digital assets must answer "Yes" to this question, even if the gift is fully covered by the annual exclusion and no tax is due.

### 4.2 Schedule A — Reporting the Gift

Digital asset gifts are reported on Schedule A of Form 709, Part 1 — Gifts Subject Only to Gift Tax. The following columns require careful attention:

**Column (b) — Donee's Name and Address:** Identify the recipient by name. For custodial accounts (UGMA/UTMA), identify the minor as donee. For trust beneficiaries, the IRS generally requires identification of the trust rather than individual beneficiaries.

**Column (c) — Description of Gift:** This is the most critical field for digital asset gifts. Provide:
- Asset type (e.g., "Bitcoin," "Ethereum," "Bored Ape Yacht Club #1234")
- Quantity (e.g., "5.0000 BTC")
- Wallet address (optional but recommended for audit trail)
- Blockchain (e.g., "Bitcoin network," "Ethereum mainnet")
- Any identifying characteristics (NFT collection, token ID)

**Column (e) — Donor's Adjusted Basis:** Report the donor's cost basis in the gifted digital asset. For purchased assets, this is the acquisition cost including fees. For mined or staked assets, this is the FMV at the time of receipt (reported as ordinary income). For gifted assets that are re-gifted, this is the carryover basis per IRS FAQ Q76.

**Column (f) — Date of Gift:** The date the gift was completed. For on-chain transfers, this is the blockchain confirmation date. For off-chain transfers (exchange-to-wallet), this is the date the donee gained dominion and control.

**Column (g) — Value at Date of Gift:** The FMV in U.S. dollars at the date and time of the gift, determined per the methodology in Section 3 above.

### 4.3 Adequate Disclosure and Supplemental Documents

To start the three-year statute of limitations, Form 709 must provide "adequate disclosure" under Treas. Reg. §301.6501(c)-1(f)(2). For digital asset gifts, adequate disclosure requires:

1. A complete description of the digital asset, including type, quantity, and identifying characteristics
2. The FMV as determined by a qualified appraisal or other competent professional valuation
3. The methodology used to determine value (including exchange rates, index sources, and adjustments for illiquidity)
4. For hard-to-value assets (NFTs, privately offered tokens), a copy of the appraisal report

Practitioners should note that for gifts of "hard-to-value" digital assets, attaching a USPAP Compliant appraisal report substantially strengthens the adequate disclosure position and reduces the risk of the IRS challenging the valuation years after the filing.

---

## Section 5: The Lifetime Exemption and Digital Asset Tax Planning

### 5.1 Current Exemption Amounts

The unified credit against gift and estate tax (IRC §2010) shields a cumulative lifetime total of gifts and bequests from tax. For 2025, the basic exclusion amount is $13,990,000. For 2026, it rises to $15,000,000 under the TCJA sunset adjustment for inflation.

| Year | Basic Exclusion Amount | Equivalent Credit |
|------|----------------------|-------------------|
| 2025 | $13,990,000 | $5,541,800 |
| 2026 | $15,000,000 | $5,941,800 |

*Source: IRS "What's New — Estate and Gift Tax" (2026)*

### 5.2 Strategic Implications for Digital Asset Donors

The interaction between the annual exclusion, lifetime exemption, and digital asset appreciation creates unique planning opportunities:

**Annual gifting programs:** A donor who transfers $19,000 in cryptocurrency each year to multiple donees can move significant wealth without eroding the lifetime exemption. If the cryptocurrency appreciates after the gift, the appreciation occurs outside the donor's estate.

**Gift splitting for married couples:** Married donors in community property states (or those who elect gift splitting) can transfer $38,000 per donee per year in digital assets without filing. For a couple with three children and six grandchildren, this means $342,000 per year in tax-free digital asset transfers.

**Lifetime exemption utilization:** For donors whose digital assets have appreciated substantially (e.g., early Bitcoin adopters with cost bases near zero), using the lifetime exemption to shelter large gifts is often optimal. A gift of 100 BTC valued at $6.5 million uses approximately 43% of the 2026 lifetime exemption — but removes all future appreciation from the donor's estate.

**GRATs for volatile digital assets:** Grantor Retained Annuity Trusts (GRATs) funded with digital assets capitalize on the volatility inherent in cryptocurrency markets. If the assets appreciate significantly beyond the IRC §7520 rate, the excess passes to beneficiaries gift-tax-free.

### 5.3 The Portability Election

For married donors, the portability election under IRC §2010(c)(5)(A) allows the surviving spouse to use the deceased spouse's unused exclusion amount (DSUE). This is particularly relevant for digital asset holders because:

- A donor who uses lifetime exemption to shelter digital asset gifts preserves the ability to transfer unused exclusion to a surviving spouse
- The DSUE amount is adjusted for inflation, so early utilization of exemption for digital asset gifts does not permanently reduce the family's total transfer tax shield

---

## Section 6: Basis and Holding Period for Gifted Digital Assets

### 6.1 Carryover Basis Rules

IRS FAQ Q75 (added December 15, 2025) confirms that receiving digital assets as a bona fide gift does not trigger income recognition for the donee. FAQ Q76 establishes the basis rules:

> *"For purposes of determining whether you have a loss, your basis is equal to the lesser of the donor's basis or the fair market value of the digital assets at the date and time you received the gift."*

The dual-basis rule for gifted property applies to digital assets:

| Scenario | Donee's Basis for Gain | Donee's Basis for Loss |
|----------|----------------------|----------------------|
| FMV at gift > Donor's basis (gain position) | Donor's basis (carryover) | Donor's basis (carryover) |
| FMV at gift < Donor's basis (loss position) | Donor's basis (carryover) | FMV at date of gift |

**Example:** Alice purchased 1 BTC for $20,000. She gives it to Bob when the FMV is $65,000. Bob later sells when the price is $80,000. Bob's basis for gain is $20,000 (Alice's carryover basis). Bob recognizes a $60,000 long-term capital gain.

**Example 2:** Alice purchased 1 BTC for $100,000. She gives it to Bob when the FMV has fallen to $45,000. Bob later sells when the price is $40,000. Bob's basis for loss is $45,000 (the lower of donor's basis or FMV at gift). Bob recognizes a $5,000 capital loss. He cannot claim the additional loss that accrued during Alice's holding period.

### 6.2 Holding Period

FAQ Q77 addresses the holding period for gifted digital assets — the donee's holding period includes (tacks on to) the donor's holding period for purposes of determining long-term vs. short-term capital gain. This is consistent with IRC §1223(2).

**Practical implication:** If a donor held Bitcoin for three years before gifting it, the donee's holding period includes those three years. If the donee sells the following day, the gain is long-term. This makes digital asset gifts particularly attractive for tax planning — the donor removes future appreciation from their estate, and the donee inherits the favorable long-term holding period.

---

## Section 7: International Considerations

### 7.1 Digital Asset Gifts to Non-U.S. Persons

The gift tax treatment of digital asset gifts to non-U.S. persons depends on the situs of the asset. Under IRC §2511, gifts of intangible property by a U.S. person to a non-U.S. person are generally subject to gift tax. The IRS has not issued specific guidance on whether a digital asset recorded on a blockchain is "intangible property" for situs purposes, but the prevailing view among tax practitioners is that cryptocurrency and NFTs are intangible property for gift tax purposes.

### 7.2 FBAR and FATCA Considerations

A donee who receives digital assets as a gift may have foreign account reporting obligations if the assets are held on a foreign exchange or in a self-custody wallet that does not meet the definition of a "financial account" for FBAR purposes. The Financial Crimes Enforcement Network (FinCEN) has issued guidance (FinCEN Notice 2020-2) clarifying that virtual currency held in a foreign financial account may be reportable on the FBAR.

For the donor, any gift from a non-U.S. person — including a gift of digital assets — exceeding $100,000 in a single year is reportable on Form 3520 (Annual Return to Report Transactions with Foreign Trusts and Receipt of Certain Foreign Gifts).

---

## Section 8: Penalties and Audit Defense

### 8.1 Failure to File Form 709

The penalty for failing to file Form 709 is 5% of the tax due per month (or portion thereof), up to a maximum of 25% (IRC §6651). However, because most donors whose gifts are within the lifetime exemption owe no tax — the credit offsets the tax — the penalty for simple late filing may be zero.

This does not mean the consequences are benign. The IRS may:

- Assert accuracy-related penalties for valuation understatements
- Keep the return open indefinitely (no statute of limitations without adequate disclosure)
- Assert gift tax deficiency if the cumulative lifetime gifts exceed the exemption amount in the year of the donor's death
- Impose civil fraud penalties (75% of underpayment) for intentional concealment of digital asset gifts

### 8.2 Valuation Misstatement Penalties

IRC §6662 imposes a 20% accuracy-related penalty for:

- **Substantial valuation misstatement:** The reported value is 65% or less of the correct value (150% or greater overstatement for charitable contributions)
- **Gross valuation misstatement:** The reported value is 40% or less of the correct value

For digital asset gifts, the risk of valuation misstatement is elevated because:
- The date-and-time problem creates inherent valuation uncertainty
- NFT pricing is volatile and comparables may be scarce
- Taxpayers may rely on exchange-reported "values" that do not reflect actual FMV in the gift context

### 8.3 Audit Defense Documentation

A defensible Form 709 filing for digital asset gifts should include the following documentation:

1. **Blockchain transaction record:** Block explorer confirmation showing the transaction hash, block number, confirmation timestamp, sending and receiving addresses, and transaction fee
2. **FMV determination worksheet:** Source data (exchange price feed, index value), timestamp used, methodology employed (VWAP, last-trade, bid-ask midpoint), and any adjustments for illiquidity or block discounts
3. **Qualified Appraisal (recommended for gifts > $19,000 or for illiquid assets):** A USPAP-compliant appraisal report prepared by a qualified appraiser who meets the IRS definition under IRC §170(f)(11)(E)(ii)
4. **Gift documentation letter:** Signed statement from donor describing the gift, the relationship to the donee, and any consideration exchanged

---

## Section 9: The Role of the Qualified Appraiser in Gift Tax Compliance

### 9.1 When a Qualified Appraisal Is Required vs. Recommended

| Scenario | Appraisal Requirement | Recommendation |
|----------|---------------------|----------------|
| Charitable donation of digital assets > $5,000 | **Required** (IRC §170(f)(11)) | Mandatory |
| Gift of liquid crypto under $19,000 | Not required | Optional — keep exchange records |
| Gift of liquid crypto > $19,000 | Not required for filing | **Recommended** for audit defense |
| Gift of illiquid digital asset (NFT, thinly traded token) | Not required for filing | **Strongly recommended** regardless of amount |
| Gift funding a trust | Not required for filing | **Strongly recommended** if the gift exceeds annual exclusion |
| Gift splitting election documentation | Not required | Recommended for estate planning documentation |

### 9.2 What a Qualified Appraiser Provides

A Qualified Appraisal prepared in accordance with USPAP Standards 7 (Personal Property Appraisal) and 9 (Appraisal Consulting) provides:

1. **Defensible FMV determination:** A reasoned, documented value supported by market data, not a price-screen snapshot
2. **Scope of work documentation:** A written explanation of the valuation methodology, assumptions, and limiting conditions
3. **Appraiser certification:** A signed certification meeting the requirements of USPAP Standards Rule 2-3 and IRC §170(f)(11)(E)(ii)
4. **Audit-ready documentation:** A report that satisfies the IRS's documentation standards for adequate disclosure and withstands professional peer review

### 9.3 Qualified Appraiser Qualifications

To be a "qualified appraiser" for IRS purposes, the appraiser must (IRC §170(f)(11)(E)(ii)):

- Have earned an appraisal designation from a recognized professional appraiser organization or have otherwise met minimum education and experience requirements
- Regularly perform appraisals and receive compensation for such work
- Be unrelated to the donor, donee, and transaction (no conflicts of interest)
- Not be the donor, the donee, or a party to the transaction
- Meet any additional requirements prescribed by the Secretary

QDAV (Qualified Digital Asset Valuations) meets these qualifications, holding USPAP certification and specializing exclusively in digital asset valuation for tax, estate, and audit defense purposes.

---

## Section 10: Common Pitfalls and How to Avoid Them

### 10.1 Assuming Exchange Reports Suffice

A Coinbase transaction history showing a $30,000 transfer is not a Form 709 filing. Practitioners frequently mistake exchange-generated PDFs for gift tax compliance. The exchange report establishes the transaction occurred — it does not establish the value for gift tax purposes, does not elect the annual exclusion, and does not start the statute of limitations.

**Solution:** Complete Schedule A of Form 709 with a full description of the digital asset, the FMV determination methodology, and supporting documentation for adequate disclosure.

### 10.2 Misapplying the Annual Exclusion to Future Interests

The most common error in digital asset gift tax reporting is assuming the annual exclusion applies automatically. Any gift to a trust — no matter how small — requires Form 709 if the beneficiary does not have a present interest. Crummey powers must be properly documented and communicated to the beneficiary.

**Solution:** Analyze each gift's character (present vs. future interest) independently. When gifting to trusts, ensure the trust instrument includes Crummey withdrawal rights and that the trustee sends annual Crummey notices confirming the beneficiary's right to withdraw.

### 10.3 Ignoring the Date-and-Time Problem

Using the daily close price for a Bitcoin gift made at 9:47 AM EST produces an incorrect valuation. The IRS's FAQ Q12 and Q12 reference the transaction-specific timestamp.

**Solution:** Use the block confirmation timestamp for on-chain gifts; document the specific time and source data used for off-chain transfers. For significant gifts, commission a USPAP-compliant appraisal that addresses the temporal valuation question.

### 10.4 Forgetting the Digital Asset Question on Line 21

Even practitioners who meticulously complete Schedule A sometimes overlook Line 21. An otherwise accurate Form 709 with a "No" answer to the digital asset question is factually incorrect and may trigger IRS scrutiny.

**Solution:** Always review Line 21 when completing Form 709. If the donor made any digital asset transaction — including gifts — answer "Yes."

### 10.5 Inadequate Basis Documentation

The dual-basis rule means that a donee receiving gifted cryptocurrency needs the donor's cost basis to compute future gain. Many donors fail to document their basis, leaving the donee with no usable cost basis and a potential tax burden on the full sale proceeds.

**Solution:** Alongside the gift documentation, provide the donee with a written basis statement documenting the donor's acquisition cost, dates, and the FMV on the date of gift.

---

## Conclusion

The gift tax treatment of digital asset transfers is no longer an edge case or an area of regulatory uncertainty. The IRS has made its position explicit: digital assets are property subject to IRC Chapter 12, Form 709 must reflect digital asset gifts, and the annual exclusion and lifetime exemption apply in generally the same way they apply to any other property.

What remains unique — and uniquely challenging — is the valuation component. Cryptocurrency prices fluctuate by the minute. NFT values depend on trait rarity, collection performance, and market sentiment in ways that traditional appraisal methodologies are still adapting to address. The date-and-time problem has no analogue in securities or real estate valuation.

For estate attorneys and CPAs advising clients with significant digital asset holdings, the path forward is clear: treat digital asset gifts with the same rigor as any other substantial property transfer. Document the FMV at the date and time of gift using sound methodology. Maintain a complete audit trail including blockchain records, valuation worksheets, and basis documentation. When the gift involves illiquid assets or exceeds the annual exclusion, engage a qualified appraiser who specializes in digital asset valuation.

The gift that goes unreported — or the gift whose value is documented by a smartphone screenshot of a Coinbase portfolio — is an invitation to an IRS examination. The gift that is documented with USPAP-compliant methodology, timely filed Form 709, and defensible data is a transfer of wealth that withstands scrutiny.

QDAV (Qualified Digital Asset Valuations) provides USPAP Compliant qualified appraisals for digital asset gifts, trust funding, estate planning, and audit defense. Contact us at (248) 955-1491 or visit https://qdav.mba to schedule a consultation.

---

*This article is for informational purposes only and does not constitute legal or tax advice. Consult a qualified tax professional for guidance specific to your situation.*
