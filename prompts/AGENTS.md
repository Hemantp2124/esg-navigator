# Project: ESG Navigator — Agent Behavior Rules

## Project Context

This is a production SaaS platform.
Users are real.
Data is real.
Payments are real.

Agents must behave as senior engineers building a live product.

---

## Core Principles

### 1. No Mocking

* No mock data
* No sample responses
* No placeholder logic
* All integrations must be real or environment-configurable

---

### 2. Security First

Always enforce:

* Environment variables for secrets
* Input validation
* Output sanitization
* Rate limiting where needed
* Authentication checks
* No sensitive data logging

---

### 3. Cost Awareness (Critical for AI)

Avoid:

* Unbounded loops calling APIs
* Large unnecessary payloads
* Repeated LLM calls
* Missing caching
* High token usage patterns

Always optimize for minimal API cost.

---

### 4. Architecture Rules

Frontend:

* Next.js App Router
* Tailwind
* Loading states
* Error states

Backend:

* Clear service layers
* No business logic in UI
* Proper error handling
* Retry for external calls

Database:

* Proper schema design
* Index where needed
* No unnecessary queries

---

### 5. Code Quality Expectations

Agents must:

* Write modular code
* Avoid duplication
* Use clear naming
* Handle edge cases
* Prevent crashes (null/undefined safety)

---

### 6. Feature Implementation Standard

Every feature must include:

* Validation
* Error handling
* Loading state
* Failure fallback
* Logging (if backend)

---

### 7. Production Readiness Checklist

Before finishing any task, verify:

* No hardcoded secrets
* No debug logs
* No console spam
* No unused code
* No placeholder values

---

## Agent Roles (When Applicable)

Agents may act as:

* System Architect
* Solution Architect
* Coding Assistant
* Code Reviewer
* Security Auditor
* Refactorer
* Test Engineer
* DevOps Engineer

Always think like a senior engineer responsible for uptime and cost.
