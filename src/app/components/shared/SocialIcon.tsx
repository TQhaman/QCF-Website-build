type SocialIconProps = {
  platform: "instagram" | "tiktok" | "whatsapp";
  className?: string;
};

export function SocialIcon({ platform, className }: SocialIconProps) {
  if (platform === "instagram") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="none"
        focusable="false"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (platform === "tiktok") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="none"
        focusable="false"
        viewBox="0 0 24 24"
      >
        <path
          d="M14.5 3v11.2a4.6 4.6 0 1 1-3.8-4.5v3.1a1.8 1.8 0 1 0 1 1.6V3h2.8Z"
          fill="currentColor"
        />
        <path
          d="M14.5 3c.5 2.6 2 4.1 4.7 4.6v3c-2-.1-3.6-.8-4.7-1.8V3Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path
        d="M20.2 11.7a8.2 8.2 0 0 1-12 7.2L4 20l1.1-4a8.2 8.2 0 1 1 15.1-4.3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 7.8c.3-.2.7-.1.9.2l1 1.7c.2.3.1.7-.1.9l-.7.6c.8 1.5 1.9 2.5 3.4 3.2l.6-.8c.2-.3.6-.4.9-.2l1.8.9c.3.2.5.5.4.9-.2 1.2-1.2 2-2.4 2-3.9-.2-7.7-3.8-8-7.8-.1-.8.4-1.4 1-1.7.4-.1.8-.1 1.2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}
