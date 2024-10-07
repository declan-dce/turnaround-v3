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

**Flow Steps:**
1. **User Action:** Fills out registration form and submits.
2. **System Response:** 
   - Validates input data.
   - Checks for existing email in the system.
   - Creates a new unverified user record.
   - Generates a verification token.
3. **Notification:** Sends confirmation email with verification link.
4. **Redirect:** To a "Check your email" page.
5. **Preconditions:** User has navigated to the registration page.
6. **Postconditions:** 
   - Unverified user record exists in the database.
   - Verification email is in the user's inbox.

## US002: Email Verification and Tenant Creation
As a newly registered user, I want to verify my email address to confirm my account, create a new tenant, and gain full access to the application.

**Acceptance Criteria:**
1. User receives an email with a verification link
2. Clicking the link verifies the user's email address
3. Upon verification, a new user account is created in Supabase
4. A new tenant is automatically created and associated with the user
5. User is assigned the role of Tenant Owner for the new tenant
6. User is redirected to a page to fill out tenant information
7. A 7-day free trial period is initiated for the new tenant using Stripe's trial functionality
8. User is informed about the 7-day free trial period and future Stripe subscription requirement via email sent to the tenant owner's email address

**Flow Steps:**
1. **User Action:** Clicks the verification link in the email.
2. **System Response:** 
   - Validates the verification token.
   - Updates the user's status to verified.
   - Creates a new tenant record associated with the user.
   - Assigns the role of Tenant Owner.
   - Initiates a 7-day free trial in Stripe.
3. **Redirect:** Navigate to the Tenant Information Setup page (US003).
4. **Notification:** Send an email detailing the trial period and upcoming subscription requirements.
5. **Preconditions:** User must have received a verification email.
6. **Postconditions:**
   - User is marked as verified in the database.
   - New tenant record is created and associated with the user.
   - Stripe free trial is initiated.

## US003: Tenant Information Setup
As a new Tenant Owner, I want to provide basic information about my tenant so that my account is properly configured, ensuring this step is completed before proceeding further.

**Acceptance Criteria:**
1. User is presented with a form to enter essential tenant details
2. Form includes only basic fields such as business name and contact information
3. User cannot proceed to other parts of the application until this information is provided
4. If the user logs out or closes the browser before completing this step, they are redirected back to this page upon next login
5. Tenant information is associated with the user's tenant in the database upon submission
6. User can save the tenant information
7. Progress is saved even if the user doesn't complete all fields in one session
8. User is informed about the 7-day free trial period and future Stripe subscription requirement upon completion
9. After successful submission, user is redirected to the main dashboard or next onboarding step

**Flow Steps:**
1. **User Action:** Fills out tenant information form and submits.
2. **System Response:**
   - Validates input data.
   - Saves tenant information to the database.
   - Updates tenant setup status.
3. **Notification:** Displays confirmation message about successful setup and trial period information.
4. **Redirect:** To the main dashboard or next onboarding step.
5. **Preconditions:** User has verified their email and a tenant record exists.
6. **Postconditions:**
   - Tenant information is saved in the database.
   - User can access other parts of the application.

## US004: Invite Team Members
As a Tenant Owner, I want to invite other users to join my tenant so that we can collaborate in the application.

**Acceptance Criteria:**
1. Tenant Owner can access an "Invite Users" feature
2. Tenant Owner can enter email addresses of users to invite and choose their role (e.g., Admin, Editor, Viewer) and tenant access level (e.g., Full Access, Limited Access)
3. System sends invitation emails with activation links to invited users
4. Invited users are associated with the Tenant Owner's tenant upon activation

**Flow Steps:**
1. **User Action:** Accesses "Invite Users" feature and submits invitation details.
2. **System Response:**
   - Validates email addresses.
   - Generates unique invitation links.
   - Creates pending user records associated with the tenant.
3. **Notification:** Sends invitation emails to specified addresses.
4. **Redirect:** Back to the team management page with a success message.
5. **Preconditions:** User is logged in as a Tenant Owner.
6. **Postconditions:**
   - Pending user records exist in the database.
   - Invitation emails are sent to specified addresses.

## US005: Invited User Activation
As an invited user, I want to activate my account and join the tenant I was invited to.

**Acceptance Criteria:**
1. Invited user receives an email with an activation link
2. Clicking the link takes the user to an account setup page
3. User is only required to fill in minimal profile details (e.g., name, password)
4. Upon completion, user is automatically assigned to the inviting Tenant Owner's tenant
5. User is granted appropriate access based on the role assigned by the Tenant Owner

