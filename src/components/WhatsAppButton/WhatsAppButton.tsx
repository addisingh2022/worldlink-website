export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+917301955807"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48a11.951 11.951 0 0 0-17.03 0 11.92 11.92 0 0 0 0 17.03L3 21l3.5-1 1 1 2.53-.76a11.951 11.951 0 0 0 17.03-17.03zM12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" />
      </svg>
    </a>
  );
}
