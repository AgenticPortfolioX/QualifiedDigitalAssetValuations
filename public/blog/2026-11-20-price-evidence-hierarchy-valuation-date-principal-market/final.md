---
title: "The Ladder Was Already in the Regulation: Treasury Regulation Section 20.2031-2's Five Tiers of Price Evidence Applied to a Twenty-Four-Hour Digital Asset Market, the 'Principally Dealt In' Instruction That Anticipates the Principal-Market Question, and the Timestamp Convention That Decides Which Number a Qualified Appraisal May Use"
date: "2026-11-20"
description: "A digital asset position carries dozens of simultaneous prices and no closing auction. Treasury Regulation Section 20.2031-2 already sets a five-tier ladder of price evidence and names the exchange that counts; this analysis applies that ladder tier by tier, fixes the timestamp convention, separates price from executable liquidity, and specifies the file a qualified appraisal has to hold."
category: "QDAV"
author: "QDAV"
---
# The Ladder Was Already in the Regulation

The Internal Revenue Service has never told anyone how to price a digital asset. It has told everyone what standard the number must satisfy, and then it has stopped. What the Service did do, in a regulation drafted for stocks and bonds in 1958 and amended through 1992, was write down a sequence for choosing among competing pieces of price evidence. That sequence is five tiers deep. It begins with actual sales, descends through bid and asked quotations, addresses incomplete data, then confronts the case where the quotations exist but do not reflect fair market value, and finally reaches the case where there is no price at all. Every digital asset appraisal is an exercise in that sequence, whether or not the appraiser knows the sequence has a name and a citation.

This analysis works the ladder tier by tier against a market that never closes, that prices the same asset on forty venues at once, and that has no auction to mark the end of a day. It then addresses the two questions the regulation raises but cannot answer for a token: which venue is the one where the property is "principally dealt in," and at what minute on the valuation date the observation is taken. It closes with the evidentiary file that converts a selected number into defensible data.

## Key Takeaways

- Treas. Reg. §20.2031-2 supplies a five-tier hierarchy of price evidence that maps directly onto digital assets, even though it governs stocks and bonds.
- The regulation's instruction to use the exchange where the property is "principally dealt in" is a principal-market rule written decades before ASC 820, and it turns on accessibility and contract identity, not on raw trading volume.
- Digital asset markets have no closing auction, so a valuation date is not a price unless the appraiser states a timestamp, a time zone, an observation window, and a fallback rule.
- A quoted price is not evidence of liquidity; tier (e) of the regulation is where position size and sporadic trading enter, and it demands support data with the return.
- Divergent sources are reconciled by investigation, not by averaging; the weight assigned to each source is fixed by liquidity and exposure before the result is known.
- A qualified appraisal for digital assets rests on a price-evidence file that can reproduce any selected number at any stated minute.

## Part One: The Ladder Is Already Written

The standard of value is fixed and unremarkable. Treasury Regulation §20.2031-1(b) defines fair market value as the price at which property would change hands between a willing buyer and a willing seller, neither being under any compulsion to buy or to sell, and both having reasonable knowledge of relevant facts. Notice 2014-21 applies that standard to virtual currency and requires conversion into dollars at an exchange rate "in a reasonable manner that is consistently applied." The notice does not define reasonable, does not choose a venue, and does not choose a time. The same gap appears in the charitable regulations, which require a qualified appraisal for donated property above the statutory threshold without prescribing a pricing method for property that trades continuously.

What exists instead is §20.2031-2, which addresses the valuation of stocks and bonds for estate tax purposes. It is not a digital asset rule, and an appraiser who cites it as binding authority for a token is overstating it. Its value is structural: it is the Service's own written account of how price evidence degrades from direct observation to inference, and the degradation is identical whether the asset is a listed equity or a liquid token.

Tier one is actual sales. If there is a market on an exchange, in an over-the-counter market, or otherwise, the fair market value is the mean between the highest and lowest quoted selling prices on the valuation date. If there were no sales on the date but sales occurred within a reasonable period both before and after, value is a weighted average of the means on the nearest date before and the nearest date after, weighted inversely by the number of trading days between each date and the valuation date. The regulation's own examples show the mechanic: sales at $10 two trading days before and $15 three trading days after produce $12, because the closer observation carries more weight.

