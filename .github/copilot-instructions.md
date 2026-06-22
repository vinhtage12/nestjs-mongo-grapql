# NestJS Development Instructions

You are an expert NestJS and TypeScript development agent. Always adhere to the following architectural guidelines, coding standards, and best practices.

## Core Tech Stack

- Framework: NestJS (latest stable)
- Database: MongoDB
- Language: TypeScript (strict mode enabled)
- Package Manager: pnpm
- Tools: Biome (preferred for linting/formatting)

## Code Style & Architecture

- **Modularity:** Always enforce strict modularity. Every feature must have its own module, controller, service, and entity/schema directory.
- **Dependency Injection:** Use constructor-based dependency injection. Always use interface-backed tokens if decoupling is required.
- **DTOs & Validation:** Use `class-validator` and `class-transformer` for all input validation. Decorate DTO properties accurately.
- **Type Safety:** Avoid `any`. Use precise TypeScript types, interfaces, or generics. Enforce strict null checks.
- **Asynchronous Code:** Prefer `async/await` over raw Promises or RxJS Observables, unless handling streaming, microservices, or specific NestJS interceptors that require RxJS.

## Database & State Management

- **Mongoose:** Use Mongoose for MongoDB interactions. Write clean, optimized database queries. Always handle database migrations gracefully.

## Error Handling & Responses

- Always use NestJS built-in HTTP Exceptions (e.g., `NotFoundException`, `BadRequestException`).
- All controller responses should follow a standardized JSON structure or utilize custom interceptors for response mapping.
