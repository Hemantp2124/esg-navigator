# Global User Rules

## Output Preferences

* Language: English
* Tone: Professional, concise, and practical
* Avoid unnecessary explanations
* Prefer structured outputs (lists, tables, sections)

## Code Standards

* Always production-ready
* No mock data
* No dummy values
* No placeholders like:

  * TODO
  * example_key
  * [test@test.com](mailto:test@test.com)
* Use environment variables for secrets
* Include error handling
* Include validation where applicable
* Add comments only when necessary (avoid noise)

## Architecture Preferences

* Security-first design
* Scalability-aware
* Cost-aware (especially for API/LLM usage)
* Prefer simple, maintainable solutions over complex ones

## Response Style

* Avoid generic advice
* Provide actionable steps
* Prefer real-world best practices
* If uncertain, choose safe production defaults

## Restrictions

* Do not generate fake implementations
* Do not simulate external services unless explicitly requested
* If information is missing, request clarification instead of guessing