Tier two is bid and asked. Where actual sales are unavailable across a reasonable period bracketing the valuation date, value may be the mean between bona fide bid and asked prices on the date, or a similarly weighted average of the nearest dates on either side.

Tier three is incomplete data. Where prices exist only on one side of the valuation date, the mean of the available highest and lowest prices may be taken.

Tier four is the correction tier, and it is the one that matters most for digital assets. Where the value derived from selling prices or quotations does not reflect fair market value, "some reasonable modification of that basis or other relevant facts and elements of value are considered." The regulation specifies two triggers: sales that are "few or of a sporadic nature," and a block of property so large relative to the number of units changing hands that it could not be liquidated in a reasonable time without depressing the market.

Tier five is no price at all, where value is built from the characteristics of the property and the economics of the issuer.

| Tier | Regulatory basis | Digital asset equivalent | What defeats the tier |
|---|---|---|---|
| 1 | §20.2031-2(b): mean of highest and lowest sales on the date | Trade prints on the principal venue during the valuation window | No prints in the window; prints only on an inaccessible venue |
| 2 | §20.2031-2(c): mean of bona fide bid and asked | Top-of-book midpoint on a venue with executable depth | Quoted spread with no size behind it |
| 3 | §20.2031-2(d): incomplete data, one-sided | Prints before but not after (halt, delisting, chain outage) | Gap so wide the observation is stale |
| 4 | §20.2031-2(e): prices do not reflect FMV | Sporadic trading; position large relative to executable volume | Failure to submit support data with the return |
| 5 | §20.2031-2(f): no prices available | Pre-launch, locked, or never-listed positions | Treating a private mark as an observable price |

The ladder's discipline is that each tier must be exhausted before the next is used, and the reason for descending must be recorded. Most defective digital asset appraisals do not fail because they chose the wrong tier. They fail because they never stated which tier they were on.

## Part Two: The Exchange Instruction That Anticipates the Principal-Market Question

Buried in the first tier is a sentence that resolves most digital asset venue disputes before they start: "If the stocks or bonds are listed on more than one exchange, the records of the exchange where the stocks or bonds are principally dealt in should be employed if such records are available in a generally available listing or publication of general circulation." If those records are unavailable, a composite listing of combined exchanges may be used.

Read against a token, that sentence does four things. It acknowledges that multi-venue listing is normal. It selects one venue rather than an average of all venues. It conditions the selection on the records being generally available and reproducible. And it supplies a fallback, in order, rather than leaving the appraiser to improvise.

The criterion is not "the largest exchange in the world." It is the venue where the property is principally dealt in — which, for a US taxpayer, imports accessibility. A venue that carries the deepest order book in a token but cannot lawfully serve a US holder, or that serves it only through a restricted interface, is not the market in which this interest is principally dealt. Korean won markets are the standard illustration: the local premium is real, observable, and irrelevant to a dollar-denominated appraisal of a position held by a Michigan estate, because the estate cannot reach that market on the valuation date.

Contract identity is the second half of the test, and it is where appraisers get caught. Tickers collide. A dozen tokens trade under similar symbols. Bridged assets carry the same name as the native asset and a different claim. A price series keyed to a symbol rather than to a contract address on a named network can silently attach the price of the wrong instrument to the subject property. The regulation's insistence on generally available records presupposes that the record is a record of *this* property; identity verification is the modern precondition to tier one.

The principal-market concept also appears in ASC 820, which defines the principal market as the market with the greatest volume and level of activity for the asset. The convergence is real but the authority is not transferable. ASC 820 measures an exit price in an orderly transaction between market participants at the measurement date; the tax standard measures a hypothetical transaction between a willing buyer and a willing seller with reasonable knowledge. Notice 2014-21 does not require ASC 820. An appraiser may use the principal-market analysis as discipline, and should say so, but importing the accounting framework wholesale changes the standard of value — most visibly at the blockage question, where ASC 820-10-35-36B confines fair value adjustments to characteristics of the asset rather than the size of the holder's position, and estate tax practice does not.

## Part Three: The Timestamp Problem

