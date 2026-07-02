import job1 from "@/assets/job_example/job-1.jpg";
import job2 from "@/assets/job_example/job-2.jpg";
import job3 from "@/assets/job_example/job-3.jpg";
import job4 from "@/assets/job_example/job-4.jpg";

/**
 * Bildegalleri i hero-seksjonen. Statiske importer fra src/assets/job_example
 * (gir automatisk blur-plassholder og optimalisering). Komponenten mapper
 * bare over denne lista.
 */
export const gallery = [
  { src: job4, alt: "Gressklipping av skråning med profesjonell gressklipper" },
  { src: job2, alt: "Kantklipping av plen langs gangvei" },
  { src: job1, alt: "Traktor med brøyteskjær rydder snø på vinterveg" },
  { src: job3, alt: "Traktor med kost feier veien etter vinteren" },
] as const;
