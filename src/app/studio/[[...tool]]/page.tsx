import { NextStudio } from "next-sanity/studio";

import config from "../../../../sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main>
        <h1>Configura el proyecto Sanity</h1>
        <p>Añade el identificador del proyecto a las variables de entorno.</p>
      </main>
    );
  }

  return <NextStudio config={config} />;
}