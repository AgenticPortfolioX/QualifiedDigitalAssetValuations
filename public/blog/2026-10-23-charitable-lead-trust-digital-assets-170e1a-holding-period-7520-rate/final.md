---
title: "Charitable Lead Trusts and Digital Assets: Why the Section 170(e)(1)(A) Basis Limitation Does Not Reach a Charitable Lead Interest, Where the One-Year Holding Period Still Bites, and How Section 7520 Makes the Appraisal the Whole Deduction"
date: "2026-10-23"
description: "The short-term basis cap in Section 170(e)(1)(A) governs an outright crypto gift and does not govern a charitable lead trust, because Treasury excludes an interest allowed under Section 170(f)(2)(B) from ordinary income property. What sets the number instead is the Section 7520 rate applied to a fair market value someone has to establish and defend."
category: "QDAV"
author: "QDAV"
---
# Charitable Lead Trusts and Digital Assets: Why the Section 170(e)(1)(A) Basis Limitation Does Not Reach a Charitable Lead Interest, Where the One-Year Holding Period Still Bites, and How Section 7520 Makes the Appraisal the Whole Deduction
*Published: October 23, 2026 | By QDAV*
---
A charitable lead trust funded with digital assets executes two transfers inside a single instrument. The charity takes an income interest for a term of years. The family takes what remains. Both interests are valued on the same day, by different machinery, and only one of them is a charitable contribution subject to IRS Section 170.

Most commentary on crypto and charitable giving stops at one fork in the road: property held more than one year is deductible at fair market value, property held a year or less is deductible at basis. That fork is real and correctly stated. In a lead trust, it is also largely beside the point.

The reason is a single sentence of regulation that most planning memos never quote. Working through it changes which asset goes into the trust, which month gets elected, and what the appraiser is asked to do.

## What a Charitable Lead Trust Transfers, and What It Does Not

A charitable lead trust is the mirror image of a charitable remainder trust. The charity takes the lead. The family takes the remainder. The donor parts with the entire asset, and what the donor has given away is not a fraction of a coin but two separate interests in a trust.

Two structural choices determine almost everything downstream. The first is annuity versus unitrust. A charitable lead annuity trust pays the charity a fixed dollar amount each year. A charitable lead unitrust pays a fixed percentage of the trust's value, redetermined annually. These are not stylistic variants: a CLAT obligates the trustee to a dollar figure that does not move with the market, while a CLUT's obligation floats and requires annual valuation to compute.

The second is grantor versus non-grantor. In a grantor CLT the grantor is treated as owner of the trust for income tax purposes under §§671 through 679. In a non-grantor CLT the trust is a separate taxpayer.

| Structure | Charity receives | Donor income tax deduction | Corpus revalued annually? |
|---|---|---|---|
| Grantor CLAT | Fixed dollar annuity for the term | Yes — Section 7520 present value | No |
| Grantor CLUT | Fixed percentage of value annually | Yes — Section 7520 present value | Yes |
| Non-grantor CLAT | Fixed dollar annuity for the term | No — trust deducts under Section 642(c) | No |
| Non-grantor CLUT | Fixed percentage of value annually | No — trust deducts under Section 642(c) | Yes |

The deductibility condition sits in Section 170(f)(2)(B). No deduction is allowed for the value of an interest in property transferred in trust unless the interest is a guaranteed annuity or the instrument specifies a fixed percentage distributed yearly of the fair market value of the trust property. A "charitable lead trust" drafted to pay the charity whatever net income the trust happens to earn is not a qualified lead interest, and the donor gets nothing under Section 170 for it. The label does not control. The payment formula does.

For a grantor CLT, the deduction is the present value of the charity's lead interest, and it carries a recapture rule: if the grantor ceases to be treated as owner during the term, the earlier deduction is recovered. Rev. Proc. 2007-45 addresses the sample forms and the conditions under which a charitable lead annuity interest is deductible. For a non-grantor CLT the donor takes no Section 170 deduction at all; the trust instead deducts amounts paid to charity from gross income under Section 642(c), and that deduction is bounded by the trust's gross income. A year in which a volatile corpus produces no income but the annuity is still owed from principal is a year in which the Section 642(c) deduction is small or absent.

## Section 170(e)(1)(A): The Rule, and Why It Does Not Reach a Lead Interest

Start with the statute as written, because the shorthand misleads.

