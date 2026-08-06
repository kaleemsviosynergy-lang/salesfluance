import { Section } from "../shared/Section";
import { SECTION_REGISTRY } from "./SectionRegistry";
import type { SectionEntry } from "../../types/service";

export function SectionRenderer({ entry }: { entry: SectionEntry }) {
  const Component = SECTION_REGISTRY[entry.type];

  console.log("Rendering:", entry.type);

  if (!Component) {
    return (
      <div className="bg-red-200 p-4">
        Missing component: {entry.type}
      </div>
    );
  }

  try {
    return (
      <Section id={entry.id} ariaLabel={entry.type}>
        <Component data={entry.data} />
      </Section>
    );
  } catch (err) {
    console.error("Failed section:", entry.type, err);

    return (
      <div className="bg-red-200 p-4">
        Failed section: {entry.type}
      </div>
    );
  }
}