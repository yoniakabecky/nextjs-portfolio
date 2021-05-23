import ContactPageContent from "@@/components/ContactPageContent";
import BasicMeta from "@@/components/meta/BasicMeta";
import Navigation from "@@/components/Navigation";

export default function Contact() {
  return (
    <>
      <BasicMeta title="Contact 👋 " />

      <Navigation />

      <ContactPageContent />
    </>
  );
}