Section 170(e)(1)(A) does not say that short-term property is deductible at basis. It says the contribution "shall be reduced by ... the amount of gain which would not have been long-term capital gain ... if the property contributed had been sold by the taxpayer at its fair market value." The reduction is measured by the built-in ordinary or short-term gain, computed as though the donor had sold at fair market value on the contribution date. For a token bought low and contributed high inside twelve months, the reduction consumes the whole spread and the deduction lands on basis. For a token with a modest short-term gain, the reduction is correspondingly modest.

Note what Section 170(e)(1)(B) is not. That subsection addresses unrelated-use tangible personal property, gifts to or for the use of a private foundation, and patents, copyrights, and similar property. Form 8283's own instructions cite "section 170(e)(1)(B)(iii)" specifically for intellectual property. The short-term and ordinary income reduction lives in subparagraph (A).

Now the part that rarely gets stated. A lead trust does not contribute the token. It contributes an income interest in a trust holding the token. And §1.170A-4(b)(1) defines ordinary income property in a way that expressly excludes that interest:

> "The term does not include an income interest in respect of which a deduction is allowed under section 170(f)(2)(B) and paragraph (c) of §1.170A-6."

The regulation's scope provision points the same way. Section 1.170A-4(a) applies Section 170(e)(1) to a contribution of an interest "described in paragraph (b) of §1.170A-6, or paragraph (b) of §1.170A-7" — remainder interests and undivided partial interests. It does not reach paragraph (c) of §1.170A-6, where guaranteed annuity and unitrust interests are defined.

| Vehicle | Interest contributed | Reduction applies? | What fixes the number |
|---|---|---|---|
| Outright gift, tokens held one year or less | The tokens | Yes — reduced by short-term gain | Lesser of fair market value or basis |
| Charitable remainder trust, same tokens | Remainder interest, Section 1.170A-6(b) | Yes — basis allocated under 1.170A-4(c) | Fair market value of the remainder, then reduced |
| Charitable lead trust, same tokens | Annuity or unitrust interest, Section 1.170A-6(c) | No — excluded by 1.170A-4(b)(1) | Section 7520 present value, on fair market value |

Read the third row carefully, because it inverts the usual planning advice. The reason to wait out the holding period before an outright gift — that the deduction is capped at basis until the gain goes long-term — is not the reason to wait before funding a lead trust. In a lead trust the deduction is the present value of the charity's interest, computed on fair market value from the first day.

That is not a loophole, and it is not free. The grantor of a grantor CLT pays tax on the trust's income for the entire term, including gain that would have been recognized on a sale. The deduction covers only a fraction of the property, because the charity takes only a fraction. What the structure buys is timing and a shift of the remainder, not an exemption.

Two cautions. The carve-out is textual and must be applied to a specific instrument, not assumed from a summary; §1.170A-4(c) exists precisely because partial-interest gifts require basis to be allocated between contributed and retained portions, and the exclusion's scope is a question for counsel on the facts. Second, the exclusion governs only the income tax deduction. It does not govern the gift tax valuation of the remainder, nor the estate tax charitable deduction under Section 2055(e)(2)(B) or the gift tax charitable deduction under Section 2522(c)(2)(B). Those turn on the Section 7520 computation.

## Where the One-Year Holding Period Still Bites

If the basis limitation does not reach a lead interest, why does anyone still need the acquisition date? Four reasons, each a place where a missing record becomes a real number.

The first is trust-level recognition. In a non-grantor CLT the trust is a separate taxpayer. When the trustee sells tokens to raise cash for the annuity, the trust recognizes gain, and short-term gain is taxed at ordinary rates while long-term gain is not. A trustee who sells a position eleven months after receipt because the annuity is due has converted a capital gain into ordinary income for no reason other than a calendar.

The second is in-kind satisfaction of the annuity. A CLAT obligates the trustee to a dollar amount, not a coin amount. If the trustee satisfies that obligation by distributing tokens to the charity rather than selling them, the distribution is a disposition for trust-level gain purposes in a non-grantor trust.

The third is the grantor's own return. In a grantor CLT the grantor reports trust income, and short-term gain flows through at ordinary rates. The deduction may have escaped the basis cap, but the appreciation does not escape taxation; it arrives later and in a different character.

The fourth is the remainder's economics. A CLAT's annuity is a fixed dollar obligation. If the corpus falls sharply, the trustee must still pay it, and the family's remainder absorbs the shortfall. A donor who funds a fixed annuity with a volatile position has taken a directional bet the instrument does not hedge for them.

