"use client";

export function PrintButton() {
  function handlePrint() {
    // Defer so the click finishes before the print dialog opens.
    window.requestAnimationFrame(() => {
      window.print();
    });
  }

  return (
    <button
      className="btn btn--solid"
      type="button"
      onClick={handlePrint}
    >
      Save PDF
    </button>
  );
}
