# Data Flow

The data flow in our application follows a structured path to ensure efficiency, security, and optimal performance:

1. Client-side requests are handled by Next.js App Router
2. Server Components render content on the server, reducing client-side JavaScript
3. Server Actions handle data mutations and complex operations securely on the server
4. Content Access Layer manages data fetching and manipulation through server functions
5. Prisma ORM handles database operations
6. Supabase provides additional backend services and real-time capabilities
7. Zustand manages client-side state for complex UI interactions
8. Stripe handles payment processing and subscription management
9. RBAC and Permission System control access to routes, server functions and UI elements
10. Resend manages email sending for user communications and notifications

This data flow ensures that data is handled securely and efficiently throughout the application, prioritizing server-side operations and minimizing exposure of sensitive logic or data.