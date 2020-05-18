import { LightningElement, api } from 'lwc';
import { getSession } from 'data/sessionService';
export default class sessionDetails extends LightningElement {
  session;
  @api
  // We use the @api decorator to define the session property as public.
  // That way you can provide a session object as an attribute of the 
  // my-session-details tag. Just like properties annotated with @track, 
  // properties annotated with @api are reactive: When their value changes, 
  // the component is automatically rerendered.
  set sessionId(id) {
    this._sessionId = id;
    this.session = getSession(id);
  }
  get sessionId() {
    return this._sessionId;
  }
}