The regulation presumes a trading day. It presumes an opening, a close, a high, a low, and a settlement. Digital asset markets have none of these. They trade continuously across time zones, they have no consolidated tape, and there is no auction that produces a definitive price. The SBAI operational diligence framework for digital assets identifies the absence of a conventional market close as a threshold valuation consideration for exactly this reason.

Four statutory dates do the work in a typical engagement, and each fixes a different moment.

| Filing | Statutory date | The practical question |
|---|---|---|
| Form 706 (estate) | IRC §2031 — date of death | At what hour and in what time zone is death fixed? |
| Form 706, alternate | IRC §2032 — six months after death | Same convention applied to a second date |
| Form 709 (gift) | IRC §2512 — date of transfer | Which moment completes delivery? |
| Form 8283 (charitable) | IRC §170 — date of contribution | Delivery to the donee, not the date of the wire |

Income events add their own instants: staking rewards are valued when the taxpayer gains dominion and control, not at the block's timestamp, and hard-fork receipts follow the same logic. A reward credited on a Friday evening and withdrawable on Monday has two candidate dates, and the difference is not academic on a volatile asset.

The magnitude of the problem is easy to demonstrate. In a comment letter to the Service in June 2016, the AICPA recorded five dollar-quoted bitcoin prices observed at 8:25 a.m. Eastern on January 31, 2015: $231.1462, $231.00, $229.80, $228.24, and $227.94. The spread between the highest and lowest is $3.2062 per bitcoin, or 1.395% of the median quote. On a 1,000-bitcoin position that is $3,206.20 of value attributable to venue selection alone; on 5,000 bitcoin it is $16,031.00. Those observations were taken within the same minute on a quiet Saturday. Across a volatile session, the choice of minute matters as much as the choice of venue.

The professional response is a convention stated in the engagement letter, before any data is pulled, and applied without exception: the time zone in which the valuation time is expressed, the observation type, the window, the treatment of weekends, holidays, and daylight-saving transitions, and the fallback rule when the standard source is unavailable or unreliable. A workable convention is UTC throughout, with the observation defined as the volume-weighted average price over the sixty minutes ending at the valuation instant, computed on the principal venue, with a documented fallback to the composite benchmark if that venue's feed fails. It is defensible because it is fixed, reproducible, and indifferent to the result.

The regulation offers a precedent for handling a missing data point. For bonds, tier one permits the mean of the closing price on the valuation date and the closing price on the prior trading day where a high-low range is not published. A two-point, stated convention is better evidence than a single convenient print. What the regulation will not tolerate is a convention chosen after the number is visible. Selecting the hour that produces the preferred value is not a methodology; it is hindsight with a citation attached.

## Part Four: When the Quote Is Real and the Market Is Not

Price and liquidity answer different questions. A print at $2.00 establishes that some quantity changed hands at $2.00. It does not establish that five million units could be sold for $10 million. Tier four of the regulation confronts this directly, and its language deserves to be read closely, because it is the closest thing the Service has written to an instruction on position-size adjustments:

"Where sales at or near the date of death are few or of a sporadic nature, such sales alone may not indicate fair market value. In certain exceptional cases, the size of the block of stock to be valued in relation to the number of shares changing hands in sales may be relevant in determining whether selling prices reflect the fair market value of the block... If the executor can show that the block of stock to be valued is so large in relation to the actual sales on the existing market that it could not be liquidated in a reasonable time without depressing the market, the price at which the block could be sold as such outside the usual market, as through an underwriter, may be a more accurate indication of value than market quotations. Complete data in support of any allowance claimed due to the size of the block of stock being valued shall be submitted with the return."

Three things follow. First, sporadic trading is itself a defect in the price, independent of size. A token that prints four times a day on one venue has a price series that is largely noise. Second, the test is relational — the block against the volume actually changing hands — not absolute. Third, and most often ignored, the allowance must be supported by complete data submitted with the return. The regulation does not ask the appraiser to be persuasive. It asks for the data.