The holding-period facts are where digital assets diverge from securities. A broker's records establish an acquisition date for stock. For tokens, that date may be distributed across a custodial exchange, a self-custody wallet, and a DeFi position, each recording a different event. Four recurring problems:

- **Airdrops and forks.** Tokens received without payment generally take a basis equal to fair market value at receipt, and the holding period ordinarily begins at receipt. Such a position is short-term for a year by construction, and the receipt date is the date the donor could first control it.
- **Wallet first-seen dates.** The date a wallet first shows a balance is often mistaken for the acquisition date. It is the date of a transfer between wallets the donor already controlled, which has no effect on the holding period.
- **Carryover basis transactions.** Where basis carries over, Section 1223(1) tacks the prior holder's holding period onto the new holder. A token received in a same-basis exchange is not a new acquisition.
- **DeFi receipts.** A receipt token issued against a deposited position may or may not be a separate asset with its own holding period. The answer depends on the instrument, and the analysis has to be performed rather than assumed.

An appraiser can value what exists. An appraiser cannot rehabilitate an acquisition date that was never recorded. Where the record does not establish the date, the conservative position treats the position as short-term, and the engagement should say so plainly rather than produce a report that quietly assumes otherwise.

## Section 7520: The Rate Is the Deduction

Because the deduction for a grantor CLT is the present value of the charity's lead interest, the discount rate used to compute that present value is not an assumption buried in a spreadsheet. It is the deduction.

Section 7520(a) sets the rate at 120 percent of the applicable federal midterm rate for the month, rounded to the nearest two-tenths of one percent. For October 2026 that rate is 5.6 percent, published in Rev. Rul. 2026-19.

| Valuation month | Section 7520 rate | Revenue ruling |
|---|---|---|
| January 2026 | 4.6% | Rev. Rul. 2026-2 |
| March 2026 | 4.8% | Rev. Rul. 2026-6 |
| May 2026 | 5.0% | Rev. Rul. 2026-9 |
| July 2026 | 5.2% | Rev. Rul. 2026-12 |
| September 2026 | 5.4% | Rev. Rul. 2026-17 |
| October 2026 | 5.6% | Rev. Rul. 2026-19 |

The direction of the effect is where most commentary goes quiet. The charity's interest in a CLAT is a stream of fixed dollars, and the present value of a fixed stream falls as the discount rate rises. A rising rate therefore produces a smaller charitable deduction for a grantor CLAT, a smaller taxable gift of the remainder, and a larger annuity required to zero the gift out.

That last point changes decisions. A zeroed-out CLAT is calibrated so the present value of the annuity equals the value of the property transferred. At 4.6 percent a given annuity discounts to a larger present value; at 5.6 percent the same annuity discounts to a smaller one, so the annuity must increase to reach the same starting value. Higher rates make zero-out structures harder to run and make the family's remainder more sensitive to trust performance, because more of the corpus is committed to a fixed obligation.

The practical reading of 2026 is that the environment moved against CLATs through the year, from 4.6 percent in January to 5.6 percent in October. Both effects ran the same way: deduction down, zero-out harder.

A CLUT behaves differently. For a term-of-years unitrust the remainder factor is a function of the payout rate and the term, not the discount rate; the Section 7520 rate enters only through the adjustment for payment timing. A CLUT is therefore far less rate-sensitive than a CLAT and correspondingly more dependent on getting the corpus valuation right.

The election in Section 7520(a) allows the rate for either of the two months preceding the month in which the valuation date falls. An October 2026 funding can use October's 5.6 percent, September's 5.4 percent, or August's 5.2 percent. On a ten-year annuity of any size, that spread is not rounding. The election is made with the return, and the actuarial factors applied must correspond to the month elected.

## Three Dates, One Number: The Alignment Problem

A lead trust gift involves three dates, and the most common technical failure in these engagements is letting them drift apart.

The first is the contribution date. It fixes the holding period, fixes the moment at which fair market value is determined, and for gift tax purposes is the valuation date. For crypto it is also a factual question that has to be pinned down: a transfer to a trustee is complete when the trustee can exercise dominion and control, which for an on-chain transfer is the point at which it is irrevocable, and for an exchange transfer is typically the point at which the exchange debits the account. That date should be documented when it happens, not reconstructed a year later from a block explorer.

The second is the Section 7520 valuation date, which for a gift is the same day. The election changes the rate, not the date.

