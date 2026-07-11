import { SiGithub, SiX } from "react-icons/si";
import { Mail } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className='w-full border-t'>
      <div className='mx-auto max-w-4xl px-6 py-4 flex items-center justify-between'>
        <div className='text-sm text-muted-foreground'>&copy; 2026 med</div>

        <div className='flex gap-4 text-muted-foreground'>
          <Link href='https://github.com/med-000' target='_blank'>
            <SiGithub className='size-6 hover:text-foreground transition' />
          </Link>
          <Link href='mailto:med.rk000@gmail.com' target='_blank'>
            <Mail className='size-6 hover:text-foreground transition' />
          </Link>
          <Link href='https://x.com/med_rk000' target='_blank'>
            <SiX className='size-6 hover:text-foreground transition' />
          </Link>
        </div>
      </div>
    </footer>
  );
};
