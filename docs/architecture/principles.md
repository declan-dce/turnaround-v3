# Architecture Principles

Our application architecture is guided by the following principles:

1. **Server-side Priority**: Leverage Next.js server components and server actions for improved performance, security, and SEO
2. **Server Function-First Development**: Design and document server functions before implementation to ensure consistency and ease of integration
3. **Separation of Concerns**: Use a content access layer to separate data fetching and business logic from UI components
4. **Component-Driven Development**: Utilize shadcn/ui and Tailwind CSS for consistent and reusable UI components
5. **Type Safety**: Employ TypeScript throughout the application for improved developer experience and code quality
6. **Multi-tenancy**: Design the application to support multiple tenants with isolated data and customizable experiences
7. **User-Centric Design**: Prioritize simplicity and elegance in UI/UX for users with varying levels of computer literacy
8. **Modularity**: Structure the application with modular components and services for easy maintenance and scalability
9. **Instantaneous Data Serving**: Implement strategies to provide smooth user experience with minimal loading times
10. **Granular Access Control**: Implement RBAC for server function access and a permission system for UI-level interactions
11. **String Constants**: Use centralized string constants for all labels, messages, and other text content
12. **Email Communication**: Utilize Resend for reliable and efficient email delivery
13. **Strong Naming Conventions**: Implement clear and consistent naming conventions for closely related database tables and server functions

## String Constants Usage

Developers should always use constants for strings wherever possible. This practice helps avoid manual updates of the same label or message in multiple areas of the codebase. Here are some guidelines:

1. Store all string constants in a centralized location, such as a `constants` directory.
2. Organize constants into logical files (e.g., `generalStrings.ts`, `errorMessages.ts`, `labels.ts`, `emailTemplates.ts`).
3. Use descriptive names for constants to ensure clarity and ease of use.
4. Import and use these constants in components and functions instead of hardcoding strings.
5. For dynamic strings, use template literals with placeholders that can be filled at runtime.
6. Regularly review and update the constants to ensure they remain relevant and comprehensive.
7. Include email subject lines and body templates in the string constants for consistency in email communications.

These principles and practices ensure a consistent, maintainable, and scalable application architecture with a focus on server-side operations and security.