import { ContentLayout } from "@/components/ContentLayout";
import { ConsentSwitch } from "@/components/ConsentSwitch";

export default function PrivacyPolicyPage() {
  return (
    <ContentLayout
      title="Privacy Policy"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
    >
      <h2 className="text-lg font-semibold mt-4">Purpose of use</h2>
      <p>
        We use Hotjar on our website to better understand how our users interact with our services and to optimize our services and user experience.
      </p>

      <h2 className="text-lg font-semibold mt-6">How Hotjar helps us</h2>
      <p>
        Hotjar allows us to visualize user interactions, which helps us better understand our users&apos; experience and improve our services by identifying issues and friction points.
      </p>

      <h2 className="text-lg font-semibold mt-6">Data collection</h2>
      <p>
        To provide these services, Hotjar uses first-party cookies and other technologies to collect personal data on our users&apos; behavior and their devices on our behalf. This may include:
      </p>
      <ul className="list-disc pl-6 my-2 space-y-1">
        <li>Online identifiers (e.g. device IP address, user ID)</li>
        <li>Identification data (e.g. name, email address — only if explicitly collected through surveys or forms)</li>
        <li>Technical data (e.g. device type, screen size, browser information)</li>
        <li>Geographic location (country only)</li>
        <li>Behavioral data (e.g. interactions with our website or app such as clicks, taps, and scrolling)</li>
        <li>Any additional personal data users explicitly submit through Hotjar (e.g. surveys, feedback forms, or chat widgets)</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6">Use of collected data</h2>
      <p>
        Hotjar may reuse this personal data to develop and improve tools and services for us and our users.
      </p>

      <h2 className="text-lg font-semibold mt-6">More information</h2>
      <p>
        For further details, please visit Hotjar&apos;s{" "}
        <a href="https://trust.contentsquare.com/?product=hotjar" target="_blank" rel="noopener noreferrer">Trust Portal</a>
        {" "}and{" "}
        <a href="https://www.hotjar.com/legal/policies/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
      </p>

      <h2 className="text-lg font-semibold mt-6">Manage Your Consent</h2>
      <p className="mb-3">Choose whether you consent to analytics. Your choice is saved in this device and the cookie banner will not show again until you clear it.</p>
      <ConsentSwitch />
    </ContentLayout>
  );
}
