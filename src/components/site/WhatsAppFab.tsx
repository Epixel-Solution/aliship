import { whatsappUrl } from "@/lib/brand";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl("Hi AliShip, I'd like to send a parcel.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AliShip on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#00CC66] text-white shadow-lg shadow-black/40 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.21c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15s-.78.98-.96 1.18c-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.53.07-.81.38-.28.3-1.06 1.04-1.06 2.52 0 1.48 1.08 2.92 1.23 3.12.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35zM16.02 5C9.93 5 5 9.93 5 16.02c0 1.95.51 3.86 1.48 5.54L5 27l5.6-1.46a11 11 0 0 0 5.42 1.4h.01C22.12 26.94 27 22.01 27 15.92 27 9.83 22.12 5 16.02 5z" />
      </svg>
    </a>
  );
}