Evaluating that data means going beyond volume figures. Useful evidence includes the quoted spread in basis points at the valuation time, top-of-book size, cumulative depth at one and five percent from mid, median trade size, average daily volume over the trailing thirty and ninety days, venue concentration, holder concentration from on-chain distribution, historical realized slippage on comparable sales, and any observed block or over-the-counter transaction in the same instrument near the date. Reported volume requires suspicion: wash trading inflates venue volume statistics, and a venue's headline number is a claim rather than an observation. Trade counts, unique counterparties, and independent aggregators are the cross-checks.

The courts have been doing this analysis for market-traded property for decades. In Estate of Prell, the Tax Court measured a block of publicly traded stock at the price a skilled broker could obtain by disposing of it over a reasonable period beginning with the valuation date — a forward-looking liquidation premise, not a snapshot. Nothing about a token makes the premise inapplicable; the difference is only that the digital asset appraiser has better data about depth and worse data about counterparty identity.

Two errors follow from confusing the frameworks. An appraiser who imports ASC 820's prohibition on holder-size blockage into an estate or gift engagement applies a standard of value the filing does not use. An appraiser who imports an estate-tax blockage adjustment into a fund's GAAP net asset value does the reverse. The standard of value governs the adjustment, not the asset class.

Where the position is large enough to warrant a discount, the arithmetic is a separate discipline, addressed in this firm's analysis of blockage, discounts, and the depth of the order book. The point here is narrower: tier four is the moment a quotation stops being evidence of value and starts being evidence of a market's capacity.

## Part Five: The Quote Is Denominated in Something

A token priced at 0.041 BTC has been priced in bitcoin, not in dollars, and a token priced at 2.10 USDT has been priced in a stablecoin. Each conversion is a second selection with its own venue and timestamp, and each can carry more error than the first.

Consider a mid-cap token quoted at 2.10 USDT on a venue where the USDT/USD rate is $0.9987 at the observation instant. The dollar value is $2.0973, a difference of 0.13% that becomes material on a nine-figure charitable deduction or a taxable estate near a threshold. Now consider the same conversion during a depeg episode, when the stablecoin's own market price diverges from its redemption claim for hours. The appraiser is no longer valuing one asset. The appraiser is valuing the token and the credit of the stablecoin issuer, sequentially, and must document both observations.

The same structure appears in bitcoin-quoted pairs, which are common for smaller tokens. The conversion path is token to BTC to USD, with two venues, two timestamps, and two spreads. Naming the path is not pedantry: an examiner who recomputes the value from a different path will get a different number, and the appraisal must be able to explain the difference rather than discover it.

The practical rule is that the appraisal states the quotation currency of the source, the conversion source and timestamp, and the resulting dollar rate, for every instrument. Where the quotation currency is a stablecoin, the appraisal states whether the conversion treats the stablecoin at par or at its observed market price, and why. Treating it at par is a substantive assumption, not a simplification, and it belongs in the extraordinary assumptions section where a reader can see it.

## Part Six: Positions With No Price at All

Tier five is the largest tier in digital asset practice and the least discussed. A token that has not launched has no market. A grant subject to a one-year cliff and four-year vesting is not the same instrument as the unrestricted token. A position held through a bridge is a claim on a bridge, not possession of the native asset. A liquidity-provider position is a share of a pool whose value moves with the ratio of its constituents. None of these is appraised by opening a chart.

The regulation's tier five directs consideration to the property's own characteristics and to the comparable businesses whose securities trade publicly. Translated to a pre-launch token, the inquiry is the issuer's economics: treasury runway, revenue or fee capture where any exists, emission and unlock schedule, the size of the float that will become transferable and when, governance and economic rights, and the price and structure of any recent financing. A private round priced at $0.40 per token with a twelve-month lock is evidence about a restricted instrument sold to an accredited buyer, not evidence of the fair market value of an unrestricted token. Using it as the latter without adjustment is the most common tier-five error in the field.

The unlock calendar is not a detail. A valuation dated thirty days before a scheduled release of twelve percent of circulating supply is a valuation of a different float than the one that will exist after the release. Where the valuation date precedes a material unlock, the appraisal either reflects the known supply event or states explicitly why it does not.

Where no market exists but observable transactions do — secondary transfers of locked positions, over-the-counter marks, tender offers — those transactions are usable, provided the appraisal identifies the restriction, the buyer class, and the size. A secondary market for locked tokens trading at a substantial discount to the unrestricted reference price is an observation about a restricted instrument. The discount is not transported to the unrestricted token; it is evidence about the restricted one, and the relationship between the two requires analysis rather than assumption.

