import { saveTenantInfo } from "./actions";

export default function TenantSetupPage() {
  return (
    <div>
      <h1>Set Up Your Tenant</h1>
      <form action={saveTenantInfo}>
        <label htmlFor="businessName">Business Name:</label>
        <input id="businessName" name="businessName" type="text" required />
        <label htmlFor="contactEmail">Contact Email:</label>
        <input id="contactEmail" name="contactEmail" type="email" required />
        <label htmlFor="contactPhone">Contact Phone:</label>
        <input id="contactPhone" name="contactPhone" type="tel" />
        <label htmlFor="address">Address:</label>
        <input id="address" name="address" type="text" />
        <label htmlFor="industry">Industry:</label>
        <input id="industry" name="industry" type="text" />
        <button type="submit">Save and Continue</button>
      </form>
    </div>
  )
}