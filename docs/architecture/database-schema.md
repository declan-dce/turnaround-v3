# Database Schema

Our application uses a multi-tenant database schema designed to support robust data isolation and efficient querying across tenants.

## Multi-Tenant Data Model

1. Tenant Identification
   - Every table that contains tenant-specific data includes a tenant_id column.
   - The tenant_id is a UUID and is used as part of composite primary keys and unique constraints.

2. Unique Constraints
   - Implement composite unique constraints using tenant_id and other relevant columns.
   - For tables with natural unique identifiers, use a combination of tenant_id and that identifier.
   - Ensure uniqueness within a tenant context rather than globally across all tenants.

3. Foreign Key Relationships
   - All foreign key relationships include tenant_id to maintain data integrity within each tenant.
   - Use composite foreign keys that include both tenant_id and the referenced table's primary key.
   - This approach prevents cross-tenant data linkage and ensures proper data isolation.

4. Indexing Strategy
   - Create composite indexes that include tenant_id as the first column to optimize multi-tenant queries.
   - Design indexes to support common query patterns while considering the impact on write performance.

## Naming Conventions

Adopt a consistent naming convention for tables, especially for closely related entities:

1. Base Tables
   - Use PascalCase singular nouns for base table names.

2. Related Tables
   - For tables that extend or are closely related to a base table, use an underscore followed by the related aspect.
   - This convention clearly indicates the relationship between tables.

3. Junction Tables
   - For many-to-many relationships, combine the two related table names with an underscore.
   - This naming clearly represents the purpose of the junction table.

4. Consistency
   - Maintain consistent plurality across related table names.
   - Use clear and descriptive names that indicate the table's purpose.
   - Avoid abbreviations unless they are widely understood within the domain.

## Prisma Schema Best Practices

1. Model Definitions
   - Define each model with clear field types and modifiers.
   - Include tenant_id in every model that contains tenant-specific data.

2. Composite Primary Keys
   - Use composite primary keys combining tenant_id and id for most tables.

3. Cascading Deletes
   - Implement cascading deletes where appropriate to maintain referential integrity.
   - Consider the implications of cascading deletes on data integrity and potential data loss.

4. Default Values and Auto-generation
   - Utilize Prisma's default value generators for fields like UUIDs and timestamps.
   - Set appropriate default values for status fields, timestamps, etc.
   - Ensure consistency in default value usage across related fields.

5. Enums and Constants
   - Define enums in the Prisma schema for fields with a fixed set of values.
   - Use enums to enforce data integrity and improve code readability.

6. Middleware Integration
   - Implement Prisma middleware to automatically inject tenant_id into all database operations.
   - This ensures that tenant isolation is maintained at the database access layer.

7. Soft Deletes
   - Include a deleted_at DateTime field in models where soft delete functionality is required.
   - Implement logic to filter out soft-deleted records in queries by default.

8. Audit Fields
   - Include created_at, updated_at, and created_by fields in all models for auditing purposes.
   - Ensure these fields are automatically populated and updated.

This database and Prisma schema design ensures proper multi-tenancy support, data integrity, and efficient querying across the application.