## Part Seven: Reconciliation, Divergence, and the Right Not to Average

Secondary guidance on crypto valuation often reduces to a sentence: take the median or the average of the high and low, or the closing price reported by the exchange. That sentence is adequate for a small position in a deep market on an ordinary day. It is a liability everywhere else, because averaging is a technique for reducing noise, not a technique for resolving disagreement.

An average of weak inputs does not become a strong price. If three venues report $2.10, $2.11, and $1.74, the mean is not a better estimate of value; it is an estimate contaminated by an unexplained observation. The correct response is investigation. A $1.74 print on one venue is usually traceable to a stale feed, a thin book absorbing a market sell, a wrong contract address, a delayed listing, a depeg in the quote currency, or a venue that has suspended deposits and is trading at a local clearing price. Each cause implies a different treatment, and none of them is "include it and divide by three."

The regulation supplies the weighting principle. Its averages are weighted inversely by the number of trading days between the observation and the valuation date: proximity governs weight, and the rule is fixed in advance. A digital asset price hierarchy should be built the same way. The principal venue on the correct contract and network carries the most weight because it is where the property is principally dealt in and where the position could actually be liquidated. A composite benchmark carries less. A secondary venue carries less again. A broker quote carries weight only if it is executable at the stated size.

Two procedural requirements make the reconciliation auditable. The weights are declared before the sources are pulled, which prevents the outcome from selecting the method. And every rejected source is documented with its rejection reason, in one sentence: stale by nineteen minutes, wrong network, volume below the position size, quote currency depegged. This is the "why not the other number" paragraph, and it is the single most persuasive element in an appraisal file, because it demonstrates that the appraiser saw the competing evidence and did not ignore it.

## Part Eight: The Price-Evidence File

A price is a conclusion. The file is the evidence. For digital assets, the file has to be reproducible at a granularity that paper appraisals never required, because the underlying observation exists only as a machine record that can disappear when an endpoint changes.

| Field | Content | Why it is required |
|---|---|---|
| Subject identity | Contract address, network, token standard, decimals | Prevents symbol collision and wrong-instrument pricing |
| Venue | Named exchange or benchmark, with access status | Establishes the "principally dealt in" determination |
| Timestamp | UTC date and time of observation | Reproduces the number at the valuation instant |
| Observation type | Last trade, VWAP window, bid/ask midpoint, or model output | Distinguishes observation from inference |
| Depth | Top-of-book size, cumulative depth at stated offsets | Supports or defeats a liquidity conclusion |
| Volume | Trailing 30/90-day ADV, trade count, venue share | Tests whether the price series is meaningful |
| Conversion | Quote currency, conversion source, its timestamp | Documents the second valuation |
| Source retention | Raw API response, endpoint, retrieval time, hash | Allows independent reproduction |
| Rejection log | Each excluded source and the reason | Demonstrates the hierarchy was applied |
| Standard of value | FMV definition, valuation date, premise, assumptions | Fixes the framework the numbers serve |

The retention column is where most files fail. A screenshot of a price website taken a week later is not evidence of the price at the valuation instant; it is evidence of the price when someone remembered to look. The raw response from the venue's endpoint, with the request parameters, the UTC timestamp of retrieval, and a hash of the stored file, is evidence. Where a data vendor's license restricts redistribution, the file holds the vendor, the query, the retrieval time, and the licensed extract, and the appraisal cites the license rather than reproducing the data.

Two professional obligations attach to the file rather than to the number. The appraiser's compensation cannot be contingent on the conclusion, and the individual who signs is accountable for the selection of the price and for the reconciliation of the sources. A firm that cannot name the signer of the analysis should not be signing the report.

## Part Nine: Where the File Is Tested

For charitable contributions under IRS Section 170, the appraisal must satisfy Treas. Reg. §1.170A-17, be prepared by a qualified appraiser, follow generally accepted appraisal standards, and be completed no later than the due date of the return including extensions. Section B of Form 8283 carries the summary and the appraiser's declaration. A report that reaches the correct number by an unreproducible route satisfies none of this.