**Flow Steps:**
1. **User Action:** Clicks activation link in the invitation email.
2. **System Response:**
   - Validates the activation token.
   - Presents account setup form.
3. **User Action:** Completes account setup form and submits.
4. **System Response:**
   - Creates user account.
   - Associates user with the tenant.
   - Assigns specified role and access level.
5. **Redirect:** To the application dashboard.
6. **Preconditions:** User has received an invitation email.
7. **Postconditions:**
   - New user account is created and associated with the tenant.
   - User can log in and access the application based on their role.

## US006: User Login
As a registered user, I want to log in to the application securely to access my account within my assigned tenant.

**Acceptance Criteria:**
1. User can enter email and password
2. Authentication is performed against stored credentials using Supabase Auth
3. User is redirected to the appropriate tenant dashboard upon successful login
4. Error message is displayed for invalid credentials
5. Option for "Forgot Password" is available
6. If the Stripe free trial has expired and no Stripe subscription is active, user is redirected to the Stripe payment gateway

**Flow Steps:**
1. **User Action:** Enters email and password, then submits.
2. **System Response:**
   - Authenticates credentials using Supabase Auth.
   - Checks Stripe subscription status.
3. **Redirect:** 
   - If credentials are valid and subscription is active: To tenant dashboard.
   - If credentials are valid but subscription has expired: To Stripe payment gateway.
   - If credentials are invalid: Remain on login page with error message.
4. **Preconditions:** User has a registered account.
5. **Postconditions:**
   - User is logged in and session is created (if credentials are valid).
   - User is directed to appropriate page based on authentication and subscription status.

## US007: Forgot Password
As a user who has forgotten their password, I want to reset it securely to regain access to my account.

**Acceptance Criteria:**
1. User can request a password reset by entering their email address
2. A password reset link is sent to the user's email
3. User can create a new password after clicking the reset link
4. New password must meet the same strength criteria as during registration
5. User is informed of successful password reset and can log in with the new password

**Flow Steps:**
1. **User Action:** Clicks "Forgot Password" and enters email address.
2. **System Response:** Generates password reset token and sends email.
3. **User Action:** Clicks reset link in email and enters new password.
4. **System Response:** Validates new password and updates user record.
5. **Redirect:** To login page with success message.
6. **Preconditions:** User has a registered account.
7. **Postconditions:**
   - User's password is updated in the database.
   - User can log in with the new password.

## US008: User Logout
As a logged-in user, I want to securely log out of the application to protect my account.

**Acceptance Criteria:**
1. User can click a logout button from any page in the application
2. User session is terminated and cleared
3. User is redirected to the login page
4. User receives confirmation of successful logout

**Flow Steps:**
1. **User Action:** Clicks logout button.
2. **System Response:** 
   - Terminates user session.
   - Clears session data.
3. **Redirect:** To login page.
4. **Notification:** Displays logout confirmation message.
5. **Preconditions:** User is logged in.
6. **Postconditions:**
   - User session is ended.
   - User is logged out and cannot access protected areas of the application.

## US009: Stripe Free Trial Expiration and Subscription Setup
As a Tenant Owner, I want to be notified when my Stripe free trial is expiring and set up a Stripe subscription to continue using the application.

**Acceptance Criteria:**
1. User receives email notifications about Stripe trial expiration (e.g., 3 days before, 1 day before, and on expiration day)
2. Upon login after Stripe trial expiration, user is redirected to the Stripe payment gateway
3. User can select a Stripe subscription plan and enter payment details
4. Upon successful Stripe payment, user's account is upgraded to a paid Stripe subscription
5. User is redirected to the dashboard with full access restored
6. If Stripe payment fails or user declines, they remain on the Stripe payment page with limited access to the application

**Flow Steps:**
1. **System Action:** Sends trial expiration notification emails at specified intervals.
2. **User Action:** Logs in after trial expiration.
3. **System Response:** Checks trial status and redirects to Stripe payment gateway.
4. **User Action:** Selects plan and enters payment details.
5. **System Response:** 
   - Processes payment through Stripe.
   - Updates subscription status in the database.
6. **Redirect:**
   - If payment successful: To main dashboard.
   - If payment fails: Remain on payment page.
7. **Preconditions:** User has an active free trial that is expiring or has expired.
8. **Postconditions:**
   - If successful, user has an active paid subscription.
   - If failed, user has limited access until successful payment.