class NextCopy extends HTMLElement {
    private copyButton: HTMLButtonElement;
    private textInput: HTMLInputElement;
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      const wrapper = document.createElement('div');
      wrapper.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: sans-serif;
          }
        </style>
        <p>My Web Component</p>
        <button id="copyButton">Copy</button>
        <input type="text" id="textInput" />
      `;
  
      this.shadowRoot!.appendChild(wrapper);
      this.copyButton = this.shadowRoot!.getElementById('copyButton') as HTMLButtonElement;
      this.textInput = this.shadowRoot!.getElementById('textInput') as HTMLInputElement;
  
      this.copyButton.addEventListener('click', this.copyText.bind(this));
    }
  
    private copyText(): void {
      this.textInput.select();
      document.execCommand('copy');
      alert('Text copied to clipboard');
    }
  }
  
  export default NextCopy;
  