For the appraiser, the exposure is direct. IRC §6695A imposes a penalty on an appraiser who prepares a report used to support a substantial or gross valuation misstatement, at ten percent of the underpayment attributable to the misstatement in the substantial case and twenty percent in the gross case, capped at 125 percent of the compensation for the appraisal. The penalty runs on its own three-year assessment clock. The mechanics are addressed in this firm's analysis of the seven statutory tests for a qualified appraiser.

For the taxpayer, IRC §6662 imposes a twenty percent penalty on a substantial valuation misstatement, where the claimed value is 150 percent or more of the correct value, and forty percent where it is 200 percent or more. A digital asset position valued at three times its actual worth on a date of death is not a rounding dispute; it is the fact pattern the Penalty Code is built for.

Consistency across filings is the quiet test. The value reported on Form 706, the value carried to Schedule A of Form 8971 for the heirs' basis, the value claimed on Form 8283, and the market value stated in a trustee's annual report should all be reconcilable to a single set of observations or to an explained difference. Divergence between them is not automatically wrong, but it is always a question, and the appraisal file is the only place the answer can live.

## Frequently Asked Questions

### How is cryptocurrency valued for estate tax purposes?

At fair market value on the date of death under IRC §2031, or on the alternate valuation date six months later if the executor elects under §2032 and the election reduces both the gross estate and the estate tax. Fair market value means the price at which the property would change hands between a willing buyer and a willing seller, neither under compulsion, both having reasonable knowledge of the relevant facts.

### Which exchange price should an appraiser use?

The venue where the property is principally dealt in, subject to the records being generally available and the venue being accessible to the holder, on the correct contract address and network. Practically, that means the deepest accessible venue for that specific instrument, with the selection documented in the engagement letter before the data is pulled.

### What if the asset had no trades on the valuation date?

The regulation anticipates this. Value may be derived from the nearest sales before and after the date, weighted inversely by the number of trading days between each sale and the valuation date, or from bona fide bid and asked prices where sales are unavailable across a reasonable period. Where the market is dormant or the observation is stale, the price ceases to be reliable evidence and a supported method is required.

### Can you average prices from several exchanges?

Only where the sources agree closely enough that the average reduces noise rather than hiding disagreement. Where sources diverge materially, the divergence has a cause — stale feed, wrong contract, thin venue, depegged quote currency, restricted access — and the cause determines the treatment. Averaging without identifying the cause produces a number that cannot be defended.

### How do you value a token that has never traded publicly?

From the instrument's own economics and from transactions in comparable restricted instruments: treasury and runway, revenue or fee capture, emission and unlock schedule, governance and economic rights, and the terms of recent financings. A private round price for a locked token is evidence about a restricted instrument, and it cannot be applied to an unrestricted token without adjustment and explanation.

### What records should be retained to support a crypto valuation?

Contract address and network; named venue and access status; UTC timestamp of observation; observation type and window; order-book depth; trailing volume and trade counts; the quote currency and its own conversion source; the raw API response with retrieval time and a file hash; and a log of every source considered and rejected with the reason. Retention is what allows the number to be reproduced rather than merely restated.

## Conclusion: A Price Is an Exhibit, Not a Conclusion

The digital asset market has solved price discovery and left valuation unsolved. A token is quoted everywhere and closed nowhere, and the appraisal question is therefore one of selection: which venue, which minute, which observation type, and which of the four competing numbers on the screen is the one that answers a statutory question.

The Service wrote the answer's shape sixty years ago for a market that had a closing bell. Actual sales first, then quotations, then inferences from incomplete data, then a correction when the price does not reflect value, and finally the property's own economics. Applied to a twenty-four-hour market, that ladder produces a defensible method: a named venue on a verified contract, a UTC timestamp fixed in advance, depth and volume evidence that tests whether the price is real, a documented conversion from the quotation currency, an investigation rather than an average when sources disagree, and a file that reproduces every number in the report.

That is what a USPAP compliant appraisal of a digital asset actually contains. Not a screenshot, and not a ticker. A chain of evidence from the statutory date to the dollar figure, with every link labeled, so that the person who did not select the price can follow the selection and reach the same conclusion.
