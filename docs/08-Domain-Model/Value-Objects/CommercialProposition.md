# Commercial Proposition

## Status

Domain Model v1.0

---

# Purpose

Commercial Proposition is a Value Object that expresses the specific business statement an Assessment is attempting to support or refute through Evidence.

It provides the investigative focus that transforms disconnected Observations into structured commercial reasoning.

Commercial Proposition defines the question.

Evidence provides the proof.

---

# Definition

A Commercial Proposition is an immutable business statement representing a hypothesis about an Organization's commercial reality.

It is neither true nor false by itself.

Its validity is determined only through the collection, validation, and interpretation of Evidence during an Assessment.

---

# Why It Is a Value Object

Commercial Proposition has:

- No independent identity.
- No independent lifecycle.
- No ownership separate from an Assessment.
- No existence outside business reasoning.

Two identical Commercial Propositions are indistinguishable.

Therefore Commercial Proposition is defined entirely by its business meaning.

---

# Business Responsibilities

Commercial Proposition is responsible for:

- Defining the investigative focus.
- Providing context for Evidence.
- Guiding business reasoning.
- Framing Findings.
- Supporting explainable executive intelligence.

Commercial Proposition does not:

- Collect Observations.
- Generate Evidence.
- Produce Findings.
- Recommend action.
- Make Executive Decisions.

---

# Business Rules

## Rule 1

Every Evidence package supports or refutes exactly one Commercial Proposition.

---

## Rule 2

A Commercial Proposition exists only within an Assessment.

---

## Rule 3

Commercial Propositions remain immutable throughout the Assessment.

---

## Rule 4

A Commercial Proposition does not imply truth.

Only Evidence determines whether it is supported.

---

## Rule 5

Commercial Propositions must be stated in business language.

They must be understandable by executives without technical interpretation.

---

# Characteristics

A Commercial Proposition may describe:

- Commercial risk
- Operational inefficiency
- Revenue leakage
- Process maturity
- Infrastructure integrity
- Customer engagement
- Sales effectiveness
- Market readiness

Each proposition defines a single investigative objective.

---

# Relationship to Evidence

Evidence exists to evaluate a Commercial Proposition.

Commercial Proposition

↓

Evidence

Without a Commercial Proposition, Evidence lacks investigative purpose.

---

# Relationship to Findings

Findings explain the outcome of evaluating a Commercial Proposition.

Commercial Proposition

↓

Evidence

↓

Finding

A Finding answers:

"What did we discover about this proposition?"

---

# Relationship to Recommendations

Recommendations exist only after a Commercial Proposition has been evaluated and explained.

Commercial Proposition

↓

Evidence

↓

Finding

↓

Recommendation

Recommendations never originate directly from a Commercial Proposition.

---

# Examples

Examples of Commercial Propositions include:

- Lead response time is reducing conversion efficiency.
- Email authentication weaknesses are reducing deliverability.
- CRM data quality is limiting sales visibility.
- Website friction is lowering buyer engagement.
- Pipeline hygiene is reducing forecast reliability.
- Decision-makers are engaging with pricing content earlier than expected.

These are investigative statements.

They become business truth only after Evidence has been evaluated.

---

# Immutability

Commercial Propositions are immutable.

If the investigative question changes:

- The existing Assessment remains unchanged.
- A new Assessment is required.

Business reasoning remains historically consistent.

---

# Equality

Two Commercial Proposition Value Objects are equal when they express the same business statement.

Identity is irrelevant.

Only business meaning matters.

---

# Constitutional References

Derived from:

- DDD Workshop 05 – Observation Domain Discovery
- DDD Workshop 06 – Evidence Domain Discovery
- DDD Workshop 07 – Finding Domain Discovery

Aligned with:

- Founder Bible v1.0
- Market Reality Document v1.0
- Architecture Vision v1.0

---

# Future Implementation Notes

Future implementations should ensure:

- Immutability.
- Clear business language.
- Explicit relationship to Evidence.
- Full reasoning traceability.

Implementation technologies may evolve.

The business meaning of Commercial Proposition must remain stable.

---

# Closing Statement

Commercial Proposition establishes the investigative purpose of every Assessment.

It transforms commercial reasoning from passive observation into focused inquiry by defining the precise business statement that Evidence must evaluate.

Every Finding answers a Commercial Proposition.

Every Recommendation ultimately traces back to one.

Commercial Proposition gives direction to the entire FLUANZ reasoning engine.