The third is the appraisal's date of value. Under USPAP a report states the date as of which the opinion applies. For a gift appraisal that date has to be the contribution date. A report whose date of value does not match the transfer date is not a small defect; it is an opinion about a different moment in a market that does not stand still.

| Date | What it fixes | Who controls it |
|---|---|---|
| Contribution date | Holding period, fair market value, gift tax valuation date | The transaction record |
| Section 7520 valuation date | Month whose rate applies, subject to the two-month election | Counsel's election |
| Appraisal date of value | The moment the opinion speaks to | The appraiser |

The trap is that the election feels like it moves the valuation date. It does not. Electing September's 5.4 percent rate for an October funding changes the discount applied to the annuity. It does not move the token's price from October back to September. A file in which the actuarial computation uses a prior-month rate while the appraisal uses a prior-month price has misaligned the two halves of the deduction, and the arithmetic will not reveal the error, because both halves look internally consistent.

Digital assets add a wrinkle securities do not have. A token trades continuously, so "the closing price" is a convention rather than a fact. Every report has to state the convention: the exchange, the observation time, and whether the figure is a closing price, a volume-weighted average, or the midpoint of the day's high and low. The accounting literature accepts the median or average of the high and low on the contribution date, or the exchange's closing price, and accepts another fair and reasonable method where the asset is not listed on a United States exchange. A convention is defensible when it is declared and applied consistently, and indefensible when chosen after the fact to produce a number.

Time zones deserve their own line. A transfer executed at 11:40 p.m. Eastern on October 22 is dated October 23 in coordinated universal time. If counsel computes the actuarial factor for October while the appraiser samples the October 22 close, the two figures describe different days. For a position that moved six percent in a session, that is a real number. The fix is procedural and cheap: agree the date, the time zone, and the observation window before the engagement begins, and put all three in writing.

## The CLUT Problem: An Appraisal Every Year of the Term

A charitable lead unitrust pays the charity a fixed percentage of the trust's value, redetermined annually. That single feature converts a one-time valuation into a recurring obligation.

Consider a ten-year CLUT paying six percent, funded with Bitcoin, Ether, and a mid-capability token with thin secondary liquidity. Each year the trustee must determine the trust's net fair market value in order to compute the unitrust amount. Each year, therefore, the trustee needs a defensible valuation of assets that may include a position for which no reliable closing price exists at all.

That valuation is not administrative bookkeeping. It determines three things at once: what the charity is paid, what the trust deducts under Section 642(c), and what remains for the family at the end of the term. An understated valuation underpays the charity and overstates the remainder. An overstated valuation does the reverse. Neither error is self-correcting, and both compound.

The contrast with a CLAT is stark, and it is why the choice between the two is a valuation decision as much as a drafting decision. A CLAT's annuity is fixed in dollars at funding, so one appraisal establishes the number the instrument then carries for the whole term. A CLUT's payment floats, so the appraisal never stops.

The budgeting consequence usually goes unstated: a ten-year CLUT funded with digital assets is an eleven-appraisal engagement, not a one-appraisal engagement, and the recurring appraisals are the ones most likely to be skipped because no deadline forces them. The year a trustee skips the revaluation is the year the file stops being able to explain itself.

Because the unitrust amount is a percentage rather than a dollar figure, a CLUT tolerates volatility far better than a CLAT: a drawdown reduces the charity's payment rather than depleting principal to meet a fixed obligation. But a CLUT's valuation work scales with the number of distinct positions, not the number of coins. A corpus of forty tokens with three illiquid names takes materially more work per year than a corpus of two.

## What a Qualified Appraisal of Digital Assets Must Contain

Under Section 170(f)(11)(C), a qualified appraisal is required for a contribution of property other than cash or publicly traded securities when the claimed deduction exceeds $5,000. Digital assets do not receive the publicly traded securities exception. Exchange-quoted coins are still property valued by reference to a market the IRS does not treat as an established securities market for this purpose, and the practitioner consensus is uniformly that the prudential course is to treat crypto as non-publicly-traded and obtain the appraisal.

The reporting instrument reflects this. Form 8283, Section B, Line 2 now lists digital assets as a named property category, alongside art, collectibles, other real estate, securities, and vehicles. A contribution of tokens above the threshold belongs in Section B with a qualified appraisal attached to the return, not in Section A.

