const successEvent = new CustomEvent('onSuccess', { detail: { message: 'Text copied to clipboard' } });
const errorEvent = new CustomEvent('onError', { detail: { message: 'Clipboard API is not supported in this browser' }});

class NextCopy extends HTMLElement {
  private copyButton: HTMLButtonElement;
  private content: string;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
        <style>
          :host {
            display: flex;
            align-items: center;
            font-family: sans-serif;
          }
          ::slotted([slot="copy"]) {
            cursor: pointer;
          }
          slot[name="copy"] {
            display: inline-block;
            cursor: pointer;
            color: #1AAD19;
            border: 1px solid #1AAD19;
            padding: 2px;
            border-radius: 1px;
          }
        </style>
        <slot name="text"></slot>
        <slot name="copy">Copy</slot>
      `;
    this.content = '';
    this.shadowRoot!.appendChild(wrapper);
    this.copyButton = this.shadowRoot!.querySelector('[name="copy"]') as HTMLButtonElement;
  }

  connectedCallback() {
    this.content = this.getAttribute('content') || '';
    this.copyButton.addEventListener('click', this.copyText.bind(this));
  }
  
  disconnectedCallback() {
    this.content = '';
    this.copyButton.removeEventListener('click', this.copyText.bind(this));
  }

  private async copyText(): Promise<void> {
    if (!this.content) {
      const slot = this.shadowRoot!.querySelector('[name="text"]') as HTMLSlotElement;
      const slotElements = slot.assignedElements();
      if (slotElements.length === 0) { 
        return
      }
      this.content = (slotElements[0] as HTMLElement).innerText;
    };
    
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(this.content);
      this.dispatchEvent(successEvent);
    } else {
      this.dispatchEvent(errorEvent);
    }
  }
}

export default NextCopy;
