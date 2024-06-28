import NextCopy from './next-copy';

declare global {
    interface HTMLElementTagNameMap {
      'next-copy': NextCopy;
    }
}
  
// Define the custom element
customElements.define('next-copy', NextCopy);
