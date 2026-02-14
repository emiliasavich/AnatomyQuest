import Image from "next/image";
import Link from "next/link";
import { ContentLayout } from "@/components/ContentLayout";

export default function LearningBonesPage() {
  return (
    <ContentLayout
      title="How to Effectively Study Bones"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Getting Started", href: "/getting_started" },
        { label: "Effective Learning Methods", href: "/getting_started/effective_learning_methods" },
        { label: "Learning Bones" },
      ]}
    >
      <p><strong>Goal:</strong> Understand how each bone relates to the body as a whole.</p>
      <p><strong>Purpose:</strong> To encourage deeper, longer-lasting learning by linking a bone to the skeletal, muscular, and cardiovascular systems rather than relying on rote memorization.</p>
      <p><strong>How to use this guide:</strong> Follow the five structured steps below. They are designed to help you focus on meaningful connections rather than just memorizing facts.</p>
      <p className="my-4"><strong>Mnemonic:</strong> <em>Learning Small Notes About Bones</em></p>

      <div className="step step-location my-6">
        <h2 className="text-xl font-semibold mt-6">Step 1 – Location</h2>
        <p><strong>Question:</strong> Which body region contains the bone (e.g., upper arm, lower leg)?</p>
        <p><strong>Purpose:</strong> Identifying location helps you build a mental map of the skeleton and recall neighboring bones and muscles.</p>
      </div>

      <div className="step step-shape my-6">
        <h2 className="text-xl font-semibold mt-6">Step 2 – Shape</h2>
        <p><strong>Question:</strong> What is the bone&apos;s shape?</p>
        <p><strong>Purpose:</strong> A bone&apos;s shape is closely linked to its function. Recognizing the shape gives insight into the bone&apos;s role in movement and support.</p>
        <h3 className="text-lg font-medium mt-4">Common Shapes</h3>
        <ul className="list-disc pl-6 space-y-4 my-4">
          <li>
            <p><strong>Long:</strong> Functions as a lever that enables large movements.</p>
            <figure className="my-2">
              <Image src="/assets/images/bones/humerus/Humerus - anterior view.webp" alt="Humerus" width={300} height={200} className="rounded" />
              <figcaption className="text-sm text-stone-500">Humerus</figcaption>
            </figure>
          </li>
          <li>
            <p><strong>Short:</strong> Provides strength, stability, and limited motion.</p>
            <figure className="my-2">
              <Image src="/assets/images/bones/carpal/Capitate Bone - anterior view.webp" alt="Carpal Bone" width={300} height={200} className="rounded" />
              <figcaption className="text-sm text-stone-500">Carpal (Wrist) Bone</figcaption>
            </figure>
          </li>
          <li>
            <p><strong>Flat:</strong> Protects organs and offer muscle attachment sites.</p>
            <figure className="my-2">
              <Image src="/assets/images/bones/skull/Frontal Bone - anterior view.webp" alt="Frontal Bone" width={300} height={200} className="rounded" />
              <figcaption className="text-sm text-stone-500">Frontal Bone</figcaption>
            </figure>
          </li>
          <li>
            <p><strong>Irregular:</strong> Complex shape with a specialized function.</p>
            <figure className="my-2">
              <Image src="/assets/images/bones/vertebra/Vertebra L3 - superior view.webp" alt="Vertebra" width={300} height={200} className="rounded" />
              <figcaption className="text-sm text-stone-500">Vertebra L3</figcaption>
            </figure>
          </li>
        </ul>
      </div>

      <div className="step step-neighbors my-6">
        <h2 className="text-xl font-semibold mt-6">Step 3 – Neighbors</h2>
        <p><strong>Question:</strong> What bones articulate (form joints with) this bone? What is the type of each joint?</p>
        <p><strong>Purpose:</strong> Lets you examine what joints the bone is part of and what movements those joints allow.</p>
      </div>

      <div className="step step-landmarks my-6">
        <h2 className="text-xl font-semibold mt-6">Step 4 – Anatomical Landmarks</h2>
        <p><strong>Question:</strong> What are the named parts of the bone? What is the significance of each?</p>
        <p><strong>Purpose:</strong> Connects each named location to the muscles, nerves, blood vessels, and other bones that interact with the location.</p>
      </div>

      <div className="step step-blood my-6">
        <h2 className="text-xl font-semibold mt-6">Step 5 – Blood Supply</h2>
        <p><strong>Question:</strong> What blood vessels nourish the bone?</p>
        <p><strong>Purpose:</strong> Relates the bone to the cardiovascular system and builds your mental map of the body&apos;s blood vessels.</p>
      </div>
    </ContentLayout>
  );
}
