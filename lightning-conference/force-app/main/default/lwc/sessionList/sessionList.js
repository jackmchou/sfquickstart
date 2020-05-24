import { LightningElement, track, wire } from 'lwc';
import getSessions from '@salesforce/apex/SessionController.getSessions';
export default class SessionList extends LightningElement {
  @track sessions = [];
  @track searchKey = '';
  @wire(getSessions, { searchKey: '$searchKey' })
  wiredSessions({ error, data }) {
    if (data) {
      this.sessions = data;
    } else if (error) {
      this.sessions = [];
      throw new Error('Failed to retrieve sessions');
    }
  }
  handleSearchKeyInput(event) {
    const searchKey = event.target.value.toLowerCase();
    this.sessions = this.allSessions.filter(
      session => session.name.toLowerCase().includes(searchKey)
    );
  }
  handleSessionClick(event) {
    const index = event.currentTarget.dataset.index;
    const navigateEvent = new CustomEvent('navigate', {
      detail: this.sessions[index].id
    });
    this.dispatchEvent(navigateEvent);
  }
}