The contents of a qualified appraisal are enumerated in Section 1.170A-17(a): the appraiser's qualifications, the date of the appraisal and the date of the contribution, a description of the property and its condition, the terms of any agreement affecting it, the appraised fair market value, the methodology used, the specific basis for the valuation, and a statement that the appraisal was prepared for income tax purposes. The timing window is not elastic: the appraisal must be dated no earlier than sixty days before the contribution and no later than the due date of the return, including extensions, under Section 1.170A-17(a)(4).

A qualified appraiser, under Section 170(f)(11)(E)(ii), holds out as an appraiser, performs appraisals regularly, and meets the education and experience requirements for the assignment. The declaration on Form 8283, Section B, Part III is signed by the appraiser, and the signer is representing compliance, not merely attaching a report.

For a lead trust engagement, six things have to be established that an ordinary donation appraisal does not reach.

| Element | Why it matters in a lead trust engagement |
|---|---|
| Fair market value at the contribution date | The base on which the Section 7520 present value is computed, with no basis floor underneath |
| The unit of account | Per coin, per lot, or per wallet position; the allocation and the actuarial computation both need it |
| Holding period evidence | Determines trust-level character on sale and on in-kind annuity satisfaction |
| Adjusted basis | Needed for any allocation if a portion of the gift is analyzed as an interest in ordinary income property |
| Liquidity and market depth | A thin position cannot be valued at a quoted price without an adjustment, and the reasoning must show |
| The valuation convention | Exchange, observation time, and price type, stated so the figure can be reproduced |

The engagement should be structured so the appraiser knows three things before work begins: which month's Section 7520 rate counsel intends to elect, the exact contribution date and time zone, and whether any portion of the gift is expected to be analyzed as a remainder interest rather than a lead interest. Those three facts change the scope, and a scope agreed after the report is written is a scope that will not survive examination.

USPAP Standards 9 and 10 govern the assignment as a business or intangible asset appraisal. A USPAP Compliant report establishes a defined problem, an identified scope of work, and a reasoned reconciliation of approaches; it is not a price printout with a signature attached. A Qualified Appraisal that reads like a screenshot with commentary is the most common defect we see in files assembled without professional involvement.

## Penalty Exposure When the Number Is Wrong

Three provisions make a bad number expensive.

Section 6662(e) imposes an accuracy-related penalty on a substantial valuation misstatement, which for charitable deduction property is a claimed value of 150 percent or more of the correct value; Section 6662(h) raises the penalty to 40 percent where the misstatement is gross, at 200 percent or more. Section 6695A separately penalizes the person who prepared the appraisal, in an amount equal to the greater of $1,000 or 10 percent of the underpayment attributable to the misstatement, subject to a reasonable cause exception.

The most consequential provision is Section 6664(c)(3). For charitable deduction property the reasonable cause defense is unavailable unless the taxpayer obtained a qualified appraisal prepared by a qualified appraiser who was not a disqualified person, and the taxpayer acted in good faith. In ordinary valuation disputes a taxpayer can argue reasonable cause on the facts. Here the statute conditions the defense on the document. Without a qualified appraisal there is no defense to argue — which means a weak appraisal is worse than none in one specific respect: it satisfies the form of the requirement while failing its substance, and it is the exhibit the taxpayer will point to when asked why the number was what it was.

Separately, Section 170(f)(8) requires a contemporaneous written acknowledgment from the donee for any contribution of $250 or more. For a lead trust the acknowledgment obligation attaches to the contribution to the trust, not only to the charity's annuity receipts, and it must describe the property and state whether any goods or services were provided.

The cumulative picture is that the appraisal does two jobs at once: it establishes the deduction, and it is the only route to the penalty defense. In a lead trust funded with digital assets — where the deduction rests wholly on fair market value with no basis limitation underneath it — those two jobs collapse into one document.

## What Counsel and the Appraiser Owe Each Other

The engagements that go smoothly share a division of labor. Counsel owns the instrument, the Section 7520 election, the actuarial computation, and the characterization of the interests. The appraiser owns the value: the opinion of fair market value as of a stated date, the methodology, the market evidence, and the reasoning that connects them. Neither can do the other's work, and the file fails when one tries.

What the appraiser needs before work begins: the exact contribution date and the time zone governing it; the Section 7520 month counsel intends to elect; a copy of the instrument showing the payment formula and term; confirmation of grantor or non-grantor status; and the holding-period and basis records as the client has them, including wallet and exchange exports.

