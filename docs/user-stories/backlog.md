# User Story Backlog: Multi-Tenant Onboarding Flow

## US001: User Registration as Tenant Owner
As a new user, I want to register for an account so that I can become a tenant owner and start using the application.

**Acceptance Criteria:**
1. User can enter their name, email, password, and confirm password
2. Email validation is performed to ensure a valid format
3. Password strength is checked (minimum 8 characters, including uppercase, lowercase, number, and special character)
4. User must agree to terms of service and privacy policy
5. User receives a confirmation email with a verification link
6. Registration is prevented if email already exists in the system

## US002: Email Verification and Tenant Creation
As a newly registered user, I want to verify my email address to confirm my account, create a new tenant, and gain full access to the application.

**Acceptance Criteria:**
1. User receives an email with a verification link
2. Clicking the link verifies the user's email address
3. Upon verification, a new user account is created in Supabase
4. A new tenant is automatically created and associated with the user
5. User is assigned the role of Tenant Owner for the new tenant
6. User is redirected to a page to fill out tenant information

## US003: Tenant Information Setup
As a new Tenant Owner, I want to provide information about my tenant so that my account is properly configured.

**Acceptance Criteria:**
1. User is presented with a form to enter tenant details
2. Form includes fields for business name, ABN number, and other relevant information
3. User can save the tenant information
4. Tenant information is associated with the user's tenant in the database

## US004: Invite Team Members
As a Tenant Owner, I want to invite other users to join my tenant so that we can collaborate in the application.

**Acceptance Criteria:**
1. Tenant Owner can access an "Invite Users" feature
2. Tenant Owner can enter email addresses of users to invite
3. System sends invitation emails with activation links to invited users
4. Invited users are associated with the Tenant Owner's tenant upon activation

## US005: Invited User Activation
As an invited user, I want to activate my account and join the tenant I was invited to.

**Acceptance Criteria:**
1. Invited user receives an email with an activation link
2. Clicking the link takes the user to an account setup page
3. User is only required to fill in minimal profile details (e.g., name, password)
4. Upon completion, user is automatically assigned to the inviting Tenant Owner's tenant
5. User is granted appropriate access based on the role assigned by the Tenant Owner

## US006: User Login
As a registered user, I want to log in to the application securely to access my account within my assigned tenant.

**Acceptance Criteria:**
1. User can enter email and password
2. Authentication is performed against stored credentials using Supabase Auth
3. User is redirected to the appropriate tenant dashboard upon successful login
4. Error message is displayed for invalid credentials
5. Option for "Forgot Password" is available

## US007: Forgot Password
As a user who has forgotten their password, I want to reset it securely to regain access to my account.

**Acceptance Criteria:**
1. User can request a password reset by entering their email address
2. A password reset link is sent to the user's email
3. User can create a new password after clicking the reset link
4. New password must meet the same strength criteria as during registration
5. User is informed of successful password reset and can log in with the new password

## US008: User Logout
As a logged-in user, I want to securely log out of the application to protect my account.

**Acceptance Criteria:**
1. User can click a logout button from any page in the application
2. User session is terminated and cleared
3. User is redirected to the login page
4. User receives confirmation of successful logout