import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  ExternalLink,
  Download,
  Copy,
  Check,
} from "lucide-react";

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    const email = "dong.weiq@northeastern.edu";

    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      window.prompt("Copy this email:", email);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 border-t border-border flex justify-center"
    >
      <div className="w-full max-w-screen-md px-6 text-center">
        <div className="relative mb-12">
          <p className="relative font-space-grotesk text-[48px] sm:text-[56px] leading-[1.05] font-extrabold mb-4 inline-block">
            Contact
            <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-accent" />
          </p>

          <h2 className="font-space-grotesk text-[48px] sm:text-[56px] leading-[1.1] font-bold mb-6">
            Have a project or opportunity?
            <br />
            Let&apos;s talk.
          </h2>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Email (Copy) */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-3 px-6 py-3
                       border border-border text-[15px] font-medium text-white
                       transition-all duration-300
                       hover:bg-accent hover:text-black hover:border-accent"
          >
            <Mail className="w-5 h-5" />
            <span>{emailCopied ? "Email Copied" : "Email"}</span>
            {emailCopied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4 opacity-70" />
            )}
          </button>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/weiqi-vicky-dong-040707239/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3
                       border border-border text-[15px] font-medium text-white
                       transition-all duration-300
                       hover:bg-accent hover:text-black hover:border-accent"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/vickydong927"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3
                       border border-border text-[15px] font-medium text-white
                       transition-all duration-300
                       hover:bg-accent hover:text-black hover:border-accent"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>

          {/* Resume (Download) */}
          <a
            href="/VickyDong_Resume.pdf"
            download
            className="inline-flex items-center gap-3 px-6 py-3
                       border border-accent text-[15px] font-semibold text-white
                       transition-all duration-300
                       hover:bg-accent hover:text-black hover:border-accent hover:scale-[1.02]"
          >
            <FileText className="w-5 h-5" />
            <span>Resume (PDF)</span>
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
