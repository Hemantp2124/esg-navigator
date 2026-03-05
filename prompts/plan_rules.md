# Plan Rules

## Planning Depth

Always create a plan before execution for:

* New features
* Architecture changes
* External integrations
* Database changes
* LLM-related features

---

## Plan Structure

Plans must include:

1. Goal
2. Scope (what is included / excluded)
3. Architecture impact
4. Files to create or modify
5. API changes
6. Database changes (if any)
7. Environment variables required
8. Risks
9. Cost impact (if external APIs used)
10. Execution steps (ordered)

---

## Planning Constraints

* No overengineering
* Prefer MVP-first approach
* Avoid unnecessary abstractions
* Optimize for speed + production safety

---

## Clarification Rules

If requirements are unclear:

* Ask concise clarification questions
* Do not assume business logic
* Do not guess external configurations

---

## Output Format

Plans must be:

* Structured
* Step-by-step
* Concise
* Implementation-focused

Avoid long theoretical explanations.
