## Q1 — Why did you structure the component the way you did?

I separated the project into a reusable `DataTableComponent` and a `DashboardComponent` that provides data and configuration. The table is fully generic using TypeScript generics and `keyof T`, so it can work with any dataset. Shared models are placed in a `models` folder, while the table is isolated in a shared component folder to keep it reusable and scalable.

---

## Q2 — What trade-offs did you consciously make?

I chose simplicity over advanced Angular patterns. For example, I used a flag-based system (`isBadge`) instead of `TemplateRef` to keep the component easier to understand. I also used client side sorting, filtering, and pagination instead of server side logic. With more time, I would move heavy operations to the backend and improve performance for large datasets.

---

## Q3 — Where could this component break at scale?

With large datasets (e.g. 10,000+ rows), client side sorting and filtering would become slow and inefficient. The component also processes all data in memory, which can affect performance. Additionally, dynamic column definitions with inconsistent data types could break sorting logic, especially with null or nested values. Server side pagination would be required at scale.

---

## Q4 — What would change if this needed to support both Angular AND React?

I would remove Angular specific features like templates, directives, and bindings. Instead, I would design it as a framework agnostic Web Component (e.g using StencilJS). The API would rely on inputs/props and events only. This would allow Angular and React to consume the same component without rewriting logic.

---

## Q5 — Describe one bug or edge case you encountered and how you fixed it.

One issue was incorrect sorting of numeric values, where numbers were treated as strings, causing wrong ordering. I fixed this by detecting numeric types and using arithmetic comparison instead of string comparison. Another edge case was accessing `$event.target.value` in Angular, which required casting to `HTMLSelectElement` to avoid TypeScript errors.