What counsel needs back: a report whose date of value matches the contribution date exactly; a stated valuation convention identifying the exchange, time, and price type; an explicit treatment of any illiquid position with the reasoning for any adjustment; a clear statement of what the appraiser did not verify, particularly where acquisition evidence was incomplete; and a signature on the Form 8283 declaration the appraiser is prepared to stand behind.

The last item matters most and is most often treated as a formality. That declaration is a representation about the quality of the work, made to the IRS, by a professional who will be asked to explain it. Defensible Data is not a slogan here; it is the specific property of a report that someone else can reproduce from the sources it cites. Most of the lead trust engagements we handle originate with estate counsel in Wayne, Oakland, and Genesee counties, and the sequence above is what keeps them from stalling at the appraiser's door.

## Frequently Asked Questions

### Does the short-term capital gain rule apply to a charitable lead trust?

Ordinarily no, and the reason is textual. Section 170(e)(1)(A) reduces a contribution of property whose sale would produce gain that is not long-term. But a lead trust contributes an income interest, not the underlying token, and Section 1.170A-4(b)(1) provides that ordinary income property does not include an income interest for which a deduction is allowed under Section 170(f)(2)(B) and Section 1.170A-6(c). Section 1.170A-4(a) likewise limits the reduction to interests described in Section 1.170A-6(b) and Section 1.170A-7(b). The deduction is the Section 7520 present value of the lead interest, computed on fair market value. Confirm the scope with counsel against the specific instrument.

### How does the Section 7520 rate change a charitable lead trust deduction?

It is the discount rate applied to the charity's interest. For a CLAT the interest is a stream of fixed dollars, so a higher rate produces a lower present value, a smaller deduction for a grantor trust, and a larger annuity required to zero out the taxable gift. For a term-of-years CLUT the remainder factor depends on payout rate and term, so the effect is small and arrives only through the payment-timing adjustment.

### Which rate applies for an October 2026 funding?

The October 2026 Section 7520 rate is 5.6 percent, per Rev. Rul. 2026-19. Under Section 7520(a) the taxpayer may elect the rate for either of the two preceding months, which for an October valuation means September's 5.4 percent or August's 5.2 percent. The election changes the discount rate; it does not change the date as of which the asset is valued.

### Does a CLUT holding Bitcoin need an annual appraisal?

Yes. A unitrust pays a fixed percentage of trust value, so the corpus must be revalued every year to compute the payment. That annual figure drives the charity's distribution, the trust's Section 642(c) deduction, and the eventual remainder. A ten-year CLUT funded with digital assets is a recurring engagement, not a one-time report.

### Can a charitable lead trust pay its annuity in cryptocurrency?

The instrument governs, within the requirement that a CLAT pay a guaranteed annuity and a CLUT a fixed percentage. In a non-grantor trust, satisfying the annuity by distributing tokens rather than selling them is a disposition for trust-level gain purposes, so the holding period and basis of the distributed position matter.

### Does cryptocurrency qualify for the publicly traded securities exception?

No. Digital assets are property under IRS Notice 2014-21, and the practitioner consensus is that exchange-quoted coins do not receive the publicly traded securities shortcut. Above $5,000, a qualified appraisal and Form 8283, Section B are required, and the form instructions now list digital assets as a named Section B, Line 2 category.

### What happens if the appraisal's valuation date does not match the transfer date?

The opinion speaks to the wrong moment. For a volatile asset that is a substantive defect rather than a clerical one, and it can support a misstatement penalty under Section 6662(e) while simultaneously undermining the Section 6664(c)(3) reasonable cause defense, which depends on a qualified appraisal.

### Does the one-year holding period matter at all in a lead trust?

Yes, at the trust level. In a non-grantor CLT, a sale within a year of acquisition produces ordinary-rate gain inside the trust; in a grantor CLT that gain flows to the grantor at ordinary rates. The holding period also determines the character of an in-kind distribution made to satisfy the annuity. What it does not do is cap the charitable deduction at basis.

## The Number Is the Document

A charitable lead trust funded with digital assets works only if the number underneath it holds. The drafting determines whether a deduction exists. The Section 7520 rate determines what the deduction is worth. The appraisal determines whether either survives contact with an examiner.

The one-year holding period still matters, but it matters at the trust level, on sale and on distribution, rather than as a cap on the charitable deduction. Understanding that distinction before the structure is funded is what separates a file that can be explained from a file that can only be defended.
